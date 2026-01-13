import { defineConfig } from 'vite'

export default defineConfig({
  // Since your URL is ishalijadhav.github.io, the base is '/'
  base: '/', 
  build: {
    outDir: 'dist', // This is where Vite will put the final website files
  }
})
