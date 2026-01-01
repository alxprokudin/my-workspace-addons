# 🔗 Правильные URLs для OAuth Consent Screen

## ❌ Неправильно (текущее)

Сейчас указано:
```
Application home page: https://www.alxprokudin.com/my-workspace-addons/index.html
Privacy policy: https://www.alxprokudin.com/my-workspace-addons/privacy-policy.html
Terms of service: https://www.alxprokudin.com/my-workspace-addons/terms-of-service.html
```

**Проблема:** Путь `/my-workspace-addons/` - это путь для GitHub Pages по умолчанию (alxprokudin.github.io/my-workspace-addons/), но при использовании кастомного домена этот путь **не нужен**!

---

## ✅ Правильно

### Application home page:
```
https://www.alxprokudin.com
```

Или:
```
https://www.alxprokudin.com/
```

### Application privacy policy link:
```
https://www.alxprokudin.com/privacy-policy.html
```

### Application terms of service link:
```
https://www.alxprokudin.com/terms-of-service.html
```

---

## 📋 Почему без `/my-workspace-addons/`?

**Когда вы используете кастомный домен (`www.alxprokudin.com`):**
- GitHub Pages делает домен **корневым** для вашего сайта
- Файлы из папки `docs/` размещаются в **корне домена**
- Путь `/my-workspace-addons/` больше не нужен

**Путь `/my-workspace-addons/` нужен только для:**
- GitHub Pages URL по умолчанию: `alxprokudin.github.io/my-workspace-addons/`
- Но вы используете кастомный домен, поэтому этот путь не нужен

---

## ✅ Правильные ссылки (итог)

### В OAuth Consent Screen:

**Application home page:**
```
https://www.alxprokudin.com
```

**Application privacy policy link:**
```
https://www.alxprokudin.com/privacy-policy.html
```

**Application terms of service link:**
```
https://www.alxprokudin.com/terms-of-service.html
```

---

## 🔍 Как проверить правильность

1. **Откройте в браузере:**
   - `https://www.alxprokudin.com` - должна открыться главная страница
   - `https://www.alxprokudin.com/privacy-policy.html` - должна открыться политика конфиденциальности
   - `https://www.alxprokudin.com/terms-of-service.html` - должны открыться условия использования

2. **Если эти ссылки работают** - значит пути правильные!

3. **Если открывается 404** - значит нужно проверить настройки GitHub Pages

---

## 📝 Как обновить в Google Cloud Console

1. Откройте [Google Cloud Console](https://console.cloud.google.com)
2. Перейдите: **"APIs & Services"** → **"OAuth consent screen"**
3. Найдите раздел **"App domain"**

4. **Обновите все три поля:**

   **Application home page:**
   ```
   https://www.alxprokudin.com
   ```

   **Application privacy policy link:**
   ```
   https://www.alxprokudin.com/privacy-policy.html
   ```

   **Application terms of service link:**
   ```
   https://www.alxprokudin.com/terms-of-service.html
   ```

5. Нажмите **"Save"** внизу страницы

---

## ⚠️ Важно

**НЕ используйте:**
- ❌ `https://www.alxprokudin.com/my-workspace-addons/...`
- ❌ `https://alxprokudin.github.io/...`

**Используйте:**
- ✅ `https://www.alxprokudin.com` (корень домена)
- ✅ `https://www.alxprokudin.com/privacy-policy.html` (файлы в корне)

---

## ✅ Итог

**Правильные ссылки (без `/my-workspace-addons/`):**

1. **Home page:** `https://www.alxprokudin.com`
2. **Privacy policy:** `https://www.alxprokudin.com/privacy-policy.html`
3. **Terms of service:** `https://www.alxprokudin.com/terms-of-service.html`

**Уберите `/my-workspace-addons/` из всех ссылок!**

