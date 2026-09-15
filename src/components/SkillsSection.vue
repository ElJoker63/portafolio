<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap, reducedMotion } from '../lib/motion.js'
import { marqueeSkills, skillGroups } from '../data/portfolio.js'
import SvgIcon from './SvgIcon.vue'

const root = ref(null)
let ctx = null

// El marquee duplica la lista para un loop infinito sin huecos
const marqueeRow = [...marqueeSkills, ...marqueeSkills]

onMounted(() => {
  if (reducedMotion) return
  ctx = gsap.context(() => {
    gsap.from('.skill-group', {
      scrollTrigger: { trigger: root.value, start: 'top 76%' },
      y: 30, opacity: 0, stagger: 0.09, duration: 0.7, ease: 'power3.out'
    })
  }, root.value)
})
onBeforeUnmount(() => ctx?.revert())
</script>

<template>
  <section id="skills" ref="root" class="section">
    <div class="container">
      <div class="section__head reveal">
        <p class="section__kicker mono">// 02 · arsenal</p>
        <h2 class="section__title">Skills &amp; herramientas</h2>
        <p class="section__lead">El stack con el que construyo, despliego y mantengo.</p>
      </div>
    </div>

    <!-- Marquee infinito (se pausa al hacer hover) -->
    <div class="marquee reveal" aria-hidden="true">
      <div class="marquee__track">
        <span v-for="(s, i) in marqueeRow" :key="i" class="marquee__pill mono">{{ s }}</span>
      </div>
      <div class="marquee__track marquee__track--rev">
        <span v-for="(s, i) in marqueeRow" :key="i" class="marquee__pill mono">{{ s }}</span>
      </div>
    </div>

    <div class="container">
      <div class="skills__grid">
        <article v-for="g in skillGroups" :key="g.title" class="skill-group spot-card">
          <span class="icon-badge icon-badge--lg"><SvgIcon :name="g.icon" :size="24" /></span>
          <h3>{{ g.title }}</h3>
          <ul>
            <li v-for="item in g.items" :key="item" class="mono">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Marquee */
.marquee {
  overflow: hidden;
  padding-block: 6px;
  margin-bottom: clamp(26px, 4vw, 40px);
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.marquee__track {
  display: flex;
  gap: 12px;
  width: max-content;
  animation: marquee 34s linear infinite;
}
.marquee__track--rev {
  animation: marquee-rev 40s linear infinite;
}
.marquee:hover .marquee__track { animation-play-state: paused }
@keyframes marquee { to { transform: translateX(-50%) } }
@keyframes marquee-rev { from { transform: translateX(-50%) } to { transform: translateX(0) } }

.marquee__pill {
  font-size: 0.82rem;
  color: var(--dim);
  padding: 9px 18px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  white-space: nowrap;
  transition: color 0.3s, border-color 0.3s, background 0.3s;
}
.marquee__pill:hover { color: var(--text); border-color: var(--border-glow) }

/* Categorías */
.skills__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.skill-group { padding: 24px 22px }
.skill-group h3 {
  font-family: var(--font-display);
  font-size: 1.05rem;
  margin: 16px 0 12px;
}
.skill-group li {
  font-size: 0.8rem;
  color: var(--dim);
  padding: 5px 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.06);
}
.skill-group li:last-child { border-bottom: 0 }

@media (max-width: 980px) { .skills__grid { grid-template-columns: repeat(2, 1fr) } }
@media (max-width: 520px) { .skills__grid { grid-template-columns: 1fr } }
</style>
