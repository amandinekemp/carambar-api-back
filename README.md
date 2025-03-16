# Carambar API (back)

## 1️⃣ Installation et configuration

```
mkdir backend && cd backend
npm init -y
npm install express sequelize sqlite3 swagger-jsdoc swagger-ui-express dotenv cors
npm install --save-dev nodemon
```

## 2️⃣ Exécuter Docker

Créer et exécuter le conteneur :

```
docker build -t carambar-api-img:latest .
docker run -d -p 3000:3000 --name carambar-api carambar-api-img:latest
```