import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents() {},
    testIsolation: false,
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  env: {
    api_url: "https://api.openweathermap.org/data/2.5",
    api_key: "57c58e149533ed397565c615f1b20806",
  },
});
