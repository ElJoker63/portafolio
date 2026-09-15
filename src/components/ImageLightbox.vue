<script setup>
import { onBeforeUnmount, onMounted, watch } from 'vue'
import { useI18n } from '../lib/i18n.js'
import SvgIcon from './SvgIcon.vue'

const props = defineProps({
  project: { type: Object, default: null }
})

const emit = defineEmits(['close'])

const { t, isEs } = useI18n()
const baseUrl = import.meta.env.BASE_URL

function onKeyDown(e) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown)
})

watch(
  () => props.project,
  (val) => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = val ? 'hidden' : ''
    }
  }
)
</script>

<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="project"
        class="lightbox-backdrop"
        role="dialog"
        aria-modal="true"
        :aria-label="project.title"
        @click.self="emit('close')"
      >
        <div class="lightbox-dialog">
          <div class="lightbox-head">
            <div class="lightbox-meta">
              <span class="lightbox-cat mono">{{ t(project.category) }}</span>
              <h3 class="lightbox-title">{{ project.title }}</h3>
            </div>
            <button
              type="button"
              class="lightbox-close"
              :aria-label="isEs ? 'Cerrar vista previa' : 'Close preview'"
              :title="isEs ? 'Cerrar (Esc)' : 'Close (Esc)'"
              @click="emit('close')"
            >
              <SvgIcon name="ic-close" :size="20" />
            </button>
          </div>

          <div class="lightbox-media">
            <img
              :src="project.image.startsWith('http') ? project.image : `${baseUrl}${project.image}`"
              :alt="`Captura de pantalla de ${project.title}`"
              class="lightbox-img"
            />
          </div>

          <div class="lightbox-foot">
            <p class="lightbox-desc">{{ t(project.desc) }}</p>
            <div class="lightbox-actions">
              <a
                v-if="project.code"
                :href="project.code"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn--primary"
              >
                <SvgIcon name="ic-github" :size="16" />
                {{ isEs ? 'Ver código' : 'View code' }}
              </a>
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn--ghost"
              >
                <SvgIcon name="ic-external" :size="15" />
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(4, 4, 10, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: grid;
  place-items: center;
  padding: clamp(16px, 3vw, 36px);
}

.lightbox-dialog {
  max-width: 1040px;
  width: 100%;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  box-shadow: 0 30px 90px -20px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(139, 92, 246, 0.2);
  overflow: hidden;
}

.lightbox-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
}

.lightbox-cat {
  font-size: 0.74rem;
  color: var(--cyan);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.lightbox-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 2px;
}

.lightbox-close {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--dim);
  cursor: pointer;
  transition: all 0.25s var(--ease);
}
.lightbox-close:hover {
  color: var(--text);
  border-color: var(--violet);
  transform: rotate(90deg);
}

.lightbox-media {
  flex: 1;
  overflow: auto;
  display: grid;
  place-items: center;
  padding: 18px;
  background: rgba(0, 0, 0, 0.4);
}

.lightbox-img {
  max-width: 100%;
  max-height: 60vh;
  object-fit: contain;
  border-radius: var(--r-sm);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
}

.lightbox-foot {
  padding: 16px 24px 20px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  background: rgba(255, 255, 255, 0.015);
}

.lightbox-desc {
  color: var(--dim);
  font-size: 0.88rem;
  max-width: 65ch;
  line-height: 1.5;
}

.lightbox-actions {
  display: flex;
  gap: 10px;
}

/* Transición */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
.lightbox-enter-active .lightbox-dialog,
.lightbox-leave-active .lightbox-dialog {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.lightbox-enter-from .lightbox-dialog,
.lightbox-leave-to .lightbox-dialog {
  transform: scale(0.95);
}

@media (max-width: 680px) {
  .lightbox-foot { flex-direction: column; align-items: flex-start }
  .lightbox-actions { width: 100% }
  .lightbox-actions .btn { flex: 1; justify-content: center }
}
</style>
