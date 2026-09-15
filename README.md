# Portafolio — ElJoker63

Portafolio personal construido con **Vue 3 + Vite**, animaciones con
[GSAP](https://gsap.com/) + ScrollTrigger y fondo animado con canvas
(red de partículas + auroras). Se despliega automáticamente en
**GitHub Pages** mediante GitHub Actions.

La versión anterior (HTML/CSS/JS vanilla) está conservada en [`legacy/`](legacy/).

## Requisitos

- Node.js 18+ (recomendado 20)

## Desarrollo local

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo → http://localhost:5173
npm run build   # build de producción → dist/
npm run preview # previsualizar el build
```

## Estructura

```
portafolio/
├── index.html                    # Entry de Vite
├── vite.config.js                # base: /portafolio/ (ruta en GitHub Pages)
├── package.json
├── .github/workflows/deploy.yml  # CI: build + deploy a GitHub Pages
├── src/
│   ├── main.js
│   ├── App.vue                   # Layout principal
│   ├── styles/base.css           # Tokens de diseño y utilidades globales
│   ├── data/portfolio.js         # Proyectos, skills, contactos y stats
│   ├── lib/motion.js             # GSAP + fallback prefers-reduced-motion
│   └── components/               # NavBar, HeroSection, TerminalCard,
│                                 # AboutSection, SkillsSection, TimelineSection,
│                                 # ProjectCard, ContactSection, FooterSection,
│                                 # BackgroundFX, SvgIcon
└── legacy/                       # Versión vanilla anterior (respaldo)
```

## Despliegue (automático)

El repo ya incluye el workflow en `.github/workflows/deploy.yml`.

1. En GitHub: **Settings → Pages → Build and deployment → Source** → elige
   **GitHub Actions** (una sola vez).
2. Haz push a `main`:

   ```bash
   git add .
   git commit -m "Portafolio v2: Vue 3 + Vite + GitHub Actions"
   git push origin main
   ```

3. El workflow compila el sitio y lo publica en
   `https://eljoker63.github.io/portafolio/`.

> Si renombras el repo, actualiza `base` en `vite.config.js`
> (por ejemplo `base: '/mi-repo/'`). Si usas un user/organización site
> (`<usuario>.github.io`), cambia `base` a `'/'`.

## Personalizar

- **Contenido**: todo está en `src/data/portfolio.js` (proyectos del timeline,
  skills, stats, contactos, enlaces de navegación).
- **Colores/tema**: variables CSS en `:root` de `src/styles/base.css`.
- **Orden del timeline**: mantenerlo cronológico (oldest → newest) según la
  API de GitHub — ver `PROMPT_AGENTE.md`.

## Notas técnicas

- Respeta `prefers-reduced-motion`: desactiva partículas animadas, GSAP y el
  efecto de escritura.
- Sin dependencias de iconos externas: los iconos son paths SVG inline en el
  componente `SvgIcon.vue`.
- El avatar y el favicon usan `https://github.com/ElJoker63.png`.
