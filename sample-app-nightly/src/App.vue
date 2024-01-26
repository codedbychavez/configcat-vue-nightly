<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="navigation-bar">Sample App Nightly</div>
  </header>

  <div class="router-view-wrapper">
    <RouterView />
  </div>
</template>

<style scoped>


header {
  background-color: dodgerblue;
  height: 3rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
}

.navigation-bar {
  color: whitesmoke;
  text-transform: uppercase;
}

.router-view-wrapper {
  padding: 1rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

</style>
