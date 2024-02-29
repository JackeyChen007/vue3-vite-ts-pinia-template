import { defineStore } from 'pinia'

const useUserStore = defineStore('user', () => {
  const counter = ref(0)
  const doubleCounter = computed(() => counter.value * 2)
  const increment = () => {
    counter.value++
  }
  return { counter, doubleCounter, increment }
})

export default useUserStore
