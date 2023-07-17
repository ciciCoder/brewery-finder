import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV === 'production'
      ? 'https://ciciCoder.github.io/brewery-finder/'
      : undefined,
  plugins: [
    react(),
    //@ts-ignore
    tailwindcss(),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
