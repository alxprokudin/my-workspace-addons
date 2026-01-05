# 🔧 Исправление ошибки 404 при экспорте с drive.file scope

## ❌ Проблема

После замены `drive` на `drive.file` scope возникает ошибка 404:
> "Ошибка экспорта: код ответа 404"

## 🔍 Причина

Экспорт через URL `https://docs.google.com/spreadsheets/d/${idSpreadsheet}/export?format=xlsx&gid=${idActiveSheet}` может **не работать с `drive.file` scope**, так как этот endpoint требует полного доступа к таблице.

## ✅ Решение: Использовать Drive API для экспорта

Нужно заменить экспорт через `docs.google.com` на экспорт через Drive API v3.

### Обновленный код для `appsScript.js`:

```javascript
// Заменить экспорт на Drive API v3
const exportUrl = `https://www.googleapis.com/drive/v3/files/${idSpreadsheet}/export?mimeType=application%2Fvnd.openxmlformats-officedocument.spreadsheetml.sheet`;

const response = UrlFetchApp.fetch(exportUrl, {
  muteHttpExceptions: true,
  headers: {
    Authorization: "Bearer " + ScriptApp.getOAuthToken()
  }
});
```

## ⚠️ Альтернатива: Вернуться к `drive` scope

Если Drive API экспорт не работает, возможно, нужно вернуться к `drive` scope:
- Это потребует CASA верификации
- Но обеспечит полный доступ к экспорту

## 📝 Проверка appId в Google Picker

Убедитесь, что в `dialog.html` используется правильный `appId`:
- `appId` должен быть **OAuth Client ID**, а не Project Number
- Формат: `XXXXX-XXXXX.apps.googleusercontent.com`

