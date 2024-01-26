<template>
  <main>
    <h1>Home page</h1>
    <TheWelcome />
    <FeatureWrapper feature-flag-key="myFirstFeatureFlag">
      <div class="the-new-feature-wrapper">
        <TheNewFeature />
      </div>
      <template #else>
        <div class="feature-not-available-wrapper">
          Sorry this feature is not available
        </div>
      </template>
    </FeatureWrapper>
  </main>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import TheWelcome from "../components/TheWelcome.vue";
import TheNewFeature from "@/components/TheNewFeature.vue";
import { FeatureWrapper, type SettingKeyValue } from "configcat-vue";

// using the underlying configcat client
// import the composable
import { useConfigCatClient } from "configcat-vue";
// use the composable
const configCatClient = useConfigCatClient();

const featureFlags = ref<SettingKeyValue[] | undefined>([]);

onBeforeMount(() => {
    // using hooks: Subscribe to the hook using the .on method of the ConfigCat client
    configCatClient?.on('flagEvaluated', () => {
    console.log('Flag evaluated')
  })
});

onMounted(async () => {
  // Fetch feature flags
  const response = await configCatClient.getAllValuesAsync();
  featureFlags.value = response;
  console.log(featureFlags.value);
});
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
