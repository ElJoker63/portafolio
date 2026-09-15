<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap, reducedMotion, ScrollTrigger } from '../lib/motion.js'
import { timeline, ui } from '../data/portfolio.js'
import { useI18n } from '../lib/i18n.js'
import { useGitHub } from '../lib/github.js'
import SvgIcon from './SvgIcon.vue'
import ProjectCard from './ProjectCard.vue'

const { t } = useI18n()
const root = ref(null)
const lineFill = ref(null)
const filterMode = ref('all') // 'all' | 'featured'

const { userProfile } = useGitHub()
const totalRepos = computed(() => userProfile.publicRepos || 164)
let ctx = null

function pad(n) { return String(n + 1).padStart(2, '0') }

const displayedProjects = computed(() => {
  if (filterMode.value === 'featured') {
    return timeline.filter((p) => p.featured)
  }
  return timeline
})

function setFilter(mode) {
  filterMode.value = mode
  nextTick(() => {
    ScrollTrigger.refresh()
  })
}

onMounted(() => {
  if (reducedMotion) {
    if (lineFill.value) lineFill.value.style.transform = 'scaleY(1)'
    return
  }
  ctx = gsap.context(() => {
    // La línea central se "dibuja" con el scroll
    gsap.fromTo(
      lineFill.value,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top 62%',
          end: 'bottom 55%',
          scrub: 0.6
        }
      }
    )

    // Cada hito entra deslizándose desde su lado
    gsap.utils.toArray('.timeline__item').forEach((item) => {
      const fromX = item.classList.contains('timeline__item--right') ? 56 : -56
      gsap.from(item, {
        scrollTrigger: { trigger: item, start: 'top 84%' },
        x: fromX, opacity: 0, duration: 0.85, ease: 'power3.out'
      })
    })
  }, root.value)
})

onBeforeUnmount(() => ctx?.revert())
</script>

<template>
  <section id="proyectos" ref="root" class="section">
    <div class="container">
      <div class="section__head reveal">
        <p class="section__kicker mono">{{ t(ui.projectsKicker) }}</p>
        <h2 class="section__title">{{ t(ui.projectsTitle) }}</h2>
        <p class="section__lead">
          {{ t(ui.projectsLead) }}
        </p>
      </div>

      <!-- Filtro de vista: destacados vs trayectoria completa -->
      <div class="timeline__filters-wrap reveal">
        <div class="timeline__filters">
          <button
            type="button"
            class="timeline__filter-btn mono"
            :class="{ active: filterMode === 'all' }"
            @click="setFilter('all')"
          >
            {{ t(ui.allMilestones) }} ({{ timeline.length }})
          </button>
          <button
            type="button"
            class="timeline__filter-btn mono"
            :class="{ active: filterMode === 'featured' }"
            @click="setFilter('featured')"
          >
            {{ t(ui.featuredMilestones) }} ({{ timeline.filter(p => p.featured).length }})
          </button>
        </div>
      </div>

      <div class="timeline">
        <div class="timeline__line" aria-hidden="true">
          <div ref="lineFill" class="timeline__line-fill"></div>
        </div>

        <article
          v-for="(p, i) in displayedProjects"
          :key="p.title"
          class="timeline__item"
          :class="i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'"
        >
          <div
            class="timeline__node mono"
            :class="{ 'timeline__node--current': p.current }"
            :aria-label="`Hito ${pad(i)}`"
          >{{ pad(i) }}</div>
          <div class="timeline__card">
            <ProjectCard :project="p" />
          </div>
          <div class="timeline__spacer" aria-hidden="true"></div>
        </article>
      </div>

      <div class="timeline__cta reveal">
        <a
          class="btn btn--ghost"
          href="https://github.com/ElJoker63?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgIcon name="ic-github" :size="17" />
          {{ t(ui.viewAllGithub).replace('{count}', totalRepos) }}
          <SvgIcon name="ic-external" :size="14" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Filtro de destacados vs todos */
.timeline__filters-wrap {
  display: flex;
  margin-bottom: clamp(24px, 3.5vw, 38px);
}
.timeline__filters {
  display: inline-flex;
  gap: 6px;
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 5px;
  border-radius: 999px;
  backdrop-filter: blur(8px);
}
.timeline__filter-btn {
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--dim);
  transition: color 0.3s, background 0.3s, box-shadow 0.3s;
}
.timeline__filter-btn:hover { color: var(--text) }
.timeline__filter-btn.active {
  background: var(--surface-2);
  color: #fff;
  box-shadow: inset 0 0 0 1px rgba(139, 92, 246, 0.45);
}

.timeline { position: relative; padding-block: 12px }

/* Línea central */
.timeline__line {
  position: absolute;
  top: 0; bottom: 0;
  left: 50%;
  width: 2px;
  margin-left: -1px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 2px;
  overflow: hidden;
}
.timeline__line-fill {
  position: absolute;
  inset: 0;
  background: var(--grad);
  transform: scaleY(0);
  transform-origin: top;
}

/* Items */
.timeline__item {
  display: grid;
  grid-template-columns: 1fr 72px 1fr;
  align-items: center;
  margin-bottom: clamp(20px, 3vw, 34px);
}
.timeline__item:last-of-type { margin-bottom: 0 }

.timeline__node {
  grid-column: 2;
  justify-self: center;
  width: 46px; height: 46px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--dim);
  background: var(--bg-2);
  border: 1px solid var(--border);
  position: relative;
  z-index: 1;
  transition: color 0.3s, border-color 0.3s, box-shadow 0.3s;
}
.timeline__item:hover .timeline__node {
  color: var(--text);
  border-color: var(--border-glow);
  box-shadow: 0 0 24px rgba(139, 92, 246, 0.35);
}
.timeline__node--current {
  color: #fff;
  border-color: var(--violet);
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.35), rgba(236, 72, 153, 0.25));
  animation: node-pulse 2.4s ease-in-out infinite;
}
@keyframes node-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.45) }
  50% { box-shadow: 0 0 0 10px rgba(139, 92, 246, 0) }
}

/* Alternancia: item par → tarjeta a la izquierda */
.timeline__item--left .timeline__card { grid-column: 1; grid-row: 1 }
.timeline__item--left .timeline__spacer { grid-column: 3 }
.timeline__item--left .timeline__node { grid-row: 1 }

.timeline__item--right .timeline__card { grid-column: 3 }
.timeline__item--right .timeline__spacer { grid-column: 1; grid-row: 1 }

.timeline__cta {
  display: flex;
  justify-content: center;
  margin-top: clamp(30px, 5vw, 48px);
}

/* Móvil: línea a la izquierda, tarjetas a la derecha */
@media (max-width: 760px) {
  .timeline__line { left: 22px; margin-left: 0 }
  .timeline__item { grid-template-columns: 46px 1fr; column-gap: 16px }
  .timeline__item .timeline__node { grid-column: 1; grid-row: 1; width: 44px; height: 44px }
  .timeline__item .timeline__card { grid-column: 2; grid-row: 1 }
  .timeline__item .timeline__spacer { display: none }
}
</style>
