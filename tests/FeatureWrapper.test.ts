import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";

import FeatureWrapper from "../src/components/FeatureWrapper.vue";

test("The default slot should render when the isHidden value is true", () => {
  const wrapper = mount(FeatureWrapper, {
    data() {
      return {
        isHidden: true,
      };
    },
    slots: {
      default: "<div>the new feature</div>",
    },
  });

  // Assert the rendered text of the component
  expect(wrapper.html()).toContain("<div>the new feature</div>");
});

test("The default slot should not render when the isFeatureFlagEnabled value is false", () => {
  const wrapper = mount(FeatureWrapper, {
    data() {
      return {
        isHidden: false,
      };
    },
    slots: {
      default: "<div>the new feature</div>",
    },
  });

  // Assert the rendered text of the component
  expect(wrapper.html()).not.toContain("<div>the new feature</div>");
});

test("The else slot should render when the isFeatureFlagEnabled value is false", () => {
  const wrapper = mount(FeatureWrapper, {
    data() {
      return {
        isHidden: false,
      };
    },
    slots: {
      else: "<div>feature not enabled</div>",
    },
  });

  // Assert the rendered text of the component
  expect(wrapper.html()).toContain("<div>feature not enabled</div>");
});

test("The loading slot should render when the isFeatureFlagEnabled value is neither true nor false", () => {
  const wrapper = mount(FeatureWrapper, {
    data() {
      return {
        isHidden: null,
      };
    },
    slots: {
      loading: "<div>loading...</div>",
    },
  });

  // Assert the rendered text of the component
  expect(wrapper.html()).toContain("<div>loading...</div>");
});
