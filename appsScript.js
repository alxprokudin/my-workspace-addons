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
      .setWidth(450)
      .setHeight(350)
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
 * Uses direct export URL with OAuth token (no Drive scope needed).
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

    // Export single sheet using direct export URL
    // This works with spreadsheets.currentonly scope
    const exportUrl = `https://docs.google.com/spreadsheets/d/${idSpreadsheet}/export?format=xlsx&gid=${idActiveSheet}`;
    
    const response = UrlFetchApp.fetch(exportUrl, {
      headers: {
        Authorization: "Bearer " + ScriptApp.getOAuthToken()
      },
      muteHttpExceptions: true
    });

    const responseCode = response.getResponseCode();
    if (responseCode !== 200) {
      const errorText = response.getContentText();
      throw new Error(`Ошибка экспорта: код ответа ${responseCode}. ${errorText}`);
    }

    // Get blob from response
    const blob = response.getBlob().setName(`${nameActiveSheet}.xlsx`);

    // Convert blob to base64 for transfer to HTML
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