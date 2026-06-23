# L'IA au service de l'enseignement

Formation interactive sur l'intelligence artificielle destinée aux enseignants du primaire et du collège — École Privée Intégrale.

**Formateur :** Dhiya Eddine El Gabsi — 13 Juin 2025

## Aperçu

Une présentation web moderne sous forme de slideshow interactif qui couvre :

1. **Introduction à l'IA** — Définition, histoire (1950–2022), exemples concrets (Netflix, YouTube, Google Maps)
2. **Le Prompt Engineering** — Les 4 règles d'or + la formule magique (Rôle + Tâche + Contexte + Format + Ton)
3. **8 outils IA pour enseignants** (tous gratuits) :
   - [ChatGPT](https://chatgpt.com) — Assistant texte général
   - [NotebookLM](https://notebooklm.google.com) — IA sur documents personnels
   - [Gamma AI](https://gamma.app) — Présentations / Documents
   - [Canva Education](https://canva.com/education) — Création visuelle
   - [Diffit](https://diffit.me) — Différenciation pédagogique
   - [Curipod](https://curipod.com) — Présentations interactives
   - [MagicSchool AI](https://magicschool.ai) — Templates éducatifs
   - [Quizizz](https://quizizz.com) — Quiz formatifs
4. **Démos en direct** — Cas pratiques avec ChatGPT, NotebookLM, Gamma AI et Canva
5. **À retenir** — L'IA comme assistant, le prompt comme clé, outils gratuits

## Fonctionnalités

- **Mode Présentation** — Navigation au clavier (flèches gauche/droite), snap scrolling, plein écran
- **Menus latéraux** — Table des matières avec navigation rapide
- **Vidéos YouTube intégrées** — Miniatures cliquables avec overlay play
- **Animations fade-in** — Apparition progressive des slides au scroll
- **Responsive** — Adapté mobile, tablette et desktop
- **Progressive Web App (PWA)** — Installation sur écran d'accueil
- **Mode hors-ligne** — Service Worker avec cache des assets
- **Impression** — CSS print optimisé pour export papier
- **Déploiement Vercel** — Hébergé via Vercel

## Stack technique

- **HTML5** — Structure sémantique des slides
- **CSS3** — Variables CSS, Flexbox, Grid, media queries, animations
- **JavaScript (vanilla)** — Intersection Observer, navigation clavier, service worker
- **PWA** — Manifest + Service Worker pour offline
- **Déploiement** — Vercel

## Structure du projet

```
├── index.html          # Structure complète des 33 slides
├── style.css           # Styles (reset, layout, responsive, print)
├── script.js           # Interactions (scroll, keyboard nav, fade-in)
├── manifest.json       # Configuration PWA
├── sw.js               # Service Worker (cache offline)
├── assets/
│   ├── logos/          # Logo École Intégrale
│   └── svg/            # Illustrations vectorielles (7 SVG)
│       ├── brain-vs-robot.svg
│       ├── classroom.svg
│       ├── hand-raise.svg
│       ├── hero-ai.svg
│       ├── human-robot.svg
│       └── prompt-bubble.svg
└── .vercel/            # Configuration Vercel
```

## Utilisation

### Navigation

| Action | Touche / Contrôle |
|--------|------------------|
| Slide suivant | `→` ou `↓` |
| Slide précédent | `←` ou `↑` |
| Quitter le mode présentation | `Échap` |
| Menu sommaire | Bouton hamburger |
| Retour en haut | Bouton `↑` fixe |

### Mode Présentation

Le mode présentation est activé par défaut. Il permet un défilement fluide avec snap-scrolling et navigation clavier.

## Déploiement

Le projet est déployé sur Vercel via `vercel.json` (non versionné dans ce repo).

**Lien Vercel :** [https://project-2jnjo.vercel.app](https://project-2jnjo.vercel.app)

## Licence

Propriété d'École Privée Intégrale — Usage interne pour la formation des enseignants.
