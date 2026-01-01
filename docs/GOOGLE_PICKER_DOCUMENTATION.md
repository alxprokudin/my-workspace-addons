# 📚 Документация Google Picker API

## 🔗 Основные ссылки

### Официальная документация

1. **Главная страница документации:**
   - [Google Picker API - Overview](https://developers.google.com/picker)
   - Полное руководство по использованию Google Picker API

2. **Руководство разработчика:**
   - [Google Picker API - Developer Guide](https://developers.google.com/picker/docs)
   - Подробное руководство по интеграции и использованию

3. **Справочник API:**
   - [Google Picker API - Reference](https://developers.google.com/picker/docs/reference)
   - Полный справочник по всем методам и параметрам

---

## 📖 Основные разделы документации

### 1. Начало работы

**Quick Start:**
- [Getting Started with Google Picker](https://developers.google.com/picker/docs/overview)
- Быстрый старт и примеры кода

**Authentication:**
- [OAuth 2.0 for Google APIs](https://developers.google.com/identity/protocols/oauth2)
- Как получить OAuth токен для Picker

### 2. Конфигурация

**Views (Представления):**
- [Picker Views](https://developers.google.com/picker/docs/reference#PickerViewId)
- Настройка различных типов представлений (Docs, Drive, Photos и т.д.)

**Features (Функции):**
- [Picker Features](https://developers.google.com/picker/docs/reference#PickerBuilder.enableFeature)
- Дополнительные функции (скрытие навигации, выбор папок и т.д.)

### 3. Примеры кода

**JavaScript Examples:**
- [Google Picker API - Code Samples](https://developers.google.com/picker/docs/overview#examples)
- Готовые примеры кода для разных сценариев

**GitHub Examples:**
- [Google Picker API - GitHub Samples](https://github.com/googleworkspace/picker-api-samples)
- Примеры кода на GitHub

---

## 🔍 Специфические темы

### Выбор папок

**Folder Selection:**
- [Selecting Folders with Google Picker](https://developers.google.com/picker/docs/reference#DocsView.setSelectFolderEnabled)
- Как настроить выбор папок вместо файлов

**Ваш код использует:**
```javascript
.setSelectFolderEnabled(true)
.setMimeTypes('application/vnd.google-apps.folder')
```

### OAuth токены

**Getting OAuth Token:**
- [OAuth 2.0 for Google APIs](https://developers.google.com/identity/protocols/oauth2)
- Как получить токен для Picker

**Apps Script Integration:**
- [Google Apps Script - OAuth](https://developers.google.com/apps-script/guides/services/authorization)
- Интеграция OAuth в Apps Script

### API Keys и Developer Keys

**API Key Setup:**
- [Using API Keys](https://developers.google.com/picker/docs/overview#api-keys)
- Настройка API ключей для Picker

**Developer Key:**
- [Developer Key Configuration](https://developers.google.com/picker/docs/reference#PickerBuilder.setDeveloperKey)
- Как использовать Developer Key

---

## 📝 Справочник API

### PickerBuilder

**Основные методы:**
- [PickerBuilder.setOAuthToken()](https://developers.google.com/picker/docs/reference#PickerBuilder.setOAuthToken)
- [PickerBuilder.setDeveloperKey()](https://developers.google.com/picker/docs/reference#PickerBuilder.setDeveloperKey)
- [PickerBuilder.setCallback()](https://developers.google.com/picker/docs/reference#PickerBuilder.setCallback)
- [PickerBuilder.addView()](https://developers.google.com/picker/docs/reference#PickerBuilder.addView)

### DocsView

**Методы для работы с документами:**
- [DocsView.setIncludeFolders()](https://developers.google.com/picker/docs/reference#DocsView.setIncludeFolders)
- [DocsView.setSelectFolderEnabled()](https://developers.google.com/picker/docs/reference#DocsView.setSelectFolderEnabled)
- [DocsView.setMimeTypes()](https://developers.google.com/picker/docs/reference#DocsView.setMimeTypes)

### Response Object

**Обработка ответа:**
- [Picker Response Object](https://developers.google.com/picker/docs/reference#picker-response-object)
- Структура объекта ответа от Picker

**Ваш код использует:**
```javascript
data[google.picker.Response.ACTION]
data[google.picker.Response.DOCUMENTS]
data[google.picker.Document.ID]
```

---

## 🐛 Решение проблем

### Troubleshooting

**Common Issues:**
- [Google Picker API - Troubleshooting](https://developers.google.com/picker/docs/overview#troubleshooting)
- Решение типичных проблем

**Error Messages:**
- [Google Picker API - Error Handling](https://developers.google.com/picker/docs/reference#error-handling)
- Обработка ошибок

### Stack Overflow

**Вопросы и ответы:**
- [Google Picker API - Stack Overflow](https://stackoverflow.com/questions/tagged/google-picker-api)
- Вопросы сообщества и ответы

---

## 🔐 Безопасность

**Best Practices:**
- [Google Picker API - Security](https://developers.google.com/picker/docs/overview#security)
- Рекомендации по безопасности

**API Key Restrictions:**
- [Restricting API Keys](https://cloud.google.com/docs/authentication/api-keys#restricting_keys)
- Как ограничить использование API ключей

---

## 📊 Примеры использования

### Базовый пример

```javascript
function createPicker() {
  const picker = new google.picker.PickerBuilder()
    .addView(google.picker.ViewId.DOCS)
    .setOAuthToken(oauthToken)
    .setDeveloperKey(developerKey)
    .setCallback(pickerCallback)
    .build();
  picker.setVisible(true);
}
```

### Выбор папок (ваш случай)

```javascript
const picker = new google.picker.PickerBuilder()
  .addView(
    new google.picker.DocsView()
      .setIncludeFolders(true)
      .setSelectFolderEnabled(true)
      .setMimeTypes('application/vnd.google-apps.folder')
  )
  .setOAuthToken(token)
  .setDeveloperKey(developerKey)
  .setCallback(pickerCallback)
  .build();
```

---

## 🆕 Обновления и изменения

**Release Notes:**
- [Google Picker API - Release Notes](https://developers.google.com/picker/docs/overview#release-notes)
- История изменений и обновлений

**Migration Guides:**
- [Migration Guides](https://developers.google.com/picker/docs/overview#migration)
- Руководства по миграции при обновлениях

---

## 💡 Полезные ресурсы

### Видео и туториалы

**YouTube:**
- Поиск: "Google Picker API tutorial"
- Официальные видео от Google

### Блоги и статьи

**Google Developers Blog:**
- [Google Developers Blog - Picker](https://developers.googleblog.com/search/label/Picker)
- Статьи и новости о Picker API

---

## 🔗 Быстрые ссылки для вашего проекта

### Что используется в вашем коде:

1. **DocsView с выбором папок:**
   - [DocsView.setSelectFolderEnabled()](https://developers.google.com/picker/docs/reference#DocsView.setSelectFolderEnabled)

2. **OAuth токены:**
   - [OAuth 2.0 for Google APIs](https://developers.google.com/identity/protocols/oauth2)

3. **Developer Key:**
   - [PickerBuilder.setDeveloperKey()](https://developers.google.com/picker/docs/reference#PickerBuilder.setDeveloperKey)

4. **Response handling:**
   - [Picker Response Object](https://developers.google.com/picker/docs/reference#picker-response-object)

---

## 📚 Дополнительная документация

### Связанные API

**Google Drive API:**
- [Google Drive API Documentation](https://developers.google.com/drive)
- Для работы с файлами после выбора в Picker

**Google Apps Script:**
- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- Для интеграции Picker в Apps Script

**Google Sheets API:**
- [Google Sheets API Documentation](https://developers.google.com/sheets)
- Для работы с таблицами

---

## ✅ Чеклист для изучения

- [ ] Прочитать [Overview](https://developers.google.com/picker)
- [ ] Изучить [Developer Guide](https://developers.google.com/picker/docs)
- [ ] Посмотреть [Code Samples](https://developers.google.com/picker/docs/overview#examples)
- [ ] Изучить [API Reference](https://developers.google.com/picker/docs/reference)
- [ ] Прочитать про [OAuth 2.0](https://developers.google.com/identity/protocols/oauth2)
- [ ] Изучить [Troubleshooting](https://developers.google.com/picker/docs/overview#troubleshooting)

---

**Все ссылки ведут на официальную документацию Google! 📚**
