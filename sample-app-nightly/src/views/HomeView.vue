<template>
  <main>
    <TheWelcome />
    <NightlyFeatureWrapper feature-flag-key="myFirstFeatureFlag">
      <div class="the-new-feature-wrapper">
        <TheNewFeature />
      </div>
      <template #else>
        <div class="feature-not-available-wrapper">
          Sorry this feature is not available
        </div>
      </template>
    </NightlyFeatureWrapper>
  </main>
</template>

<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import TheNewFeature from "@/components/TheNewFeature.vue";
// import { FeatureWrapper } from "configcat-vue";
import NightlyFeatureWrapper from "@/components/NightlyFeatureWrapper.vue";
</script>

<style scoped>
.the-new-feature-wrapper {
  margin-top: 2rem;
}

.feature-not-available-wrapper {
  margin-top: 2rem;
  padding: 1rem;
  background-color: orange;
}
</style>
