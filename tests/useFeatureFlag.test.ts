import { test, expect } from "vitest";
import { defineComponent } from "vue";
import { useFeatureFlag } from "../src/composables/useFeatureFlag";
import { mockConfigCatClient } from "./mocks/mockConfigCatClient";
import { mount } from "@vue/test-utils";

test("Evaluates a feature flag", () => {
  // 1. define a test component that will use this composable
  // in the setup context

  const TestComponent = defineComponent({
    setup() {
      const { isFeatureFlagEnabled } = useFeatureFlag("myFirstFeatureFlag");

      return {
        isFeatureFlagEnabled,
      };
    },
    template: "<div>{{ featureFlagValue }}</div>",
  });

  const wrapper = mount(TestComponent, {
    // mock what main.ts in a vue app is doing
    global: {
      provide: {
        // hint: this is the source of truth, the useFeatureFlag composable will use this
        configCatClient: mockConfigCatClient,
      },
    },
  });

  // 3. the mock configcat client getValueAsync fake implementation will always return the default value provide
  // may need to await the result

  // 4. mount the test component using the wrapper

  // 5. test if the text in the test component is = to the default value passed in getValueAsync
});
