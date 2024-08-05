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
    width: calc(100% - 5px);
  }

  overflow: auto;
  @include scrollBar;
}
</style>
