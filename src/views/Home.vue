<template>
  <div style="padding: 2rem;">
    <h1>Repertoire</h1>
    <ul>
      <li v-for="song in songs" :key="song.id">
        <router-link :to="`/song/${song.id}`">{{ song.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import songs from '../songs';
</script>
