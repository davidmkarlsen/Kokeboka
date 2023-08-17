<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import FooterEl from './components/FooterEl.vue';
</script>

<template>
  <header class="mt-4">
    <navigation></navigation>
  </header>
  <RouterView/>
  <footer class="mt-20">
	<footer-el></footer-el>
  </footer>
</template>