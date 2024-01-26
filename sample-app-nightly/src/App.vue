<template>
  <header>
    <NavigationBar />
  </header>

  <div class="router-view-wrapper">
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
</script>

<style scoped>
header {
  background-color: dodgerblue;
  height: 3rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
}

.router-view-wrapper {
  padding: 1rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
