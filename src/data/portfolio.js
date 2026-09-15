// Datos del portafolio bilingüe (Español / Inglés) de Víctor Morejón (ElJoker63).
// El timeline está ordenado cronológicamente (oldest → newest) según created_at de la API de GitHub:
// https://api.github.com/users/ElJoker63/repos?sort=created&direction=asc&per_page=100

export const AUTHOR_NAME = 'Víctor Morejón'
export const GITHUB_USER = 'ElJoker63'
export const AUTHOR_EMAIL = 'eljoker630@gmail.com'
export const CV_URL = 'https://github.com/ElJoker63/ElJoker63/raw/main/CV_Victor_Morejon.pdf'

export const ROLE_TITLE = {
  es: 'Backend · Infraestructura · Automatización',
  en: 'Backend · Infrastructure · Automation'
}

export const stats = [
  { value: 164, label: { es: 'Repositorios', en: 'Repositories' } },
  { value: 177, label: { es: 'Estrellas dadas', en: 'Stars given' } },
  { value: 41, label: { es: 'Seguidores', en: 'Followers' } },
  { value: 87, label: { es: 'Siguiendo', en: 'Following' } }
]

export const typingPhrases = {
  es: [
    'APIs robustas y bots útiles.',
    'infraestructura ágil con Docker.',
    'gateways para agentes de IA.',
    'automatizaciones que ahorran tiempo.',
    'herramientas open-source con impacto.'
  ],
  en: [
    'robust APIs & practical bots.',
    'agile infrastructure with Docker.',
    'smart gateways for AI agents.',
    'automations that save valuable time.',
    'open-source tools with real impact.'
  ]
}

export const terminalLines = {
  es: [
    { type: 'cmd', text: 'whoami' },
    { type: 'out', text: 'Víctor Morejón (@ElJoker63) — Backend & DevOps' },
    { type: 'cmd', text: 'cat focus.txt' },
    { type: 'out', text: 'Python · FastAPI · Docker · Redis · Qdrant · Linux' },
    { type: 'cmd', text: 'systemctl status dev-passion' },
    { type: 'ok', text: 'active (running) · backend & infra · AEware Developers' }
  ],
  en: [
    { type: 'cmd', text: 'whoami' },
    { type: 'out', text: 'Víctor Morejón (@ElJoker63) — Backend & DevOps' },
    { type: 'cmd', text: 'cat focus.txt' },
    { type: 'out', text: 'Python · FastAPI · Docker · Redis · Qdrant · Linux' },
    { type: 'cmd', text: 'systemctl status dev-passion' },
    { type: 'ok', text: 'active (running) · backend & infra · AEware Developers' }
  ]
}

export const marqueeSkills = [
  'Python', 'Docker', 'Git', 'Node.js', 'FastAPI', 'Flask', 'Django', 'Laravel',
  'AWS', 'Firebase', 'MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Qdrant', 'Android Studio'
]

export const skillGroups = [
  {
    icon: 'ic-terminal',
    title: { es: 'Lenguajes', en: 'Languages' },
    items: ['Python', 'JavaScript', 'PHP', 'Java']
  },
  {
    icon: 'ic-box',
    title: { es: 'Frameworks', en: 'Frameworks' },
    items: ['FastAPI', 'Flask', 'Django', 'Laravel', 'Node.js']
  },
  {
    icon: 'ic-server',
    title: { es: 'Infraestructura', en: 'Infrastructure' },
    items: ['Docker', 'AWS', 'Firebase', 'Netlify', 'Vercel']
  },
  {
    icon: 'ic-cpu',
    title: { es: 'Datos & IA', en: 'Data & AI' },
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Qdrant']
  }
]

export const personalInterests = [
  {
    icon: 'ic-terminal',
    title: { es: 'Linux & Self-Hosting', en: 'Linux & Self-Hosting' },
    desc: {
      es: 'Servidores dedicados caseros, contenedores y entornos siempre listos.',
      en: 'Home dedicated servers, containers, and always-ready environments.'
    }
  },
  {
    icon: 'ic-smartphone',
    title: { es: 'Modding Android', en: 'Android Modding' },
    desc: {
      es: 'Custom ROMs, flasheo seguro y exprimir las capacidades del hardware.',
      en: 'Custom ROMs, safe flashing, and squeezing hardware capabilities.'
    }
  },
  {
    icon: 'ic-cpu',
    title: { es: 'Agentes & IA Local', en: 'AI Agents & Local LLMs' },
    desc: {
      es: 'Experimentar con LLMs locales, memoria vectorial y automatización cognitiva.',
      en: 'Experimenting with local LLMs, vector memory, and cognitive workflows.'
    }
  },
  {
    icon: 'ic-volume',
    title: { es: 'Música para Focus', en: 'Music for Focus' },
    desc: {
      es: 'Synthwave y ritmos electrónicos para concentrarse en sesiones de código.',
      en: 'Synthwave and electronic rhythms to get in the zone during coding.'
    }
  }
]

export const timeline = [
  {
    date: { es: 'Sep 2021', en: 'Sep 2021' },
    category: { es: 'Presencia web', en: 'Web Presence' },
    title: 'DataFacil',
    icon: 'ic-globe',
    stars: 2,
    role: { es: 'Diseño y desarrollo web', en: 'Web design and development' },
    desc: {
      es: 'Sitio oficial de DataFacil, con soporte para Android y Windows Phone. Diseñado para ofrecer navegación fluida con gestión de contenidos desacoplada vía JSON.',
      en: 'Official website for DataFacil, supporting Android and Windows Phone. Built for fluid browsing with decoupled JSON-driven content management.'
    },
    tags: ['HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/ElJoker63/DataFacil',
    demo: 'https://datafacil.vercel.app'
  },
  {
    date: { es: 'Dic 2021', en: 'Dec 2021' },
    category: { es: 'Bots de Telegram', en: 'Telegram Bots' },
    title: 'PTB_Bot-Example',
    icon: 'ic-chat',
    stars: 1,
    role: { es: 'Desarrollo backend en Python', en: 'Python backend development' },
    desc: {
      es: 'Plantillas y ejemplos prácticos de bots en Python. Nació para ahorrar tiempo a otros desarrolladores que comienzan en la creación de asistentes interactivos.',
      en: 'Practical bot templates in Python. Created to save setup time for developers building interactive assistant bots.'
    },
    tags: ['Python', 'python-telegram-bot'],
    code: 'https://github.com/ElJoker63/PTB_Bot-Example'
  },
  {
    date: { es: 'Jul 2023', en: 'Jul 2023' },
    category: { es: 'Infraestructura de distribución', en: 'Distribution Infrastructure' },
    title: 'repo-magisk',
    icon: 'ic-box',
    stars: 3,
    role: { es: 'Despliegue y catálogo web', en: 'Deployment & web catalog' },
    desc: {
      es: 'Repositorio y catálogo web de módulos para MRepo (Magisk) en Netlify. Facilita descubrir e instalar módulos de personalización sin complicaciones.',
      en: 'Repository and web catalog for MRepo (Magisk modules) deployed on Netlify. Simplifies discovering and installing Android tweaks.'
    },
    tags: ['JavaScript', 'Netlify', 'JSON'],
    code: 'https://github.com/ElJoker63/repo-magisk',
    demo: 'https://repo-magisk.netlify.app'
  },
  {
    date: { es: 'Jun 2024', en: 'Jun 2024' },
    category: { es: 'Librerías Python', en: 'Python Libraries' },
    title: 'pysteamcmdwrapper',
    icon: 'ic-terminal',
    stars: 0,
    role: { es: 'Autor de librería open-source', en: 'Open-source library author' },
    desc: {
      es: 'Librería Python para interactuar con SteamCMD. Automatiza descargas de servidores y juegos de Windows directamente en entornos Linux sin interfaz gráfica.',
      en: 'Python library wrapper for SteamCMD. Automates dedicated server and game downloads on headless Linux environments.'
    },
    tags: ['Python', 'SteamCMD', 'Automation'],
    code: 'https://github.com/ElJoker63/pysteamcmdwrapper'
  },
  {
    date: { es: 'Nov 2024', en: 'Nov 2024' },
    category: { es: 'Apps Android', en: 'Android Apps' },
    title: 'cambio-actual',
    icon: 'ic-smartphone',
    stars: 1,
    featured: true,
    role: { es: 'Desarrollador Android (Kotlin/Compose)', en: 'Android Developer (Kotlin/Compose)' },
    desc: {
      es: 'App nativa (Kotlin + Jetpack Compose) que monitoriza las tasas del mercado informal de divisas y cripto en Cuba. Funciona offline y ahorra datos móviles.',
      en: 'Native Android app (Kotlin + Jetpack Compose) tracking informal currency and crypto exchange rates in Cuba. Built with offline caching to save mobile data.'
    },
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'Retrofit'],
    code: 'https://github.com/ElJoker63/cambio-actual'
  },
  {
    date: { es: 'Dic 2024', en: 'Dec 2024' },
    category: { es: 'Herramientas de descarga', en: 'Download Utilities' },
    title: '1fichier-dl',
    icon: 'ic-download',
    stars: 2,
    role: { es: 'Desarrollo CLI y optimización', en: 'CLI development & optimization' },
    desc: {
      es: 'Gestor de descargas para 1Fichier que salta temporizadores de espera y reanuda descargas, pensado para conexiones con ancho de banda inestable.',
      en: 'CLI downloader for 1Fichier that bypasses wait times and supports resumed downloads on unstable high-latency connections.'
    },
    tags: ['Python', 'Automation', 'CLI'],
    code: 'https://github.com/ElJoker63/1fichier-dl'
  },
  {
    date: { es: 'Feb 2025', en: 'Feb 2025' },
    category: { es: 'Modding Android', en: 'Android Modding' },
    title: 'MOTO-LAKE',
    icon: 'ic-refresh',
    stars: 1,
    role: { es: 'Automatización y scripts de flasheo', en: 'Flashing scripts & automation' },
    desc: {
      es: 'Script automatizado para flashear LineageOS en el Moto G7 Plus: descarga ADB, Fastboot, TWRP y Magisk guiando al usuario paso a paso de forma segura.',
      en: 'Automated script to flash LineageOS on Moto G7 Plus: downloads ADB, Fastboot, TWRP, and Magisk, guiding users step-by-step safely.'
    },
    tags: ['Python', 'Android', 'Bash'],
    code: 'https://github.com/ElJoker63/MOTO-LAKE'
  },
  {
    date: { es: 'Feb 2026', en: 'Feb 2026' },
    category: { es: 'Automatización de escritorio', en: 'Desktop Automation' },
    title: 'volume-win',
    icon: 'ic-volume',
    stars: 2,
    role: { es: 'Desarrollo de utilidad nativa', en: 'Native utility developer' },
    desc: {
      es: 'Herramienta ligera en Python para controlar el volumen maestro de Windows por consola y atajos, sin servicios pesados en segundo plano.',
      en: 'Lightweight Python utility to control master Windows system volume via console and hotkeys without bloated background processes.'
    },
    tags: ['Python', 'Windows API'],
    code: 'https://github.com/ElJoker63/volume-win'
  },
  {
    date: { es: 'Jun 2026', en: 'Jun 2026' },
    category: { es: 'Mensajería & bots', en: 'Messaging & Bots' },
    title: 'toDus-API',
    icon: 'ic-chat',
    stars: 4,
    featured: true,
    role: { es: 'Arquitectura de librería y eventos', en: 'Library architecture & event engine' },
    desc: {
      es: 'Cliente moderno en Python para ToDus, la plataforma de mensajería cubana. Permite bots de soporte, gestión de canales, envíos multimedia y eventos en tiempo real.',
      en: 'Modern event-driven Python client for ToDus, Cuba’s national messaging network. Powers support bots, channel management, media uploads, and real-time events.'
    },
    tags: ['Python', 'PyPI', 'MkDocs', 'CI/CD'],
    code: 'https://github.com/ElJoker63/toDus-API'
  },
  {
    date: { es: 'Jul 2026', en: 'Jul 2026' },
    category: { es: 'Agentes de IA', en: 'AI Agents' },
    title: 'coolify-overlord',
    icon: 'ic-bot',
    stars: 0,
    featured: true,
    role: { es: 'Integración y skill de agente IA', en: 'AI agent skill integration' },
    desc: {
      es: 'Skill para el agente Hermes que administra servidores y despliegues en Coolify por lenguaje natural: inspecciona contenedores, logs y despliegues sin entrar al panel.',
      en: 'Skill for the Hermes AI agent that manages Coolify self-hosted deployments using natural language: monitors containers, inspects logs, and handles deploys.'
    },
    tags: ['AI Agent Skill', 'REST API', 'DevOps'],
    code: 'https://github.com/ElJoker63/coolify-overlord'
  },
  {
    date: { es: 'Jul 2026', en: 'Jul 2026' },
    category: { es: 'Gateways de IA', en: 'AI Gateways' },
    title: 'my-gateway',
    icon: 'ic-cpu',
    stars: 3,
    featured: true,
    role: { es: 'Diseño de gateway e infra local', en: 'Gateway design & local infra' },
    desc: {
      es: 'Gateway local entre agentes de IA y proveedores LLM. Incorpora rate-limiting, persistencia de memoria vectorial con Qdrant y caché en Redis para recortar consumo de API.',
      en: 'Local intelligent gateway between AI agents and LLM providers. Features rate-limiting, persistent vector memory with Qdrant, and Redis caching to slash API costs.'
    },
    tags: ['FastAPI', 'Redis', 'Qdrant', 'Docker'],
    code: 'https://github.com/ElJoker63/my-gateway'
  },
  {
    date: { es: 'Ago 2026', en: 'Aug 2026' },
    category: { es: 'Ciberseguridad', en: 'Cybersecurity' },
    title: 'zcode-skills',
    icon: 'ic-shield',
    stars: 0,
    role: { es: 'Investigación y seguridad', en: 'Security research & curation' },
    desc: {
      es: 'Colección curada de más de 870 skills de seguridad ofensiva y defensiva para ZCode: red team, threat intelligence, análisis de malware y cloud hardening.',
      en: 'Curated library of over 870 cybersecurity skills for ZCode: red teaming, threat intelligence, malware analysis, and cloud infrastructure hardening.'
    },
    tags: ['Security', 'Red Team', 'Docs'],
    code: 'https://github.com/ElJoker63/zcode-skills'
  },
  {
    date: { es: 'Ago 2026', en: 'Aug 2026' },
    category: { es: 'Apps Android', en: 'Android Apps' },
    title: 'tgdown-app',
    icon: 'ic-smartphone',
    stars: 1,
    featured: true,
    role: { es: 'Desarrollador Android full-stack', en: 'Full-stack Android developer' },
    desc: {
      es: 'Cliente Android en Jetpack Compose para administrar servidores remotos de descarga de Telegram: monitorización en vivo, gestor de archivos y detección multimedia.',
      en: 'Modern Android client in Jetpack Compose to manage a remote Telegram download server: live progress dashboard, remote file explorer, and media detection.'
    },
    tags: ['Kotlin', 'Jetpack Compose', 'Retrofit'],
    code: 'https://github.com/ElJoker63/tgdown-app'
  },
  {
    date: { es: 'Sep 2026', en: 'Sep 2026' },
    category: { es: 'Media & Desktop', en: 'Media & Desktop' },
    title: 'MediaHub',
    icon: 'ic-monitor',
    stars: 2,
    featured: true,
    current: true,
    role: { es: 'Arquitectura, UI y desarrollo', en: 'Architecture, UI & engineering' },
    desc: {
      es: 'Aplicación de escritorio multiplataforma con estética inspirada en Apple TV para descubrir, reproducir y descargar películas y series, con gestor de descargas integrado.',
      en: 'Cross-platform desktop application featuring an Apple TV-inspired dark UI to browse, stream, and download movies and TV shows, with a built-in download engine.'
    },
    tags: ['Desktop', 'Cross-platform', 'UI/UX'],
    code: 'https://github.com/ElJoker63/MediaHub'
  }
]

export const contacts = [
  {
    icon: 'ic-send',
    name: 'Telegram',
    handle: '@ElJoker63',
    url: 'https://t.me/ElJoker63',
    note: {
      es: 'Donde respondo más rápido',
      en: 'Fastest way to reach me'
    }
  },
  {
    icon: 'ic-github',
    name: 'GitHub',
    handle: '@ElJoker63',
    url: 'https://github.com/ElJoker63',
    note: {
      es: 'Código, repos y colaboraciones',
      en: 'Code, repos & open source'
    }
  },
  {
    icon: 'ic-x',
    name: 'X / Twitter',
    handle: '@ElJoker630',
    url: 'https://x.com/ElJoker630',
    note: {
      es: 'Actualizaciones y proyectos',
      en: 'Updates and tech thoughts'
    }
  },
  {
    icon: 'ic-camera',
    name: 'Instagram',
    handle: '@eljoker.cuba',
    url: 'https://instagram.com/eljoker.cuba',
    note: {
      es: 'Fotografía y día a día',
      en: 'Photography and life'
    }
  }
]

export const navLinks = [
  { id: 'inicio', label: { es: 'Inicio', en: 'Home' } },
  { id: 'sobre-mi', label: { es: 'Sobre mí', en: 'About' } },
  { id: 'skills', label: { es: 'Skills', en: 'Skills' } },
  { id: 'proyectos', label: { es: 'Proyectos', en: 'Projects' } },
  { id: 'contacto', label: { es: 'Contacto', en: 'Contact' } }
]

export const ui = {
  available: {
    es: 'Disponible para nuevos proyectos & colaboraciones',
    en: 'Available for new projects & collaborations'
  },
  greeting: {
    es: 'Hola, soy',
    en: 'Hi, I am'
  },
  building: {
    es: 'Construyo',
    en: 'Building'
  },
  heroDesc: {
    es: 'Desarrollador de software enfocado en backend, infraestructura y automatización. En internet me conocen como <strong>ElJoker63</strong> y formo parte de <strong>AEware Developers</strong>. Me apasiona crear herramientas útiles que resuelven problemas concretos — con código limpio, alta resiliencia y cero rodeos.',
    en: 'Software engineer focused on backend, infrastructure, and automation. Known online as <strong>ElJoker63</strong> and member of <strong>AEware Developers</strong>. I love building practical tools that solve real problems — with clean code, high resilience, and zero fluff.'
  },
  viewProjects: {
    es: 'Ver proyectos',
    en: 'View projects'
  },
  viewCv: {
    es: 'Ver CV',
    en: 'View CV'
  },
  letsTalk: {
    es: 'Hablemos',
    en: "Let's talk"
  },
  aboutKicker: {
    es: '// 01 · perfil',
    en: '// 01 · profile'
  },
  aboutTitle: {
    es: 'Sobre mí',
    en: 'About me'
  },
  aboutLead: {
    es: 'Backend, infraestructura y automatización · De Cuba, actualmente en EE. UU.',
    en: 'Backend, infrastructure & automation · From Cuba, currently based in the US'
  },
  aboutQuote: {
    es: '«Focusing on Software Development, Infrastructure & Automation»',
    en: '«Focusing on Software Development, Infrastructure & Automation»'
  },
  aboutBioP1: {
    es: '¡Hola! Soy <strong>Víctor Morejón</strong> (en GitHub y la comunidad dev conocido como <strong>ElJoker63</strong>). Soy desarrollador de software de origen cubano, actualmente radicado en <strong>Estados Unidos</strong>, especializado en <strong>backend, infraestructura y automatización</strong>.',
    en: 'Hi! I am <strong>Víctor Morejón</strong> (known on GitHub and across dev communities as <strong>ElJoker63</strong>). I am a software engineer originally from Cuba, currently based in the <strong>United States</strong>, specializing in <strong>backend, infrastructure, and automation</strong>.'
  },
  aboutBioP2: {
    es: 'Haber comenzado y construido mis primeras soluciones en Cuba, bajo entornos con recursos y conectividad limitados, me forjó una filosofía técnica clara: <strong>la optimización, la eficiencia y la resiliencia no son negociables</strong>. Me muevo con fluidez entre bots de alta concurrencia, APIs robustas con FastAPI y entornos auto-hospedados con Docker; lo que me apasiona es que cada solución funcione sola, sin fricción y resolviendo una necesidad real.',
    en: 'Starting out and engineering my first applications in Cuba, under constrained connectivity and hardware environments, gave me an uncompromising technical mindset: <strong>optimization, efficiency, and resilience are non-negotiable</strong>. I comfortably build high-concurrency bots, robust REST APIs with FastAPI, and containerized self-hosted stacks with Docker; what drives me is creating software that runs effortlessly and solves concrete problems.'
  },
  aboutBioP3: {
    es: 'Mi stack principal se apoya en <strong>Python, Docker, Node.js y bases de datos modernas</strong> (PostgreSQL, Redis, Qdrant), aunque también he desarrollado aplicaciones nativas Android en Kotlin y sistemas de integración para agentes de inteligencia artificial.',
    en: 'My core stack centers around <strong>Python, Docker, Node.js, and modern databases</strong> (PostgreSQL, Redis, Qdrant), alongside native Android apps in Kotlin and integration architectures for AI agents.'
  },
  aboutBioP4: {
    es: 'Formo parte de <strong>AEware Developers</strong>, donde impulsamos herramientas open-source pensadas para el uso diario. Creo en el software transparente, directo y bien construido.',
    en: 'I am part of <strong>AEware Developers</strong>, where we ship open-source tools designed for everyday utility. I believe in transparent, pragmatic, and well-crafted software.'
  },
  pillars: [
    {
      icon: 'ic-terminal',
      title: { es: 'Backend & APIs', en: 'Backend & APIs' },
      text: {
        es: 'APIs REST con FastAPI, Flask y Django. Bots y servicios en Python y Node.js.',
        en: 'RESTful APIs with FastAPI, Flask, and Django. Bots and services in Python & Node.js.'
      }
    },
    {
      icon: 'ic-server',
      title: { es: 'Infraestructura', en: 'Infrastructure' },
      text: {
        es: 'Docker, despliegue continuo y entornos self-hosted siempre disponibles.',
        en: 'Docker, continuous delivery pipelines, and reliable self-hosted environments.'
      }
    },
    {
      icon: 'ic-bot',
      title: { es: 'Automatización', en: 'Automation' },
      text: {
        es: 'Scripts, agentes de IA y herramientas que eliminan trabajo repetitivo.',
        en: 'Scripts, AI agent integrations, and tools that eliminate repetitive tasks.'
      }
    }
  ],
  interestsTitle: {
    es: '// curiosidad & aficiones',
    en: '// curiosity & interests'
  },
  skillsKicker: {
    es: '// 02 · arsenal',
    en: '// 02 · arsenal'
  },
  skillsTitle: {
    es: 'Habilidades & Tecnologías',
    en: 'Skills & Technologies'
  },
  skillsLead: {
    es: 'Herramientas, lenguajes e infraestructura que utilizo para construir soluciones en producción.',
    en: 'Languages, tools, and infrastructure I use to build production-grade solutions.'
  },
  projectsKicker: {
    es: '// 03 · trayectoria',
    en: '// 03 · journey'
  },
  projectsTitle: {
    es: 'Mi hoja de ruta como developer.',
    en: 'My developer roadmap & journey.'
  },
  projectsLead: {
    es: 'Un recorrido cronológico por los proyectos que marcaron mi evolución: desde utilidades esenciales hasta gateways de IA, aplicaciones Android nativas y clientes de mensajería.',
    en: 'A chronological journey through the milestones that defined my growth: from essential utilities to AI gateways, native Android apps, and messaging clients.'
  },
  allMilestones: {
    es: 'Todos los hitos',
    en: 'All milestones'
  },
  featuredMilestones: {
    es: '★ Proyectos destacados',
    en: '★ Featured projects'
  },
  featuredBadge: {
    es: 'Destacado',
    en: 'Featured'
  },
  roleLabel: {
    es: 'Rol:',
    en: 'Role:'
  },
  viewCode: {
    es: 'Ver código',
    en: 'View code'
  },
  demo: {
    es: 'Demo',
    en: 'Demo'
  },
  viewAllGithub: {
    es: 'Ver los {count} repositorios en GitHub',
    en: 'View all {count} repositories on GitHub'
  },
  contactKicker: {
    es: '// 04 · contacto',
    en: '// 04 · contact'
  },
  contactTitle: {
    es: '¿Construimos algo juntos?',
    en: "Let's build something together?"
  },
  contactLead: {
    es: '¿Tienes una idea en mente, buscas colaborar en proyectos open-source o quieres charlar de código? Escríbeme por email o por cualquiera de estos canales: suelo responder con rapidez.',
    en: 'Have an idea, want to collaborate on open-source, or just chat about architecture? Reach out via email or any of these channels: I usually reply quickly.'
  },
  emailDirectLabel: {
    es: 'Correo electrónico',
    en: 'Email address'
  },
  copyEmailBtn: {
    es: 'Copiar email',
    en: 'Copy email'
  },
  copiedEmailBtn: {
    es: '¡Email copiado!',
    en: 'Email copied!'
  },
  sendEmailBtn: {
    es: 'Enviar mensaje',
    en: 'Send email'
  },
  footerCopy: {
    es: '© {year} Víctor Morejón (ElJoker63) — Hecho con Vue 3, Vite y café.',
    en: '© {year} Víctor Morejón (ElJoker63) — Built with Vue 3, Vite & coffee.'
  },
  backToTop: {
    es: 'Volver arriba',
    en: 'Back to top'
  }
}
