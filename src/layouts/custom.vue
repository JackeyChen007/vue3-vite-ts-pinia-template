<script setup lang="ts"></script>

<template>
  <div class="layout-custom">
    <AppHeader />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout-custom {
  height: 100%;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
  }

  overflow: scroll;
  &::-webkit-scrollbar {
    display: block;
    width: 5px;
    height: 5px;
  }
  // 滚动条轨道
  &::-webkit-scrollbar-track {
    background: transparent;
    // border-radius: 5px;
  }
  // 滚动条滑块
  &::-webkit-scrollbar-thumb {
    background: rgb(56, 54, 55);
    // border-radius: 5px;
  }
  // 滚动条滑块hover
  &::-webkit-scrollbar-thumb:hover {
    background: #252324;
    cursor: pointer;
  }
}

</style>
