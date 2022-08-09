import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue';
import path from "path";

export default {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  plugins: [
    vue({}),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/TwitterTimeline.vue"),
      name: "vue-twitter-timeline",
    },
  }
};
