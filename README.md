# Blog

## Установка зависимостей для корня проекта, чтобы запустить одним скриптом одновременно сервер и клиент
 npm install
## Установка зависимостей для серверной части
 cd server 
 npm install
## Установка зависимостей для клиентской части
 cd client 
 npm install 

## Запуск проекта
npm run dev

### При раздельном запуске сначала запускаем сервер!!!

### На сервере
cd server
#### Установка зависимостей
npm install
#### Запуск сервера если запускать по отдельности 
npm run start

### На клиенте
cd client
#### Установка зависимостей
npm install
#### Запуск клиента если запускать по отдельности
npm start

## Для сборки и запуска в докере
docker compose up --build




