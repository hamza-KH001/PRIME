# PRIME – Application de démonstration

Démo de l’application PRIME : lavage auto, petites réparations et pneus, directement chez le client.
C’est un site statique (HTML, CSS et JavaScript) : il n’a besoin d’aucun serveur ni d’aucune installation.

## Ce que la démo permet de faire

- **Accueil** : offre de lancement, services, boutique.
- **Réserver** : choisir un ou plusieurs services, le jour, l’heure, l’adresse et le paiement.
  Le code **PRIME10** donne -10 % sur la première réservation.
- **Boutique** : produits partenaires Koch-Chemie, panier et commande.
- **Suivi** : l’équipe arrive en direct sur la carte (bouton « Avancer la démo » pour aller plus vite), puis on note la visite.
- **Compte** : points fidélité, abonnements, historique, et un bouton pour remettre la démo à zéro.

Les données restent dans le navigateur (localStorage). Aucun paiement n’est réel.

## Tester sur l’ordinateur

Double-cliquez sur `index.html` : la démo s’ouvre dans le navigateur.

## Mettre en ligne avec GitHub Pages

1. Sur [github.com](https://github.com), créez un nouveau dépôt public, par exemple `prime`.
2. Cliquez sur **Add file › Upload files** et glissez tout le contenu de ce dossier
   (`index.html`, `style.css`, `app.js`, `README.md` et le dossier `assets`). Cliquez sur **Commit changes**.
3. Allez dans **Settings › Pages**. Dans **Branch**, choisissez `main` et `/ (root)`, puis **Save**.
4. Après une ou deux minutes, le site est en ligne à l’adresse `https://<votre-nom>.github.io/prime/`.

## Fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html` | La page et la navigation |
| `style.css` | Le design (couleurs PRIME, mobile et ordinateur) |
| `app.js` | Les écrans, la réservation, le panier, le suivi |
| `assets/` | Icône du site et photo du produit WheelKing |
