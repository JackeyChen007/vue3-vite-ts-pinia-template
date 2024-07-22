<script setup lang="ts">
import useStore from '@/store'

const { counter: counterNumber } = storeToRefs(useStore().setting)
console.log(import.meta.env)
console.log('DEV',import.meta.env.DEV)
console.log('PROD',import.meta.env.PROD)

const hooks = inject('hooks') as any
const store = inject('store') as any
</script>

<template>
  <div h-1000>
    <SvgIcon name="baidu" color="black" size="100"></SvgIcon>

    {{ counterNumber }}
    {{ store.setting.counter }}
    {{ hooks.user.counter }}
    {{ hooks.user.doubleCounter }}
    <button @click="hooks.user.increment">+1按钮</button>
  </div>
</template>
