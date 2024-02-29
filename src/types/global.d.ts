interface ImportMeta {
  readonly env: {
    readonly VITE_APP_BASE_API: string
    // 其他环境变量
  }
  glob: ImportGlobEagerFunction
}

interface ImportGlobEagerFunction {
  /**
   * Eagerly import a list of files with a glob pattern.
   *
   * Overload 1: No generic provided, infer the type from `as`
   */
  <As extends string, T = As extends keyof KnownAsTypeMap ? KnownAsTypeMap[As] : unknown>(glob: string | string[], options?: Omit<ImportGlobOptions<boolean, As>, 'eager'>): Record<string, T>
  /**
   * Eagerly import a list of files with a glob pattern.
   *
   * Overload 2: Module generic provided
   */
  <M>(glob: string | string[], options?: Omit<ImportGlobOptions<boolean, string>, 'eager'>): Record<string, M>
}

//全局组件实例访问到的全局属性的对象。
import { Store } from '@/store'
import { Fetch } from '@/composables'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store
    $fetch: Fetch
  }
}


