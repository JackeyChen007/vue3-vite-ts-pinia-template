<script setup lang="ts">
onMounted(() => {
  window.addEventListener('resize', handleResize)
  setFontSize(screenWidth.value)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const screenWidth = ref(window.innerWidth)

const setFontSize = (width: number) => {
  const htmlElement = document.querySelector('html')
  if (htmlElement && width > 600) {
    htmlElement.style.fontSize = '60px'
  }
}

const handleResize = () => {
  screenWidth.value = window.innerWidth
}

watch(screenWidth, (newWidth) => {
  setFontSize(newWidth)
})
const active = ref(0)
</script>

<template>
  <RouterView />
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="contact-o" to="/mine">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style lang="scss" scoped></style>
