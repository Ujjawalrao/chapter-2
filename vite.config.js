import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import nesting from 'tailwindcss/nesting'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        nesting,
        tailwindcss,
        autoprefixer,
      ],
    },
  },
}) 