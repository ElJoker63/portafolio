<script setup>
// Terminal fake del hero: teclea comandos y respuestas línea a línea.
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { terminalLines } from '../data/portfolio.js'
import { reducedMotion } from '../lib/motion.js'

const visibleLines = ref([]) // { type, text, partial? }
const typing = ref('')
const done = ref(false)

let timers = []

function wait(ms) {
  return new Promise((r) => {
    const id = setTimeout(r, ms)
    timers.push(id)
  })
}

async function run() {
  for (const line of terminalLines) {
    if (line.type === 'cmd') {
      typing.value = ''
      for (const ch of line.text) {
        typing.value += ch
        await wait(34 + Math.random() * 40)
      }
      await wait(320)
      visibleLines.value.push({ type: 'cmd', text: line.text })
      typing.value = ''
    } else {
      await wait(line.type === 'ok' ? 420 : 260)
      visibleLines.value.push(line)
    }
  }
  done.value = true
}

onMounted(() => {
  if (reducedMotion) {
    visibleLines.value = [...terminalLines]
    done.value = true
  } else {
    run()
  }
})

onBeforeUnmount(() => timers.forEach(clearTimeout))
</script>

<template>
  <div class="term">
    <div class="term__bar">
      <span class="term__dot term__dot--r"></span>
      <span class="term__dot term__dot--y"></span>
      <span class="term__dot term__dot--g"></span>
      <span class="term__title mono">eljoker63@dev: ~</span>
    </div>
    <div class="term__body mono" aria-hidden="true">
      <p v-for="(l, i) in visibleLines" :key="i" :class="`line line--${l.type}`">
        <template v-if="l.type === 'cmd'"><span class="prompt">$</span> {{ l.text }}</template>
        <template v-else-if="l.type === 'ok'"><span class="ok-dot">●</span> {{ l.text }}</template>
        <template v-else>{{ l.text }}</template>
      </p>
      <p v-if="typing" class="line line--cmd">
        <span class="prompt">$</span> {{ typing }}<span class="caret"></span>
      </p>
      <p v-else-if="done" class="line line--cmd">
        <span class="prompt">$</span> <span class="caret"></span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.term {
  border-radius: var(--r-lg);
  border: 1px solid var(--border);
  background: rgba(8, 8, 16, 0.72);
  backdrop-filter: blur(14px);
  overflow: hidden;
  box-shadow: 0 30px 80px -30px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(139, 92, 246, 0.06);
  animation: float 7s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0) }
  50% { transform: translateY(-10px) }
}

.term__bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
}
.term__dot { width: 11px; height: 11px; border-radius: 50% }
.term__dot--r { background: #ff5f57 }
.term__dot--y { background: #febc2e }
.term__dot--g { background: #28c840 }
.term__title { margin-left: 8px; font-size: 0.75rem; color: var(--dimmer) }

.term__body {
  padding: 18px 18px 22px;
  font-size: 0.82rem;
  line-height: 1.9;
  min-height: 218px;
}
.line { white-space: pre-wrap; word-break: break-word }
.line--cmd { color: var(--text) }
.line--out { color: var(--dim) }
.line--ok { color: var(--cyan) }
.prompt { color: var(--violet); font-weight: 600 }
.ok-dot { color: var(--green); font-size: 0.7em; vertical-align: middle }

.caret {
  display: inline-block;
  width: 8px; height: 1.1em;
  margin-left: 2px;
  vertical-align: text-bottom;
  background: var(--cyan);
  animation: blink 1s steps(1) infinite;
}
@keyframes blink { 50% { opacity: 0 } }
</style>
