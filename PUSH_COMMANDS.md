# Команды для push в GitHub

## Если репозиторий уже создан:

1. Добавьте remote (замените URL на ваш):
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

2. Переименуйте ветку в main (если нужно):
```bash
git branch -M main
```

3. Сделайте push:
```bash
git push -u origin main
```

## Если репозитория ещё нет:

1. Создайте репозиторий на GitHub:
   - Перейдите на https://github.com/new
   - Название: например `my-workspace-addons`
   - Выберите **Public**
   - **НЕ** добавляйте README, .gitignore или лицензию
   - Нажмите **Create repository**

2. После создания GitHub покажет команды - выполните:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## После push:

1. Включите GitHub Pages:
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /docs
   - Save

2. Ваш сайт будет доступен по адресу:
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

