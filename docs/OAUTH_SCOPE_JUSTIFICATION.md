# 📝 Обоснование OAuth Scopes для верификации Google (версия БЕЗ Google Drive)

Это дополнение **не сохраняет файлы в Google Drive** и **не использует Google Picker**. Оно экспортирует **активный лист** Google Таблицы в `.xlsx` и дает пользователю **скачать файл на компьютер** (обычно в папку “Downloads/Загрузки” браузера).

## ✅ Scopes, которые реально используются приложением

- **Non‑sensitive**: `https://www.googleapis.com/auth/spreadsheets.currentonly`
- **Sensitive**: `https://www.googleapis.com/auth/script.container.ui`
- **Sensitive**: `https://www.googleapis.com/auth/script.external_request`

> Важно: scopes `drive` / `drive.file` **не нужны** для текущей функциональности и не должны быть указаны в OAuth Consent Screen / App Configuration.

---

## ⚠️ Sensitive scope: `script.container.ui`

### "How will the scopes be used?" (English, copy/paste)

```
The add-on uses script.container.ui to display a modal dialog inside Google Sheets where the user starts the export and downloads the generated .xlsx file. This scope is used only for UI (showing dialogs) and does not collect or transmit user data.
```

---

## ⚠️ Sensitive scope: `script.external_request`

### "How will the scopes be used?" (English, copy/paste)

```
The add-on uses script.external_request to make an authenticated HTTPS request to the Google Sheets export endpoint (docs.google.com/spreadsheets/.../export) in order to generate the .xlsx for the currently open spreadsheet. Requests are sent only to Google domains and use the user’s OAuth token. No data is sent to third-party servers and nothing is stored.
```

---

## ℹ️ Non‑sensitive scope: `spreadsheets.currentonly`

### Short explanation (English)

```
spreadsheets.currentonly is used to access only the currently open spreadsheet to export the active sheet to .xlsx.
```

---

## 🎥 Demo video (что показать)

1. Открыть Google Sheets (любая тестовая таблица)
2. Меню дополнения → открыть диалог
3. Нажать “Скачать Excel”
4. Показать, что файл скачался в “Downloads/Загрузки” и открывается как `.xlsx`

---

## ✅ Быстрая проверка перед отправкой на ревью

- [ ] В OAuth Consent Screen **нет** `drive` / `drive.file`
- [ ] Terms of Service / Privacy Policy описывают **download to computer**, не Drive/Picker
- [ ] В Store Listing описание совпадает с реальным UX

