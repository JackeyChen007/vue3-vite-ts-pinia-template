<template>
  <div class="about">
    <h1>实现元素平滑上升指令</h1>
    <div v-slide-in="1000" class="box" v-for="i in 20">{{ i }}</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
  }
}
.about {
  overflow-y: scroll;
}
.box {
  width: 500px;
  height: 200px;
  margin: 30px 0;
  background: greenyellow;
}
</style>
