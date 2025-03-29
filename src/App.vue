<template>
  <router-view :key="$route.fullPath" />
</template>


<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(() => route.fullPath, (newPath) => {
  console.log('Route changed to:', newPath)
})
</script>

<style>
/* Base Theme Variables (Light Mode) */
:root {
  --bg: #ffffff;
  --text: #111111;
  --panel: #fcfcfc;
  --chord-bg: #fff0f3;
  --chord-color: #d6336c;
}

/* Dark Mode Overrides */
.dark {
  --bg: #121212;
  --text: #ffffff;
  --panel: #2c2c2c;
  --chord-bg: #322233;
  --chord-color: #ff77aa;
}

/* Body Style */
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background-color: var(--bg);
  color: var(--text);
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Controls Bar */
.controls-bar {
  background-color: var(--panel);
  border-top: 1px solid #444;
  transition: background-color 0.3s ease;
}

/* Chords */
.chord {
  color: var(--chord-color);
  background-color: var(--chord-bg);
  font-weight: 800;
  padding: 0 6px;
  border-radius: 6px;
  font-size: 16px;
  display: inline-block;
}

/* Song Block Panels */
.song-block {
  background-color: var(--panel);
  color: var(--text);
  padding: 16px;
  margin: 20px 0;
  border-radius: 10px;
  border: 1px solid #444;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Toggle Button */
.theme-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  padding: 6px 12px;
  background: var(--panel);
  color: var(--text);
  border: 1px solid #888;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.song-block {
  background-color: var(--panel) !important;
  color: var(--text) !important;
}
.lyrics {
  color: var(--text) !important;
}

</style>
