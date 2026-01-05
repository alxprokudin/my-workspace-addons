# Экспорт в Excel - Google Workspace Add-on

Дополнение для Google Sheets, которое позволяет экспортировать активный лист в формат Excel (.xlsx) и сохранять в выбранную папку Google Drive.

## 📋 Описание

Это дополнение добавляет в Google Sheets меню "Экспорт в Excel", через которое можно:
- Экспортировать активный лист в формат Microsoft Excel (.xlsx)
- Выбрать папку назначения через удобный интерфейс Google Picker
- Автоматически сохранить файл с именем, соответствующим названию листа

## 🚀 Установка

1. Откройте Google Таблицу
2. Перейдите в **Расширения** → **Apps Script**
3. Создайте новый проект и скопируйте код из этого репозитория
4. Сохраните и авторизуйте проект

## 📁 Структура проекта

```
├── appsScript.js           # Основной код дополнения
├── dialog.html            # HTML интерфейс выбора папки
├── appsscript.json        # Манифест дополнения
├── PUBLICATION_GUIDE.md   # Руководство по публикации
├── QUICK_CHECKLIST.md     # Быстрый чеклист
└── SECURITY_NOTICE.md     # Инструкции по безопасности
```

## ⚙️ Настройка

### 1. Настройка

1. Скопируйте код из репозитория в Google Apps Script
2. Обновите `dialog.html` (если нужно)
3. Сохраните проект

**Примечание:** Новая версия не требует Google Drive API и Google Picker API. Файл скачивается напрямую на компьютер пользователя.

## 🔒 Безопасность

⚠️ **ВАЖНО**: НЕ коммитьте файлы с реальными ключами в публичный репозиторий!

- В репозитории используйте плейсхолдеры
- Реальные ключи храните только в Google Apps Script
- См. `SECURITY_NOTICE.md` для подробностей

## 📖 Документация

- **PUBLICATION_GUIDE.md** - Подробное руководство по публикации в Google Workspace Marketplace
- **QUICK_CHECKLIST.md** - Быстрый чеклист для публикации
- **SECURITY_NOTICE.md** - Инструкции по безопасности ключей

## 🛠️ Разработка

### Требования

- Google Apps Script (V8 runtime)
- Google Cloud Console проект
- OAuth 2.0 Client ID

### Функции

- `onOpen()` - Создает меню дополнения
- `onInstall()` - Вызывается при установке
- `showDownloadDialog()` - Показывает диалог скачивания
- `getExcelBlobAsBase64()` - Экспортирует лист в Excel и возвращает base64

## 📝 Лицензия

Этот проект можно свободно использовать и модифицировать.

## 🔗 Ссылки

- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Google Workspace Marketplace](https://workspace.google.com/marketplace)
- [OAuth 2.0 для Google APIs](https://developers.google.com/identity/protocols/oauth2)

---

**Примечание**: Сайт проекта находится в ветке `main` этого репозитория.
