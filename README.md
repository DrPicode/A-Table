# À table cette semaine

Application web progressive pour choisir les plats de la semaine et préparer les courses. Les choix et les articles cochés sont enregistrés dans le stockage local du navigateur sur l'appareil.

Les recettes peuvent être ajoutées, modifiées ou supprimées depuis l’écran des plats. Ces changements sont également enregistrés sur l’appareil et restent disponibles hors ligne.

## Lancer en local

Depuis ce dossier, lancer un petit serveur statique, par exemple :

```sh
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`. Le service worker et le mode hors ligne sont actifs sur `localhost` ou sur une adresse HTTPS.

## Mettre en ligne et installer sur le téléphone

Déployer le contenu de ce dossier sur un hébergement statique HTTPS (par exemple GitHub Pages, Netlify ou Cloudflare Pages). Sur iPhone, ouvrir l’adresse dans Safari, toucher **Partager**, puis **Sur l’écran d’accueil**. Sur Android, ouvrir l’adresse dans Chrome et choisir **Installer l’application**.

Les plats, articles cochés et ajouts manuels restent sur cet appareil, dans le stockage du navigateur. Ils ne sont pas synchronisés avec un autre téléphone.

Les recettes et quantités sont définies dans `app.js`. Les quantités absentes de la liste d’origine restent à prévoir selon le nombre de personnes.
