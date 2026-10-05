# Calais Mobilités

Atlas web interactif du réseau de bus de Calais : 559 points d’arrêt et 59 lignes.

## Fonctionnalités

- Carte interactive avec déplacement, zoom et réglages d’affichage.
- Recherche par nom d’arrêt et par ligne.
- Fiches des lignes et des arrêts.
- Géolocalisation dans le navigateur.
- Analyse de proximité avec rayon de 100 à 1 500 mètres.
- Export d’un tracé en GeoJSON.
- Interface française responsive et contrôles au clavier.

## Publication sur GitHub Pages

1. Créer un dépôt GitHub nommé `calais-mobilites`.
2. Décompresser l’archive et déposer son **contenu**, avec `index.html` directement à la racine du dépôt.
3. Dans **Settings → Pages**, choisir **Deploy from a branch**.
4. Sélectionner la branche **main** et le dossier **/(root)**, puis **Save**.
5. Attendre la fin de la publication. GitHub indique l’adresse du site dans cette même page.

L’adresse sera de la forme `https://VOTRE-PSEUDO.github.io/calais-mobilites/`.
Vous pourrez utiliser cette adresse dans votre portfolio, ou configurer votre propre domaine.

Documentation officielle : https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Développement local

Aucune compilation ni clé d’API n’est nécessaire. Avec Python installé, lancer dans le dossier du projet :

```sh
python -m http.server 8000
```

Ouvrir `http://localhost:8000`. Un serveur HTTP est nécessaire pour charger les fichiers GeoJSON.

## Organisation

- `index.html` : interface et métadonnées.
- `styles.css` : styles et adaptation mobile.
- `app.js` : carte Canvas, recherche et interactions.
- `geo.js` : calculs de distance et projection Web Mercator.
- `data/` : données GeoJSON fournies.
- `.nojekyll` : publication statique sur GitHub Pages.

Le fond de carte utilise OpenStreetMap, avec son attribution. Les polices utilisent Google Fonts avec une alternative système. Les données vectorielles restent disponibles si le fond externe ne répond pas.

## Méthodologie et limites

Les distances de proximité sont calculées à vol d’oiseau. Les arrêts candidats situés à moins de 60 mètres d’un tracé sont issus d’un rapprochement géométrique, sans garantie de desserte. Les longueurs décrivent les géométries fournies, qui peuvent contenir plusieurs branches ou sens.

Les fichiers ne contiennent ni horaires, ni temps réel, ni séquence officielle des arrêts. La date de validité et la licence de réutilisation ne sont pas renseignées ; les confirmer auprès du fournisseur avant une diffusion publique des données. Aucun CV ni fichier de coordonnées personnelles n’est inclus.

La géolocalisation est traitée uniquement dans le navigateur, sans stockage de position ni suivi analytique.
