import { test, expect } from "vitest";
import { defineComponent } from "vue";
import { useFeatureFlag } from "../src/composables/useFeatureFlag";
import { mockConfigCatClient } from "./mocks/mockConfigCatClient";
import { mount } from "@vue/test-utils";

test("Evaluates a feature flag", () => {
  const TestComponent = defineComponent({
    setup() {
      let { isFeatureFlagEnabled } = useFeatureFlag("myFirstFeatureFlag");
      if (isFeatureFlagEnabled.value === null) {
        // setting to false for testing purposes
        isFeatureFlagEnabled.value = false;
      }
      return {
        isFeatureFlagEnabled,
      };
    },
    template: "<div id='feature-flag-value'>{{ isFeatureFlagEnabled }}</div>",
  });

  const wrapper = mount(TestComponent, {
    // mock what main.ts in a vue app is doing
    global: {
      provide: {
        configCatClient: mockConfigCatClient,
      },
    },
  });
  expect(wrapper.find("#feature-flag-value").text()).toBe("false");
});
