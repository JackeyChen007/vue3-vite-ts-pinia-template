import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//****** ↓↓↓ 全局样式 ↓↓↓ ******
import './assets/main.css'
import './styles/index.scss'

//****** ↓↓↓ 注册svg脚本 ↓↓↓ ******
import 'virtual:svg-icons-register'

//****** ↓↓↓ 路由 ↓↓↓ ******
import router from './router'
app.use(router)

//****** ↓↓↓ pinia ↓↓↓ ******
import { createPinia } from 'pinia'
app.use(createPinia())

//****** ↓↓↓ 配置全局store ↓↓↓ ******
import useStore from '@/store'
app.config.globalProperties.$store = useStore()

//****** ↓↓↓ 配置全局composables ↓↓↓ ******
import useComp from '@/composables'
app.config.globalProperties.$comp = useComp()

//****** ↓↓↓ 配置全局api ↓↓↓ ******
import api from '@/api'
app.config.globalProperties.$api = api

//****** ↓↓↓ 注册自定义指令 ↓↓↓ ******
import directives from '@/directive'
for (const key in directives) {
  if (directives.hasOwnProperty(key)) app.directive(key, directives[key])
}

app.mount('#app')
