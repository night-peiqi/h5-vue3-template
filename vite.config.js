import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import VueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import autoprefixer from 'autoprefixer'
import pxtorem from 'postcss-pxtorem'
import postImport from 'postcss-import'

// https://vitejs.dev/config/
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // VueDevTools(),
    AutoImport({
      resolvers: [VantResolver()]
    }),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        // 将所有的 @import 规则合并到一个css文件中，减少http请求
        postImport(),
        pxtorem({
          rootValue: 37.5,
          unitPrecision: 5,
          propList: ['*']
        })
      ]
    }
  }
})
