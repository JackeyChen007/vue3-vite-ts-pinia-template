# vue3-vite-ts-pinia-template

## 简介

vue3-vite-ts-pinia-template 是一个免费开源的中后台模版。使用了最新的`vue3`,`vite4`,`TypeScript`等主流技术开发，开箱即用的中后台前端解决方案，也可用于学习参考。

## 特性

- **最新技术栈**：使用 Vue3/vite4 等前端前沿技术开发
- **TypeScript**: 应用程序级 JavaScript 的语言
- **组件** 二次封装了多个常用的组件

## 目录说明

```shell
├── doc # 项目文档
│   ├── img # 图片
│   └── Markdown # 文档说明
├── public # 公共静态资源目录
├── src # 主目录
│   ├── api # 接口文件
│   ├── assets # 资源文件
│   │   ├── icons # icon sprite 图标文件夹
│   │   ├── images # 项目存放图片的文件夹
│   │   └── svg # 项目存放svg图片的文件夹
│   ├── components # 公共组件
│   ├── composables # 组合式函数
│   │   ├── modules # 所有函数模块
│   │   └── index # 主入口
│   ├── icons # 图标文件夹
│   │   └── svg # 项目存放svg图片的文件夹
│   ├── layout # 布局文件
│   │   ├── components # 布局组件
│   │   └── index # 页面布局
│   ├── router # 路由配置
│   ├── store # 数据仓库
│   │   ├── modules # 所有仓库模块
│   │   └── index # 主入口
│   ├── styles # 全局样式
│   ├── types # ts类型声明文件
│   ├── utils # 工具类
│   ├── views # 页面
│   └── main.ts # 主入口
├── .env.dev # 开发环境
├── .env.prod # 生产环境
└── vite.config.ts # vite配置文件
```

## 安装使用

- 获取项目代码

```shell
git clone https://github.com/JackeyChen007/vue3-vite-ts-pinia-template.git
```

- 安装依赖

```shell
cd vue3-vite-ts-pinia-template

npm install
```

- 运行开发环境

```shell
npm run dev
```

- 打包生产环境

```shell
npm run build
```

-  预览生产环境

```shell
npm run preview
```

## vite 插件
本项目已使用以下插件

-  [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) - 解决 `import { ref , reactive ..... } from 'vue'` 大量引入的问题
-  [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components?tab=readme-ov-file#unplugin-vue-components) - 用于自动导入自定义组件
-  [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons) - 用于生成 svg 图片