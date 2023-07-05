import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    qiankun('react18',{
      useDevMode:true
    })
  ],
  base: '/',
  server:{
    port:3001,
    cors: true,
  }
})
