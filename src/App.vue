<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { bindSpotlights, gsap, initRevealFallback, reducedMotion } from './lib/motion.js'
import BackgroundFX from './components/BackgroundFX.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

const cursorGlow = ref(null)
let cleanupSpot = null
let cleanupCursor = null

onMounted(async () => {
  await nextTick()
  cleanupSpot = bindSpotlights()

  // Entrada de los bloques .reveal: GSAP con scroll o fallback por IntersectionObserver
  if (!reducedMotion) {
    gsap.utils.toArray('.reveal').forEach((el) => {
      gsap.from(el, {
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 86%' }
      })
    })
  } else {
    initRevealFallback()
  }

  // Halo que sigue al cursor (solo punteros finos y sin reduced-motion)
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  if (fine && !reducedMotion && cursorGlow.value) {
    const el = cursorGlow.value
    el.style.opacity = '1'
    let raf = 0
    const move = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX - 190}px, ${e.clientY - 190}px)`
      })
    }
    window.addEventListener('pointermove', move, { passive: true })
    cleanupCursor = () => {
      window.removeEventListener('pointermove', move)
      cancelAnimationFrame(raf)
    }
  }
})

onBeforeUnmount(() => {
  cleanupSpot?.()
  cleanupCursor?.()
})
</script>

<template>
  <BackgroundFX />
  <div ref="cursorGlow" class="cursor-glow" aria-hidden="true"></div>

  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <TimelineSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>

<style scoped>
.cursor-glow {
  position: fixed;
  top: 0; left: 0;
  width: 380px; height: 380px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.12), transparent 62%);
  pointer-events: none;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.6s;
  will-change: transform;
}
</style>
