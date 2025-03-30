<template>
  <div class="controls-bar">
    <button @click="transpose(1)">TRANS +</button>
    <button @click="transpose(-1)">TRANS −</button>
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

const props = defineProps({
  originalLyrics: Array,
  transpositionOffset: Number,
});

const emit = defineEmits(["updateLyrics", "updateOffset"]);

const scrollSpeed = ref(1);
const isScrolling = ref(false);
let scrollFrameId = null;
let currentScroll = window.scrollY;

function scrollStep() {
  if (!isScrolling.value) return;
  currentScroll += scrollSpeed.value * 0.05;
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


function normalize(root) {
  return enharmonicMap[root] || root;
}
const CHORDS = [
  "C", "C#", "D", "D#", "E", "F",
  "F#", "G", "G#", "A", "A#", "B"
];


function transposeChord(chord, offset) {
  const match = chord.match(/\[([A-G][#b]?)([^]]*)\]/);
  if (!match) return chord;

  let root = match[1];       // e.g., F#
  const suffix = match[2];   // e.g., m, m7, add9

  // Normalize flats to sharps
  const flatToSharp = {
    "Db": "C#", "Eb": "D#", "Gb": "F#", "Ab": "G#", "Bb": "A#"
  };
  root = flatToSharp[root] || root;

  const index = CHORDS.indexOf(root);
  if (index === -1) return chord;

  const newIndex = (index + offset + CHORDS.length) % CHORDS.length;
  const transposedRoot = CHORDS[newIndex];
  console.log("Transpose chord ", chord, " with offset ",offset, " to get this: ",`[${transposedRoot}${suffix}]`);
  return `[${transposedRoot}${suffix}]`;
}








function transpose(offsetChange) {
  const newOffset = props.transpositionOffset + offsetChange;
  emit("updateOffset", newOffset);

  const updatedLyrics = props.originalLyrics.map(block =>
    block.replace(/\[[A-G][#b]*[^]]*\]/g, chord => transposeChord(chord, newOffset))
  );

  emit("updateLyrics", updatedLyrics);
}

onUnmounted(() => {
  cancelAnimationFrame(scrollFrameId);
});

defineExpose({ toggleScroll });
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
