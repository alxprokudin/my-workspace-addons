# 🚀 Статус деплоя в Google Apps Script

## ✅ Что было сделано

1. **Обновлен workflow** для работы с веткой `main`
   - Файл: `.github/workflows/deploy-to-apps-script.yml`
   - Теперь запускается при push в `main` или `excel-export-addon`

2. **Сделан коммит** с изменением в `appsScript.js`
   - Обновлена дата в комментарии
   - Это триггернуло автоматический запуск workflow

3. **Запушены изменения** в репозиторий
   - Коммит: `484aa16` - "Trigger deployment: update Apps Script for direct download functionality"

## 📋 Проверка статуса деплоя

### Способ 1: Через GitHub UI

1. Откройте репозиторий на GitHub
2. Перейдите в раздел **Actions**
3. Найдите workflow **"Deploy to Google Apps Script"**
4. Проверьте статус последнего запуска

### Способ 2: Через GitHub CLI (если установлен)

```bash
gh workflow run "Deploy to Google Apps Script"
gh run list --workflow="Deploy to Google Apps Script" --limit 1
```

### Способ 3: Ручной запуск через GitHub UI

1. Откройте репозиторий на GitHub
2. Перейдите в **Actions**
3. Выберите workflow **"Deploy to Google Apps Script"**
4. Нажмите **"Run workflow"**
5. Выберите ветку `main`
6. Нажмите **"Run workflow"**

## ⚙️ Что деплоится

Workflow автоматически загрузит в Google Apps Script:

- ✅ `appsScript.js` - основной код с новой логикой скачивания
- ✅ `dialog.html` - HTML интерфейс (нужно будет добавить реальные ключи)
- ✅ `appsscript.json` - манифест с обновленными scopes

## ⚠️ Важно после деплоя

1. **Обновить ключи в `dialog.html`:**
   - Откройте файл в Google Apps Script
   - Замените плейсхолдеры на реальные ключи:
     - `ВАШ_DEVELOPER_KEY_ЗДЕСЬ` → ваш API Key или Client ID
     - `ВАШ_CLOUD_PROJECT_NUMBER_ЗДЕСЬ` → ваш Project Number

2. **Проверить OAuth scopes:**
   - Убедитесь, что в OAuth Consent Screen указаны только:
     - `spreadsheets.currentonly`
     - `script.container.ui`
     - `script.external_request`
   - Удалите `drive.file`, если он есть

3. **Протестировать:**
   - Откройте Google Таблицу
   - Проверьте меню "Экспорт в Excel" → "Скачать Excel"
   - Проверьте, что файл скачивается

## 🔍 Проверка логов

Если деплой не прошел успешно:

1. Откройте **Actions** на GitHub
2. Выберите последний запуск workflow
3. Проверьте логи на наличие ошибок
4. Убедитесь, что секреты `CLASP_SCRIPT_ID` и `CLASP_TOKEN` настроены правильно

## 📝 Следующие шаги

После успешного деплоя:

1. ✅ Обновить ключи в `dialog.html`
2. ✅ Протестировать функциональность
3. ✅ Обновить OAuth scopes в Google Cloud Console
4. ✅ Создать новое развертывание (если нужно)

