import useUserStore from './modules/user'
import useSettingStore from './modules/settings'

const useStore = () => ({
  user: useUserStore(),
  setting: useSettingStore(),
})

export default useStore
