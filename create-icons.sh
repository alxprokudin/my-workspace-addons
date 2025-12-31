#!/bin/bash

# Скрипт для создания PNG иконок из SVG для Google Workspace Marketplace
# Требует установки: ImageMagick или Inkscape

echo "🎨 Создание PNG иконок для Google Workspace Marketplace..."

# Проверка наличия ImageMagick
if command -v convert &> /dev/null; then
    CONVERTER="imagemagick"
elif command -v inkscape &> /dev/null; then
    CONVERTER="inkscape"
else
    echo "❌ Ошибка: Не найдены ImageMagick или Inkscape"
    echo "Установите один из них:"
    echo "  macOS: brew install imagemagick"
    echo "  macOS: brew install inkscape"
    exit 1
fi

# Создаем папку для иконок
mkdir -p docs/icons

# Базовое имя иконки (можно изменить)
ICON_NAME="icon-export-excel"
SVG_FILE="docs/${ICON_NAME}.svg"

if [ ! -f "$SVG_FILE" ]; then
    echo "❌ Файл $SVG_FILE не найден!"
    exit 1
fi

echo "📦 Конвертация $SVG_FILE..."

if [ "$CONVERTER" == "imagemagick" ]; then
    # ImageMagick
    convert -background none -density 300 "$SVG_FILE" -resize 128x128 "docs/icons/${ICON_NAME}-128x128.png"
    convert -background none -density 300 "$SVG_FILE" -resize 512x512 "docs/icons/${ICON_NAME}-512x512.png"
elif [ "$CONVERTER" == "inkscape" ]; then
    # Inkscape
    inkscape "$SVG_FILE" --export-type=png --export-filename="docs/icons/${ICON_NAME}-128x128.png" --export-width=128 --export-height=128
    inkscape "$SVG_FILE" --export-type=png --export-filename="docs/icons/${ICON_NAME}-512x512.png" --export-width=512 --export-height=512
fi

if [ $? -eq 0 ]; then
    echo "✅ Иконки успешно созданы:"
    echo "   - docs/icons/${ICON_NAME}-128x128.png (для Marketplace)"
    echo "   - docs/icons/${ICON_NAME}-512x512.png (для больших размеров)"
else
    echo "❌ Ошибка при создании иконок"
    exit 1
fi

