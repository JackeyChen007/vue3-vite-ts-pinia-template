import { defineStore } from 'pinia'
import { localStorage } from '@/utils/storage'


const useUserStore = defineStore('user', () => {
  const counter = ref(0)
  const doubleCounter = computed(() => counter.value * 2)
  const increment = () => {
    counter.value++
  }

  const tokenValue: string = localStorage.get('tokenValue') || ''
  const roleCodeList = () => {}
  const getUserInfo = () => {}
  const resetToken = () => {}
  return { counter, doubleCounter, increment, tokenValue, roleCodeList, getUserInfo, resetToken }
})

export default useUserStore
