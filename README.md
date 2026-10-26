# Christophe Malet's Portfolio

Multi-page website presenting my background, projects and skills. Epitech (pre-MSc) "Portfolio" project.

**Live site:** https://chris97421.github.io/portfolio/

## Concept

"From care to code": a nurse retraining as a developer and data professional. The visual thread is an electrocardiogram that draws itself, then turns into `</>`.

## Pages

| Page | Content |
|---|---|
| `index.html` | Home: photo, tagline, introduction |
| `projets.html` | Project sheets: context and goal, skills, links |
| `parcours.html` | Background, what I learned this year, experience outside school projects, skills |
| `contact.html` | Contact details, CV download (PDF), contact form |

## Technologies

- Semantic HTML5
- CSS3 (variables, grid, flexbox, animations, responsive)
- JavaScript (form confirmation)
- Animated SVG for the ECG

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

## Run the site locally

```bash
cd portfolio
python3 -m http.server 5500
```

Then open http://127.0.0.1:5500 (or use the Live Server extension in VS Code).

## Deployment

The site is published with **GitHub Pages** from the `main` branch. Every `git push` to `main` automatically triggers a new deployment.

```bash
git add .
git commit -m "Update portfolio"
git push
```

## Accessibility

- Identical navigation on every page, current page marked (`aria-current`)
- Consistent heading structure, `alt` attributes on images
- Form fields linked to their labels
- Responsive site (readable on mobile)

## Credits

- Fonts: [Inter](https://rsms.me/inter/) and [JetBrains Mono](https://www.jetbrains.com/lp/mono/), via Google Fonts, SIL Open Font License
- Photo: personal portrait
- ECG animation: SVG created for this site

## Contact

christophe.malet@epitech.eu · [GitHub](https://github.com/Chris97421) · [LinkedIn](https://www.linkedin.com/in/christophe-malet-0925a1145/)
