<template>
  <div class="song-block">
    <h2 class="song-title">{{ title }}</h2>
    <pre class="lyrics" v-html="lyrics"></pre>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  lyrics: String
});
</script>

<style scoped>
.song-block {
  background-color: #fcfcfc;
  padding: 16px;
  margin: 20px 0;
  border-radius: 10px;
  border: 1px solid #ddd;
}
.song-title {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  padding: 6px;
  background: var(--panel);
  border-left: 4px solid #2c3e50;
  border-right: 4px solid #2c3e50;
  color: var(--text); /* ✅ this is the fix */
}

.lyrics {
  font-family: 'Courier New', monospace;
  font-size: 16px;
  line-height: 1.6;
  white-space: pre-wrap;
  color: #222;
  overflow-wrap: break-word;
  word-break: break-word;
}

.chord {
  color: #d6336c;
  font-weight: bold;
  background-color: #fff0f3;
  padding: 0 4px;
  border-radius: 4px;
}
</style>
