import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/npm/", // Use your repository name here
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
