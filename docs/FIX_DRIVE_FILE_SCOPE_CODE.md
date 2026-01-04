# 🔧 Исправление кода для работы с `drive.file` scope

## ❌ Проблема

После замены `drive` на `drive.file` scope возникает ошибка:
> "Не удалось получить доступ к папке. Проверьте права доступа."

**Причина:** `DriveApp.getFolderById()` не работает с `drive.file` scope для папок, выбранных через Google Picker.

---

## ✅ Решение: Использовать Drive API v3

Нужно заменить функцию `getExcelFromAnySheet()` для использования Drive API v3 вместо `DriveApp`.

---

## 📝 Исправленный код

### Замените функцию `getExcelFromAnySheet()` в `appsScript.js`:

```javascript
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

    // ✅ Используем Drive API v3 для создания файла в папке
    // Это работает с drive.file scope для папок, выбранных через Google Picker
    const driveApiUrl = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';
    
    // Метаданные файла
    const metadata = {
      name: `${nameActiveSheet}.xlsx`,
      parents: [idFolder] // ID папки, выбранной через Picker
    };

    // Создаем multipart payload
    const boundary = '----WebKitFormBoundary' + Utilities.getRandomString(16);
    const metadataPart = `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(metadata)}\r\n`;
    const filePart = `--${boundary}\r\nContent-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\r\n\r\n`;
    const endBoundary = `\r\n--${boundary}--`;

    // Собираем payload
    const payload = Utilities.newBlob(metadataPart + filePart);
    payload.append(blob);
    payload.append(Utilities.newBlob(endBoundary));

    // Создаем файл через Drive API v3
    const createResponse = UrlFetchApp.fetch(driveApiUrl, {
      method: 'post',
      headers: {
        Authorization: "Bearer " + ScriptApp.getOAuthToken(),
        'Content-Type': `multipart/related; boundary=${boundary}`
      },
      payload: payload.getBytes()
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
```

---

## 🔄 Что изменилось

### Удалено:
- ❌ `DriveApp.getFolderById(idFolder)` - не работает с `drive.file`
- ❌ `folder.getName()` - не работает с `drive.file`
- ❌ `folder.getUrl()` - не работает с `drive.file`
- ❌ `folder.createFile(blob)` - не работает с `drive.file`

### Добавлено:
- ✅ Drive API v3 для создания файла в папке
- ✅ Функция `getFolderInfo()` для получения информации о папке через Drive API v3
- ✅ Multipart upload для загрузки файла через Drive API v3

---

## ✅ Преимущества

1. **Работает с `drive.file` scope** ✅
   - Drive API v3 поддерживает создание файлов в папках, выбранных через Google Picker
   - Даже с ограниченным `drive.file` scope

2. **Не требует CASA** ✅
   - `drive.file` scope не требует дорогой верификации
   - Быстрее процесс одобрения

3. **Та же функциональность** ✅
   - Файл создается в выбранной папке
   - Пользователь получает ссылки на файл и папку

---

## 📝 Шаги для применения

1. **Откройте `appsScript.js` в ветке `excel-export-addon`**

2. **Замените функцию `getExcelFromAnySheet()`** на код выше

3. **Добавьте функцию `getFolderInfo()`** в конец файла

4. **Сохраните изменения**

5. **Закоммитьте и запушьте:**
   ```bash
   git checkout excel-export-addon
   git add appsScript.js
   git commit -m "Fix drive.file scope: use Drive API v3 instead of DriveApp"
   git push origin excel-export-addon
   ```

6. **Создайте новое развертывание в Apps Script**

7. **Протестируйте** с тестовыми пользователями

---

## 🧪 Тестирование

После применения исправления:

1. Установите дополнение заново (или переустановите)
2. Выберите папку через Google Picker
3. Экспортируйте лист
4. Проверьте, что файл создан в выбранной папке
5. Проверьте, что ссылки работают

---

## ⚠️ Важно

- **Drive API v3 требует правильного формата multipart upload**
- **Boundary должен быть уникальным** для каждого запроса
- **Content-Type должен быть правильным** для Excel файлов

---

## 📚 Дополнительная информация

### Почему это работает:

- Drive API v3 позволяет создавать файлы в папках, выбранных через Google Picker
- `drive.file` scope работает с Drive API v3 для создания файлов в выбранных папках
- Это официальный способ работы с `drive.file` scope

### Документация:

- [Drive API v3 - Files: create](https://developers.google.com/drive/api/v3/reference/files/create)
- [Drive API v3 - Upload files](https://developers.google.com/drive/api/v3/manage-uploads)

---

**После применения этого исправления, `drive.file` scope будет работать корректно!** ✅

