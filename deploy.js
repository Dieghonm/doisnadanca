import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 ADICIONE a base com seu usuário e repositório
export default defineConfig({
  plugins: [react()],
  base: '/youtube-video-list/'  // muito importante pro GitHub Pages funcionar
})

