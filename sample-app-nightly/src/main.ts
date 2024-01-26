import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { ConfigCatPlugin } from "configcat-vue";
// Customizing the polling interval
import { PollingMode } from "configcat-vue";

const app = createApp(App);

app.use(router);

app.use(ConfigCatPlugin, {
  sdkKey: "gnLbCJ_nhUCGHl1SZNyC5Q/V794nqFnpkWY_7TuhXTaOw",
  pollingMode: PollingMode.AutoPoll,
  clientOptions: {
    pollIntervalSeconds: 5,
  }
});

app.mount("#app");
