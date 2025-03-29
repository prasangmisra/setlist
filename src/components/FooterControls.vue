<!-- components/FooterControls.vue -->
<template>
  <div class="controls-bar">
    <button @click="$emit('transpose', true)">TRANS +</button>
    <button @click="$emit('transpose', false)">TRANS −</button>
    <button @click="$emit('toggle-scroll')">
      {{ isScrolling ? "STOP SCROLL" : "START SCROLL" }}
    </button>
    <label style="margin-left: 1rem">
      Speed:
      <input type="range" min="1" max="10" :value="scrollSpeed" @input="$emit('update-speed', $event.target.value)" />
    </label>
  </div>
</template>

<script setup>
defineProps(['isScrolling', 'scrollSpeed']);
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
