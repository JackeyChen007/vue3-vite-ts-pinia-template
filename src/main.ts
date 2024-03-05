import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//****** ↓↓↓ 全局样式 ↓↓↓ ******
import './styles/index.scss'
import 'amfe-flexible'

//****** ↓↓↓ 注册svg脚本 ↓↓↓ ******
import 'virtual:svg-icons-register'

//****** ↓↓↓ 配置路由 ↓↓↓ ******
import router from './router/routers'
app.use(router)

//****** ↓↓↓ 路由守卫 ↓↓↓ ******
// import '@/router/guard'

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

app.mount('#app')
