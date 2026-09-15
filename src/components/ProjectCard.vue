<script setup>
import SvgIcon from './SvgIcon.vue'

defineProps({
  project: { type: Object, required: true }
})
</script>

<template>
  <article class="card spot-card">
    <div class="card__top">
      <span class="icon-badge"><SvgIcon :name="project.icon" :size="20" /></span>
      <span class="card__stars mono" :title="`${project.stars} estrellas en GitHub`">
        <SvgIcon name="ic-star" :size="13" /> {{ project.stars }}
      </span>
    </div>

    <h3 class="card__title">{{ project.title }}</h3>
    <p class="card__meta mono">{{ project.date }} · {{ project.category }}</p>
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
