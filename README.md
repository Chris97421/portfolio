# Portfolio de Christophe Malet

Site multi-pages présentant mon parcours, mes projets et mes compétences. Projet « Portfolio » d'Epitech (pré-MSc).

**Site en ligne :** https://chris97421.github.io/portfolio/

## Concept

« Du soin au code » : un infirmier en reconversion vers le développement et la data. Le fil conducteur visuel est un électrocardiogramme qui se dessine puis se transforme en `</>`.

## Pages

| Page | Contenu |
|---|---|
| `index.html` | Accueil : photo, accroche, présentation |
| `projets.html` | Fiches projet : contexte et objectif, compétences, liens |
| `parcours.html` | Parcours, ce que j'ai appris cette année, expériences hors projets d'école, compétences |
| `contact.html` | Coordonnées, téléchargement du CV (PDF), formulaire de contact |

## Technologies

- HTML5 sémantique
- CSS3 (variables, grid, flexbox, animations, responsive)
- JavaScript (confirmation du formulaire)
- SVG animé pour l'ECG

## Structure

```
portfolio/
├── index.html
├── projets.html
├── parcours.html
├── contact.html
├── css/style.css
├── js/script.js
├── img/photo.jpg
├── cv/CV-Christophe-Malet.pdf
└── README.md
```

## Lancer le site en local

```bash
cd portfolio
python3 -m http.server 5500
```

Puis ouvrir http://127.0.0.1:5500 (ou utiliser l'extension Live Server de VS Code).

## Déploiement

Le site est publié avec **GitHub Pages** depuis la branche `main`. Chaque `git push` sur `main` déclenche automatiquement une nouvelle publication.

```bash
git add .
git commit -m "Mise à jour du portfolio"
git push
```

## Accessibilité

- Navigation identique sur toutes les pages, page courante signalée (`aria-current`)
- Structure de titres cohérente, attributs `alt` sur les images
- Champs de formulaire associés à leurs libellés
- Site responsive (lisible sur mobile)

## Crédits

- Polices : [Inter](https://rsms.me/inter/) et [JetBrains Mono](https://www.jetbrains.com/lp/mono/), via Google Fonts, licence SIL Open Font License
- Photo : portrait personnel
- Animation ECG : SVG réalisé pour ce site

## Contact

christophe.malet@epitech.eu · [GitHub](https://github.com/Chris97421) · [LinkedIn](https://www.linkedin.com/in/christophe-malet-0925a1145/)
