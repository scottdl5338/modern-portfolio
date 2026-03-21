import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//Import Tailwind CSS plugin for Vite
import tailwindcss from "@tailwindcss/vite";
//Gets the current file path and directory name for resolving paths
import path from "path";
//translates a file URL to a file path, which is necessary for using ES modules in Node.js to get the current file's path and directory.
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  // Add Tailwind CSS plugin to the Vite configuration
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
