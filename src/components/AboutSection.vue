<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap, reducedMotion } from '../lib/motion.js'
import SvgIcon from './SvgIcon.vue'

const root = ref(null)
let ctx = null

const pillars = [
  {
    icon: 'ic-terminal',
    title: 'Backend & APIs',
    text: 'APIs REST con FastAPI, Flask y Django. Bots y servicios en Python y Node.js.'
  },
  {
    icon: 'ic-server',
    title: 'Infraestructura',
    text: 'Docker, despliegue continuo y entornos self-hosted siempre disponibles.'
  },
  {
    icon: 'ic-bot',
    title: 'Automatización',
    text: 'Scripts, agentes de IA y herramientas que eliminan trabajo repetitivo.'
  }
]

onMounted(() => {
  if (reducedMotion) return
  ctx = gsap.context(() => {
    gsap.from('.about__card', {
      scrollTrigger: { trigger: root.value, start: 'top 78%' },
      x: -34, opacity: 0, duration: 0.9, ease: 'power3.out'
    })
    gsap.from('.about__body > *', {
      scrollTrigger: { trigger: root.value, start: 'top 74%' },
      y: 26, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out'
    })
  }, root.value)
})
onBeforeUnmount(() => ctx?.revert())
</script>

<template>
  <section id="sobre-mi" ref="root" class="section">
    <div class="container">
      <div class="section__head reveal">
        <p class="section__kicker mono">// 01 · perfil</p>
        <h2 class="section__title">Sobre mí</h2>
        <p class="section__lead">Backend, infraestructura y automatización desde Cuba.</p>
      </div>

      <div class="about">
        <article class="about__card spot-card">
          <div class="about__avatar-ring">
            <img
              src="https://github.com/ElJoker63.png"
              alt="Avatar de ElJoker63 en GitHub"
              width="132"
              height="132"
              loading="lazy"
              class="about__avatar"
            />
          </div>
          <h3 class="about__name">ElJoker63</h3>
          <p class="about__quote">«Focusing on Software Development, Infrastructure &amp; Automation»</p>
          <div class="about__badges">
            <span class="badge"><SvgIcon name="ic-pin" :size="13" /> Cuba</span>
            <span class="badge"><SvgIcon name="ic-users" :size="13" /> AEware Developers</span>
          </div>
        </article>

        <div class="about__body">
          <p>
            Soy desarrollador enfocado en <strong>backend, infraestructura y automatización</strong>.
            Me muevo cómodo entre un bot de Telegram, una API con FastAPI o un pipeline con Docker:
            lo que me interesa es que las cosas funcionen solas y funcionen bien.
          </p>
          <p>
            Mi stack principal gira en torno a <strong>Python, Node.js y Docker</strong>, pero he
            publicado desde apps Android en Kotlin hasta gateways con memoria vectorial para agentes de IA.
          </p>
          <p>
            Formo parte de <strong>AEware Developers</strong>, donde mantenemos proyectos open-source
            pensados para resolver problemas reales — muchos de ellos nacidos en Cuba y abiertos al mundo.
          </p>

          <div class="about__pillars">
            <article v-for="p in pillars" :key="p.title" class="pillar spot-card">
              <span class="icon-badge"><SvgIcon :name="p.icon" :size="20" /></span>
              <h4>{{ p.title }}</h4>
              <p>{{ p.text }}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: clamp(24px, 4vw, 48px);
  align-items: start;
}

/* Tarjeta de perfil */
.about__card {
  padding: 34px 26px;
  text-align: center;
  position: sticky;
  top: 96px;
}
.about__avatar-ring {
  position: relative;
  width: 148px; height: 148px;
  margin: 0 auto 18px;
  border-radius: 50%;
  display: grid;
  place-items: center;
}
.about__avatar-ring::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, var(--cyan), var(--violet), var(--fuchsia), var(--cyan));
  animation: spin 5s linear infinite;
}
.about__avatar-ring::after {
  content: '';
  position: absolute;
  inset: 2px;
  border-radius: 50%;
  background: var(--bg-2);
}
@keyframes spin { to { transform: rotate(1turn) } }
.about__avatar {
  position: relative;
  z-index: 1;
  border-radius: 50%;
  width: 132px; height: 132px;
}
.about__name { font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 6px }
.about__quote { color: var(--dim); font-size: 0.88rem; font-style: italic; margin-bottom: 18px }
.about__badges { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center }
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--dim);
  border: 1px solid var(--border);
  background: var(--surface);
  padding: 6px 12px;
  border-radius: 999px;
}

/* Cuerpo */
.about__body > p { color: var(--dim); margin-bottom: 16px; max-width: 62ch }
.about__body strong { color: var(--text); font-weight: 600 }

.about__pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 30px;
}
.pillar { padding: 22px 18px }
.pillar h4 { font-family: var(--font-display); font-size: 0.98rem; margin: 14px 0 8px }
.pillar p { font-size: 0.85rem; color: var(--dim) }

@media (max-width: 860px) {
  .about { grid-template-columns: 1fr }
  .about__card { position: static; max-width: 420px; margin-inline: auto }
  .about__pillars { grid-template-columns: 1fr }
}
</style>
