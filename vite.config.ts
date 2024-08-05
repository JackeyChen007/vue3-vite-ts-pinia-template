import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import UnoCSS from 'unocss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 获取`.env`环境配置文件
  const env = loadEnv(mode, process.cwd())
  return {
    base: './',
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
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        symbolId: 'icon-[dir]-[name]',
        customDomId: '__svg__icons__dom__',
      }),
      UnoCSS(),
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
          additionalData: '@import "@/styles/app-theme.scss";@import "@/styles/mixin.scss";@import "@/styles/variables.module.scss";',
        },
      },
    },
    server: {
      host: '0.0.0.0', // 局域网别人也可访问
      port: Number(env.VITE_APP_PORT), //访问端口
      open: true, // 运行时自动打开浏览器
      // IP跨域前后端都可以配置,如果后端配置,则不需要再配置代理
      // proxy: {
      //   [env.VITE_APP_BASE_API]: {
      //     target: env.VITE_APP_SERVICE_API, // 将请求代理到这个地址
      //     changeOrigin: true, // 是否改变请求头中的 Origin 字段，默认为 false
      //     rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), ''), // 将请求路径中的 /api 前缀去掉，并添加 /api/external/lifestyle 前缀
      //   },
      // },
    },
  }
})
