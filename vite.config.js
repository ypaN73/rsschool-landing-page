import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    port: 3001,
    open: true, //автооткрытие браузера
  },
  build: {
    sourcemap: true,
    minify: false,
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        catalog: resolve(import.meta.dirname, "catalog.html"),
      },
    },
  },
});
