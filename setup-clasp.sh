#!/bin/bash

# Скрипт для настройки clasp

echo "🚀 Настройка автоматической синхронизации с Google Apps Script"
echo ""

# Проверка авторизации
echo "1️⃣ Проверка авторизации..."
if clasp login --status > /dev/null 2>&1; then
    echo "✅ Вы уже авторизованы в clasp"
else
    echo "❌ Нужна авторизация. Запустите: clasp login"
    exit 1
fi

echo ""
echo "2️⃣ Создание проекта в Google Apps Script"
echo ""
echo "Откройте в браузере: https://script.google.com"
echo "1. Нажмите 'Новый проект'"
echo "2. Переименуйте проект в 'Экспорт в Excel'"
echo "3. Скопируйте Script ID из URL"
echo ""
read -p "Вставьте Script ID: " SCRIPT_ID

if [ -z "$SCRIPT_ID" ]; then
    echo "❌ Script ID не может быть пустым"
    exit 1
fi

# Создание .clasp.json
echo ""
echo "3️⃣ Создание .clasp.json..."
cat > .clasp.json << EOF
{
  "scriptId": "$SCRIPT_ID",
  "rootDir": "."
}
EOF

echo "✅ Файл .clasp.json создан"

# Проверка dialog.html
echo ""
echo "4️⃣ Проверка dialog.html..."
if grep -q "ВАШ_DEVELOPER_KEY_ЗДЕСЬ" dialog.html 2>/dev/null; then
    echo "⚠️  ВНИМАНИЕ: В dialog.html все еще плейсхолдеры!"
    echo "   Нужно заменить на реальные ключи перед загрузкой"
    echo ""
    read -p "Хотите загрузить код сейчас? (y/n): " CONTINUE
    if [ "$CONTINUE" != "y" ]; then
        echo "Отменено. Обновите dialog.html и запустите: clasp push"
        exit 0
    fi
fi

# Загрузка кода
echo ""
echo "5️⃣ Загрузка кода в Apps Script..."
clasp push

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Код успешно загружен!"
    echo ""
    echo "6️⃣ Следующий шаг: Настройка GitHub Secrets"
    echo ""
    echo "1. Получите токен:"
    echo "   cat ~/.clasprc.json"
    echo ""
    echo "2. Добавьте в GitHub → Settings → Secrets → Actions:"
    echo "   - CLASP_TOKEN = содержимое ~/.clasprc.json"
    echo "   - CLASP_SCRIPT_ID = $SCRIPT_ID"
    echo ""
    echo "3. Проверьте: https://github.com/alxprokudin/my-workspace-addons/settings/secrets/actions"
else
    echo ""
    echo "❌ Ошибка при загрузке. Проверьте:"
    echo "   - Правильность Script ID"
    echo "   - Что проект существует в Apps Script"
    echo "   - Что dialog.html содержит реальные ключи"
fi

