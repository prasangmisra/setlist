<template>
  <div style="padding-bottom: 6rem">
    <HeaderBar :isDarkMode="isDarkMode" @toggleDark="toggleDarkMode" />

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

    <FooterControls
      ref="footer"
      :originalLyrics="originalLyrics"
      @updateLyrics="updateLyrics"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, reactive } from "vue";
import { useRoute } from "vue-router";
import songs from "../songs";
import SongBlock from "../components/SongBlock.vue";
import FooterControls from "../components/FooterControls.vue";
import HeaderBar from "../components/HeaderBar.vue";

const route = useRoute();
const rawSong = songs.find((s) => s.id === route.params.id);
const song = reactive({ ...rawSong });

const originalLyrics = ref(song.songs.map(s => s.lyrics));
const isDarkMode = ref(false);
const footer = ref(null);

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
}

function updateLyrics(newLyricsArray) {
  song.songs.forEach((s, i) => {
    s.lyrics = newLyricsArray[i];
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

onMounted(() => {
  formatAllChords();

  const handleKeyPress = (event) => {
    if (event.target.tagName === "INPUT") return;
    footer.value?.toggleScroll?.();
  };

  let touchTriggered = false;

  const handleTouchStart = (event) => {
    if (event.target.closest(".controls-bar") || event.target.closest(".header-bar")) return;
    touchTriggered = true;
    footer.value?.toggleScroll?.();
  };

  const handleClick = (event) => {
    if (event.target.closest(".controls-bar") || event.target.closest(".header-bar")) return;
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
    originalLyrics.value = newSong.songs.map(s => s.lyrics);
    formatAllChords();
  }
);
</script>

<style scoped>
.content {
  padding: 2rem;
}
</style>
