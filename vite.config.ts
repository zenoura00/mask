import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mask/', // 👈 اسم مستودع GitHub بالضبط
  plugins: [react()],
})
