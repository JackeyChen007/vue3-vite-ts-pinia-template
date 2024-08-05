<script setup lang="ts"></script>

<template>
  <div class="layout-default">
    <AppHeader />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout-default {
  height: 100%;
  display: flex;
  flex-direction: column;
  // 减去浏览器滚动条宽度
  // margin-right: calc(100% - 100vw);
  // margin-right: - $scrollBarWidth;
  @include scrollBar;

  main {
    flex: 1;
  }
}
</style>
