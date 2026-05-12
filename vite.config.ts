import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextResolver } from 'bootstrap-vue-next'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),

    // Auto-import Vue composables and APIs
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          '@vueuse/core': [
            'useDark',
            'useToggle',
            'useStorage',
            'useWindowSize',
            'useEventListener',
          ],
        },
      ],
      dirs: ['./src/composables'],
      dts: './src/types/auto-imports.d.ts',
      vueTemplate: true,
    }),

    // Auto-import components
    Components({
      dirs: ['./src/components'],
      dts: './src/types/components.d.ts',
      resolvers: [BootstrapVueNextResolver()],
      deep: true,
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_variables.scss" as *;`,
        api: 'modern-compiler',
        silenceDeprecations: [
          'color-functions',
          'global-builtin',
          'import',
          'legacy-js-api',
          'if-function',
          'slash-div',
          'function-units',
        ],
        quietDeps: true,
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },

  build: {
    target: 'esnext',
    sourcemap: true,
  },

  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'axios', '@vueuse/core'],
  },
})
