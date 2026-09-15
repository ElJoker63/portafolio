<script setup>
import { computed } from 'vue'
import { ui } from '../data/portfolio.js'
import { useI18n } from '../lib/i18n.js'
import { useGitHub } from '../lib/github.js'
import SvgIcon from './SvgIcon.vue'

const props = defineProps({
  project: { type: Object, required: true }
})

defineEmits(['open-image'])

const { t, isEs } = useI18n()
const { getRepoStars, getRepoPushedAt, isSynced } = useGitHub()
const baseUrl = import.meta.env.BASE_URL

// Estrellas reactivas: obtiene las de la API de GitHub en vivo con fallback local
const currentStars = computed(() => {
  return getRepoStars(props.project.title, props.project.stars)
})

// Fecha del último commit: API en vivo de GitHub con fallback a lastCommit estático
const rawLastCommit = computed(() => {
  return getRepoPushedAt(props.project.title, props.project.lastCommit)
})

const formattedLastCommit = computed(() => {
  const dateStr = rawLastCommit.value
  if (!dateStr) return ''
  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return dateStr
    return d.toLocaleDateString(isEs.value ? 'es-ES' : 'en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  } catch {
    return dateStr
  }
})
</script>

<template>
  <article class="card spot-card">
    <div class="card__top">
      <div class="card__badges">
        <span class="icon-badge"><SvgIcon :name="project.icon" :size="20" /></span>
        <span v-if="project.featured" class="card__featured mono">{{ t(ui.featuredBadge) }}</span>
      </div>
      <a
        :href="`${project.code}/stargazers`"
        target="_blank"
        rel="noopener noreferrer"
        class="card__stars mono"
        :title="`${currentStars} estrellas en GitHub · Clic para ver o dar estrella`"
      >
        <SvgIcon name="ic-star" :size="13" />
        <span>{{ currentStars }}</span>
        <span v-if="isSynced" class="card__stars-live" title="Sincronizado en vivo con GitHub" aria-label="En vivo"></span>
      </a>
    </div>

    <!-- Previsualización visual del proyecto (captura / interfaz) -->
    <div
      v-if="project.image"
      class="card__preview-wrap"
      :title="t(ui.zoomScreenshot)"
      @click="$emit('open-image', project)"
    >
      <img
        :src="project.image.startsWith('http') ? project.image : `${baseUrl}${project.image}`"
        :alt="`Captura de pantalla de ${project.title}`"
        class="card__preview-img"
        loading="lazy"
      />
      <div class="card__preview-overlay">
        <span class="card__preview-badge mono">
          <SvgIcon name="ic-camera" :size="12" />
          {{ t(ui.viewScreenshot) }}
        </span>
      </div>
    </div>

    <h3 class="card__title">{{ project.title }}</h3>

    <div class="card__meta-wrap">
      <p class="card__meta mono">{{ t(project.date) }} · {{ t(project.category) }}</p>
      <div v-if="formattedLastCommit" class="card__commit mono" :title="t(ui.lastCommitTitle)">
        <SvgIcon name="ic-git-commit" :size="13" class="card__commit-icon" />
        <span class="card__commit-label">{{ t(ui.lastCommit) }}:</span>
        <strong class="card__commit-date">{{ formattedLastCommit }}</strong>
      </div>
    </div>

    <p v-if="project.role" class="card__role mono">
      <span class="card__role-label">{{ t(ui.roleLabel) }}</span> {{ t(project.role) }}
    </p>
    <p class="card__desc">{{ t(project.desc) }}</p>

    <ul class="card__tags">
      <li v-for="tag in project.tags" :key="tag" class="mono">{{ tag }}</li>
    </ul>

    <div class="card__links">
      <a :href="project.code" target="_blank" rel="noopener noreferrer" class="card__link">
        {{ t(ui.viewCode) }} <SvgIcon name="ic-arrow-right" :size="14" />
      </a>
      <a
        v-if="project.demo"
        :href="project.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="card__link card__link--demo"
        :title="`${t(ui.liveDemo)}: ${project.title}`"
      >
        <SvgIcon name="ic-external" :size="14" />
        {{ t(ui.liveDemo) }}
      </a>
      <a
        v-if="project.release"
        :href="project.release"
        target="_blank"
        rel="noopener noreferrer"
        class="card__link card__link--release"
        :title="`${t(ui.release)}: ${project.title}`"
      >
        <SvgIcon name="ic-download" :size="14" />
        {{ t(ui.release) }}
      </a>
      <button
        v-if="project.image"
        type="button"
        class="card__link card__link--shot"
        @click="$emit('open-image', project)"
        :title="t(ui.zoomScreenshot)"
      >
        <SvgIcon name="ic-camera" :size="14" />
        {{ t(ui.viewScreenshot) }}
      </button>
    </div>
  </article>
</template>

<style scoped>
.card { padding: 24px 24px 20px; height: 100%; display: flex; flex-direction: column }

.card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.card__badges {
  display: flex;
  align-items: center;
  gap: 10px;
}
.card__featured {
  font-size: 0.65rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(120deg, var(--violet), var(--fuchsia));
  padding: 3px 9px;
  border-radius: 999px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.card__role {
  font-size: 0.74rem;
  color: var(--cyan);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.card__role-label {
  color: var(--dimmer);
}
.card__stars {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.25);
  background: rgba(251, 191, 36, 0.07);
  padding: 4px 10px;
  border-radius: 999px;
  transition: transform 0.3s var(--ease), border-color 0.3s, background 0.3s;
}
.card__stars:hover {
  transform: translateY(-2px);
  border-color: rgba(251, 191, 36, 0.5);
  background: rgba(251, 191, 36, 0.14);
}
.card__stars-live {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 6px var(--green);
  display: inline-block;
  margin-left: 1px;
}

.card__title {
  font-family: var(--font-display);
  font-size: 1.22rem;
  letter-spacing: -0.01em;
  margin-bottom: 6px;
}
.card__meta-wrap {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
}
.card__meta { font-size: 0.74rem; color: var(--dimmer); margin-bottom: 0 }
.card__commit {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.71rem;
  color: var(--dim);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 3px 8px;
  border-radius: 6px;
  width: fit-content;
}
.card__commit-icon {
  color: var(--cyan);
  flex-shrink: 0;
}
.card__commit-label {
  color: var(--dimmer);
}
.card__commit-date {
  color: #a78bfa;
  font-weight: 600;
}
.card__desc { font-size: 0.88rem; color: var(--dim); margin-bottom: 16px; flex-grow: 1 }

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 18px;
}
.card__tags li {
  font-size: 0.68rem;
  color: var(--dim);
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  padding: 3px 10px;
  border-radius: 999px;
}

.card__links { display: flex; flex-wrap: wrap; gap: 18px; margin-top: auto }
.card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--violet);
  transition: color 0.3s, gap 0.3s var(--ease);
}
.card__link:hover { color: var(--cyan); gap: 9px }
.card__link--demo { color: #34d399 }
.card__link--demo:hover { color: #6ee7b7 }
.card__link--release { color: #38bdf8 }
.card__link--release:hover { color: #7dd3fc }
.card__link--shot {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  color: var(--cyan);
}
.card__link--shot:hover { color: #fff }

/* Previsualización visual / captura */
.card__preview-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9.2;
  border-radius: var(--r-md);
  overflow: hidden;
  margin-bottom: 16px;
  border: 1px solid var(--border);
  background: rgba(8, 8, 16, 0.7);
  cursor: pointer;
}
.card__preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.45s var(--ease), filter 0.45s var(--ease);
}
.card:hover .card__preview-img {
  transform: scale(1.04);
  filter: brightness(1.05);
}
.card__preview-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(6, 6, 14, 0.8) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s var(--ease);
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 10px;
}
.card__preview-wrap:hover .card__preview-overlay {
  opacity: 1;
}
.card__preview-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  font-weight: 600;
  color: #fff;
  background: rgba(14, 14, 26, 0.88);
  border: 1px solid rgba(139, 92, 246, 0.4);
  backdrop-filter: blur(8px);
  padding: 4px 10px;
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
}
</style>
