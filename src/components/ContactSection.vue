<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap, reducedMotion } from '../lib/motion.js'
import { AUTHOR_EMAIL, contacts, ui } from '../data/portfolio.js'
import { useI18n } from '../lib/i18n.js'
import SvgIcon from './SvgIcon.vue'

const { t, isEs } = useI18n()

const root = ref(null)
const copied = ref(false)
let copyTimeout = null
let ctx = null

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(AUTHOR_EMAIL)
    copied.value = true
    clearTimeout(copyTimeout)
    copyTimeout = setTimeout(() => { copied.value = false }, 2400)
  } catch (err) {
    const ta = document.createElement('textarea')
    ta.value = AUTHOR_EMAIL
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    copied.value = true
    clearTimeout(copyTimeout)
    copyTimeout = setTimeout(() => { copied.value = false }, 2400)
  }
}

onMounted(() => {
  if (reducedMotion) return
  ctx = gsap.context(() => {
    gsap.from('.contact-email', {
      scrollTrigger: { trigger: root.value, start: 'top 80%' },
      y: 24, opacity: 0, duration: 0.7, ease: 'power3.out'
    })
    gsap.from('.contact-card', {
      scrollTrigger: { trigger: root.value, start: 'top 75%' },
      y: 30, opacity: 0, stagger: 0.08, duration: 0.7, ease: 'power3.out'
    })
  }, root.value)
})

onBeforeUnmount(() => {
  clearTimeout(copyTimeout)
  ctx?.revert()
})
</script>

<template>
  <section id="contacto" ref="root" class="section">
    <div class="container">
      <div class="section__head reveal">
        <p class="section__kicker mono">{{ t(ui.contactKicker) }}</p>
        <h2 class="section__title">
          {{ isEs ? '¿Construimos algo ' : "Let's build something " }}<span class="grad-text">{{ isEs ? 'juntos' : 'together' }}</span>?
        </h2>
        <p class="section__lead">
          {{ t(ui.contactLead) }}
        </p>
      </div>

      <!-- Bloque de Email destacado en texto con botón de copia rápida -->
      <div class="contact-email spot-card">
        <div class="contact-email__info">
          <span class="icon-badge icon-badge--lg"><SvgIcon name="ic-mail" :size="22" /></span>
          <div>
            <p class="contact-email__label">{{ t(ui.emailDirectLabel) }}</p>
            <p class="contact-email__val mono">{{ AUTHOR_EMAIL }}</p>
          </div>
        </div>
        <div class="contact-email__actions">
          <button
            type="button"
            class="btn btn--primary contact-email__btn"
            :class="{ 'btn--copied': copied }"
            @click="copyEmail"
            :title="isEs ? `Copiar ${AUTHOR_EMAIL} al portapapeles` : `Copy ${AUTHOR_EMAIL} to clipboard`"
          >
            <SvgIcon :name="copied ? 'ic-check' : 'ic-copy'" :size="16" />
            {{ copied ? t(ui.copiedEmailBtn) : t(ui.copyEmailBtn) }}
          </button>
          <a :href="`mailto:${AUTHOR_EMAIL}`" class="btn btn--ghost contact-email__btn">
            {{ t(ui.sendEmailBtn) }}
            <SvgIcon name="ic-external" :size="14" />
          </a>
        </div>
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
          <span v-if="c.note" class="contact-card__note">{{ t(c.note) }}</span>
          <SvgIcon name="ic-external" :size="15" class="contact-card__arrow" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Banner de email */
.contact-email {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding: 24px 28px;
  margin-bottom: 24px;
  border-color: rgba(139, 92, 246, 0.25);
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(34, 211, 238, 0.04));
}
.contact-email__info {
  display: flex;
  align-items: center;
  gap: 16px;
}
.contact-email__label {
  font-size: 0.78rem;
  color: var(--dimmer);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 2px;
}
.contact-email__val {
  font-size: clamp(0.95rem, 2.2vw, 1.22rem);
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.01em;
}
.contact-email__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.contact-email__btn {
  padding: 10px 20px;
  font-size: 0.88rem;
}
.btn--copied {
  background: linear-gradient(120deg, #059669, #10b981) !important;
}

/* Red de contactos */
.contacts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 24px 22px;
  text-decoration: none;
}
.contact-card__name { font-family: var(--font-display); font-weight: 600; font-size: 1.02rem }
.contact-card__handle { font-size: 0.78rem; color: var(--cyan) }
.contact-card__note { font-size: 0.76rem; color: var(--dimmer); line-height: 1.35 }
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
@media (max-width: 600px) {
  .contact-email { flex-direction: column; align-items: flex-start }
  .contact-email__actions { width: 100% }
  .contact-email__actions .btn { width: 100%; justify-content: center }
}
@media (max-width: 420px) { .contacts { grid-template-columns: 1fr } }
</style>
