# Prompt: Portafolio de ElJoker63 — especificación completa (v2)

Este documento describe el portafolio de **ElJoker63** (GitHub: https://github.com/ElJoker63) para que otro agente/IA pueda continuar editándolo manteniendo consistencia. Cópialo completo en tu otro agente como instrucción/contexto.

> **Cambio importante (sept 2026)**: el sitio ya **no es HTML/CSS/JS vanilla** — migró a **Vue 3 + Vite** con despliegue automático vía GitHub Actions. La versión vanilla anterior quedó respaldada en `legacy/` junto con este documento original (`legacy/PROMPT_AGENTE.md`).

---

## 1. Objetivo

Portafolio de desarrollador **sofisticado y premium**, en **español**, alojado en **GitHub Pages** (`https://eljoker63.github.io/portafolio/`). Debe verse hecho a mano por un diseñador, no genérico ni "hecho con IA" (por eso: **nada de emojis** como iconografía, ningún placeholder).

Persona: ElJoker63 — desarrollador backend, infraestructura y automatización (Python, Docker, FastAPI, Android, bots, IA). Miembro de "AEware Developers". Cuba.

## 2. Stack técnico (v2)

- **Vue 3** (Composition API, `<script setup>`) + **Vite 6**. Dependencias de runtime: `vue` y `gsap` (npm, ya no CDN).
- **GSAP 3 + ScrollTrigger** para animaciones; **fallback** para `prefers-reduced-motion`: se marca `<html class="reduced">` y el CSS muestra todo estático (ver `src/lib/motion.js`). Sin GSAP, los `.reveal` usan IntersectionObserver (`.in-view`).
- **Fondo animado global** (`BackgroundFX.vue`): canvas fijo con red de partículas conectadas (interactúan con el cursor), 3 auroras degradadas con drift CSS, grid técnica con máscara radial y viñeta.
- **Tipografías** (Google Fonts): Space Grotesk (títulos), Inter (cuerpo), JetBrains Mono (labels/código/terminal).
- **Iconos**: componente `SvgIcon.vue` con paths SVG stroke-rounded (viewBox 24, `stroke-width:1.6`, caps/joins redondeados). El único con `fill` es GitHub (Octocat oficial). **Nunca emojis.**
- **Sin localStorage/sessionStorage.**

## 3. Estructura de archivos

```
portafolio/
├── index.html                    # Entry de Vite (meta, fuentes, #app)
├── vite.config.js                # base: '/portafolio/' ← ruta en GitHub Pages
├── package.json                  # vue, gsap, vite, @vitejs/plugin-vue
├── .github/workflows/deploy.yml  # CI: npm ci → build → GitHub Pages
├── README.md                     # instrucciones de desarrollo y despliegue
├── src/
│   ├── main.js                   # createApp + base.css
│   ├── App.vue                   # layout + cursor glow + reveal global (GSAP)
│   ├── styles/base.css           # tokens (:root), reset, botones, spot-card, reveal
│   ├── data/portfolio.js         # ★ TODOS los datos: timeline, skills, contactos,
│   │                             #   stats, frases del typing, líneas de terminal
│   ├── lib/motion.js             # gsap/ScrollTrigger, reducedMotion, spotlight, reveal
│   └── components/
│       ├── BackgroundFX.vue      # fondo global: partículas canvas + auroras + grid
│       ├── NavBar.vue            # nav fija, scroll-spy, menú móvil, barra de progreso
│       ├── HeroSection.vue       # hero + typing + stats contadores
│       ├── TerminalCard.vue      # terminal fake que teclea comandos
│       ├── AboutSection.vue      # avatar con anillo degradado + pilares
│       ├── SkillsSection.vue     # marquee doble (2 direcciones) + 4 categorías
│       ├── TimelineSection.vue   # timeline vertical con línea scrub
│       ├── ProjectCard.vue       # tarjeta con spotlight + estrellas + tags
│       ├── ContactSection.vue    # 4 tarjetas de contacto
│       ├── FooterSection.vue     # año dinámico + volver arriba
│       └── SvgIcon.vue           # todos los iconos (stroke-rounded)
└── legacy/                       # respaldo de la v1 vanilla
```

## 4. Sistema de diseño

Tokens en `:root` de `src/styles/base.css`:

```css
--bg: #05050a;  --bg-2: #0a0a13;
--surface: rgba(255,255,255,.04);  --surface-2: rgba(255,255,255,.07);
--border: rgba(255,255,255,.09);   --border-glow: rgba(139,92,246,.4);
--text: #f4f4f9;  --dim: #a6a6ba;  --dimmer: #66667a;
--violet: #8b5cf6;  --fuchsia: #ec4899;  --cyan: #22d3ee;  --green: #34d399;
--grad: linear-gradient(120deg, var(--cyan), var(--violet) 55%, var(--fuchsia));
--r-sm/r/r-lg: 10/16/24px;  --container: 1180px;
--sec-pad: clamp(48px, 6vw, 76px);   /* ★ NO subir: el usuario pidió menos espacio */
--ease: cubic-bezier(.16,.84,.44,1);
```

- Tema: **dark tecnológico + glassmorphism**; tarjetas `.spot-card` con spotlight radial que sigue al cursor (`--mx/--my` vía `bindSpotlights`).
- Encabezados de sección numerados con kicker mono: `// 01 · perfil`, `// 02 · arsenal`, `// 03 · trayectoria`, `// 04 · contacto`.
- Botones: `.btn--primary` (degradado, barrido de brillo al hover) y `.btn--ghost` (glass con borde).
- Radios pill en chips/badges; hover con `border-glow` violeta.
- Menú hamburguesa bajo 860px; timeline a una sola columna con línea a la izquierda bajo 760px; grids de skills/contacto a 2→1 columnas.

## 5. Iconos disponibles en `SvgIcon.vue`

`ic-terminal, ic-server, ic-bot, ic-chat, ic-cpu, ic-box, ic-globe, ic-download, ic-volume, ic-send, ic-camera, ic-x, ic-github, ic-smartphone, ic-refresh, ic-shield, ic-monitor, ic-arrow-right, ic-external, ic-chevron-up, ic-menu, ic-close, ic-star, ic-pin, ic-users`

Uso: `<SvgIcon name="ic-server" :size="20" />`. Las estrellas de los proyectos usan `ic-star` (SVG), ya no el glifo `★`.

## 6. Secciones (orden)

1. **Hero** (`#inicio`, `100svh`): eyebrow con punto verde pulsante "Disponible para nuevos proyectos"; título "Hola, soy **ElJoker63**." (grad-text animado); línea "Construyo …" con efecto typing rotando entre: "APIs y bots.", "infraestructura con Docker.", "gateways para agentes de IA.", "automatizaciones útiles.", "herramientas open-source."; descripción con mención a AEware Developers; botones "Ver proyectos" (primario) y "GitHub" (ghost); **4 stats con contador animado**: 163 Repositorios, 177 Estrellas dadas, 41 Seguidores, 87 Siguiendo. A la derecha: **TerminalCard** (ventana fake flotante que teclea `whoami`, `cat stack.txt`, `systemctl status gateway`). Abajo: indicador "scroll" animado.
2. **Sobre mí** (`#sobre-mi`): tarjeta con avatar `https://github.com/ElJoker63.png` y anillo cónico degradado girando, quote *"Focusing on Software Development, Infrastructure & Automation"*, badges Cuba + AEware Developers; 3 párrafos; 3 pilares (Backend & APIs / Infraestructura / Automatización).
3. **Skills** (`#skills`): dos filas de marquee infinito en direcciones opuestas (pausa en hover) + grid de 4 categorías: Lenguajes (Python, JavaScript, PHP, Java), Frameworks (FastAPI, Flask, Django, Laravel, Node.js), Infraestructura (Docker, AWS, Firebase, Netlify, Vercel), Datos (MongoDB, MySQL, PostgreSQL, Redis, Qdrant).
4. **Proyectos** (`#proyectos`): timeline vertical centrado, nodos numerados 01–14 (el último, MediaHub, con pulse), línea que se rellena con scroll (GSAP scrub), tarjetas alternadas izquierda/derecha entrando desde su lado. Al final: botón a `github.com/ElJoker63?tab=repositories`.
   - **Orden cronológico obligatorio (oldest→newest)** según `created_at` de la API de GitHub: `https://api.github.com/users/ElJoker63/repos?sort=created&direction=asc&per_page=100`. Si se agregan/quitan proyectos, re-consultar la API y reordenar `src/data/portfolio.js`. Forks excluidos salvo `toDus-API` (pinned, README propio). Se excluye ruido (repos sin descripción ni nombre autoexplicativo).
   - Los 14 hitos actuales están en `src/data/portfolio.js` (`timeline`), con fecha, categoría, estrellas, tags, descripción y links (DataFacil, PTB_Bot-Example, repo-magisk, pysteamcmdwrapper, cambio-actual, 1fichier-dl, MOTO-LAKE, volume-win, toDus-API, coolify-overlord, my-gateway, zcode-skills, tgdown-app, MediaHub).
5. **Contacto** (`#contacto`): "¿Construimos algo juntos?" + **4 tarjetas sin email**: Telegram (@ElJoker63), Instagram (@eljoker.cuba), X/Twitter (@ElJoker630), GitHub (@ElJoker63).
6. **Footer**: `© {año} ElJoker63 — Hecho con Vue 3, Vite y demasiado café.` + botón volver arriba.

## 7. Animaciones

- `src/lib/motion.js` centraliza: `reducedMotion`, registro de ScrollTrigger, `bindSpotlights()` (spotlight en `.spot-card`), `initRevealFallback()` (IntersectionObserver → `.in-view`).
- Hero: timeline de entrada GSAP secuenciado; typing con setTimeout (sin librería); contadores con `gsap.to` + `snap` disparados por ScrollTrigger.
- `.reveal` globales: `gsap.from(…, y:28, opacity:0)` con trigger `top 86%` (en `App.vue`).
- Timeline: línea `scaleY` scrub + items `x: ±56`.
- Auroras: drift CSS continuo; partículas canvas con rAF (un frame estático si reduced-motion).
- Cursor glow global: halo degradado siguiendo el puntero (solo `hover:hover and pointer:fine`).
- Todo se desactiva con `prefers-reduced-motion` (clase `html.reduced`).

## 8. Restricciones a respetar

- **Nunca emojis** como iconografía (pedido explícito). Usar `SvgIcon`.
- **Sin email** en contacto (quitado a pedido del usuario; si lo vuelve a pedir, preguntar primero).
- **El padding entre secciones (`--sec-pad: clamp(48px, 6vw, 76px)`) no debe subirse** — el usuario ya se quejó dos veces de exceso de espacio vertical.
- Timeline **estrictamente cronológico** verificado vía API de GitHub (nunca "a ojo").
- Contenido en **español**.
- Mantener `prefers-reduced-motion`, `alt` en imágenes, `aria-label` en botones icon-only.
- El sitio se despliega con GitHub Actions: **no** subir `dist/` ni `node_modules/` al repo (`.gitignore` lo cubre).

## 9. Despliegue

Workflow `.github/workflows/deploy.yml` (push a `main` → Node 20 → `npm ci` → `npm run build` → `actions/upload-pages-artifact` → `deploy-pages`). Requisito único en GitHub: **Settings → Pages → Source: GitHub Actions**. La base de Vite es `/portafolio/` (cambiarla en `vite.config.js` si el repo cambia de nombre o es `<usuario>.github.io`).

---

**Instrucción final para el otro agente**: ante cambios (proyectos, colores, secciones), edita sobre lo existente respetando este sistema (tokens, `SvgIcon`, datos en `portfolio.js`, animación vía `motion.js`, timeline cronológico verificado). No reescribas el sitio desde cero ni vuelvas al stack vanilla de `legacy/`.
