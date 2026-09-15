// Sistema de internacionalización ligero y reactivo (ES / EN) sin dependencias externas.
import { computed, ref, watch } from 'vue'

// Detecta idioma preferido del navegador: 'en' si empieza por inglés, sino 'es'
const getInitialLang = () => {
  if (typeof window !== 'undefined' && window.navigator) {
    const navLang = window.navigator.language || window.navigator.userLanguage || ''
    if (navLang.toLowerCase().startsWith('en')) {
      return 'en'
    }
  }
  return 'es'
}

export const currentLang = ref(getInitialLang())

export function setLang(lang) {
  if (lang === 'es' || lang === 'en') {
    currentLang.value = lang
  }
}

export function toggleLang() {
  currentLang.value = currentLang.value === 'es' ? 'en' : 'es'
}

const pageTitles = {
  es: 'Víctor Morejón (ElJoker63) — Backend · Infraestructura · Automatización',
  en: 'Víctor Morejón (ElJoker63) — Backend · Infrastructure · Automation'
}

// Sincroniza el atributo lang y el título del documento HTML para accesibilidad y SEO
if (typeof document !== 'undefined') {
  document.documentElement.lang = currentLang.value
  document.title = pageTitles[currentLang.value] || pageTitles.es
  watch(currentLang, (newLang) => {
    document.documentElement.lang = newLang
    document.title = pageTitles[newLang] || pageTitles.es
  })
}

/**
 * Helper para resolver valores según el idioma actual.
 * Si recibe un objeto { es: '...', en: '...' }, retorna el texto correspondiente.
 */
export function t(val) {
  if (!val) return ''
  if (typeof val === 'object') {
    return val[currentLang.value] ?? val.es ?? Object.values(val)[0] ?? ''
  }
  return val
}

export function useI18n() {
  const isEn = computed(() => currentLang.value === 'en')
  const isEs = computed(() => currentLang.value === 'es')

  return {
    currentLang,
    isEn,
    isEs,
    setLang,
    toggleLang,
    t
  }
}
