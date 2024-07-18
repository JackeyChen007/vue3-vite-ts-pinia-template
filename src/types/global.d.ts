//全局组件实例访问到的全局属性的对象。
import { Store } from '@/store'
import { Comp } from '@/composables'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store
    $comp: Comp
  }
}
