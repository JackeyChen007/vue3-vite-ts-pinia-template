import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 解决 `import { ref , reactive ..... } from 'vue'` 大量引入的问题
    AutoImport({
      dts: 'src/types/auto-imports.d.ts', // 这里是生成的global函数文件
      imports: ['vue', 'vue-router', 'pinia'],
    }),
    // 自动导入全局组件
    Components({
      dirs: ['src/components/'],
      extensions: ['vue'],
      dts: 'src/types/components.d.ts',
    }),
    //svg
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      symbolId: 'icon-[dir]-[name]',
      customDomId: '__svg__icons__dom__',
    }),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 index.scss 这样就可以在全局中使用 index.scss中预定义的变量了
        additionalData: '@import "@/styles/app-theme.scss";',
      },
    },
  },
})
