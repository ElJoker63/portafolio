<script setup>
import { computed } from 'vue'
import { useGitHub } from '../lib/github.js'
import SvgIcon from './SvgIcon.vue'

const props = defineProps({
  project: { type: Object, required: true }
})

const { getRepoStars, isSynced } = useGitHub()

// Estrellas reactivas: obtiene las de la API de GitHub en vivo con fallback local
const currentStars = computed(() => {
  return getRepoStars(props.project.title, props.project.stars)
})
</script>

<template>
  <article class="card spot-card">
    <div class="card__top">
      <div class="card__badges">
        <span class="icon-badge"><SvgIcon :name="project.icon" :size="20" /></span>
        <span v-if="project.featured" class="card__featured mono">Destacado</span>
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

    <h3 class="card__title">{{ project.title }}</h3>
    <p class="card__meta mono">{{ project.date }} · {{ project.category }}</p>
    <p v-if="project.role" class="card__role mono">
      <span class="card__role-label">Rol:</span> {{ project.role }}
    </p>
    <p class="card__desc">{{ project.desc }}</p>

    <ul class="card__tags">
      <li v-for="t in project.tags" :key="t" class="mono">{{ t }}</li>
    </ul>

    <div class="card__links">
      <a :href="project.code" target="_blank" rel="noopener noreferrer" class="card__link">
        Ver código <SvgIcon name="ic-arrow-right" :size="14" />
      </a>
      <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" class="card__link card__link--demo">
        Demo <SvgIcon name="ic-external" :size="14" />
      </a>
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
  margin-bottom: 4px;
}
.card__meta { font-size: 0.74rem; color: var(--dimmer); margin-bottom: 12px }
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

.card__links { display: flex; gap: 18px }
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
.card__link--demo { color: var(--dim) }
.card__link--demo:hover { color: var(--text) }
</style>
