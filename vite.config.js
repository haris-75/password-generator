/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@components': path.resolve(__dirname, './src/components'),
      '@typography': path.resolve(__dirname, './src/typography'),
      '@ui': path.resolve(__dirname, './src/common/ui'),
      '@svg': path.resolve(__dirname, './src/common/svg'),
    },
  },

  server: {
    host: true,
    port: 3000,
  },

  base: "./password-generator/",

  build: {
    sourcemap: true,
  },
})
