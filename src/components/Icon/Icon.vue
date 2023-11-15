<template>
  <i
    class="henry-icon"
    :class="{[`henry-icon--${type}`]:type}"
  >
    <!-- 使用引入的fontawesome组件 -->
    <!-- 并在此基础上进行二次封装 -->
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>

<script setup>
import { computed } from 'vue'
import propsObj from './props'
import { omit } from 'lodash-es'
defineOptions({
  name: 'Henry-Icon'
})
const props = defineProps(propsObj)
//使用omit方法对props进行过滤，筛选掉自定义的属性
const filteredProps = computed(() => omit(props, ['type']))
</script>

<style lang="scss" scoped>
</style>