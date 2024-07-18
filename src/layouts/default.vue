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
  main {
    flex: 1;
  }
}
</style>
