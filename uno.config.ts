// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  /**
   * 自定义快捷语句
   */
  shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
    center: 'flex items-center justify-center',
    'text-title': 'text-primary text-9 font-500 text-center',
    'text-subtitle': 'text-primary/60 text-6 text-center',
  },
  theme: {
    colors: {
      primary: '#252324', // class="text-primary"
      pale: '#FFFCF5', // class="text-pale"
      canary: '#F6F5F2', // class="text-canary"
      sub: {
        primary: 'hsl(var(--hue, 217) 78% 51%)', //class="bg-brand-primary"
      },
    },
  },
  presets: [
    // 官方预设
    presetUno(),
    // 支持css class属性化
    presetAttributify(),
    // 支持css图标
    presetIcons(),
    // 支持css排版
    presetTypography(),
    // 支持css字体
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        noto: 'Noto Sans SC:100,200,300,400,500,600,700,800,900', // 添加所有需要的字重
      },
    }),
  ],

  transformers: [transformerDirectives(), transformerVariantGroup()],
})
