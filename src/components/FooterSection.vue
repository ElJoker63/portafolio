<script setup>
import { ref } from 'vue'
import { ui } from '../data/portfolio.js'
import { useI18n } from '../lib/i18n.js'
import SvgIcon from './SvgIcon.vue'

const { t } = useI18n()
const year = new Date().getFullYear()

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__copy">
        {{ t(ui.footerCopy).replace('{year}', year) }}
      </p>
      <button class="footer__top" :aria-label="t(ui.backToTop)" :title="t(ui.backToTop)" @click="toTop">
        <SvgIcon name="ic-chevron-up" :size="18" />
      </button>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding-block: 26px;
  margin-top: 20px;
}
.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.footer__copy { font-size: 0.85rem; color: var(--dimmer) }

.footer__top {
  width: 42px; height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--dim);
  transition: transform 0.35s var(--ease), color 0.3s, border-color 0.3s;
}
.footer__top:hover {
  transform: translateY(-4px);
  color: var(--text);
  border-color: var(--border-glow);
}
</style>
