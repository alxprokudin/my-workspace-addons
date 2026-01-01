# 📚 Документация Google Picker API

## 🔗 Основные ресурсы

### 1. Официальная документация

**Главная страница документации:**
- [Google Picker API - Official Documentation](https://developers.google.com/picker)

**Включает:**
- Обзор API
- Руководства по началу работы
- Справочник по API
- Примеры кода

---

### 2. Справочник API

**Полный справочник:**
- [Google Picker API Reference](https://developers.google.com/picker/docs/reference)

**Содержит:**
- Описание всех классов и методов
- Параметры и возвращаемые значения
- Примеры использования

---

### 3. Руководства

#### Начало работы:
- [Getting Started with Google Picker](https://developers.google.com/picker/docs)

#### Основные концепции:
- [Picker API Concepts](https://developers.google.com/picker/docs/concepts)

---

## 📖 Важные разделы документации

### Основные классы и методы

#### PickerBuilder
- [PickerBuilder Class](https://developers.google.com/picker/docs/reference#PickerBuilder)
- Методы для настройки Picker

#### DocsView
- [DocsView Class](https://developers.google.com/picker/docs/reference#DocsView)
- Настройка просмотра документов

#### Feature
- [Feature Enum](https://developers.google.com/picker/docs/reference#Feature)
- Доступные функции (например, NAV_HIDDEN)

---

## 💻 Примеры кода

### Официальные примеры:
- [Google Picker Examples](https://developers.google.com/picker/docs/examples)

### В вашем проекте:
- См. файл `dialog.html` - там есть рабочий пример использования Google Picker

---

## 🔑 Аутентификация

### OAuth 2.0:
- [Google OAuth 2.0 for Client-side Web Applications](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow)

### API Keys:
- [Using API Keys](https://cloud.google.com/docs/authentication/api-keys)

---

## ❓ Частые вопросы

### Q: Как настроить Picker для выбора папок?

**A:** Используйте `DocsView` с `setIncludeFolders(true)` и `setSelectFolderEnabled(true)`:

```javascript
new google.picker.DocsView()
  .setIncludeFolders(true)
  .setSelectFolderEnabled(true)
  .setMimeTypes('application/vnd.google-apps.folder')
```

### Q: Как скрыть навигацию в Picker?

**A:** Используйте `enableFeature(google.picker.Feature.NAV_HIDDEN)`:

```javascript
new google.picker.PickerBuilder()
  .enableFeature(google.picker.Feature.NAV_HIDDEN)
```

### Q: Нужен ли API Key или OAuth Client ID для developerKey?

**A:** Можно использовать оба варианта:
- **API Key:** Проще для начала, но менее безопасно
- **OAuth Client ID:** Рекомендуется для production, более безопасно

См. подробнее: `docs/GOOGLE_PICKER_KEYS_GUIDE.md`

---

## 🐛 Решение проблем

### Проблемы с авторизацией:
- [OAuth 2.0 Troubleshooting](https://developers.google.com/identity/protocols/oauth2/policies)

### Проблемы с API Key:
- [API Key Best Practices](https://cloud.google.com/docs/authentication/api-keys#securing_an_api_key)

---

## 📚 Дополнительные ресурсы

### Stack Overflow:
- [Google Picker API Questions](https://stackoverflow.com/questions/tagged/google-picker-api)

### GitHub:
- [Google Picker API Issues](https://github.com/googleworkspace/picker-api/issues)

### Google Workspace Developer Community:
- [Google Workspace Developers Community](https://developers.googleblog.com/)

---

## 🔍 Быстрый поиск в документации

### По функциональности:

**Выбор папок:**
- Поиск: "select folder" или "setIncludeFolders"

**Настройка представлений:**
- Поиск: "DocsView" или "View"

**Обработка результатов:**
- Поиск: "pickerCallback" или "Response"

**Ошибки:**
- Поиск: "error handling" или "troubleshooting"

---

## 📝 Полезные ссылки для вашего проекта

### Для дополнения Google Sheets:

1. **Google Apps Script:**
   - [Apps Script Documentation](https://developers.google.com/apps-script)

2. **Google Sheets API:**
   - [Sheets API Documentation](https://developers.google.com/sheets/api)

3. **Google Drive API:**
   - [Drive API Documentation](https://developers.google.com/drive/api)

---

## 🎯 Рекомендуемый порядок изучения

1. **Начните с:**
   - [Getting Started Guide](https://developers.google.com/picker/docs)

2. **Изучите:**
   - Основные классы (PickerBuilder, DocsView)
   - Методы настройки (setOAuthToken, setCallback)

3. **Посмотрите примеры:**
   - [Official Examples](https://developers.google.com/picker/docs/examples)

4. **Используйте справочник:**
   - [API Reference](https://developers.google.com/picker/docs/reference)

---

## 🔗 Прямые ссылки

### Основные:
- 📘 [Главная документация](https://developers.google.com/picker)
- 📖 [Справочник API](https://developers.google.com/picker/docs/reference)
- 💻 [Примеры](https://developers.google.com/picker/docs/examples)
- 🚀 [Начало работы](https://developers.google.com/picker/docs)

### Специфичные темы:
- 🔑 [OAuth 2.0](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow)
- 🔐 [API Keys](https://cloud.google.com/docs/authentication/api-keys)
- 📁 [DocsView](https://developers.google.com/picker/docs/reference#DocsView)

---

**Все ссылки ведут на официальную документацию Google! 📚**

