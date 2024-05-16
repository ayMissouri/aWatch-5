import million from 'million/compiler';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }), vue()],
});
