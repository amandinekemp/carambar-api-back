<p align="center">
    <img [carambar-api] src="https://github.com/amandinekemp/carambar-api-back/blob/main/banner.png">
</p>

----------

# Carambar API - Blagues Carambar

----------

Bienvenue sur le projet **Carambar API**, une application permettant d'afficher des blagues aléatoires issues d'une API REST.
Cette API est construite en Node.js avec Express et Sequelize, et la base de données utilisée est SQLite.
L'interface web est déployée sur GitHub Pages, tandis que l'API est hébergée sur Render.com.

## ➤ Table des matières


- [➤ Technologies utilisées](https://github.com/amandinekemp/carambar-api-back/tree/main?tab=readme-ov-file#--technologies-utilis%C3%A9es)
- [➤ Installation du projet en local](https://github.com/amandinekemp/carambar-api-back/tree/main?tab=readme-ov-file#--installation-du-projet-en-local)
- [➤ Endpoints de l'API](https://github.com/amandinekemp/carambar-api-back/tree/main?tab=readme-ov-file#--endpoints-de-lapi)
- [➤ Déploiement](https://github.com/amandinekemp/carambar-api-back/tree/main?tab=readme-ov-file#--d%C3%A9ploiement)
- [➤ Documentation Swagger](https://github.com/amandinekemp/carambar-api-back/tree/main?tab=readme-ov-file#-documentation-swagger-)
- [➤ Liens utiles](https://github.com/amandinekemp/carambar-api-back/tree/main?tab=readme-ov-file#--liens-utiles)
- [➤ License](https://github.com/amandinekemp/carambar-api-back/tree/main?tab=readme-ov-file#--licence)
- [➤ Contact](https://github.com/amandinekemp/carambar-api-back/tree/main?tab=readme-ov-file#-contact)

## 🚀 ➤ Technologies utilisées

### ➤ Backend :

- Node.js
- Express.js
- Sequelize ORM
- SQLite
- Swagger pour la documentation de l'API

### ➤ Frontend :

- HTML
- CSS
- JavaScript (Fetch API)
- Hébergement sur GitHub Pages

### ➤ Déploiement :

- Render.com (API)
- GitHub Pages (Frontend)

---

## 📦 ➤ Installation du projet en local

### ➤ Cloner le projet

#### ➤ Backend :

```
# Cloner le dépôt Backend
git clone https://github.com/amandinekemp/carambar-api-back.git
cd carambar-api-back
```

#### ➤ Frontend :

```
# Cloner le dépôt Frontend
git clone https://github.com/amandinekemp/carambar-api-front.git
cd carambar-api-front
```

## ➤ Installation des dépendances (Backend)

```
npm install
```

## ➤ Lancer l'API en local

```
npm start
```

L'API sera disponible sur http://localhost:3000

## 📌 ➤ Endpoints de l'API

### ➡️ Ajouter une blague (POST)

URL : http://localhost:3000/blagues

Body JSON :

{
"content": "Pourquoi les plongeurs plongent toujours en arrière ?",
"answer": "Parce que sinon ils tombent dans le bateau !"
}

### ➡️ Récupérer toutes les blagues (GET)

URL : http://localhost:3000/blagues

### ➡️ Récupérer une blague spécifique par ID (GET)

URL : http://localhost:3000/blagues/4

### ➡️ Récupérer une blague aléatoire (GET)

URL : http://localhost:3000/blagues/random

## 🛠 ➤ Déploiement

### ➤ API Backend :

L'API est déployée sur Render.com et accessible à l'adresse :
👉 [https://carambar-api-5ec1.onrender.com](https://carambar-api-5ec1.onrender.com)

### ➤ Frontend :

Le site est disponible sur GitHub Pages :
👉 TODO: Lien vers le site

## ➤ Documentation Swagger :

La documentation interactive de l'API est accessible ici :
👉 TODO: Lien Swagger

## 📜 ➤ Liens utiles

- Repo GitHub Backend : https://github.com/amandinekemp/carambar-api-back

- Repo GitHub Frontend : https://github.com/amandinekemp/carambar-api-front

## 📄 ➤ Licence

* Ce projet est sous licence MIT. Voir le fichier [LICENSE ISC](https://github.com/amandinekemp/carambar-api-back/blob/main/LICENSE) pour plus de détails.

## ➤ Contact

Pour toute question ou demande de renseignements:

* Amandine Kemp

    - [Github](https://github.com/amandinekemp)
    - [LinkedIn](https://www.linkedin.com/in/amandinekemp/)

Merci de l'intérêt que vous portez au projet « carambar-api » !

<p align="center">
    <img [bottom-image] src="https://github.com/amandinekemp/carambar-api-back/blob/main/bottom-image.png">
</p>