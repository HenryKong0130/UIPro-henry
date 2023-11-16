<template>
  <h1 class="row-title">普通引入</h1>
  <div class="row">
    <Henry-Button>默认按钮</Henry-Button>
    <Henry-Button type="primary">主要按钮</Henry-Button>
    <Henry-Button type="info">信息按钮</Henry-Button>
    <Henry-Button type="success">成功按钮</Henry-Button>
    <Henry-Button type="warning">警告按钮</Henry-Button>
    <Henry-Button type="danger">危险按钮</Henry-Button>
  </div>
  <h1 class="row-title">朴素按钮</h1>
  <div class="row">
    <Henry-Button plain>默认按钮</Henry-Button>
    <Henry-Button type="primary" plain>主要按钮</Henry-Button>
    <Henry-Button type="info" plain>信息按钮</Henry-Button>
    <Henry-Button type="success" plain>成功按钮</Henry-Button>
    <Henry-Button type="warning" plain>警告按钮</Henry-Button>
    <Henry-Button type="danger" plain>危险按钮</Henry-Button>
  </div>
  <h1 class="row-title">圆角按钮</h1>
  <div class="row">
    <Henry-Button round>默认按钮</Henry-Button>
    <Henry-Button type="primary" round>主要按钮</Henry-Button>
    <Henry-Button type="info" round>信息按钮</Henry-Button>
    <Henry-Button type="success" plain round>成功按钮</Henry-Button>
    <Henry-Button type="warning" plain round>警告按钮</Henry-Button>
    <Henry-Button type="danger" plain round>危险按钮</Henry-Button>
  </div>
  <h1 class="row-title">禁用状态</h1>
  <div class="row">
    <Henry-Button disabled>默认按钮</Henry-Button>
    <Henry-Button type="primary" disabled>主要按钮</Henry-Button>
    <Henry-Button type="info" disabled>信息按钮</Henry-Button>
    <Henry-Button type="success" disabled>成功按钮</Henry-Button>
    <Henry-Button type="warning" disabled>警告按钮</Henry-Button>
    <Henry-Button type="danger" disabled>危险按钮</Henry-Button>
  </div>
  <h1 class="row-title">等待状态</h1>
  <div class="row">
    <Henry-Button loading>默认按钮</Henry-Button>
    <Henry-Button type="primary" loading>主要按钮</Henry-Button>
    <Henry-Button type="info" loading>信息按钮</Henry-Button>
    <Henry-Button type="success" loading round>成功按钮</Henry-Button>
    <Henry-Button type="warning" loading round>警告按钮</Henry-Button>
    <Henry-Button type="danger" loading round>危险按钮</Henry-Button>
  </div>
  <h1 class="row-title">图标按钮</h1>
  <div class="row">
    <Henry-Button icon="file">默认按钮</Henry-Button>
    <Henry-Button type="primary" icon="gear">主要按钮</Henry-Button>
    <Henry-Button type="info" icon="folder" plain>信息按钮</Henry-Button>
    <Henry-Button type="success" icon="bug" plain>成功按钮</Henry-Button>
    <Henry-Button type="warning" icon="code" round>警告按钮</Henry-Button>
    <Henry-Button type="danger" icon="cube" round>危险按钮</Henry-Button>
  </div>
  <h1 class="row-title">不同尺寸的按钮</h1>
  <div class="row">
    <Henry-Button icon="file" size="small">默认按钮</Henry-Button>
    <Henry-Button type="primary" icon="gear" size="small">主要按钮</Henry-Button>
    <Henry-Button type="info" icon="folder" plain>信息按钮</Henry-Button>
    <Henry-Button type="success" icon="bug" plain>成功按钮</Henry-Button>
    <Henry-Button type="warning" icon="code" plain size="large">警告按钮</Henry-Button>
    <Henry-Button type="danger" icon="cube" plain size="large">危险按钮</Henry-Button>
  </div>
  <h1 class="row-title">圆形按钮</h1>
  <div class="row">
    <Henry-Button type="danger" circle>验</Henry-Button>
    <Henry-Button type="primary" icon="gear" circle></Henry-Button>
    <Henry-Button type="info" icon="folder" circle plain></Henry-Button>
    <Henry-Button type="success" icon="bug" circle plain></Henry-Button>
    <Henry-Button type="warning" icon="code" circle disabled></Henry-Button>
    <Henry-Button type="danger" icon="cube" circle disabled></Henry-Button>
  </div>
  <h1 class="row-title">按钮事件</h1>
  <div class="row">
    <Henry-Button type="primary" @click="clickHandler" ref="btnRef">主要按钮</Henry-Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const btnRef = ref(null)

function clickHandler() {
  window.alert('按钮被点击了')
  console.log(btnRef.value.ref)
}</script>

<style lang="scss" scoped></style>
