<script setup lang="ts">
import useStore from '@/store'
// import { swiperAnimateCache, swiperAnimate, clearSwiperAnimate } from '@/utils/animate'

const { counter: counterNumber } = storeToRefs(useStore().setting)
console.log(import.meta.env)
console.log('DEV', import.meta.env.DEV)
console.log('PROD', import.meta.env.PROD)

const hooks = inject('hooks') as any
const store = inject('store') as any
</script>

<template>
  <div h-1000>
    <div class="w-full h-10 bg-green"></div>
    <SvgIcon name="baidu" color="black" size="100"></SvgIcon>

    {{ counterNumber }}
    {{ store.setting.counter }}
    {{ hooks.user.counter }}
    {{ hooks.user.doubleCounter }}
    <button @click="hooks.user.increment">+1按钮</button>
    <div class="home-con">
      <div class="home-txt flex align-c flex-v">
        <h4 class="animation" swiper-animate-effect="pulse" swiper-animate-duration="1s">Section One</h4>
        <p class="animation" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s">For everything there is a season,and a time for every matter under heaven.</p>
      </div>
    </div>
  </div>
</template>
