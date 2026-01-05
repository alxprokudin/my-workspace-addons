# Экспорт в Excel - Google Workspace Add-on

Дополнение для Google Sheets, которое позволяет экспортировать активный лист в формат Excel (.xlsx) и скачивать на компьютер одним кликом.

## 📋 Описание

Это дополнение добавляет в Google Sheets меню "Экспорт в Excel", через которое можно:
- Экспортировать активный лист в формат Microsoft Excel (.xlsx)
- Скачать файл на компьютер одним кликом
- Файл сохраняется в папку "Загрузки" вашего браузера
- Автоматическое именование файла по названию листа

## 🚀 Установка

1. Откройте Google Таблицу
2. Перейдите в **Расширения** → **Apps Script**
3. Создайте новый проект и скопируйте код из этого репозитория
4. Сохраните и авторизуйте проект

## 📁 Структура проекта

```
├── appsScript.js           # Основной код дополнения
├── dialog.html            # HTML интерфейс скачивания
├── appsscript.json        # Манифест дополнения
├── docs/                  # Сайт проекта (GitHub Pages)
│   ├── index.html         # Главная страница
│   ├── privacy-policy.html
│   └── guides/            # Документация и инструкции
└── .github/workflows/     # GitHub Actions для автоматического деплоя
```

## ⚙️ Настройка

1. Скопируйте код из репозитория в Google Apps Script
2. Обновите `dialog.html` (если нужно)
3. Сохраните проект

**Примечание:** Новая версия не требует Google Drive API и Google Picker API. Файл скачивается напрямую на компьютер пользователя.

## 🔒 Безопасность

⚠️ **ВАЖНО**: НЕ коммитьте файлы с реальными ключами в публичный репозиторий!

- В репозитории используйте плейсхолдеры
- Реальные ключи храните только в Google Apps Script

## 📖 Документация

Вся документация находится в папке `docs/guides/`:

- **PUBLICATION_GUIDE.md** - Подробное руководство по публикации в Google Workspace Marketplace
- **DEPLOY_TO_APPS_SCRIPT.md** - Инструкция по развертыванию в Apps Script
- **HOW_OAUTH_WORKS_FOR_USERS.md** - Как работает OAuth для пользователей
- И другие инструкции...

## 🛠️ Разработка

### Требования

- Google Apps Script (V8 runtime)
- Google Cloud Console проект
- OAuth 2.0 Client ID (опционально, для Google Picker)

### Функции

- `onOpen()` - Создает меню дополнения
- `onInstall()` - Вызывается при установке
- `showDownloadDialog()` - Показывает диалог скачивания
- `getExcelBlobAsBase64()` - Экспортирует лист в Excel и возвращает base64

## 📝 Лицензия

Этот проект можно свободно использовать и модифицировать.

## 🔗 Ссылки

- [Сайт проекта](https://www.alxprokudin.com/)
- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Google Workspace Marketplace](https://workspace.google.com/marketplace)
- [OAuth 2.0 для Google APIs](https://developers.google.com/identity/protocols/oauth2)

---

**Примечание**: Сайт проекта находится в папке `docs/` этого репозитория. Документация - в `docs/guides/`.

