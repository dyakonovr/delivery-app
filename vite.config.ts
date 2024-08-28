import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginSvgr from "vite-plugin-svgr";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSvgr(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
