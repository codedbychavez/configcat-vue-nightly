<template>
  <slot v-if="isFeatureFlagEnabled === true" />

  <slot v-else-if="isFeatureFlagEnabled === false" name="else" />

  <slot v-else name="loading" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { User } from "configcat-common";
import { useFeatureFlag } from "@/composables/UseFeatureFlag";

export default defineComponent({
  setup(props) {
    const { isFeatureFlagEnabled } = useFeatureFlag(
      props.featureFlagKey,
      props.userObject
    );

    return {
      isFeatureFlagEnabled,
    };
  },
  props: {
    featureFlagKey: {
      type: String,
      required: true,
    },
    userObject: {
      type: User,
      required: false,
    },
  },
});
</script>
