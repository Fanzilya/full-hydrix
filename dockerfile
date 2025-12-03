# Используем официальный образ Node.js
FROM node:18-alpine

# Рабочая директория в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем всё приложение
COPY . .

# Строим приложение если нужно
RUN npm run build

# Порт для разработки
EXPOSE 5173

# Команда для запуска
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]