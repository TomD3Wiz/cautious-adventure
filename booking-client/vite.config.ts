import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.tsx",
    }),
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      'assets': resolve(__dirname, './src/assets'),
      'components': resolve(__dirname, './src/components')
    },
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
