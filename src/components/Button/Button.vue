<template>
    <button 
    ref="_ref"
    class="henry-button"
    :class="{
    [`henry-button--${type}`]:type,
    [`henry-button--${size}`]: size,
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled || loading,
    }"
      :disabled="disabled || loading"
    >
    <Henry-Icon icon="spinner" spin v-if="loading" />
    <Henry-Icon :icon="icon" v-if="icon" />
    <span v-if="$slots.default">
      <slot />
    </span>
    </button>
</template>

<script setup>
import { ref } from 'vue'
import propsObj from './props'
defineOptions({
    name:'Henry-Button'
})
defineProps(propsObj)

// 通过 _ref 获取 button 元素
const _ref = ref(null)

defineExpose({
  ref: _ref
})
</script>

<style lang="scss" scoped>

</style>