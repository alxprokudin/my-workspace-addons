#!/bin/bash

# Скрипт для создания всех PNG иконок из SVG для Google Workspace Marketplace
# Требует установки: ImageMagick
# Размеры: 32x32, 48x48, 96x96, 128x128, и баннер 220x140

echo "🎨 Создание всех PNG иконок для Google Workspace Marketplace..."

# Проверка наличия ImageMagick
if command -v magick &> /dev/null; then
    CONVERTER="magick"
elif command -v convert &> /dev/null; then
    CONVERTER="convert"
else
    echo "❌ Ошибка: Не найден ImageMagick"
    echo "Установите: brew install imagemagick"
    exit 1
fi

# Создаем папку для иконок
mkdir -p docs/icons

# Базовое имя иконки
ICON_NAME="icon-export-excel"
SVG_FILE="docs/${ICON_NAME}.svg"

if [ ! -f "$SVG_FILE" ]; then
    echo "❌ Файл $SVG_FILE не найден!"
    exit 1
fi

echo "📦 Конвертация $SVG_FILE..."

# Функция для создания иконки
create_icon() {
    local size=$1
    local output="docs/icons/${ICON_NAME}-${size}x${size}.png"
    
    if [ "$CONVERTER" == "magick" ]; then
        magick -background none -density 300 "$SVG_FILE" -resize ${size}x${size} "$output"
    else
        convert -background none -density 300 "$SVG_FILE" -resize ${size}x${size} "$output"
    fi
    
    if [ $? -eq 0 ]; then
        echo "✅ Создано: $output"
    else
        echo "❌ Ошибка при создании $output"
    fi
}

# Функция для создания баннера
create_banner() {
    local width=$1
    local height=$2
    local output="docs/icons/${ICON_NAME}-banner-${width}x${height}.png"
    
    if [ "$CONVERTER" == "magick" ]; then
        # Создаем баннер: иконка по центру на прозрачном фоне
        magick -background none -density 300 "$SVG_FILE" -resize ${height}x${height} \
            -gravity center -extent ${width}x${height} "$output"
    else
        convert -background none -density 300 "$SVG_FILE" -resize ${height}x${height} \
            -gravity center -extent ${width}x${height} "$output"
    fi
    
    if [ $? -eq 0 ]; then
        echo "✅ Создано: $output"
    else
        echo "❌ Ошибка при создании $output"
    fi
}

# Создаем все размеры иконок
echo ""
echo "📐 Создание иконок..."
create_icon 32
create_icon 48
create_icon 96
create_icon 128

# Создаем баннер
echo ""
echo "📐 Создание баннера..."
create_banner 220 140

echo ""
echo "✅ Все иконки успешно созданы в папке docs/icons/"
echo ""
echo "📋 Созданные файлы:"
echo "   - ${ICON_NAME}-32x32.png (Application Icon 32x32 *)"
echo "   - ${ICON_NAME}-48x48.png (Application Icon 48x48)"
echo "   - ${ICON_NAME}-96x96.png (Application Icon 96x96)"
echo "   - ${ICON_NAME}-128x128.png (Application Icon 128x128 *)"
echo "   - ${ICON_NAME}-banner-220x140.png (Application Card Banner 220x140 *)"
echo ""
echo "💡 Теперь можно загрузить эти файлы в Google Cloud Console → Store Listing → Graphic Assets"

