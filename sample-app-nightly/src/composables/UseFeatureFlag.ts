import { ref, onUnmounted, onBeforeMount } from "vue";
import { useConfigCatClient } from "./UseConfigCatClient";
// Types
import { ClientCacheState, type User } from "configcat-common";
import type { Ref } from "vue";
import type { TFeatureFlagValue } from "../types";

export function useFeatureFlag(
  featureFlagKey: string,
  userObject?: User
): {
  isFeatureFlagEnabled: Ref<TFeatureFlagValue>;
} {
  // state encapsulated and managed by the composable
  const isFeatureFlagEnabled: Ref<TFeatureFlagValue> = ref(null);

  const configCatClient = useConfigCatClient();

  const configChangedHandler = () => {
    const snapshot = configCatClient.snapshot();
    const value = snapshot.getValue(featureFlagKey, false, userObject);
    if (isFeatureFlagEnabled.value !== value) {
      isFeatureFlagEnabled.value = value;
    }
  };

  onBeforeMount(() => {
    console.log("UseConfigCatClient executed onBeforeMounted");
    const snapshot = configCatClient.snapshot();
    const clientCacheState = snapshot.cacheState;

    // Before the initial render of the component, initialize `isFeatureFlagEnabled`
    // if the feature flag value is already available in the cache.

    if (
      clientCacheState == ClientCacheState.HasUpToDateFlagData ||
      clientCacheState == ClientCacheState.HasLocalOverrideFlagDataOnly
    ) {
      isFeatureFlagEnabled.value = snapshot.getValue(
        featureFlagKey,
        false,
        userObject
      );
      configCatClient.on("configChanged", configChangedHandler);
    }

    // Otherwise take the async path to get the feature flag value.
    else {
      configCatClient
        .getValueAsync(featureFlagKey, false, userObject)
        .then((value) => {
          const configChangedHandlerResult = configChangedHandler;

          if (!configChangedHandlerResult) {
            return;
          }

          isFeatureFlagEnabled.value = value;
          configCatClient.on("configChanged", configChangedHandlerResult);
        });
    }
  });

  onUnmounted(() => {
    configCatClient.off("configChanged", configChangedHandler);
    console.log("UseConfigCatClient executed onUnmounted");
  });

  return {
    isFeatureFlagEnabled,
  };
}
