<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { gsap, reducedMotion, ScrollTrigger } from '../lib/motion.js'
import { CV_URL, stats as defaultStats, typingPhrases, ui } from '../data/portfolio.js'
import { useI18n } from '../lib/i18n.js'
import { useGitHub } from '../lib/github.js'
import SvgIcon from './SvgIcon.vue'
import TerminalCard from './TerminalCard.vue'

const { t, currentLang } = useI18n()

const root = ref(null)
const typed = ref('')
const caretOn = ref(true)
const statRefs = ref([])

const { userProfile, isSynced } = useGitHub()

// Estadísticas con reactividad en vivo desde GitHub y etiquetas bilingües
const stats = computed(() => [
  { value: userProfile.publicRepos || defaultStats[0].value, label: defaultStats[0].label },
  { value: defaultStats[1].value, label: defaultStats[1].label },
  { value: userProfile.followers ?? defaultStats[2].value, label: defaultStats[2].label },
  { value: userProfile.following ?? defaultStats[3].value, label: defaultStats[3].label }
])

let timers = []
let ctx = null
let counters = []

function wait(ms) {
  return new Promise((r) => { const id = setTimeout(r, ms); timers.push(id) })
}

// Efecto de escritura del subtítulo (rotación de frases según idioma)
async function typeLoop() {
  let i = 0
  while (true) {
    const list = typingPhrases[currentLang.value] || typingPhrases.es
    const phrase = list[i % list.length]
    for (let c = 0; c <= phrase.length; c++) {
      typed.value = phrase.slice(0, c)
      await wait(52 + Math.random() * 34)
    }
    await wait(1800)
    for (let c = phrase.length; c >= 0; c--) {
      typed.value = phrase.slice(0, c)
      await wait(26)
    }
    await wait(260)
    i++
  }
}

function animateStat(el, target) {
  if (reducedMotion) { el.textContent = String(target); return }
  const obj = { v: 0 }
  counters.push(
    gsap.to(obj, {
      v: target,
      duration: 1.9,
      ease: 'power3.out',
      snap: { v: 1 },
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: () => { el.textContent = String(Math.round(obj.v)) }
    })
  )
}

onMounted(() => {
  if (reducedMotion) {
    typed.value = typingPhrases[0]
  } else {
    typeLoop()
  }

  // Contadores iniciales
  statRefs.value.forEach((el, i) => el && animateStat(el, stats.value[i].value))

  // Si las stats se actualizan en vivo después de montar, refrescar visualmente
  watch(isSynced, (synced) => {
    if (synced) {
      statRefs.value.forEach((el, i) => {
        if (el && stats.value[i]) {
          el.textContent = String(stats.value[i].value)
        }
      })
    }
  })

  if (reducedMotion) return

  // Entrada del hero con GSAP
  ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from('.hero__eyebrow', { y: 22, opacity: 0, duration: 0.7 }, 0.1)
      .from('.hero__title', { y: 34, opacity: 0, duration: 0.85 }, 0.2)
      .from('.hero__typing', { y: 24, opacity: 0, duration: 0.7 }, 0.35)
      .from('.hero__desc', { y: 22, opacity: 0, duration: 0.7 }, 0.48)
      .from('.hero__actions .btn', { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, 0.6)
      .from('.hero__stats .stat', { y: 18, opacity: 0, stagger: 0.08, duration: 0.55 }, 0.72)
      .from('.hero__term', { x: 44, opacity: 0, duration: 0.9 }, 0.4)
      .from('.hero__scroll', { opacity: 0, duration: 0.8 }, 1.2)
  }, root.value)
})

onBeforeUnmount(() => {
  timers.forEach(clearTimeout)
  counters.forEach((t) => t.kill())
  ctx?.revert()
})
</script>

<template>
  <section id="inicio" ref="root" class="hero">
    <div class="container hero__grid">
      <div class="hero__copy">
        <p class="hero__eyebrow mono">
          <span class="hero__pulse" aria-hidden="true"></span>
          {{ t(ui.available) }}
        </p>
        <h1 class="hero__title">
          {{ t(ui.greeting) }} <span class="grad-text">Víctor Morejón</span>.
        </h1>
        <p class="hero__typing">
          {{ t(ui.building) }} <span class="hero__typed mono">{{ typed }}</span><span class="hero__caret" :class="{ on: caretOn }" aria-hidden="true"></span>
        </p>
        <p class="hero__desc" v-html="t(ui.heroDesc)"></p>
        <div class="hero__actions">
          <a href="#proyectos" class="btn btn--primary">
            {{ t(ui.viewProjects) }}
            <SvgIcon name="ic-arrow-right" :size="17" />
          </a>
          <a :href="CV_URL" target="_blank" rel="noopener noreferrer" class="btn btn--ghost" :title="t(ui.viewCv)">
            <SvgIcon name="ic-file-text" :size="16" />
            {{ t(ui.viewCv) }}
          </a>
          <a href="https://github.com/ElJoker63" target="_blank" rel="noopener noreferrer" class="btn btn--ghost">
            <SvgIcon name="ic-github" :size="17" />
            GitHub
          </a>
        </div>
        <dl class="hero__stats">
          <div v-for="(s, i) in stats" :key="i" class="stat">
            <dt class="stat__label">{{ t(s.label) }}</dt>
            <dd class="stat__value"><span :ref="(el) => (statRefs[i] = el)">{{ reducedMotion ? s.value : 0 }}</span></dd>
          </div>
        </dl>
      </div>

      <div class="hero__term">
        <TerminalCard />
      </div>
    </div>

    <a href="#sobre-mi" class="hero__scroll mono" aria-label="Bajar a la siguiente sección">
      scroll
      <span class="hero__scroll-line" aria-hidden="true"></span>
    </a>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100svh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 110px;
  padding-bottom: 60px;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(32px, 5vw, 72px);
  align-items: center;
  width: 100%;
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.82rem;
  color: var(--dim);
  border: 1px solid var(--border);
  background: var(--surface);
  backdrop-filter: blur(8px);
  padding: 8px 16px;
  border-radius: 999px;
  margin-bottom: 22px;
}
.hero__pulse {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6);
  animation: pulse 2.2s infinite;
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.55) }
  70% { box-shadow: 0 0 0 9px rgba(52, 211, 153, 0) }
  100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0) }
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 6vw, 4.1rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin-bottom: 16px;
}

.hero__typing {
  font-size: clamp(1.15rem, 2.6vw, 1.5rem);
  font-weight: 400;
  color: var(--text);
  margin-bottom: 18px;
  min-height: 1.6em;
}
.hero__typed { color: var(--cyan) }
.hero__caret {
  display: inline-block;
  width: 3px; height: 1.05em;
  margin-left: 4px;
  vertical-align: text-bottom;
  background: var(--cyan);
  animation: blink 1s steps(1) infinite;
}
@keyframes blink { 50% { opacity: 0 } }

.hero__desc {
  color: var(--dim);
  max-width: 54ch;
  margin-bottom: 30px;
}
.hero__desc strong { color: var(--text); font-weight: 600 }

.hero__actions { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 40px }

.hero__stats {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: clamp(20px, 3.5vw, 44px);
  justify-content: start;
}
.stat__value {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  font-weight: 700;
  background: var(--grad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.stat__label { order: 2; font-size: 0.78rem; color: var(--dimmer); margin-top: 2px }
.stat { display: flex; flex-direction: column }

.hero__scroll {
  position: absolute;
  bottom: 26px; left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--dimmer);
  transition: color 0.3s;
}
.hero__scroll:hover { color: var(--text) }
.hero__scroll-line {
  width: 1px; height: 34px;
  background: linear-gradient(var(--violet), transparent);
  animation: scroll-hint 2s var(--ease) infinite;
  transform-origin: top;
}
@keyframes scroll-hint {
  0% { transform: scaleY(0) }
  45% { transform: scaleY(1) }
  100% { transform: scaleY(1); opacity: 0 }
}

@media (max-width: 920px) {
  .hero { padding-top: 120px; text-align: left }
  .hero__grid { grid-template-columns: 1fr }
  .hero__term { max-width: 560px }
}

@media (max-width: 560px) {
  .hero__stats { grid-template-columns: repeat(2, 1fr); width: 100% }
  .hero__scroll { display: none }
}
</style>
