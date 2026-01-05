# 🔧 Исправление несоответствия OAuth Scopes

## Суть проблемы

Google обнаружил, что **scopes в OAuth Consent Screen не совпадают со scopes, запрошенными в Cloud Console submission**.

Это означает:
- В **OAuth Consent Screen** указаны одни scopes
- В **Cloud Console submission** (заявке на верификацию) указаны другие scopes
- Google требует, чтобы они совпадали

## Почему это произошло?

Вероятные причины:
1. Вы изменили scopes в `appsscript.json`, но не обновили OAuth Consent Screen
2. Вы обновили OAuth Consent Screen, но не обновили submission в Cloud Console
3. Вы удалили `drive.file` scope, но он еще указан в одном из мест

## Что нужно сделать

### Шаг 1: Проверить текущие scopes

#### 1.1. Scopes в `appsscript.json` (текущие):

```json
"oauthScopes": [
  "https://www.googleapis.com/auth/spreadsheets.currentonly",
  "https://www.googleapis.com/auth/script.container.ui",
  "https://www.googleapis.com/auth/script.external_request"
]
```

#### 1.2. Scopes в OAuth Consent Screen:

1. Откройте [Google Cloud Console](https://console.cloud.google.com)
2. Перейдите в **APIs & Services** → **OAuth consent screen**
3. Посмотрите раздел **"Scopes"**
4. Запишите все указанные scopes

#### 1.3. Scopes в Cloud Console submission:

1. В Google Cloud Console перейдите в раздел верификации
2. Найдите вашу заявку на верификацию
3. Посмотрите, какие scopes там указаны

### Шаг 2: Привести все scopes к единому виду

**Целевые scopes (новая версия):**

```
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/script.container.ui
https://www.googleapis.com/auth/script.external_request
```

**УДАЛИТЬ:**
- ❌ `https://www.googleapis.com/auth/drive.file` (больше не используется)
- ❌ `https://www.googleapis.com/auth/drive` (не использовался)

### Шаг 3: Обновить OAuth Consent Screen

1. Откройте [Google Cloud Console](https://console.cloud.google.com)
2. Перейдите в **APIs & Services** → **OAuth consent screen**
3. В разделе **"Scopes"** нажмите **"ADD OR REMOVE SCOPES"**
4. Убедитесь, что указаны ТОЛЬКО эти scopes:
   - ✅ `https://www.googleapis.com/auth/spreadsheets.currentonly`
   - ✅ `https://www.googleapis.com/auth/script.container.ui`
   - ✅ `https://www.googleapis.com/auth/script.external_request`
5. **Удалите** `drive.file` и `drive`, если они есть
6. Сохраните изменения

### Шаг 4: Обновить Cloud Console submission

1. В Google Cloud Console найдите вашу заявку на верификацию
2. Откройте заявку
3. Обновите список scopes в заявке, чтобы они совпадали с OAuth Consent Screen:
   - ✅ `https://www.googleapis.com/auth/spreadsheets.currentonly`
   - ✅ `https://www.googleapis.com/auth/script.container.ui`
   - ✅ `https://www.googleapis.com/auth/script.external_request`
4. **Удалите** `drive.file` и `drive`, если они указаны
5. Сохраните изменения
6. **Отправьте заявку заново** (Save and submit)

### Шаг 5: Ответить на письмо Google

После того, как вы:
- ✅ Обновили OAuth Consent Screen
- ✅ Обновили Cloud Console submission
- ✅ Сохранили и отправили изменения

**Ответьте на письмо Google:**
```
Здравствуйте,

Я обновил scopes в OAuth Consent Screen и Cloud Console submission. 
Теперь они совпадают и содержат только необходимые scopes:

1. https://www.googleapis.com/auth/spreadsheets.currentonly
2. https://www.googleapis.com/auth/script.container.ui
3. https://www.googleapis.com/auth/script.external_request

Я удалил scope drive.file, так как приложение больше не использует Google Drive.

Пожалуйста, продолжайте верификацию приложения.

С уважением,
[Ваше имя]
```

## ⚠️ Важные моменты

1. **Все три места должны совпадать:**
   - `appsscript.json`
   - OAuth Consent Screen
   - Cloud Console submission

2. **Не добавляйте лишние scopes:**
   - Используйте только те scopes, которые реально нужны
   - Лишние scopes могут привести к отказу в верификации

3. **После обновления:**
   - Сохраните изменения
   - Отправьте заявку заново
   - Ответьте на письмо Google

## 📋 Чеклист

- [ ] Проверить scopes в `appsscript.json`
- [ ] Проверить scopes в OAuth Consent Screen
- [ ] Проверить scopes в Cloud Console submission
- [ ] Удалить `drive.file` из всех мест (если есть)
- [ ] Обновить OAuth Consent Screen
- [ ] Обновить Cloud Console submission
- [ ] Сохранить изменения в Cloud Console
- [ ] Отправить заявку заново (Save and submit)
- [ ] Ответить на письмо Google

## 🔍 Где найти настройки

### OAuth Consent Screen:
- **Путь:** Google Cloud Console → APIs & Services → OAuth consent screen
- **Раздел:** "Scopes"

### Cloud Console submission:
- **Путь:** Google Cloud Console → APIs & Services → OAuth consent screen → Publishing status
- **Или:** Google Cloud Console → APIs & Services → OAuth consent screen → Verification status
- Нажмите на вашу заявку, чтобы открыть детали

### appsscript.json:
- Файл в вашем проекте
- Ветка: `excel-download-direct`
- Файл: `appsscript.json`

## ✅ После исправления

После того, как вы исправите несоответствие и ответите на письмо:
1. Google продолжит проверку приложения
2. Проверка может занять несколько дней
3. Если все в порядке, приложение будет одобрено

## 📞 Если нужна помощь

Если возникнут вопросы:
- **Документация:** [OAuth Consent Screen](https://support.google.com/cloud/answer/10311615)
- **Support:** workspace-marketplace-support@google.com

