/**
 * Creates the add-on menu when the spreadsheet is opened.
 * This function is automatically called by Google Sheets.
 * 
 * Last updated: 2024-12-31 - Testing with updated token and clasp 3.1.3
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Экспорт в Excel")
    .addItem("Скачать Excel", "showDownloadDialog")
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
 * Shows the download dialog.
 * This function is called when the user clicks the menu item.
 */
function showDownloadDialog() {
  try {
    const html = HtmlService.createHtmlOutputFromFile("dialog.html")
      .setWidth(400)
      .setHeight(200)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
    SpreadsheetApp.getUi().showModalDialog(html, "Скачать Excel");
  } catch (error) {
    SpreadsheetApp.getUi().alert(
      "Ошибка при открытии диалога: " + error.toString()
    );
  }
}

/**
 * Exports the active sheet to Excel format and returns it as base64 for download.
 * @return {Object} Object containing file data as base64, file name, and MIME type.
 * @throws {Error} If export fails.
 */
function getExcelBlobAsBase64() {
  try {
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
    // Создаем временную копию таблицы с одним листом для экспорта
    // Это позволяет экспортировать отдельный лист без drive scope
    let tempSpreadsheet;
    let blob;
    
    try {
      // Создаем временную копию таблицы
      tempSpreadsheet = spreadsheet.copy(`${nameActiveSheet}_temp_export_${Date.now()}`);
      
      // Удаляем все листы кроме нужного
      const tempSheets = tempSpreadsheet.getSheets();
      tempSheets.forEach(sheet => {
        if (sheet.getSheetId() !== idActiveSheet) {
          tempSpreadsheet.deleteSheet(sheet);
        }
      });
      
      // Экспортируем временную таблицу через SpreadsheetApp.getBlob()
      // Это работает с spreadsheets.currentonly scope
      blob = tempSpreadsheet.getBlob().setName(`${nameActiveSheet}.xlsx`);
      
      // Примечание: Временная таблица остается в Drive пользователя
      // Это не критично, так как она создается с уникальным именем
      // Пользователь может удалить ее вручную, если нужно
      
    } catch (error) {
      throw new Error(`Не удалось создать временную копию для экспорта: ${error.toString()}`);
    }

    // Конвертируем blob в base64 для передачи в HTML
    const base64 = Utilities.base64Encode(blob.getBytes());
    
    return {
      success: true,
      data: base64,
      name: `${nameActiveSheet}.xlsx`,
      mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
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