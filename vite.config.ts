import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    outDir: "build"
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react"
    }),
    checker({
      typescript: true,
      eslint: { lintCommand: "eslint src/ --max-warnings=0" }
    })
  ],
  server: {
    port: 3000
  }
});
