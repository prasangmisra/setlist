<template>
  <div class="controls-bar">
    <button @click="transpose(true)">TRANS +</button>
    <button @click="transpose(false)">TRANS −</button>
    <button @click="toggleScroll">
      {{ isScrolling ? "STOP SCROLL" : "START SCROLL" }}
    </button>
    <label style="margin-left: 1rem">
      Speed:
      <input type="range" min="1" max="10" v-model="scrollSpeed" />
    </label>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from "vue";

const emit = defineEmits(["updateLyrics"]);

const scrollSpeed = ref(1);
const isScrolling = ref(false);
let scrollFrameId = null;
let currentScroll = window.scrollY;

function scrollStep() {
  if (!isScrolling.value) return;
  currentScroll += scrollSpeed.value * 0.2;
  window.scrollTo(0, currentScroll);
  scrollFrameId = requestAnimationFrame(scrollStep);
}

function toggleScroll() {
  if (isScrolling.value) {
    cancelAnimationFrame(scrollFrameId);
    isScrolling.value = false;
  } else {
    currentScroll = window.scrollY;
    isScrolling.value = true;
    scrollStep();
  }
}

function transposeChord(chord, up = true) {
  const chords = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const match = chord.match(/\[([A-G][#b]?m?)\]/);
  if (!match) return chord;

  let base = match[1];
  const isMinor = base.endsWith("m");
  const root = isMinor ? base.slice(0, -1) : base;
  let idx = chords.indexOf(root);
  if (idx === -1) return chord;

  let newIdx = up ? (idx + 1) % chords.length : (idx - 1 + chords.length) % chords.length;
  const newChord = chords[newIdx] + (isMinor ? "m" : "");
  return `[${newChord}]`;
}

function transpose(up = true) {
  emit("updateLyrics", (lyrics) => {
    const cleanLyrics = lyrics.replace(
      /<span class="chord">(\[[A-G][#b]?m?\])<\/span>/g,
      "$1"
    );
    return cleanLyrics.replace(
      /\[[A-G][#b]?m?\]/g,
      (chord) => `<span class="chord">${transposeChord(chord, up)}</span>`
    );
  });
}

onUnmounted(() => {
  cancelAnimationFrame(scrollFrameId);
});

defineExpose({
  toggleScroll,
  isScrolling,
  scrollSpeed,
});
</script>

<style scoped>
.controls-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: var(--panel);
  border-top: 1px solid #444;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 100;
  transition: background-color 0.3s ease;
}

.controls-bar button {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.controls-bar button:hover {
  background-color: #1abc9c;
}
</style>