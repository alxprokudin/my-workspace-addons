# ⚡ Быстрая настройка clasp (5 минут)

## Шаг 1: Установка clasp

```bash
npm install -g @google/clasp
```

## Шаг 2: Включите Apps Script API

1. Откройте: https://script.google.com/home/usersettings
2. Включите "Google Apps Script API"

## Шаг 3: Авторизация

```bash
clasp login
```

Войдите в браузер, который откроется.

## Шаг 4: Создайте проект в Apps Script

1. Откройте https://script.google.com
2. Создайте новый проект
3. Скопируйте Script ID из URL:
   ```
   https://script.google.com/home/projects/YOUR_SCRIPT_ID/edit
   ```

## Шаг 5: Настройте проект

```bash
# Создайте .clasp.json
echo '{"scriptId":"YOUR_SCRIPT_ID","rootDir":"."}' > .clasp.json

# Загрузите код
clasp push
```

## Шаг 6: Настройте GitHub Secrets

1. Получите токен:
```bash
cat ~/.clasprc.json
```

2. Добавьте в GitHub → Settings → Secrets:
   - `CLASP_TOKEN` = содержимое `~/.clasprc.json`
   - `CLASP_SCRIPT_ID` = ваш Script ID

## Готово! 🎉

Теперь при каждом push в ветку `excel-export-addon` код автоматически загрузится в Apps Script!

