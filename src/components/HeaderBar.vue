<template>
  <div class="header-bar">
    <router-link to="/" class="back-btn">⬅ Back</router-link>
    <button class="theme-toggle" @click="$emit('toggleDark')">
      {{ isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode" }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  isDarkMode: Boolean,
});
defineEmits(['toggleDark']);
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
</style>
