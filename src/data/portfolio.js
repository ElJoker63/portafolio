// Datos del portafolio. El timeline está ordenado cronológicamente (oldest → newest)
// según created_at de la API de GitHub. Si se agregan/quitan proyectos, re-consultar:
// https://api.github.com/users/ElJoker63/repos?sort=created&direction=asc&per_page=100

export const GITHUB_USER = 'ElJoker63'

export const stats = [
  { value: 163, label: 'Repositorios' },
  { value: 177, label: 'Estrellas dadas' },
  { value: 41, label: 'Seguidores' },
  { value: 87, label: 'Siguiendo' }
]

export const typingPhrases = [
  'APIs y bots.',
  'infraestructura con Docker.',
  'gateways para agentes de IA.',
  'automatizaciones útiles.',
  'herramientas open-source.'
]

export const terminalLines = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'backend · infraestructura · automatización' },
  { type: 'cmd', text: 'cat stack.txt' },
  { type: 'out', text: 'Python — FastAPI — Docker — Redis — Qdrant' },
  { type: 'cmd', text: 'systemctl status gateway' },
  { type: 'ok', text: 'my-gateway.service — activo · AEware Developers' }
]

export const marqueeSkills = [
  'Python', 'Docker', 'Git', 'Node.js', 'Flask', 'Django', 'Laravel', 'AWS',
  'Firebase', 'MongoDB', 'MySQL', 'PostgreSQL', 'Android Studio', 'FastAPI', 'Redis'
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
    title: 'Datos',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Qdrant']
  }
]

export const timeline = [
  {
    date: 'Sep 2021',
    category: 'Presencia web',
    title: 'DataFacil',
    icon: 'ic-globe',
    stars: 2,
    desc: 'Sitio web oficial de DataFacil, con versiones para Android y Windows Phone. Interfaz web con gestión de contenido dinámico vía JSON.',
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
    desc: 'Colección de varios bots de Telegram hechos en Python, pensados como ejemplos reutilizables para nuevos proyectos.',
    tags: ['Python', 'python-telegram-bot'],
    code: 'https://github.com/ElJoker63/PTB_Bot-Example'
  },
  {
    date: 'Jul 2023',
    category: 'Infraestructura de distribución',
    title: 'repo-magisk',
    icon: 'ic-box',
    stars: 3,
    desc: 'Repositorio de módulos para MRepo (gestor de módulos Magisk), desplegado en Netlify. Permite instalar y actualizar módulos fácilmente desde una interfaz web.',
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
    desc: 'Librería en Python para trabajar con SteamCMD, con soporte para instalarlo en Linux y descargar juegos de Windows.',
    tags: ['Python', 'SteamCMD'],
    code: 'https://github.com/ElJoker63/pysteamcmdwrapper'
  },
  {
    date: 'Nov 2024',
    category: 'Apps Android',
    title: 'cambio-actual',
    icon: 'ic-smartphone',
    stars: 1,
    desc: 'App Android (Kotlin + Jetpack Compose) que muestra en tiempo real el cambio informal de divisas en Cuba y precios de criptomonedas, con gráficas históricas, conversor y un mercado integrado de compra/venta.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'Retrofit'],
    code: 'https://github.com/ElJoker63/cambio-actual'
  },
  {
    date: 'Dic 2024',
    category: 'Herramientas de descarga',
    title: '1fichier-dl',
    icon: 'ic-download',
    stars: 2,
    desc: 'Gestor de descargas para 1Fichier que ayuda a evitar las restricciones de tiempo del servicio, con una interfaz simple y ligera.',
    tags: ['Python', 'Unlicense'],
    code: 'https://github.com/ElJoker63/1fichier-dl'
  },
  {
    date: 'Feb 2025',
    category: 'Modding Android',
    title: 'MOTO-LAKE',
    icon: 'ic-refresh',
    stars: 1,
    desc: 'Herramienta que automatiza la instalación y actualización de LineageOS en el Moto G7 Plus (Lake): descarga ADB, Fastboot, TWRP y Magisk, y flashea el dispositivo desde consola.',
    tags: ['Python', 'MIT'],
    code: 'https://github.com/ElJoker63/MOTO-LAKE'
  },
  {
    date: 'Feb 2026',
    category: 'Automatización de escritorio',
    title: 'volume-win',
    icon: 'ic-volume',
    stars: 2,
    desc: 'Utilidad ligera en Python para controlar el volumen del sistema en Windows de forma rápida y sencilla.',
    tags: ['Python', 'Windows'],
    code: 'https://github.com/ElJoker63/volume-win'
  },
  {
    date: 'Jun 2026',
    category: 'Mensajería & bots',
    title: 'toDus-API',
    icon: 'ic-chat',
    stars: 4,
    desc: 'Cliente en Python para ToDus, la plataforma de mensajería de Cuba. Permite crear bots interactivos, gestionar grupos y canales, enviar multimedia y publicar historias con una interfaz moderna orientada a eventos.',
    tags: ['Python', 'PyPI', 'MkDocs', 'CI/CD'],
    code: 'https://github.com/ElJoker63/toDus-API'
  },
  {
    date: 'Jul 2026',
    category: 'Agentes de IA',
    title: 'coolify-overlord',
    icon: 'ic-bot',
    stars: 0,
    desc: 'Skill para el agente de IA Hermes que permite gestionar Coolify (PaaS self-hosted) por lenguaje natural: desplegar, monitorear y administrar apps, servicios y servidores.',
    tags: ['AI Agent Skill', 'REST API', 'MIT'],
    code: 'https://github.com/ElJoker63/coolify-overlord'
  },
  {
    date: 'Jul 2026',
    category: 'Gateways de IA',
    title: 'my-gateway',
    icon: 'ic-cpu',
    stars: 3,
    desc: 'Gateway local inteligente entre agentes de IA y proveedores LLM. Gestiona consumo de API, aplica rate-limiting, mantiene memoria vectorial persistente y enriquece las peticiones con contexto del proyecto.',
    tags: ['FastAPI', 'Redis', 'Qdrant', 'Docker'],
    code: 'https://github.com/ElJoker63/my-gateway'
  },
  {
    date: 'Ago 2026',
    category: 'Ciberseguridad',
    title: 'zcode-skills',
    icon: 'ic-shield',
    stars: 0,
    desc: 'Colección de más de 870 skills de ciberseguridad para ZCode: red team, blue team, threat intelligence, análisis de malware, cloud security y cumplimiento normativo.',
    tags: ['Security', 'Red Team', 'Docs'],
    code: 'https://github.com/ElJoker63/zcode-skills'
  },
  {
    date: 'Ago 2026',
    category: 'Apps Android',
    title: 'tgdown-app',
    icon: 'ic-smartphone',
    stars: 1,
    desc: 'Cliente nativo Android (Jetpack Compose) para gestionar remotamente un backend de descargas de Telegram: dashboard en tiempo real, explorador de archivos remoto y detección de multimedia.',
    tags: ['Kotlin', 'Jetpack Compose', 'Retrofit'],
    code: 'https://github.com/ElJoker63/tgdown-app'
  },
  {
    date: 'Sep 2026',
    category: 'Media',
    title: 'MediaHub',
    icon: 'ic-monitor',
    stars: 1,
    current: true,
    desc: 'Aplicación de escritorio multiplataforma para explorar, reproducir y descargar series y películas, con una interfaz oscura inspirada en Apple TV y gestor de descargas integrado.',
    tags: ['Desktop', 'Cross-platform'],
    code: 'https://github.com/ElJoker63/MediaHub'
  }
]

export const contacts = [
  {
    icon: 'ic-send',
    name: 'Telegram',
    handle: '@ElJoker63',
    url: 'https://t.me/ElJoker63'
  },
  {
    icon: 'ic-camera',
    name: 'Instagram',
    handle: '@eljoker.cuba',
    url: 'https://instagram.com/eljoker.cuba'
  },
  {
    icon: 'ic-x',
    name: 'X / Twitter',
    handle: '@ElJoker630',
    url: 'https://x.com/ElJoker630'
  },
  {
    icon: 'ic-github',
    name: 'GitHub',
    handle: '@ElJoker63',
    url: 'https://github.com/ElJoker63'
  }
]

export const navLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'skills', label: 'Skills' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' }
]
