<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue';
</script>

<template>
  <header class="mt-4">
    <navigation></navigation>
  </header>

  <RouterView/>
</template>