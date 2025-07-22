import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ARPilot/", // <- Add this line
  plugins: [react()],
});
