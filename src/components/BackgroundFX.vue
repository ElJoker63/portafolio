<script setup>
// Fondo global animado: red de partículas en canvas + auroras degradadas
// + grid técnica + viñeta. Respeta prefers-reduced-motion (renderiza un frame estático).
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { reducedMotion } from '../lib/motion.js'

const canvas = ref(null)
let raf = 0
let cleanupResize = null

onMounted(() => {
  const cvs = canvas.value
  const ctx = cvs.getContext('2d')
  const DPR = Math.min(window.devicePixelRatio || 1, 2)

  let W = 0
  let H = 0
  let nodes = []
  const mouse = { x: -9e3, y: -9e3 }

  const COLORS = ['139,92,246', '34,211,238', '236,72,153']
  const LINK_DIST = 130
  const MOUSE_DIST = 170

  function resize() {
    W = window.innerWidth
    H = window.innerHeight
    cvs.width = W * DPR
    cvs.height = H * DPR
    cvs.style.width = W + 'px'
    cvs.style.height = H + 'px'
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0)

    const count = Math.min(90, Math.floor((W * H) / 23000))
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.4 + 0.6,
      c: COLORS[(Math.random() * COLORS.length) | 0]
    }))
  }

  function draw() {
    ctx.clearRect(0, 0, W, H)

    for (const n of nodes) {
      n.x += n.vx
      n.y += n.vy
      if (n.x < -20) n.x = W + 20
      if (n.x > W + 20) n.x = -20
      if (n.y < -20) n.y = H + 20
      if (n.y > H + 20) n.y = -20
    }

    // Enlaces nodo-nodo
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i]
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j]
        const dx = a.x - b.x
        const dy = a.y - b.y
        const d2 = dx * dx + dy * dy
        if (d2 < LINK_DIST * LINK_DIST) {
          const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.16
          ctx.strokeStyle = `rgba(${a.c},${alpha})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }
      // Enlace nodo-cursor (interacción)
      const mdx = a.x - mouse.x
      const mdy = a.y - mouse.y
      const md2 = mdx * mdx + mdy * mdy
      if (md2 < MOUSE_DIST * MOUSE_DIST) {
        const alpha = (1 - Math.sqrt(md2) / MOUSE_DIST) * 0.4
        ctx.strokeStyle = `rgba(${a.c},${alpha})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(mouse.x, mouse.y)
        ctx.stroke()
      }
      // Nodo
      ctx.fillStyle = `rgba(${a.c},0.75)`
      ctx.beginPath()
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
      ctx.fill()
    }

    raf = requestAnimationFrame(draw)
  }

  resize()
  const onResize = () => resize()
  const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
  const onLeave = () => { mouse.x = -9e3; mouse.y = -9e3 }

  window.addEventListener('resize', onResize)
  window.addEventListener('pointermove', onMove, { passive: true })
  window.addEventListener('pointerleave', onLeave)
  cleanupResize = () => {
    window.removeEventListener('resize', onResize)
    window.removeEventListener('pointermove', onMove)
    window.removeEventListener('pointerleave', onLeave)
  }

  if (reducedMotion) {
    draw()
    cancelAnimationFrame(raf) // un solo frame, nada animado
  } else {
    draw()
  }
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  cleanupResize?.()
})
</script>

<template>
  <div class="bgfx" aria-hidden="true">
    <div class="bgfx__aurora bgfx__aurora--1"></div>
    <div class="bgfx__aurora bgfx__aurora--2"></div>
    <div class="bgfx__aurora bgfx__aurora--3"></div>
    <canvas ref="canvas" class="bgfx__canvas"></canvas>
    <div class="bgfx__grid"></div>
    <div class="bgfx__vignette"></div>
  </div>
</template>

<style scoped>
.bgfx {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background:
    radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139, 92, 246, 0.09), transparent 60%),
    var(--bg);
}

.bgfx__canvas {
  position: absolute;
  inset: 0;
  opacity: 0.85;
}

/* Auroras: blobs degradados grandes que derivan lentamente */
.bgfx__aurora {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  will-change: transform;
}
.bgfx__aurora--1 {
  width: 46vw; height: 46vw;
  min-width: 380px; min-height: 380px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.28), transparent 65%);
  top: -12%; left: -8%;
  animation: drift-1 26s var(--ease) infinite alternate;
}
.bgfx__aurora--2 {
  width: 40vw; height: 40vw;
  min-width: 320px; min-height: 320px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.2), transparent 65%);
  top: 30%; right: -10%;
  animation: drift-2 32s var(--ease) infinite alternate;
}
.bgfx__aurora--3 {
  width: 34vw; height: 34vw;
  min-width: 280px; min-height: 280px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.16), transparent 65%);
  bottom: -14%; left: 24%;
  animation: drift-3 38s var(--ease) infinite alternate;
}
@keyframes drift-1 {
  to { transform: translate(14vw, 10vh) scale(1.15) }
}
@keyframes drift-2 {
  to { transform: translate(-12vw, -8vh) scale(0.9) }
}
@keyframes drift-3 {
  to { transform: translate(10vw, -12vh) scale(1.2) }
}

/* Grid técnica con máscara radial para desvanecerse en los bordes */
.bgfx__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 54px 54px;
  mask-image: radial-gradient(ellipse 90% 70% at 50% 30%, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 90% 70% at 50% 30%, #000 30%, transparent 75%);
}

.bgfx__vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, rgba(5, 5, 10, 0.75) 100%);
}
</style>
