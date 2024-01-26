import { inject } from "vue";
// Types
import { type IConfigCatClient } from "configcat-common";

export function useConfigCatClient(): IConfigCatClient {
  // inject the configCatClient provided in src/main.ts
  const configCatClient =
    inject<IConfigCatClient>("configCatClient") ??
    (() => {
      throw new Error("ConfigCatPlugin was not installed.");
    })();

  return configCatClient;
}
