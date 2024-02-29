# [unplugin-auto-import/vite](https://github.com/unplugin/unplugin-auto-import)

## 一、安装插件

```shell
npm i -D unplugin-auto-import
```

## 二、vite.config.ts中配置插件

```javascript
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    // 解决 `import { ref , reactive ..... } from 'vue'` 大量引入的问题
      AutoImport({
        dts: 'src/types/auto-imports.d.ts', // 这里是生成的global函数文件
        imports: ['vue', 'vue-router', 'pinia'],
      }),
  ],
})

```

