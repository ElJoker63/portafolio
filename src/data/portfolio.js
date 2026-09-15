// Datos del portafolio de Víctor Morejón (ElJoker63).
// El timeline está ordenado cronológicamente (oldest → newest) según created_at de la API de GitHub:
// https://api.github.com/users/ElJoker63/repos?sort=created&direction=asc&per_page=100

export const AUTHOR_NAME = 'Víctor Morejón'
export const GITHUB_USER = 'ElJoker63'
export const AUTHOR_EMAIL = 'eljoker630@gmail.com'
export const CV_URL = 'https://github.com/ElJoker63/ElJoker63/raw/main/CV_Victor_Morejon.pdf'
export const ROLE_TITLE = 'Backend · Infraestructura · Automatización'

export const stats = [
  { value: 164, label: 'Repositorios' },
  { value: 177, label: 'Estrellas dadas' },
  { value: 41, label: 'Seguidores' },
  { value: 87, label: 'Siguiendo' }
]

export const typingPhrases = [
  'APIs robustas y bots útiles.',
  'infraestructura ágil con Docker.',
  'gateways para agentes de IA.',
  'automatizaciones que ahorran tiempo.',
  'herramientas open-source con impacto.'
]

export const terminalLines = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Víctor Morejón (@ElJoker63) — Backend & DevOps' },
  { type: 'cmd', text: 'cat focus.txt' },
  { type: 'out', text: 'Python · FastAPI · Docker · Redis · Qdrant · Linux' },
  { type: 'cmd', text: 'systemctl status dev-passion' },
  { type: 'ok', text: 'active (running) · 100% autodidacta · AEware Developers' }
]

export const marqueeSkills = [
  'Python', 'Docker', 'Git', 'Node.js', 'FastAPI', 'Flask', 'Django', 'Laravel',
  'AWS', 'Firebase', 'MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Qdrant', 'Android Studio'
]

export const skillGroups = [
  {
    icon: 'ic-terminal',
    title: 'Lenguajes',
    items: ['Python', 'JavaScript', 'PHP', 'Java']
  },
  {
    icon: 'ic-box',
    title: 'Frameworks',
    items: ['FastAPI', 'Flask', 'Django', 'Laravel', 'Node.js']
  },
  {
    icon: 'ic-server',
    title: 'Infraestructura',
    items: ['Docker', 'AWS', 'Firebase', 'Netlify', 'Vercel']
  },
  {
    icon: 'ic-cpu',
    title: 'Datos & IA',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Qdrant']
  }
]

export const personalInterests = [
  { icon: 'ic-terminal', title: 'Linux & Self-Hosting', desc: 'Servidores dedicados caseros, contenedores y entornos siempre listos.' },
  { icon: 'ic-smartphone', title: 'Modding Android', desc: 'Custom ROMs, flasheo seguro y exprimir las capacidades del hardware.' },
  { icon: 'ic-cpu', title: 'Agentes & IA Local', desc: 'Experimentar con LLMs locales, memoria vectorial y automatización cognitiva.' },
  { icon: 'ic-volume', title: 'Música para Focus', desc: 'Synthwave y ritmos electrónicos para concentrarse en sesiones de código.' }
]

export const timeline = [
  {
    date: 'Sep 2021',
    category: 'Presencia web',
    title: 'DataFacil',
    icon: 'ic-globe',
    stars: 2,
    role: 'Diseño y desarrollo web',
    desc: 'Sitio oficial de DataFacil, con soporte para Android y Windows Phone. Diseñado para ofrecer navegación fluida con gestión de contenidos desacoplada vía JSON.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/ElJoker63/DataFacil',
    demo: 'https://datafacil.vercel.app'
  },
  {
    date: 'Dic 2021',
    category: 'Bots de Telegram',
    title: 'PTB_Bot-Example',
    icon: 'ic-chat',
    stars: 1,
    role: 'Desarrollo backend en Python',
    desc: 'Plantillas y ejemplos prácticos de bots en Python. Nació para ahorrar tiempo a otros desarrolladores que comienzan en la creación de asistentes interactivos.',
    tags: ['Python', 'python-telegram-bot'],
    code: 'https://github.com/ElJoker63/PTB_Bot-Example'
  },
  {
    date: 'Jul 2023',
    category: 'Infraestructura de distribución',
    title: 'repo-magisk',
    icon: 'ic-box',
    stars: 3,
    role: 'Despliegue y catálogo web',
    desc: 'Repositorio y catálogo web de módulos para MRepo (Magisk) en Netlify. Facilita descubrir e instalar módulos de personalización sin complicaciones.',
    tags: ['JavaScript', 'Netlify', 'JSON'],
    code: 'https://github.com/ElJoker63/repo-magisk',
    demo: 'https://repo-magisk.netlify.app'
  },
  {
    date: 'Jun 2024',
    category: 'Librerías Python',
    title: 'pysteamcmdwrapper',
    icon: 'ic-terminal',
    stars: 0,
    role: 'Autor de librería open-source',
    desc: 'Librería Python para interactuar con SteamCMD. Automatiza descargas de servidores y juegos de Windows directamente en entornos Linux sin interfaz gráfica.',
    tags: ['Python', 'SteamCMD', 'Automation'],
    code: 'https://github.com/ElJoker63/pysteamcmdwrapper'
  },
  {
    date: 'Nov 2024',
    category: 'Apps Android',
    title: 'cambio-actual',
    icon: 'ic-smartphone',
    stars: 1,
    featured: true,
    role: 'Desarrollador Android (Kotlin/Compose)',
    desc: 'App nativa (Kotlin + Jetpack Compose) que monitoriza las tasas del mercado informal de divisas y cripto en Cuba. Funciona offline y ahorra datos móviles.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'Retrofit'],
    code: 'https://github.com/ElJoker63/cambio-actual'
  },
  {
    date: 'Dic 2024',
    category: 'Herramientas de descarga',
    title: '1fichier-dl',
    icon: 'ic-download',
    stars: 2,
    role: 'Desarrollo CLI y optimización',
    desc: 'Gestor de descargas para 1Fichier que salta temporizadores de espera y reanuda descargas, pensado para conexiones con ancho de banda inestable.',
    tags: ['Python', 'Automation', 'CLI'],
    code: 'https://github.com/ElJoker63/1fichier-dl'
  },
  {
    date: 'Feb 2025',
    category: 'Modding Android',
    title: 'MOTO-LAKE',
    icon: 'ic-refresh',
    stars: 1,
    role: 'Automatización y scripts de flasheo',
    desc: 'Script automatizado para flashear LineageOS en el Moto G7 Plus: descarga ADB, Fastboot, TWRP y Magisk guiando al usuario paso a paso de forma segura.',
    tags: ['Python', 'Android', 'Bash'],
    code: 'https://github.com/ElJoker63/MOTO-LAKE'
  },
  {
    date: 'Feb 2026',
    category: 'Automatización de escritorio',
    title: 'volume-win',
    icon: 'ic-volume',
    stars: 2,
    role: 'Desarrollo de utilidad nativa',
    desc: 'Herramienta ligera en Python para controlar el volumen maestro de Windows por consola y atajos, sin servicios pesados en segundo plano.',
    tags: ['Python', 'Windows API'],
    code: 'https://github.com/ElJoker63/volume-win'
  },
  {
    date: 'Jun 2026',
    category: 'Mensajería & bots',
    title: 'toDus-API',
    icon: 'ic-chat',
    stars: 4,
    featured: true,
    role: 'Arquitectura de librería y eventos',
    desc: 'Cliente moderno en Python para ToDus, la plataforma de mensajería cubana. Permite bots de soporte, gestión de canales, envíos multimedia y eventos en tiempo real.',
    tags: ['Python', 'PyPI', 'MkDocs', 'CI/CD'],
    code: 'https://github.com/ElJoker63/toDus-API'
  },
  {
    date: 'Jul 2026',
    category: 'Agentes de IA',
    title: 'coolify-overlord',
    icon: 'ic-bot',
    stars: 0,
    featured: true,
    role: 'Integración y skill de agente IA',
    desc: 'Skill para el agente Hermes que administra servidores y despliegues en Coolify por lenguaje natural: inspecciona contenedores, logs y despliegues sin entrar al panel.',
    tags: ['AI Agent Skill', 'REST API', 'DevOps'],
    code: 'https://github.com/ElJoker63/coolify-overlord'
  },
  {
    date: 'Jul 2026',
    category: 'Gateways de IA',
    title: 'my-gateway',
    icon: 'ic-cpu',
    stars: 3,
    featured: true,
    role: 'Diseño de gateway e infra local',
    desc: 'Gateway local entre agentes de IA y proveedores LLM. Incorpora rate-limiting, persistencia de memoria vectorial con Qdrant y caché en Redis para recortar consumo de API.',
    tags: ['FastAPI', 'Redis', 'Qdrant', 'Docker'],
    code: 'https://github.com/ElJoker63/my-gateway'
  },
  {
    date: 'Ago 2026',
    category: 'Ciberseguridad',
    title: 'zcode-skills',
    icon: 'ic-shield',
    stars: 0,
    role: 'Investigación y seguridad',
    desc: 'Colección curada de más de 870 skills de seguridad ofensiva y defensiva para ZCode: red team, threat intelligence, análisis de malware y cloud hardening.',
    tags: ['Security', 'Red Team', 'Docs'],
    code: 'https://github.com/ElJoker63/zcode-skills'
  },
  {
    date: 'Ago 2026',
    category: 'Apps Android',
    title: 'tgdown-app',
    icon: 'ic-smartphone',
    stars: 1,
    featured: true,
    role: 'Desarrollador Android full-stack',
    desc: 'Cliente Android en Jetpack Compose para administrar servidores remotos de descarga de Telegram: monitorización en vivo, gestor de archivos y detección multimedia.',
    tags: ['Kotlin', 'Jetpack Compose', 'Retrofit'],
    code: 'https://github.com/ElJoker63/tgdown-app'
  },
  {
    date: 'Sep 2026',
    category: 'Media & Desktop',
    title: 'MediaHub',
    icon: 'ic-monitor',
    stars: 2,
    featured: true,
    current: true,
    role: 'Arquitectura, UI y desarrollo',
    desc: 'Aplicación de escritorio multiplataforma con estética inspirada en Apple TV para descubrir, reproducir y descargar películas y series, con gestor de descargas integrado.',
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
    note: 'Donde respondo más rápido'
  },
  {
    icon: 'ic-github',
    name: 'GitHub',
    handle: '@ElJoker63',
    url: 'https://github.com/ElJoker63',
    note: 'Código, repos y colaboraciones'
  },
  {
    icon: 'ic-x',
    name: 'X / Twitter',
    handle: '@ElJoker630',
    url: 'https://x.com/ElJoker630',
    note: 'Actualizaciones y proyectos'
  },
  {
    icon: 'ic-camera',
    name: 'Instagram',
    handle: '@eljoker.cuba',
    url: 'https://instagram.com/eljoker.cuba',
    note: 'Fotografía y día a día'
  }
]

export const navLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'skills', label: 'Skills' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' }
]
