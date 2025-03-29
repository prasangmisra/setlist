<template>
  <div style="padding-bottom: 6rem">
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
          v-for="(s, i) in formattedSongs"
          :key="i"
          :title="s.title"
          :lyrics="s.lyrics"
        />
      </div>
    </div>

    <FooterControls
      ref="footer"
      :originalLyrics="originalLyrics"
      :transpositionOffset="transpositionOffset"
      @updateLyrics="updateLyrics"
      @updateOffset="(val) => (transpositionOffset = val)"
    />
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import songs from "../songs";
import SongBlock from "../components/SongBlock.vue";
import FooterControls from "../components/FooterControls.vue";

const route = useRoute();
const rawSong = songs.find((s) => s.id === route.params.id);
const song = reactive({ ...rawSong });

const originalLyrics = ref(song.songs.map((s) => s.lyrics));
const formattedSongs = ref([]);
const transpositionOffset = ref(0);

function formatAllChords() {
  formattedSongs.value = song.songs.map((songObj) => {
    const cleanLyrics = songObj.lyrics.replace(
      /<span class="chord">(\[[^\]]+\])<\/span>/g,
      "$1"
    );
    const formatted = cleanLyrics.replace(
      /\[[^\]]+\]/g,
      (chord) => `<span class="chord">${chord}</span>`
    );
    return { ...songObj, lyrics: formatted };
  });
}

function updateLyrics(updatedLyrics) {
  song.songs.forEach((s, i) => (s.lyrics = updatedLyrics[i]));
  formatAllChords();
}

const isDarkMode = ref(false);
function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
}

const footer = ref(null);

onMounted(() => {
  formatAllChords();

  const handleKeyPress = (event) => {
    if (event.target.tagName === "INPUT") return;
    footer.value?.toggleScroll?.();
  };

  let touchTriggered = false;
  const handleTouchStart = (event) => {
    if (
      event.target.closest(".controls-bar") ||
      event.target.closest(".header-bar")
    ) return;
    touchTriggered = true;
    footer.value?.toggleScroll?.();
  };

  const handleClick = (event) => {
    if (
      event.target.closest(".controls-bar") ||
      event.target.closest(".header-bar")
    ) return;
    if (touchTriggered) {
      touchTriggered = false;
      return;
    }
    footer.value?.toggleScroll?.();
  };

  window.addEventListener("keydown", handleKeyPress);
  document.body.addEventListener("touchstart", handleTouchStart);
  document.body.addEventListener("click", handleClick);

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyPress);
    document.body.removeEventListener("touchstart", handleTouchStart);
    document.body.removeEventListener("click", handleClick);
  });
});

watch(
  () => route.params.id,
  (newId) => {
    const newSong = songs.find((s) => s.id === newId);
    Object.assign(song, newSong);
    originalLyrics.value = newSong.songs.map((s) => s.lyrics);
    transpositionOffset.value = 0;
    formatAllChords();
  }
);
</script>

<style scoped>
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
