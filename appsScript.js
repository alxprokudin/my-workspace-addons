/**
 * Creates the add-on menu when the spreadsheet is opened.
 * This function is automatically called by Google Sheets.
 * 
 * Last updated: 2024-12-31 - Testing with updated token and clasp 3.1.3
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Экспорт в Excel")
    .addItem("Экспортировать лист", "showPicker")
    .addToUi();
}

/**
 * Called when the add-on is installed.
 * Creates the menu and sets up the add-on.
 */
function onInstall() {
  onOpen();
}

/**
 * Shows the folder picker dialog.
 * This function is called when the user clicks the menu item.
 */
function showPicker() {
  try {
    const html = HtmlService.createHtmlOutputFromFile("dialog.html")
      .setWidth(800)
      .setHeight(600)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
    SpreadsheetApp.getUi().showModalDialog(html, "Выберите папку для экспорта");
  } catch (error) {
    SpreadsheetApp.getUi().alert(
      "Ошибка при открытии диалога: " + error.toString()
    );
  }
}

/**
 * Gets the OAuth token for API requests.
 * @return {string} OAuth token.
 */
function getOAuthToken() {
  try {
    return ScriptApp.getOAuthToken();
  } catch (error) {
    throw new Error('Failed to get OAuth token: ' + error.toString());
  }
}

/**
 * Exports the active sheet to Excel format and saves it to the selected folder.
 * Uses Drive API v3 to work with drive.file scope.
 * @param {string} idFolder - The ID of the Google Drive folder where the file will be saved.
 * @return {Object} Object containing folder name, folder URL, and file name.
 * @throws {Error} If the folder ID is invalid or export fails.
 */
function getExcelFromAnySheet(idFolder) {
  try {
    // Validate input
    if (!idFolder || typeof idFolder !== 'string') {
      throw new Error('Неверный ID папки');
    }

    // Get spreadsheet and active sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    if (!spreadsheet) {
      throw new Error('Не удалось получить доступ к таблице');
    }

    const activeSheet = spreadsheet.getActiveSheet();
    if (!activeSheet) {
      throw new Error('Не удалось получить активный лист');
    }

    const idActiveSheet = activeSheet.getSheetId();
    const nameActiveSheet = activeSheet.getSheetName();
    const idSpreadsheet = spreadsheet.getId();

    // Export sheet to Excel format
    // Используем Drive API v3 для экспорта (работает с drive.file scope)
    // Для экспорта конкретного листа используем параметр gid в URL
    const exportUrl = `https://www.googleapis.com/drive/v3/files/${idSpreadsheet}/export?mimeType=application%2Fvnd.openxmlformats-officedocument.spreadsheetml.sheet`;
    
    // Попробуем сначала экспорт через Drive API
    let response = UrlFetchApp.fetch(exportUrl, {
      muteHttpExceptions: true,
      headers: {
        Authorization: "Bearer " + ScriptApp.getOAuthToken()
      }
    });

    let responseCode = response.getResponseCode();
    let blob;

    // Если Drive API не работает, попробуем стандартный метод
    if (responseCode !== 200) {
      const fallbackUrl = `https://docs.google.com/spreadsheets/d/${idSpreadsheet}/export?format=xlsx&gid=${idActiveSheet}`;
      response = UrlFetchApp.fetch(fallbackUrl, {
        muteHttpExceptions: true,
        headers: {
          Authorization: "Bearer " + ScriptApp.getOAuthToken()
        }
      });
      responseCode = response.getResponseCode();
    }

    // Check if export was successful
    if (responseCode !== 200) {
      const errorText = response.getContentText();
      throw new Error(`Ошибка экспорта: код ответа ${responseCode}. ${errorText || 'Проверьте доступ к таблице и права доступа. Возможно, требуется drive scope вместо drive.file.'}`);
    }

    blob = response.getBlob().setName(`${nameActiveSheet}.xlsx`);

    // ✅ Используем Drive API v3 для создания файла в папке
    // Это работает с drive.file scope для папок, выбранных через Google Picker
    // Используем resumable upload для большей надежности
    const driveApiUrl = 'https://www.googleapis.com/drive/v3/files?uploadType=resumable';
    
    // Метаданные файла
    const metadata = {
      name: `${nameActiveSheet}.xlsx`,
      parents: [idFolder] // ID папки, выбранной через Picker
    };

    // Шаг 1: Получаем URL для загрузки
    const initResponse = UrlFetchApp.fetch(driveApiUrl, {
      method: 'post',
      headers: {
        Authorization: "Bearer " + ScriptApp.getOAuthToken(),
        'Content-Type': 'application/json'
      },
      payload: JSON.stringify(metadata)
    });

    const initResponseCode = initResponse.getResponseCode();
    if (initResponseCode !== 200) {
      const errorText = initResponse.getContentText();
      throw new Error(`Ошибка инициализации загрузки: код ответа ${initResponseCode}. ${errorText}`);
    }

    // Получаем URL для загрузки из заголовка Location
    const uploadUrl = initResponse.getHeaders()['Location'];
    if (!uploadUrl) {
      throw new Error('Не удалось получить URL для загрузки');
    }

    // Шаг 2: Загружаем файл
    const createResponse = UrlFetchApp.fetch(uploadUrl, {
      method: 'put',
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Length': blob.getBytes().length
      },
      payload: blob.getBytes()
    });

    const createResponseCode = createResponse.getResponseCode();
    if (createResponseCode !== 200) {
      const errorText = createResponse.getContentText();
      throw new Error(`Ошибка создания файла: код ответа ${createResponseCode}. ${errorText}`);
    }

    const fileData = JSON.parse(createResponse.getContentText());
    
    // Получаем информацию о папке через Drive API v3
    const folderInfo = getFolderInfo(idFolder);
    
    return {
      success: true,
      folderName: folderInfo.name,
      folderUrl: folderInfo.url,
      fileName: fileData.name,
      fileUrl: `https://drive.google.com/file/d/${fileData.id}/view`,
      message: `Файл "${fileData.name}" успешно экспортирован в папку "${folderInfo.name}"`
    };

  } catch (error) {
    return {
      success: false,
      error: error.toString(),
      message: 'Ошибка при экспорте: ' + error.toString()
    };
  }
}

/**
 * Получает информацию о папке через Drive API v3.
 * Работает с drive.file scope для папок, выбранных через Google Picker.
 * @param {string} folderId - ID папки
 * @return {Object} Объект с именем и URL папки
 */
function getFolderInfo(folderId) {
  try {
    const url = `https://www.googleapis.com/drive/v3/files/${folderId}?fields=name,webViewLink`;
    const response = UrlFetchApp.fetch(url, {
      headers: {
        Authorization: "Bearer " + ScriptApp.getOAuthToken()
      }
    });
    
    if (response.getResponseCode() === 200) {
      const data = JSON.parse(response.getContentText());
      return {
        name: data.name,
        url: data.webViewLink || `https://drive.google.com/drive/folders/${folderId}`
      };
    } else {
      // Если не удалось получить информацию, используем базовые данные
      return {
        name: 'Выбранная папка',
        url: `https://drive.google.com/drive/folders/${folderId}`
      };
    }
  } catch (error) {
    // Fallback на базовые данные
    return {
      name: 'Выбранная папка',
      url: `https://drive.google.com/drive/folders/${folderId}`
    };
  }
}
// Note: getSheet() function removed as it's not used in the add-on functionality
// If needed for future features, it can be added back