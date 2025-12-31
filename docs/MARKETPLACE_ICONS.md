# Иконки для Google Workspace Marketplace

## Требования Google Workspace Marketplace

Google Workspace Marketplace требует следующие форматы иконок:

### Обязательные размеры:
- **128x128 пикселей** - основная иконка (PNG с прозрачностью)
- **512x512 пикселей** - для больших размеров (опционально, но рекомендуется)

### Формат:
- **PNG** с поддержкой прозрачности (alpha channel)
- Без обводки/рамки
- Четкие края, хорошо читаемые в маленьком размере

## Как создать PNG иконки

### Вариант 1: Использование скрипта (рекомендуется)

1. Установите ImageMagick или Inkscape:
   ```bash
   # macOS
   brew install imagemagick
   # или
   brew install inkscape
   ```

2. Запустите скрипт:
   ```bash
   chmod +x create-icons.sh
   ./create-icons.sh
   ```

3. Иконки будут созданы в папке `docs/icons/`:
   - `icon-export-excel-128x128.png`
   - `icon-export-excel-512x512.png`

### Вариант 2: Онлайн-конвертеры

1. Откройте SVG файл в браузере: `docs/icon-export-excel.svg`
2. Используйте онлайн-конвертер:
   - [CloudConvert](https://cloudconvert.com/svg-to-png)
   - [Convertio](https://convertio.co/svg-png/)
   - [SVG to PNG](https://svgtopng.com/)

3. Установите размеры:
   - 128x128 пикселей
   - 512x512 пикселей (опционально)

### Вариант 3: Использование графического редактора

1. Откройте SVG в:
   - Adobe Illustrator
   - Inkscape (бесплатно)
   - Figma
   - Sketch

2. Экспортируйте как PNG:
   - Размер: 128x128px
   - Формат: PNG-24 с прозрачностью
   - Разрешение: 72-96 DPI

## Рекомендуемая иконка

Для Google Workspace Marketplace рекомендуется использовать:
- **`icon-export-excel.svg`** - показывает процесс экспорта
- **`icon-badge.svg`** - современный стиль с бейджем
- **`icon-modern.svg`** - плоский дизайн

## Где использовать иконки

### В Google Workspace Marketplace:
1. **Store Listing** → **Logo**: `icon-export-excel-128x128.png`
2. **OAuth Consent Screen** → **Application logo**: `icon-export-excel-128x128.png`

### На сайте:
- Favicon: можно использовать SVG напрямую
- Карточка проекта: `icon-export-excel-128x128.png` или SVG

## Проверка иконки

Перед загрузкой убедитесь, что:
- ✅ Размер точно 128x128 пикселей
- ✅ Формат PNG с прозрачностью
- ✅ Иконка читаема в маленьком размере
- ✅ Нет размытия или пикселизации
- ✅ Цвета контрастные и яркие

## Альтернативные варианты

Если нужны другие варианты иконок, можно использовать:
- `icon-simple.svg` - минималистичная
- `icon-modern.svg` - современный стиль
- `icon-badge.svg` - с бейджем экспорта

См. `ICONS_README.md` для полного списка доступных иконок.

