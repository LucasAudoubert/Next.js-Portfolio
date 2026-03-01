# Projet Portfolio Next.js

Bienvenue dans **mon Projet Portfolio Next.js**, une application moderne et responsive construite avec la puissance de [Next.js](https://nextjs.org). Ce projet est conçu pour mettre en valeur vos compétences, vos projets et votre expérience de manière élégante et professionnelle.

---

## 🚀 Démarrage

Suivez ces étapes pour configurer et exécuter le projet en local :

### Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre système :

- [Node.js](https://nodejs.org) (v16 ou supérieur recommandé)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/LucasAudoubert/Next.js-Portfolio.git
   ```
2. Accédez au répertoire du projet :
   ```bash
   cd Next-Portfolio
   ```
3. Installez les dépendances :
   ```bash
   npm install
   # ou
   yarn install
   ```

### Lancer le serveur de développement

Démarrez le serveur de développement avec la commande suivante :

```bash
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application. L'application prend en charge le rechargement à chaud, donc toutes les modifications que vous apportez seront reflétées instantanément.

---

## 🛠️ Structure du Projet

Le projet suit une structure modulaire et évolutive :

```
IIM_A2CDI_Nextjs-main/
├── actions/          # Gestionnaires d'actions API
├── app/              # Routes et pages de l'application
├── components/       # Composants UI réutilisables
├── lib/              # Bibliothèques utilitaires
├── public/           # Ressources statiques (images, polices, etc.)
├── types/            # Définitions de types TypeScript
├── utils/            # Fonctions utilitaires
├── ...               # Autres fichiers de configuration
```

### Fonctionnalités Clés

- **Routing Dynamique** : Prise en charge intégrée des routes dynamiques.
- **Intégration API** : Inclut des routes API pour la connexion, l'inscription et la gestion des compétences.
- **Composants Réutilisables** : Composants modulaires pour une meilleure évolutivité.
- **Support TypeScript** : Code fortement typé pour plus de fiabilité.
- **CSS Modules** : Styles encapsulés et maintenables.

---

## 🌟 Fonctionnalités

### Authentification Utilisateur

- Système sécurisé de connexion et d'inscription.
- Hachage des mots de passe avec `bcryptjs`.

### Gestion des Compétences

- Ajouter, visualiser et supprimer des compétences dynamiquement.
- Points de terminaison API pour gérer les compétences.

### Profils Utilisateurs

- Visualiser et modifier les profils utilisateurs.
- Sections organisées pour les compétences et les informations personnelles.

### Design Responsive

- Mise en page entièrement responsive pour tous les appareils.
- Optimisé pour les performances et l'accessibilité.

### Section Projets (Scroll Stack)

- Cartes projets en **scroll stack** avec effet glass/futuriste.
- Grand logo GitHub décoratif qui déborde de la carte avec découpe propre (`overflow-hidden`).
- Lisibilité renforcée du contenu des cartes (titre, description, stack technique).
- Barre de scroll native masquée dans la zone projets (scroll toujours actif).

### Traductions FR/EN

- Synchronisation des données de projets entre les versions française et anglaise.
- Contenus traduits projet par projet dans `lib/translations.ts`.

---

### Mode test (rapide)

- `RESEND_FROM_EMAIL` doit rester sur `onboarding@resend.dev`.
- `CONTACT_EMAIL` doit être l'email propriétaire du compte Resend.

### Mode production

- Vérifier un domaine dans Resend (`resend.com/domains`).
- Utiliser une adresse `from` du domaine vérifié, par exemple :
   `Portfolio Contact <contact@portfolio.lucas.dev>`.

---

## 📦 Scripts Disponibles

Voici les scripts que vous pouvez utiliser pendant le développement :

- **`npm run dev`** : Démarrer le serveur de développement.
- **`npm run build`** : Construire l'application pour la production.
- **`npm run start`** : Démarrer le serveur de production.
- **`npm run lint`** : Exécuter ESLint pour vérifier les problèmes de qualité du code.

---

## 🖋️ Personnalisation

N'hésitez pas à personnaliser le projet selon vos besoins. Voici quelques idées :

- Mettez à jour le fichier `app/page.tsx` pour modifier la page d'accueil.
- Ajoutez de nouveaux composants dans le répertoire `components/`.
- Étendez les routes API dans le répertoire `app/api/`.

---

## 📚 En Savoir Plus

Pour en savoir plus sur les technologies utilisées dans ce projet, consultez les ressources suivantes :

- [Documentation Next.js](https://nextjs.org/docs) : Découvrez les fonctionnalités et l'API de Next.js.
- [Documentation TypeScript](https://www.typescriptlang.org/docs/) : Explorez les fonctionnalités de TypeScript.
- [CSS Modules](https://github.com/css-modules/css-modules) : Comprendre le style CSS encapsulé.

---

## 🚀 Déploiement

Déployez facilement votre application Next.js en utilisant [Vercel](https://vercel.com) :

1. Poussez votre code dans un dépôt GitHub.
2. Connectez le dépôt à Vercel.
3. Vercel construira et déploiera automatiquement votre application.

Pour plus de détails, consultez la [Documentation de Déploiement Next.js](https://nextjs.org/docs/deployment).

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Si vous souhaitez contribuer, suivez ces étapes :

1. Forkez le dépôt.
2. Créez une nouvelle branche pour votre fonctionnalité ou correction de bug.
3. Validez vos modifications et poussez la branche.
4. Ouvrez une pull request.

---

## 🛡️ Licence

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 📧 Contact

Pour toute question ou retour, n'hésitez pas à me contacter :

- **Auteur** : Lucas Audoubert
- **GitHub** : [LucasAudoubert](https://github.com/LucasAudoubert)
- **Email** : [lucas.audoubert.dev@gmail.com](mailto:lucas.audoubert.dev@gmail.com)

---

Merci d'avoir consulté ce projet ! 🎉
