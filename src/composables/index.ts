import { useUser } from './modules/user'
import { useSetting } from './modules/settings'

const useFetch = () => ({
  user: useUser(),
  setting: useSetting(),
})

export default useFetch
