import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//****** ↓↓↓ 全局样式 ↓↓↓ ******
import './styles/index.scss'
import 'animate.css'

//****** ↓↓↓ 注册svg脚本 ↓↓↓ ******
import 'virtual:svg-icons-register'

//****** ↓↓↓ 注册unocss ↓↓↓ ******
import 'virtual:uno.css'

//****** ↓↓↓ 配置路由 ↓↓↓ ******
import router from './router/routers'
app.use(router)

//****** ↓↓↓ 路由守卫 ↓↓↓ ******
// import '@/router/guard'

//****** ↓↓↓ pinia ↓↓↓ ******
import { createPinia } from 'pinia'
const pinia = createPinia()
// 重写 $reset 方法 => 解决组合式api中无法使用问题
pinia.use(({ store }) => {
  const initialState = JSON.parse(JSON.stringify(store.$state))
  store.$reset = () => {
    store.$patch(initialState)
  }
})
app.use(pinia)

//****** ↓↓↓ 配置全局store ↓↓↓ ******
import useStore from '@/store'
app.provide('store', useStore())

//****** ↓↓↓ 配置全局composables ↓↓↓ ******
import hooks from '@/hooks'
app.provide('hooks', hooks())

//****** ↓↓↓ 配置全局api ↓↓↓ ******
import api from '@/api'
app.provide('api', api)

//****** ↓↓↓ 注册自定义指令 ↓↓↓ ******
import directives from '@/directive'
for (const key in directives) {
  if (directives.hasOwnProperty(key)) app.directive(key, directives[key])
}

app.mount('#app')
