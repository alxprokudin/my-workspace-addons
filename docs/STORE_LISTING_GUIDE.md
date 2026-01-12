# 📋 Руководство по заполнению Store Listing

## 🎨 Graphic Assets (Графические ресурсы)

### Обязательные поля (отмечены *):

1. **Application Icon 32x32 \*** 
   - Файл: `docs/icons/icon-export-excel-32x32.png`
   - Формат: PNG с прозрачностью

2. **Application Icon 48x48**
   - Файл: `docs/icons/icon-export-excel-48x48.png`
   - Формат: PNG с прозрачностью

3. **Application Icon 96x96**
   - Файл: `docs/icons/icon-export-excel-96x96.png`
   - Формат: PNG с прозрачностью

4. **Application Icon 128x128 \***
   - Файл: `docs/icons/icon-export-excel-128x128.png`
   - Формат: PNG с прозрачностью

5. **Application Card Banner 220x140 \***
   - Файл: `docs/icons/icon-export-excel-banner-220x140.png`
   - Формат: PNG с прозрачностью

### Как создать иконки:

Выполните команду:
```bash
chmod +x create-all-icons.sh
./create-all-icons.sh
```

Или вручную через ImageMagick:
```bash
magick docs/icon-export-excel.svg -resize 32x32 docs/icons/icon-export-excel-32x32.png
magick docs/icon-export-excel.svg -resize 48x48 docs/icons/icon-export-excel-48x48.png
magick docs/icon-export-excel.svg -resize 96x96 docs/icons/icon-export-excel-96x96.png
magick docs/icon-export-excel.svg -resize 128x128 docs/icons/icon-export-excel-128x128.png
magick docs/icon-export-excel.svg -resize 140x140 -gravity center -extent 220x140 docs/icons/icon-export-excel-banner-220x140.png
```

---

## 📂 Category (Категория)

**Рекомендация:** Выберите **"Office Applications"**

**Почему:**
- Дополнение работает с Google Sheets (офисное приложение)
- Функциональность связана с экспортом данных (типичная задача для офисных приложений)
- Это наиболее подходящая категория из предложенных

**Альтернативы:**
- **"Utilities"** - тоже подходит, но менее специфично
- **"Task Management"** - не подходит, это не управление задачами

---

## 🔗 Support Links (Ссылки поддержки)

### Обязательные поля (отмечены *):

1. **Terms of Service URL \***
   ```
   https://alxprokudin.github.io/my-workspace-addons/terms-of-service.html
   ```
   ✅ Уже заполнено

2. **Privacy Policy URL \***
   ```
   https://alxprokudin.github.io/my-workspace-addons/privacy-policy.html
   ```
   ✅ Уже заполнено

3. **Support URL \***
   ```
   https://alxprokudin.github.io/my-workspace-addons/
   ```
   Или можно использовать email:
   ```
   mailto:alxprokudin@gmail.com
   ```
   **Рекомендация:** Используйте главную страницу сайта, там есть контактная информация

### Опциональные поля:

4. **Setup URL**
   ```
   https://alxprokudin.github.io/my-workspace-addons/
   ```
   Или оставьте пустым. Можно указать главную страницу, где есть описание использования.

5. **Admin Config URL**
   - Оставьте пустым (для дополнений обычно не требуется)

6. **Help URL**
   ```
   https://alxprokudin.github.io/my-workspace-addons/
   ```
   Можно указать главную страницу или создать отдельную страницу с инструкциями.

7. **Report Issue URL**
   ```
   https://alxprokudin.github.io/my-workspace-addons/
   ```
   Или можно использовать email:
   ```
   mailto:alxprokudin@gmail.com
   ```
   **Рекомендация:** Используйте главную страницу, там есть контактная информация для сообщений об ошибках.

---

## 📝 Текст для Store Listing (актуально — без Google Drive/Picker)

Ниже — заготовки, которые можно прямо копировать в Google Cloud Console → **Store Listing** → **General information**.

### RU (рекомендуемый вариант)

**Краткое описание (Short description):**

Экспортируйте активный лист Google Таблицы в Excel (.xlsx) и скачивайте файл на компьютер одним кликом.

**Подробное описание (Detailed description / Общие сведения):**

Дополнение «Экспорт в Excel» добавляет в Google Sheets меню, которое позволяет экспортировать активный лист в формат Microsoft Excel (.xlsx) и скачать файл на компьютер (обычно в папку «Загрузки» браузера).

Основные возможности:
- Экспорт активного листа в Excel (.xlsx)
- Скачивание файла на компьютер (без сохранения в Google Drive)
- Автоматическое имя файла по названию листа

Использование:
1. Откройте Google Таблицу
2. Выберите нужный лист
3. Меню: «Экспорт в Excel» → «Скачать Excel»
4. Файл будет скачан в «Загрузки» вашего браузера

Примечание: если скачивание недоступно из‑за ограничений доступа к документу, попросите владельца обновить настройки общего доступа.

### EN (optional)

**Short description:**

Export the active Google Sheets tab to Excel (.xlsx) and download it to your computer in one click.

**Detailed description:**

“Export to Excel” adds a menu to Google Sheets that exports the active sheet to Microsoft Excel (.xlsx) and downloads the file to the user’s computer (typically to the browser’s “Downloads” folder).

Key features:
- Export the active sheet to Excel (.xlsx)
- Direct download to computer (no saving to Google Drive)
- Automatic file naming based on the sheet name

How to use:
1. Open a Google Spreadsheet
2. Select a sheet
3. Menu: “Export to Excel” → “Download Excel”
4. The file will be downloaded to your browser’s Downloads folder

---

## 📝 Краткая сводка для заполнения

### Graphic Assets:
- ✅ Application Icon 32x32: `docs/icons/icon-export-excel-32x32.png`
- ✅ Application Icon 48x48: `docs/icons/icon-export-excel-48x48.png`
- ✅ Application Icon 96x96: `docs/icons/icon-export-excel-96x96.png`
- ✅ Application Icon 128x128: `docs/icons/icon-export-excel-128x128.png`
- ✅ Application Card Banner 220x140: `docs/icons/icon-export-excel-banner-220x140.png`

### Category:
- ✅ **Office Applications**

### Support Links:
- ✅ Terms of Service URL: `https://alxprokudin.github.io/my-workspace-addons/terms-of-service.html`
- ✅ Privacy Policy URL: `https://alxprokudin.github.io/my-workspace-addons/privacy-policy.html`
- ✅ Support URL: `https://alxprokudin.github.io/my-workspace-addons/`
- ⚪ Setup URL: `https://alxprokudin.github.io/my-workspace-addons/` (опционально)
- ⚪ Admin Config URL: (оставить пустым)
- ⚪ Help URL: `https://alxprokudin.github.io/my-workspace-addons/` (опционально)
- ⚪ Report Issue URL: `https://alxprokudin.github.io/my-workspace-addons/` (опционально)
- ✅ **Post Install Tip \*** (обязательное): См. примеры ниже

---

## 💡 Post Install Tip (Подсказка после установки)

**Это обязательное поле!** ⚠️

**Что это:**
Краткая подсказка, которая показывается пользователям сразу после установки дополнения. Помогает им быстро начать использовать дополнение.

**Рекомендации:**
- Будьте краткими (1-2 предложения)
- Укажите, как начать использовать дополнение
- Используйте понятный язык

**Примеры для вашего дополнения:**

**Вариант 1 (краткий):**
```
Откройте Google Таблицу и выберите "Экспорт в Excel" в меню для экспорта активного листа.
```

**Вариант 2 (подробный):**
```
Чтобы экспортировать лист в Excel, откройте Google Таблицу, выберите нужный лист, затем в меню нажмите "Экспорт в Excel" и скачайте .xlsx на компьютер (в папку "Загрузки" браузера).
```

**Вариант 3 (с акцентом на простоте):**
```
Просто откройте Google Таблицу, выберите лист и нажмите "Экспорт в Excel" в меню. Файл будет скачан на ваш компьютер.
```

**Рекомендация:** Используйте Вариант 1 или Вариант 3 - они короткие и понятные.

---

## ✅ Чеклист перед сохранением

- [ ] Все обязательные иконки загружены (32x32, 128x128, баннер 220x140)
- [ ] Категория выбрана: **Office Applications**
- [ ] Terms of Service URL заполнен
- [ ] Privacy Policy URL заполнен
- [ ] Support URL заполнен
- [ ] **Post Install Tip заполнен** (обязательное поле!)
- [ ] Все изменения сохранены
- [ ] Проверена ссылка на установку (должна появиться после сохранения)

---

## 🔗 Полезные ссылки

- [Google Workspace Marketplace SDK](https://console.cloud.google.com/apis/library/gsuiteaddons.googleapis.com)
- [Документация по созданию листинга](https://developers.google.com/workspace/marketplace/create-listing)

