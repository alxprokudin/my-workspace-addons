# 🔍 Понимание ошибки 404 "Файл не обнаружен"

## ❌ Что означает ошибка

Ошибка показывает HTML-страницу Google Drive с сообщением:
> "Файл не обнаружен. Возможные причины ошибки: указан неверный URL или файл не существует."

Это означает, что:
1. **Drive API v3 не может найти файл** для экспорта
2. **Приложение не имеет доступа** к таблице с `drive.file` scope
3. **Экспорт через Drive API требует полного доступа** `drive` scope

## 🔍 Причина

`drive.file` scope **не дает доступа к экспорту таблиц** через Drive API v3:
- `drive.file` позволяет работать только с файлами, созданными приложением
- Экспорт таблицы требует доступа к существующей таблице пользователя
- Это требует полного `drive` scope

## ✅ Решение

### Вариант 1: Вернуться к `drive` scope (рекомендуется)

Верните `drive` scope в `appsscript.json`:

```json
"oauthScopes": [
  "https://www.googleapis.com/auth/spreadsheets.currentonly",
  "https://www.googleapis.com/auth/drive",  // Вернуть drive вместо drive.file
  "https://www.googleapis.com/auth/script.external_request",
  "https://www.googleapis.com/auth/script.container.ui"
]
```

**Плюсы:**
- ✅ Экспорт будет работать
- ✅ Полный доступ к функциям

**Минусы:**
- ❌ Требует CASA верификации
- ❌ Дороже и дольше

### Вариант 2: Использовать SpreadsheetApp для экспорта

Можно попробовать использовать встроенные методы Apps Script:

```javascript
// Экспорт через SpreadsheetApp (может не работать для отдельных листов)
const blob = Utilities.newBlob(
  spreadsheet.getBlob().getBytes(),
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  `${nameActiveSheet}.xlsx`
);
```

Но это экспортирует всю таблицу, а не отдельный лист.

## 📝 Рекомендация

**Вернитесь к `drive` scope** - это единственный надежный способ экспорта отдельных листов в Excel с доступом к папкам пользователя.

