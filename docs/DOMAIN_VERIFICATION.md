# Решение проблемы "Missing domain: alxprokudin.github.io"

## Проблема

При настройке OAuth Consent Screen в Google Cloud Console появляется ошибка:
```
Missing domain: alxprokudin.github.io
```

## Причина

GitHub Pages домены (например, `alxprokudin.github.io`) являются поддоменами `github.io`, который принадлежит GitHub, а не вам. Google требует верификацию домена, которым вы владеете, для обеспечения безопасности и подлинности приложения.

## Решения

### Вариант 1: Использовать собственный домен (рекомендуется)

1. **Купите домен:**
   - Используйте регистратора доменов (Namecheap, GoDaddy, Google Domains и т.д.)
   - Выберите домен (например, `yourapp.com`)

2. **Настройте GitHub Pages с кастомным доменом:**
   - В репозитории GitHub: Settings → Pages
   - В поле "Custom domain" введите ваш домен
   - Добавьте CNAME файл в репозиторий

3. **Верифицируйте домен в Google:**
   - Откройте [Google Search Console](https://search.google.com/search-console)
   - Добавьте свой домен
   - Следуйте инструкциям по верификации (обычно через DNS записи)

4. **Обновите настройки OAuth Consent Screen:**
   - В Google Cloud Console: APIs & Services → OAuth consent screen
   - Добавьте ваш домен в поле "Authorized domains"

### Вариант 2: Использовать другой домен (если есть)

Если у вас уже есть верифицированный домен:
1. Используйте его в настройках OAuth Consent Screen
2. Убедитесь, что домен верифицирован в Google Search Console

### Вариант 3: Временно пропустить (для тестирования)

Для тестирования и разработки можно:
1. Оставить поле "Authorized domains" пустым
2. Использовать только тестовых пользователей
3. После покупки домена добавить его

**Важно:** Для публикации в Google Workspace Marketplace потребуется верифицированный домен.

## Пошаговая инструкция для кастомного домена

### Шаг 1: Покупка домена

1. Выберите регистратора (рекомендуется):
   - [Namecheap](https://www.namecheap.com/)
   - [Google Domains](https://domains.google/)
   - [GoDaddy](https://www.godaddy.com/)

2. Купите домен (обычно $10-15/год)

### Шаг 2: Настройка GitHub Pages

1. В репозитории GitHub: **Settings** → **Pages**
2. В разделе "Custom domain" введите ваш домен (например, `yourapp.com`)
3. GitHub создаст файл `CNAME` автоматически

### Шаг 3: Настройка DNS

В панели управления доменом добавьте DNS записи:

**Для корневого домена (yourapp.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**Для поддомена www (www.yourapp.com):**
```
Type: CNAME
Name: www
Value: alxprokudin.github.io
```

### Шаг 4: Верификация в Google Search Console

1. Откройте [Google Search Console](https://search.google.com/search-console)
2. Нажмите "Add property"
3. Выберите "Domain" и введите ваш домен
4. Следуйте инструкциям по верификации:
   - Обычно нужно добавить TXT запись в DNS
   - Или загрузить HTML файл на сайт

### Шаг 5: Обновление OAuth Consent Screen

1. В Google Cloud Console: **APIs & Services** → **OAuth consent screen**
2. В разделе "Authorized domains" добавьте ваш домен
3. Сохраните изменения

## Альтернатива: Использование другого хостинга

Если не хотите использовать кастомный домен с GitHub Pages, можно:
- Использовать другой хостинг (Netlify, Vercel, Cloudflare Pages)
- Все они поддерживают кастомные домены
- Обычно проще в настройке

## Проверка

После настройки проверьте:
1. ✅ Сайт открывается по вашему домену
2. ✅ Домен верифицирован в Google Search Console
3. ✅ Домен добавлен в OAuth Consent Screen
4. ✅ Ошибка "Missing domain" исчезла

## Полезные ссылки

- [GitHub Pages Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Google Search Console](https://search.google.com/search-console)
- [Google OAuth Consent Screen](https://console.cloud.google.com/apis/credentials/consent)

