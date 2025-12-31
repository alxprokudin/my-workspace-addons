/**
 * Creates the add-on menu when the spreadsheet is opened.
 * This function is automatically called by Google Sheets.
 * 
 * Last updated: 2024-12-30 - Testing with detailed token structure diagnostics
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

    // Validate folder access
    let folder;
    try {
      folder = DriveApp.getFolderById(idFolder);
    } catch (error) {
      throw new Error('Не удалось получить доступ к папке. Проверьте права доступа.');
    }

    const nameOfFolder = folder.getName();
    const urlForFolder = folder.getUrl();

    // Export sheet to Excel format
    const url = `https://docs.google.com/spreadsheets/d/${idSpreadsheet}/export?format=xlsx&gid=${idActiveSheet}`;

    const response = UrlFetchApp.fetch(url, {
      muteHttpExceptions: true,
      headers: {
        Authorization: "Bearer " + ScriptApp.getOAuthToken(),
      }
    });

    // Check if export was successful
    const responseCode = response.getResponseCode();
    if (responseCode !== 200) {
      throw new Error(`Ошибка экспорта: код ответа ${responseCode}`);
    }

    const blob = response.getBlob().setName(`${nameActiveSheet}.xlsx`);

    // Create file in the selected folder
    const file = folder.createFile(blob);
    const fileName = file.getName();

    return {
      success: true,
      folderName: nameOfFolder,
      folderUrl: urlForFolder,
      fileName: fileName,
      fileUrl: file.getUrl(),
      message: `Файл "${fileName}" успешно экспортирован в папку "${nameOfFolder}"`
    };

  } catch (error) {
    return {
      success: false,
      error: error.toString(),
      message: 'Ошибка при экспорте: ' + error.toString()
    };
  }
}
// Note: getSheet() function removed as it's not used in the add-on functionality
// If needed for future features, it can be added back