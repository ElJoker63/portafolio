<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap, reducedMotion } from '../lib/motion.js'
import { contacts } from '../data/portfolio.js'
import SvgIcon from './SvgIcon.vue'

const root = ref(null)
let ctx = null

onMounted(() => {
  if (reducedMotion) return
  ctx = gsap.context(() => {
    gsap.from('.contact-card', {
      scrollTrigger: { trigger: root.value, start: 'top 78%' },
      y: 30, opacity: 0, stagger: 0.09, duration: 0.7, ease: 'power3.out'
    })
  }, root.value)
})
onBeforeUnmount(() => ctx?.revert())
</script>

<template>
  <section id="contacto" ref="root" class="section">
    <div class="container">
      <div class="section__head reveal">
        <p class="section__kicker mono">// 04 · contacto</p>
        <h2 class="section__title">¿Construimos algo <span class="grad-text">juntos</span>?</h2>
        <p class="section__lead">
          Abierto a proyectos freelance, colaboraciones open-source y nuevas oportunidades.
        </p>
      </div>

      <div class="contacts">
        <a
          v-for="c in contacts"
          :key="c.name"
          :href="c.url"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card spot-card"
        >
          <span class="icon-badge icon-badge--lg"><SvgIcon :name="c.icon" :size="22" /></span>
          <span class="contact-card__name">{{ c.name }}</span>
          <span class="contact-card__handle mono">{{ c.handle }}</span>
          <SvgIcon name="ic-external" :size="15" class="contact-card__arrow" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contacts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 24px 22px;
  text-decoration: none;
}
.contact-card__name { font-family: var(--font-display); font-weight: 600; font-size: 1.02rem }
.contact-card__handle { font-size: 0.78rem; color: var(--dimmer) }
.contact-card__arrow {
  position: absolute;
  top: 18px; right: 18px;
  color: var(--dimmer);
  transition: color 0.3s, transform 0.3s var(--ease);
}
.contact-card:hover .contact-card__arrow {
  color: var(--cyan);
  transform: translate(3px, -3px);
}

@media (max-width: 900px) { .contacts { grid-template-columns: repeat(2, 1fr) } }
@media (max-width: 420px) { .contacts { grid-template-columns: 1fr } }
</style>
