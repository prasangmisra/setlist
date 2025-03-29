<template>
  <div style="padding-bottom: 6rem">
    <!-- Sticky Header -->
    <div class="header-bar">
      <router-link to="/" class="back-btn">⬅ Back</router-link>
      <button class="theme-toggle" @click="toggleDarkMode">
        {{ isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode" }}
      </button>
    </div>

    <div class="content">
      <h1>{{ song?.title }}</h1>
      <p>BPM: {{ song.bpm }}</p>

      <div ref="lyricsContainer">
        <SongBlock
          v-for="(s, i) in song.songs"
          :key="i"
          :title="s.title"
          :lyrics="s.lyrics"
        />
      </div>
    </div>

    <!-- Controls at the bottom -->
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
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import songs from "../songs";
import SongBlock from "../components/SongBlock.vue";

// Get song data based on route
const route = useRoute();
import { reactive } from "vue";
const rawSong = songs.find((s) => s.id === route.params.id);
const song = reactive({ ...rawSong });

// Scroll-related state
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

// Transpose logic
const chords = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

function transposeChord(chord, up = true) {
  const match = chord.match(/\[([A-G][#b]?m?)\]/);
  if (!match) return chord;

  let base = match[1];
  const isMinor = base.endsWith("m");
  const root = isMinor ? base.slice(0, -1) : base;

  let idx = chords.indexOf(root);
  if (idx === -1) return chord;

  let newIdx = up
    ? (idx + 1) % chords.length
    : (idx - 1 + chords.length) % chords.length;

  const newChord = chords[newIdx] + (isMinor ? "m" : "");
  return `[${newChord}]`;
}

function transpose(up = true) {
  song.songs.forEach((songObj) => {
    const cleanLyrics = songObj.lyrics.replace(
      /<span class="chord">(\[[A-G][#b]?m?\])<\/span>/g,
      "$1"
    );
    songObj.lyrics = cleanLyrics.replace(
      /\[[A-G][#b]?m?\]/g,
      (chord) => `<span class="chord">${transposeChord(chord, up)}</span>`
    );
  });
}

function formatAllChords() {
  song.songs.forEach((songObj) => {
    const cleanLyrics = songObj.lyrics.replace(
      /<span class="chord">(\[[A-G][#b]?m?\])<\/span>/g,
      "$1"
    );
    songObj.lyrics = cleanLyrics.replace(
      /\[[A-G][#b]?m?\]/g,
      (chord) => `<span class="chord">${chord}</span>`
    );
  });
}
const isDarkMode = ref(false);

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
}
onMounted(() => {
  formatAllChords(); // 👈 Run this once when component mounts

  const handleKeyPress = (event) => {
    if (event.target.tagName === "INPUT") return;
    toggleScroll();
  };

  let touchTriggered = false;

  const handleTouchStart = (event) => {
    if (
      event.target.closest(".controls-bar") ||
      event.target.closest(".header-bar")
    ) {
      return;
    }
    touchTriggered = true;
    toggleScroll();
  };

  const handleClick = (event) => {
    if (
      event.target.closest(".controls-bar") ||
      event.target.closest(".header-bar")
    ) {
      return;
    }

    if (touchTriggered) {
      touchTriggered = false;
      return;
    }

    toggleScroll();
  };

  window.addEventListener("keydown", handleKeyPress);
  document.body.addEventListener("touchstart", handleTouchStart);
  document.body.addEventListener("click", handleClick);

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyPress);
    document.body.removeEventListener("touchstart", handleTouchStart);
    document.body.removeEventListener("click", handleClick);
    cancelAnimationFrame(scrollFrameId); // ✅ Proper cleanup
  });
});

import { watch } from "vue";

watch(
  () => route.params.id,
  (newId) => {
    const newSong = songs.find((s) => s.id === newId);
    Object.assign(song, newSong); // Reactive update
    formatAllChords(); // Reapply formatting
    currentScroll = window.scrollY; // Reset scroll base
  }
);
</script>


<style scoped>
.controls-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 100;
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
.song-block {
  background-color: var(--panel);
  color: var(--text);
  padding: 16px;
  margin: 20px 0;
  border-radius: 10px;
  border: 1px solid var(--border-color, #444);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.song-title {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  padding: 6px;
  background: var(--panel);
  color: var(--text);
  border-left: 4px solid #2c3e50;
  border-right: 4px solid #2c3e50;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.lyrics {
  font-family: "Courier New", monospace;
  font-size: 16px;
  line-height: 1.6;
  white-space: pre-wrap;
  color: var(--text); /* <- Make sure this line exists */
  overflow-wrap: break-word;
  word-break: break-word;
}

.chord {
  color: var(--chord-color);
  background-color: var(--chord-bg);
  font-weight: bold;
  padding: 0 4px;
  border-radius: 4px;
}

.header-bar {
  position: sticky;
  top: 0;
  background-color: var(--bg);
  color: var(--text);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #444;
  z-index: 1000;
}

.back-btn {
  text-decoration: none;
  color: var(--text);
  font-weight: bold;
  font-size: 16px;
}

.theme-toggle {
  padding: 6px 12px;
  background: var(--panel);
  color: var(--text);
  border: 1px solid #888;
  border-radius: 6px;
  cursor: pointer;
}

.content {
  padding: 2rem;
}
</style>
