import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import prerender from 'vite-plugin-prerender'

export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.join(process.cwd(), 'dist'),
      routes: ['/', '/our-services', '/corporate-training', '/institutional-training', '/individual-coaching', '/about-us'],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
})