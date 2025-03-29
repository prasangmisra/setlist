<template>
  <div class="toolbar">
    <button @click="transpose(true)">
      <span class="full-label">ITRANS +</span>
      <span class="icon-label">+</span>
    </button>
    <button @click="transpose(false)">
      <span class="full-label">TRANS −</span>
      <span class="icon-label">−</span>
    </button>
    <button @click="toggleScroll">
      <span class="full-label">{{ scrolling ? 'STOP SCROLL' : 'START SCROLL' }}</span>
      <span class="icon-label">{{ scrolling ? '■' : '▶' }}</span>
    </button>
    <label>
      Speed:
      <input type="range" v-model="speed" min="1" max="10" />
    </label>
  </div>
</template>

<script setup>
import { ref, onUnmounted, watch } from 'vue';
import { transposeLyrics } from '../utils/chords';

const props = defineProps({
  lyrics: String
});
const emit = defineEmits(['update']);

const speed = ref(1);
let scrollInterval = null;
const scrolling = ref(false);

function transpose(up) {
  const newLyrics = transposeLyrics(props.lyrics, up);
  emit('update', newLyrics);
}

function toggleScroll() {
  scrolling.value = !scrolling.value;

  if (scrolling.value) {
    const step = 1;
    const delay = 100 / speed.value;

    scrollInterval = setInterval(() => {
      window.scrollBy(0, step);
    }, delay);
  } else {
    clearInterval(scrollInterval);
  }
}

watch(speed, (newVal) => {
  if (scrolling.value) {
    clearInterval(scrollInterval);
    toggleScroll(); // restart scrolling with new speed
  }
});

onUnmounted(() => {
  clearInterval(scrollInterval);
});
</script>

<style scoped>
.toolbar {
  display: flex;
  gap: 12px;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
button {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #1abc9c;
}
label {
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.full-label {
  display: inline;
}
.icon-label {
  display: none;
}
@media (max-width: 600px) {
  .full-label {
    display: none;
  }
  .icon-label {
    display: inline;
  }
}
</style>
