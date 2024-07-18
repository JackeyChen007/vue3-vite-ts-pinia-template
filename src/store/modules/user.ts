import { defineStore } from 'pinia'

const useUserStore = defineStore('user', () => {
  const route = useRoute()
  const router = useRouter()

  const isLogin = ref(false)
  // 退出登录
  const logout = () => {
    // 清空pinia存储的数据
    useUserStore().$reset()

    // tips: pinia持久化的无法通过这种方式清空数据，只能删除同样方式存储的值 eg: window.localStorage.setItem('user2', 'hello');
    window.localStorage.clear()
    window.sessionStorage.clear()

    // 跳转登录页
    router.push(`/login?redirect=${route.fullPath}`)
  }
  return { isLogin, logout }
})

export default useUserStore
