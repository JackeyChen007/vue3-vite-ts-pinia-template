<script setup lang="ts"></script>

<template>
  <header>
    <div class="wrapper" p-4 bg-cyan flex justify-between items-center>
      <nav text-8>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About </RouterLink>
        <RouterLink to="/text">text </RouterLink>
        <RouterLink to="/404">404</RouterLink>
      </nav>
      <AppCheckbox>
        <div class="navigation-menu">
          <a href="#introduction">我们的使命</a>
          <a href="#area">覆盖地区</a>
          <a href="#specification">使用指南</a>
          <a href="#problem">常见问题</a>
        </div>
      </AppCheckbox>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
}

nav a.router-link-exact-active {
  color: $main;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
