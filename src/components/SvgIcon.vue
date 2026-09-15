<script setup>
// Iconos SVG estilo stroke-rounded (viewBox 24, stroke 1.6, caps redondeados).
// Mismos ids semánticos que el sprite de la v1, ahora como componente Vue.
const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 20 }
})

const icons = {
  'ic-terminal': ['M4 6.5 9 12l-5 5.5', 'M13 18h7'],
  'ic-server': null, // custom render below
  'ic-chat': ['M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z'],
  'ic-box': ['M21 8 12 3 3 8l9 5 9-5Z', 'M3 8v8l9 5 9-5V8', 'M12 13v8'],
  'ic-globe': null,
  'ic-download': ['M12 3v12', 'm7 10 5 5 5-5', 'M5 20h14'],
  'ic-volume': ['M4 9v6h4l5 5V4L8 9H4Z', 'M16.5 8.5a5 5 0 0 1 0 7', 'M19 6a9 9 0 0 1 0 12'],
  'ic-send': ['m22 2-7 20-4-9-9-4Z', 'M22 2 11 13'],
  'ic-x': ['M4 4l16 16', 'M20 4 4 20'],
  'ic-smartphone': null,
  'ic-refresh': ['M21 12a9 9 0 1 1-3-6.7', 'M21 3v6h-6'],
  'ic-shield': ['M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z', 'm9 12 2 2 4-4'],
  'ic-arrow-right': ['M5 12h14', 'M13 6l6 6-6 6'],
  'ic-external': ['M7 17 17 7', 'M8 7h9v9'],
  'ic-chevron-up': ['m6 14 6-6 6 6'],
  'ic-menu': ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  'ic-close': ['m6 6 12 12', 'M18 6 6 18'],
  'ic-star': ['m12 2.5 2.9 5.9 6.6 1-4.7 4.6 1.1 6.5L12 17.4l-5.9 3.1 1.1-6.5L2.5 9.4l6.6-1L12 2.5Z'],
  'ic-pin': ['M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z'],
  'ic-users': ['M3.5 20c.5-3.5 2.8-5.5 5.5-5.5s5 2 5.5 5.5', 'M16 5.5a3 3 0 0 1 0 5.8', 'M17.5 14.8c1.7.7 2.7 2.4 3 5.2']
}

// ElOctocat oficial (único con fill en lugar de stroke)
const GITHUB_PATH =
  'M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.44-2.7 5.42-5.27 5.7.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z'
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <!-- iconos con geometría compuesta -->
    <template v-if="name === 'ic-github'">
      <path :d="GITHUB_PATH" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'ic-server'">
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <circle cx="7" cy="7" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17" r="0.6" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'ic-bot'">
      <rect x="5" y="8" width="14" height="10" rx="3" />
      <path d="M12 8V4" />
      <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" />
      <circle cx="9" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13" r="1" fill="currentColor" stroke="none" />
      <path d="M9 16.5h6" />
    </template>
    <template v-else-if="name === 'ic-cpu'">
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      <rect x="10" y="10" width="4" height="4" />
    </template>
    <template v-else-if="name === 'ic-globe'">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </template>
    <template v-else-if="name === 'ic-camera'">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'ic-smartphone'">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M11 18h2" />
    </template>
    <template v-else-if="name === 'ic-monitor'">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </template>
    <!-- iconos de paths simples -->
    <template v-else>
      <path v-for="d in icons[name]" :key="d" :d="d" />
    </template>
  </svg>
</template>
