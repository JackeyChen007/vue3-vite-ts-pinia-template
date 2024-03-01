import { useUser } from './modules/user'
import { useSetting } from './modules/settings'

const useComp = () => ({
  user: useUser(),
  setting: useSetting(),
})

export default useComp
