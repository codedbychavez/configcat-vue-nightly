import { expectTypeOf, test } from "vitest";
import { defineComponent } from "vue";
import { useConfigCatClient } from "../src/composables/useConfigCatClient";
import { mount } from "@vue/test-utils";
import { mockConfigCatClient } from "./mocks/mockConfigCatClient";
import { IConfigCatClient } from "configcat-common";

test("Can inject the configCatClient provided in the global scope into a component", () => {
  const TestComponent = defineComponent({
    setup() {
      const configCatClient = useConfigCatClient();
      return {
        configCatClient,
      };
    },
    template: "<div></div>",
  });

  const wrapper = mount(TestComponent, {
    // mock what main.ts is doing
    global: {
      provide: {
        configCatClient: mockConfigCatClient,
      },
    },
  });

  // check if the correct type provided was injected into the child component
  expectTypeOf(
    wrapper.getComponent(TestComponent).vm.configCatClient
  ).toEqualTypeOf<IConfigCatClient>();
});
