<template>
  <div class="about">
    关于
    <h1>实现元素平滑上升指令</h1>
    <div v-slide-in="1000" class="box" v-for="i in 20">{{ i }}</div>
  </div>
</template>

<style>

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 200px;
  margin: 30px auto;
  background: greenyellow;
}
</style>
