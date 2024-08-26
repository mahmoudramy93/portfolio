import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginRequire from "vite-plugin-require";
import path from "path";

export default defineConfig({
  plugins: [react(), vitePluginRequire.default()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@data": path.resolve(__dirname, "src/data"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@sections": path.resolve(__dirname, "src/sections"),
      "@rtk": path.resolve(__dirname, "src/rtk"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
});
