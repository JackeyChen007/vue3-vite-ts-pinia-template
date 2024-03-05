<script setup lang="ts">
import { showToast } from 'vant'
import 'vant/es/toast/style'
</script>

<template>
  首页
  <van-button type="primary" @click="showToast('这个是一个弹窗')">打开弹窗</van-button>
</template>
