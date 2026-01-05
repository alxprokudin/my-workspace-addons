# 🚀 Развертывание в Google Apps Script

## Обновление кода в Google Apps Script

После слияния ветки `excel-download-direct` в `main`, необходимо обновить код в Google Apps Script.

## 📋 Шаги для обновления

### Шаг 1: Открыть проект в Google Apps Script

1. Откройте [Google Apps Script](https://script.google.com)
2. Выберите ваш проект "Экспорт в Excel"

### Шаг 2: Обновить файлы

#### 2.1. Обновить `appsScript.js`

1. В редакторе Apps Script откройте файл `appsScript.js`
2. Удалите весь существующий код
3. Скопируйте код из файла `appsScript.js` из репозитория (ветка `main`)
4. Вставьте код в редактор
5. Сохраните файл (Ctrl+S или Cmd+S)

#### 2.2. Обновить `dialog.html`

1. В редакторе Apps Script откройте файл `dialog.html`
2. Удалите весь существующий код
3. Скопируйте код из файла `dialog.html` из репозитория (ветка `main`)
4. Вставьте код в редактор
5. **ВАЖНО:** Замените плейсхолдеры на реальные ключи:
   - `ВАШ_DEVELOPER_KEY_ЗДЕСЬ` → ваш API Key или Client ID
   - `ВАШ_CLOUD_PROJECT_NUMBER_ЗДЕСЬ` → ваш Project Number
6. Сохраните файл (Ctrl+S или Cmd+S)

#### 2.3. Обновить `appsscript.json`

1. В редакторе Apps Script откройте файл `appsscript.json`
2. Если файла нет, создайте его:
   - Файл → Создать → JSON
   - Назовите файл `appsscript`
3. Удалите весь существующий код
4. Скопируйте код из файла `appsscript.json` из репозитория (ветка `main`)
5. Вставьте код в редактор
6. Сохраните файл (Ctrl+S или Cmd+S)

### Шаг 3: Проверить OAuth Scopes

В `appsscript.json` должны быть следующие scopes:

```json
"oauthScopes": [
  "https://www.googleapis.com/auth/spreadsheets.currentonly",
  "https://www.googleapis.com/auth/script.container.ui",
  "https://www.googleapis.com/auth/script.external_request"
]
```

**Важно:** Убедитесь, что `drive.file` scope **удален**.

### Шаг 4: Сохранить проект

1. Убедитесь, что все файлы сохранены
2. Нажмите **Файл → Сохранить** (если нужно)

### Шаг 5: Тестирование

1. Откройте Google Таблицу
2. Обновите страницу (F5)
3. Проверьте меню: должно быть **"Экспорт в Excel" → "Скачать Excel"**
4. Нажмите "Скачать Excel"
5. Проверьте, что открывается диалог с кнопкой "Скачать Excel"
6. Нажмите кнопку и проверьте, что файл скачивается

### Шаг 6: Создать новое развертывание (опционально)

Если нужно создать новое развертывание для тестирования:

1. В Apps Script нажмите **Развертывание → Новое развертывание**
2. Выберите тип: **Add-on**
3. Заполните описание: "Direct download version"
4. Нажмите **Развернуть**
5. Скопируйте ссылку на развертывание

## ⚠️ Важные моменты

1. **Ключи в dialog.html:**
   - Не коммитьте реальные ключи в репозиторий
   - Реальные ключи только в Google Apps Script

2. **OAuth Scopes:**
   - Убедитесь, что scopes совпадают с `appsscript.json`
   - Проверьте OAuth Consent Screen в Google Cloud Console

3. **Тестирование:**
   - Обязательно протестируйте перед созданием развертывания
   - Проверьте, что файл скачивается корректно

4. **Развертывание:**
   - Если создаете новое развертывание, старые пользователи не увидят изменения автоматически
   - Для публикации в Marketplace нужно обновить развертывание в Cloud Console

## 📁 Файлы для копирования

Файлы находятся в корне репозитория (ветка `main`):

- `appsScript.js` - основной код
- `dialog.html` - HTML интерфейс (нужно добавить реальные ключи)
- `appsscript.json` - манифест дополнения

## ✅ Чеклист

- [ ] Обновлен `appsScript.js`
- [ ] Обновлен `dialog.html` (с реальными ключами)
- [ ] Обновлен `appsscript.json`
- [ ] Проверены OAuth scopes (нет `drive.file`)
- [ ] Проект сохранен
- [ ] Протестировано в Google Таблице
- [ ] Файл скачивается корректно
- [ ] (Опционально) Создано новое развертывание

## 🔗 Полезные ссылки

- [Google Apps Script](https://script.google.com)
- [Google Cloud Console](https://console.cloud.google.com)
- [OAuth Consent Screen](https://console.cloud.google.com/apis/credentials/consent)

