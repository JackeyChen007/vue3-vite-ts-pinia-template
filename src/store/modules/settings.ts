import { defineStore } from 'pinia'

const useSettingStore = defineStore('setting', () => {
  const counter = ref(1)
  return { counter }
})

export default useSettingStore
