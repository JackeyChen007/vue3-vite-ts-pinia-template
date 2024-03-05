import { useUser } from './modules/user'
import { useSetting } from './modules/settings'
import { useFont } from './modules/font'

const useComp = () => ({
  user: useUser(),
  setting: useSetting(),
  font: useFont(),
})

export default useComp
