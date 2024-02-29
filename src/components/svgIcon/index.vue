<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '',
  },
  //单位大小是px
  size: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '20',
  },
  height: {
    type: String,
    default: '20',
  },
  //重叠属性需要加!important方可生效
  className: {
    type: String,
    default: '',
  },
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
<template>
  <svg class="svg-icon" :class="className" :style="{ height: props.size + 'px', width: props.size + 'px' }" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>
<style lang="scss" scoped>
.svg-icon {
  width: calc(v-bind('props.width') * 1px);
  height: calc(v-bind('props.height') * 1px);
  vertical-align: -0.15rem;
  fill: currentColor;
  overflow: hidden;
}
</style>
