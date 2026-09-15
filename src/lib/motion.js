// Capa central de animación: GSAP si está disponible y no hay reduced-motion;
// si no, fallback con IntersectionObserver + clase .in-view (CSS hace la transición).
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const reducedMotion =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (reducedMotion) {
  document.documentElement.classList.add('reduced')
} else {
  gsap.registerPlugin(ScrollTrigger)
  document.documentElement.classList.add('gsap-on')
}

export { gsap, ScrollTrigger }

// Fallback genérico: observa elementos .reveal y los marca como visibles.
// Con reduced-motion el CSS ya los muestra, así que ni siquiera observamos.
export function initRevealFallback(root = document) {
  if (reducedMotion) return
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in-view')
          io.unobserve(e.target)
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px' }
  )
  root.querySelectorAll('.reveal').forEach((el) => io.observe(el))
}

// Spotlight: actualiza --mx / --my en tarjetas .spot-card al mover el cursor.
export function bindSpotlight(el) {
  const onMove = (ev) => {
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${ev.clientX - r.left}px`)
    el.style.setProperty('--my', `${ev.clientY - r.top}px`)
  }
  el.addEventListener('mousemove', onMove)
  return () => el.removeEventListener('mousemove', onMove)
}

export function bindSpotlights(selector = '.spot-card', root = document) {
  const cleanups = [...root.querySelectorAll(selector)].map(bindSpotlight)
  return () => cleanups.forEach((fn) => fn())
}
