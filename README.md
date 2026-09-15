# Portafolio — Víctor Morejón (@ElJoker63)

Portafolio de desarrollador web y software construido con **Vue 3 + Vite**, animaciones con [GSAP](https://gsap.com/) + ScrollTrigger, sincronización de estrellas de GitHub en vivo y fondo animado en canvas (red de partículas + auroras). Desplegado automáticamente en **GitHub Pages** mediante GitHub Actions.

Sitio en vivo: **[eljoker63.github.io/portafolio](https://eljoker63.github.io/portafolio/)**

---

## Características

- **Identidad & Narrativa Humana**: Diseñado para reflejar la experiencia real de **Víctor Morejón** en backend, infraestructura, automatización y desarrollo open-source en **AEware Developers**.
- **Sincronización en Vivo con GitHub** (`src/lib/github.js`): Consulta en tiempo real las estrellas de cada repositorio y estadísticas públicas con paginación inteligente y fallback local instantáneo (sin pantallas en blanco si no hay internet o se alcanzan límites de cuota).
- **Proyectos Destacados y Cronología Completa**: Filtro interactivo para explorar los proyectos insignia o consultar el recorrido cronológico completo verificado por la API de GitHub.
- **Email con Copia Rápida**: Tarjeta de contacto con correo electrónico visible en texto plano (`eljoker630@gmail.com`) y botón de un clic para copiar al portapapeles con confirmación visual.
- **Acceso a Currículum en PDF**: Enlace directo para consultar o descargar el CV formal en el Hero y la barra de navegación.
- **Curiosidad & Aficiones**: Sección humana que destaca intereses como Linux self-hosting, modding de dispositivos Android, agentes de IA local y música para concentrarse.
- **Accesibilidad & Rendimiento**: Cumplimiento estricto con `prefers-reduced-motion`, diseño totalmente responsive y sin dependencias externas pesadas ni fuentes de emojis.

---

## Requisitos

- Node.js 18+ (recomendado Node 20)
- npm 9+

## Desarrollo local

```bash
npm install     # Instalar dependencias
npm run dev     # Servidor de desarrollo → http://localhost:5173
npm run build   # Build de producción optimizado → dist/
npm run preview # Previsualizar el bundle de producción
```

## Estructura del proyecto

```
portafolio/
├── index.html                    # Entry de Vite y metadatos SEO / OpenGraph
├── vite.config.js                # base: /portafolio/ (ruta en GitHub Pages)
├── package.json
├── .github/workflows/deploy.yml  # CI: build + deploy automático a GitHub Pages
├── README.md                     # Documentación del proyecto
├── src/
│   ├── main.js                   # Inicialización de Vue
│   ├── App.vue                   # Layout principal y halo cursor
│   ├── styles/base.css           # Tokens de diseño (:root), reset y utilidades
│   ├── data/portfolio.js         # Datos fuente: hitos, skills, contactos y fallbacks
│   ├── lib/
│   │   ├── github.js             # Servicio reactivo de sincronización con API de GitHub
│   │   └── motion.js             # GSAP, ScrollTrigger y fallback prefers-reduced-motion
│   └── components/
│       ├── BackgroundFX.vue      # Fondo canvas de partículas + auroras
│       ├── NavBar.vue            # Barra fija, spy de navegación y acceso a CV
│       ├── HeroSection.vue       # Portada, typing rotativo y stats dinámicas
│       ├── TerminalCard.vue      # Terminal flotante simulada interactiva
│       ├── AboutSection.vue      # Perfil, pilares técnicos y bloque de aficiones
│       ├── SkillsSection.vue     # Marquee infinito y stack categorizado
│       ├── TimelineSection.vue   # Timeline con filtro destacados/todos y línea scrub
│       ├── ProjectCard.vue       # Tarjeta con spotlight, rol y estrellas dinámicas
│       ├── ContactSection.vue    # Tarjeta de email con copia y redes sociales
│       ├── FooterSection.vue     # Pie de página y botón para volver arriba
│       └── SvgIcon.vue           # Iconografía SVG stroke-rounded personalizada
└── legacy/                       # Respaldo de la versión vanilla anterior
```

## Despliegue continuo

El repositorio cuenta con un flujo automatizado en `.github/workflows/deploy.yml`:

1. En GitHub: **Settings → Pages → Build and deployment → Source** → Selecciona **GitHub Actions**.
2. Cada push a la rama `main` compila el proyecto y lo publica automáticamente en `https://eljoker63.github.io/portafolio/`.

> **Nota sobre rutas**: Si renombras el repositorio o utilizas un dominio de usuario (`<usuario>.github.io`), ajusta el parámetro `base` en `vite.config.js`.

---

## Licencia

Código abierto bajo licencia MIT. Desarrollado por [Víctor Morejón (@ElJoker63)](https://github.com/ElJoker63).
