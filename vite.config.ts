import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Default: '/' for Vercel, Netlify, and `npm run dev`.
// GitHub Pages (username.github.io/Portfolio/): use `npm run build:github` or the GitHub Action (passes --base /Portfolio/).
export default defineConfig({
  plugins: [react()],
  base: '/',
})
