<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { CV_URL, navLinks, ui } from '../data/portfolio.js'
import { useI18n } from '../lib/i18n.js'
import SvgIcon from './SvgIcon.vue'

const { isEs, isEn, toggleLang, t } = useI18n()

const scrolled = ref(false)
const menuOpen = ref(false)
const activeId = ref('inicio')
const progress = ref(0)

let removeListeners = []

function onScroll() {
  scrolled.value = window.scrollY > 24
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? Math.min(window.scrollY / max, 1) : 0
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  removeListeners.push(() => window.removeEventListener('scroll', onScroll))
  onScroll()

  // Scroll-spy: marca el link de la sección visible
  const spy = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) activeId.value = e.target.id
    },
    { rootMargin: '-40% 0px -55% 0px' }
  )
  for (const l of navLinks) {
    const el = document.getElementById(l.id)
    if (el) spy.observe(el)
  }
  removeListeners.push(() => spy.disconnect())
})

onBeforeUnmount(() => removeListeners.forEach((fn) => fn()))
</script>

<template>
  <div class="progress" :style="{ transform: `scaleX(${progress})` }" aria-hidden="true"></div>

  <header class="nav" :class="{ scrolled, open: menuOpen }">
    <div class="nav__inner container">
      <a href="#inicio" class="nav__brand" @click="closeMenu" title="Víctor Morejón (@ElJoker63)">
        <span class="nav__bracket">&lt;</span>Víctor Morejón<span class="nav__bracket">/&gt;</span>
      </a>

      <nav class="nav__links" :class="{ open: menuOpen }" aria-label="Navegación principal">
        <a
          v-for="l in navLinks"
          :key="l.id"
          :href="`#${l.id}`"
          class="nav__link"
          :class="{ active: activeId === l.id }"
          @click="closeMenu"
        >{{ t(l.label) }}</a>

        <div class="nav__mobile-row">
          <button
            type="button"
            class="nav__lang-toggle mono"
            @click="toggleLang"
            :title="isEs ? 'Switch to English' : 'Cambiar a Español'"
          >
            <span :class="{ active: isEs }">ES</span>
            <span class="nav__lang-sep">/</span>
            <span :class="{ active: isEn }">EN</span>
          </button>
          <a :href="CV_URL" target="_blank" rel="noopener noreferrer" class="btn btn--ghost nav__cta-mobile-cv" @click="closeMenu">
            <SvgIcon name="ic-file-text" :size="15" />
            {{ t(ui.viewCv) }}
          </a>
        </div>

        <a href="#contacto" class="btn btn--primary nav__cta-mobile" @click="closeMenu">{{ t(ui.letsTalk) }}</a>
      </nav>

      <div class="nav__actions">
        <!-- Conmutador de idioma ES / EN -->
        <button
          type="button"
          class="nav__lang-toggle mono"
          @click="toggleLang"
          :title="isEs ? 'Switch to English' : 'Cambiar a Español'"
          :aria-label="isEs ? 'Switch to English' : 'Cambiar a Español'"
        >
          <span :class="{ active: isEs }">ES</span>
          <span class="nav__lang-sep">/</span>
          <span :class="{ active: isEn }">EN</span>
        </button>

        <a :href="CV_URL" target="_blank" rel="noopener noreferrer" class="btn btn--ghost nav__cv" :title="t(ui.viewCv)">
          <SvgIcon name="ic-file-text" :size="15" />
          CV
        </a>
        <a href="#contacto" class="btn btn--ghost nav__cta">{{ t(ui.letsTalk) }}</a>
      </div>

      <button
        class="nav__burger"
        :aria-expanded="menuOpen"
        aria-label="Abrir o cerrar menú"
        @click="menuOpen = !menuOpen"
      >
        <SvgIcon :name="menuOpen ? 'ic-close' : 'ic-menu'" :size="22" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.progress {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 2.5px;
  background: var(--grad);
  transform-origin: 0 50%;
  transform: scaleX(0);
  z-index: 60;
}

.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 50;
  transition: background 0.4s var(--ease), border-color 0.4s var(--ease), backdrop-filter 0.4s var(--ease);
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: rgba(5, 5, 12, 0.72);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom-color: var(--border);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
}

.nav__brand {
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
}
.nav__bracket { color: var(--violet) }

.nav__links { display: flex; gap: 6px }
.nav__link {
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.9rem;
  color: var(--dim);
  transition: color 0.3s var(--ease), background 0.3s var(--ease);
}
.nav__link:hover { color: var(--text) }
.nav__link.active {
  color: var(--text);
  background: var(--surface-2);
  box-shadow: inset 0 0 0 1px var(--border);
}

.nav__actions { display: flex; align-items: center; gap: 10px }
.nav__lang-toggle {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: border-color 0.25s var(--ease), background 0.25s var(--ease);
}
.nav__lang-toggle:hover {
  border-color: rgba(167, 139, 250, 0.4);
  background: var(--surface-3);
}
.nav__lang-toggle span.active {
  color: var(--cyan);
  font-weight: 700;
  text-shadow: 0 0 10px rgba(34, 211, 238, 0.4);
}
.nav__lang-sep {
  color: var(--muted);
  opacity: 0.35;
  font-size: 0.7rem;
}
.nav__cv { padding: 9px 16px; font-size: 0.85rem; color: var(--cyan); border-color: rgba(34, 211, 238, 0.25) }
.nav__cv:hover { border-color: var(--cyan); background: rgba(34, 211, 238, 0.08) }
.nav__cta { padding: 9px 20px; font-size: 0.88rem }
.nav__cta-mobile { display: none }
.nav__mobile-row { display: none }

.nav__burger {
  display: none;
  width: 42px; height: 42px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface);
  place-items: center;
}

@media (max-width: 860px) {
  .nav__links {
    position: fixed;
    top: 68px; left: 12px; right: 12px;
    flex-direction: column;
    padding: 14px;
    gap: 4px;
    background: rgba(10, 10, 20, 0.92);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    backdrop-filter: blur(20px);
    opacity: 0;
    transform: translateY(-12px);
    pointer-events: none;
    transition: opacity 0.35s var(--ease), transform 0.35s var(--ease);
  }
  .nav__links.open { opacity: 1; transform: none; pointer-events: auto }
  .nav__link { padding: 12px 16px }
  .nav__actions { display: none }
  .nav__mobile-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-top: 8px;
    padding-top: 10px;
    border-top: 1px solid var(--border);
  }
  .nav__cta-mobile-cv {
    flex: 1;
    justify-content: center;
    padding: 10px 14px;
    font-size: 0.85rem;
  }
  .nav__cta-mobile { display: inline-flex; justify-content: center; margin-top: 6px }
  .nav__burger { display: grid }
}
</style>
