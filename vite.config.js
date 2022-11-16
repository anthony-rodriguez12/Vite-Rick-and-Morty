import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://anthony-rodriguez12.github.io/Vite-Rick-and-Morty/",
  plugins: [react()]
})
