<template>
  <main>
    <TheWelcome />
    <div class="the-new-feature-wrapper">
      <TheNewFeature />
    </div>
  </main>
</template>

<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import TheNewFeature from "@/components/TheNewFeature.vue";
</script>

<style scoped>

.the-new-feature-wrapper {
  margin-top: 2rem;
}

</style>
