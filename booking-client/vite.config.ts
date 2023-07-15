import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: '**/*.tsx',
    }),
  ],
  base: '',
  envDir: 'environment',
  server: {
    open: true,
  },
  resolve: {
    alias: {
      assets: resolve(__dirname, './src/assets'),
      components: resolve(__dirname, './src/components'),
      'rtk-app': resolve(__dirname, './src/rtk-app'),
      screens: resolve(__dirname, './src/screens'),
      settings: resolve(__dirname, './src/settings'),
      types: resolve(__dirname, './src/types'),
    },
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests',
    mockReset: true,
  },
})
