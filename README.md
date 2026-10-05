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

Les fichiers ne contiennent ni horaires, ni temps réel, ni séquence officielle des arrêts. Aucun CV ni fichier de coordonnées personnelles n’est inclus.

La géolocalisation est traitée uniquement dans le navigateur, sans stockage de position ni suivi analytique.
