import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // 👈 important pour que les chemins fonctionnent après build
  plugins: [react()],
})
