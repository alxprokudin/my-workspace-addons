# 📝 Обоснование OAuth Scopes для верификации Google

## 📋 Требуется заполнить

Google требует обоснование для следующих scopes:
1. **Restricted scopes:** `drive`
2. **Sensitive scopes:** `script.container.ui`, `script.external_request`
3. **Scope justifications** (обоснование использования)
4. **Intended data usage** (использование данных)
5. **Demo video** (видео демонстрация)

---

## 🔒 Restricted Scope: `drive`

### Что нужно заполнить:

#### 1. "What features will you use?" (Какие функции вы будете использовать?)

**Выберите из dropdown:**
- ✅ **"Store files in Drive"** (Сохранять файлы в Drive)
- ✅ Или другие подходящие опции (если есть)

**Рекомендация:** Выберите "Store files in Drive", так как дополнение сохраняет экспортированные файлы в Google Drive.

#### 2. "How will the scopes be used?" (Как будут использоваться scopes?)

**Обоснование (на английском):**

```
The add-on uses the drive scope to save exported Excel files (.xlsx) to the user's Google Drive in a folder selected by the user through the Google Picker interface.

The scope is necessary because:
1. Users need to choose where to save the exported file using Google Picker
2. The add-on saves the exported Excel file to the selected folder in the user's Google Drive
3. We cannot use the more limited drive.file scope because users may select any folder in their Drive, not just files created by the app

The add-on only writes files (creates new Excel files) and does not read, edit, or delete existing files in the user's Drive. Users have full control over where the file is saved through the Google Picker interface.
```

**Русский вариант (если нужен):**

```
Дополнение использует scope drive для сохранения экспортированных файлов Excel (.xlsx) в Google Drive пользователя в папку, выбранную пользователем через интерфейс Google Picker.

Scope необходим, потому что:
1. Пользователям нужно выбрать, куда сохранить экспортированный файл, используя Google Picker
2. Дополнение сохраняет экспортированный файл Excel в выбранную папку в Google Drive пользователя
3. Мы не можем использовать более ограниченный scope drive.file, потому что пользователи могут выбрать любую папку в их Drive, а не только файлы, созданные приложением

Дополнение только записывает файлы (создает новые файлы Excel) и не читает, не редактирует и не удаляет существующие файлы в Drive пользователя. Пользователи имеют полный контроль над тем, где сохраняется файл, через интерфейс Google Picker.
```

#### 3. "Demo video" (Видео демонстрация)

**Требуется:** YouTube ссылка на видео, демонстрирующее использование scope.

**Что показать в видео:**
1. Открытие Google Sheets
2. Запуск дополнения через меню
3. Выбор папки в Google Drive через Google Picker
4. Экспорт листа в Excel
5. Сохранение файла в выбранную папку
6. Подтверждение, что файл сохранен

**Рекомендация:** Создайте короткое видео (1-2 минуты) и загрузите на YouTube (можно как unlisted/приватное).

**Если видео еще нет:**
- Можно временно оставить пустым и добавить позже
- Или создать простое видео с записью экрана

---

## ⚠️ Sensitive Scopes

### Scope 1: `script.container.ui`

#### "How will the scopes be used?" (Обоснование):

**На английском:**

```
The add-on uses the script.container.ui scope to display a modal dialog that allows users to select a Google Drive folder using Google Picker.

The scope is necessary because:
1. The add-on needs to show a dialog box (modal dialog) to users
2. The dialog contains Google Picker interface for folder selection
3. Without this scope, the add-on cannot display UI dialogs to users

The add-on only uses this scope to display the folder selection dialog. No user data is collected or transmitted through this dialog - it's only used for user interaction within the add-on.
```

**Русский вариант:**

```
Дополнение использует scope script.container.ui для отображения модального диалога, который позволяет пользователям выбрать папку Google Drive с помощью Google Picker.

Scope необходим, потому что:
1. Дополнению нужно показать диалоговое окно (модальный диалог) пользователям
2. Диалог содержит интерфейс Google Picker для выбора папки
3. Без этого scope дополнение не может отображать UI диалоги пользователям

Дополнение использует этот scope только для отображения диалога выбора папки. Никакие данные пользователя не собираются и не передаются через этот диалог - он используется только для взаимодействия пользователя с дополнением.
```

---

### Scope 2: `script.external_request`

#### "How will the scopes be used?" (Обоснование):

**На английском:**

```
The add-on uses the script.external_request scope to export Google Sheets data to Excel format using Google Sheets API.

The scope is necessary because:
1. The add-on needs to access Google Sheets API to read the active sheet data
2. The add-on converts the sheet data to Excel format (.xlsx)
3. This requires making HTTP requests to Google APIs (specifically Google Sheets API)

The add-on only uses this scope to:
- Read data from the currently active spreadsheet (via Google Sheets API)
- Convert the data to Excel format
- Save the converted file to Google Drive

No data is sent to external third-party servers - all operations are performed through official Google APIs within the user's Google account.
```

**Русский вариант:**

```
Дополнение использует scope script.external_request для экспорта данных Google Sheets в формат Excel с помощью Google Sheets API.

Scope необходим, потому что:
1. Дополнению нужно получить доступ к Google Sheets API для чтения данных активного листа
2. Дополнение конвертирует данные листа в формат Excel (.xlsx)
3. Это требует выполнения HTTP запросов к Google API (конкретно Google Sheets API)

Дополнение использует этот scope только для:
- Чтения данных из текущей активной таблицы (через Google Sheets API)
- Конвертации данных в формат Excel
- Сохранения конвертированного файла в Google Drive

Никакие данные не отправляются на внешние сторонние серверы - все операции выполняются через официальные Google API в рамках аккаунта Google пользователя.
```

---

## 📊 Scope Justifications (Общее обоснование для всех scopes)

### "How will the scopes be used?" (Общее обоснование):

**На английском:**

```
The "Export to Excel" add-on allows users to export the active Google Sheets tab to Microsoft Excel (.xlsx) format and save it to a selected Google Drive folder.

Required scopes and their usage:

1. drive - To save exported Excel files to the user's selected Google Drive folder. Users choose the destination folder through Google Picker interface.

2. script.container.ui - To display a modal dialog with Google Picker interface, allowing users to select the destination folder for the exported file.

3. script.external_request - To access Google Sheets API to read the active sheet data and convert it to Excel format (.xlsx).

4. spreadsheets.currentonly - To access only the currently open spreadsheet for exporting the active sheet.

All operations are performed locally within the user's Google account. No user data is collected, stored, or transmitted to external servers. The add-on only reads the active sheet data, converts it to Excel format, and saves it to the user's Drive in a folder selected by the user.
```

**Русский вариант:**

```
Дополнение "Экспорт в Excel" позволяет пользователям экспортировать активный лист Google Таблицы в формат Microsoft Excel (.xlsx) и сохранить его в выбранную папку Google Drive.

Необходимые scopes и их использование:

1. drive - Для сохранения экспортированных файлов Excel в выбранную пользователем папку Google Drive. Пользователи выбирают папку назначения через интерфейс Google Picker.

2. script.container.ui - Для отображения модального диалога с интерфейсом Google Picker, позволяющего пользователям выбрать папку назначения для экспортированного файла.

3. script.external_request - Для доступа к Google Sheets API для чтения данных активного листа и конвертации их в формат Excel (.xlsx).

4. spreadsheets.currentonly - Для доступа только к текущей открытой таблице для экспорта активного листа.

Все операции выполняются локально в рамках аккаунта Google пользователя. Никакие данные пользователя не собираются, не хранятся и не передаются на внешние серверы. Дополнение только читает данные активного листа, конвертирует их в формат Excel и сохраняет в Drive пользователя в папку, выбранную пользователем.
```

---

## 🎥 Demo Video (Видео демонстрация)

### Что показать в видео:

1. **Открытие Google Sheets** (1-2 секунды)
2. **Запуск дополнения:**
   - Меню "Экспорт в Excel" → "Экспортировать лист"
3. **Выбор папки:**
   - Появление диалога Google Picker
   - Выбор папки в Google Drive
   - Нажатие "Select" или выбор папки
4. **Экспорт:**
   - Сообщение "Экспорт файла..."
   - Успешное сообщение
5. **Результат:**
   - Открытие Google Drive
   - Показать, что файл сохранен в выбранной папке
   - Показать файл Excel

### Длительность видео:

- **Рекомендуется:** 1-2 минуты
- **Максимум:** 5 минут

### Требования:

- Видео должно быть на YouTube
- Можно загрузить как unlisted (приватное) или public
- Видео должно показывать весь процесс использования дополнения

---

## 📝 Краткие варианты обоснований (для копирования)

### Drive scope:

```
The add-on uses the drive scope to save exported Excel files to the user's selected Google Drive folder. Users choose the destination folder through Google Picker. The scope is needed because users can select any folder in their Drive, not just files created by the app. The add-on only writes files (creates new Excel files) and does not read, edit, or delete existing files.
```

### script.container.ui scope:

```
The add-on uses script.container.ui to display a modal dialog with Google Picker interface for folder selection. This scope is necessary to show UI dialogs to users. No user data is collected through this dialog - it's only used for user interaction.
```

### script.external_request scope:

```
The add-on uses script.external_request to access Google Sheets API to read the active sheet data and convert it to Excel format. All operations are performed through official Google APIs. No data is sent to external third-party servers.
```

---

## ✅ Чеклист заполнения

### Restricted Scope (drive):
- [ ] Выбрано "What features will you use?" (Store files in Drive)
- [ ] Заполнено "How will the scopes be used?"
- [ ] Указана ссылка на YouTube видео (или оставлено пустым временно)

### Sensitive Scopes:
- [ ] Заполнено обоснование для `script.container.ui`
- [ ] Заполнено обоснование для `script.external_request`

### Общее обоснование:
- [ ] Заполнено "Scope justifications" (общее обоснование)

### Дополнительная информация:
- [ ] Заполнено "Additional info" (если требуется)

---

## 🎯 Рекомендации

1. **Используйте английский язык** - Google предпочитает английский для верификации
2. **Будьте конкретными** - объясните, зачем нужен каждый scope
3. **Подчеркните безопасность** - упомяните, что данные не передаются на внешние серверы
4. **Видео обязательно** - создайте короткое видео, демонстрирующее работу дополнения
5. **Сохраняйте изменения** - не забудьте нажать "Save" после заполнения всех полей

---

## 📹 Создание демо-видео

### Инструменты для записи:

- **Mac:** QuickTime Player (встроенный) или ScreenFlow
- **Windows:** OBS Studio (бесплатный) или Camtasia
- **Онлайн:** Loom, Screencastify

### Шаги:

1. Откройте Google Sheets с тестовыми данными
2. Запустите запись экрана
3. Выполните весь процесс экспорта (как описано выше)
4. Остановите запись
5. Загрузите на YouTube (можно как unlisted)
6. Скопируйте ссылку на видео
7. Вставьте ссылку в поле "Demo video"

---

**После заполнения всех полей нажмите "Save" и Google начнет процесс верификации scopes!** 🚀

