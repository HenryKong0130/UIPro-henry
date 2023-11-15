<template>
  <h1 class="row-title">普通引入</h1>
  <div class="row">
    <Henry-Icon icon="user-secret" />
    <Henry-Icon icon="bars" />
    <Henry-Icon icon="shield-halved" />
    <Henry-Icon icon="file" />
    <Henry-Icon icon="filter" />
    <Henry-Icon icon="gear" />
    <Henry-Icon icon="barcode" />
    <Henry-Icon icon="folder" />
    <Henry-Icon icon="folder-open" />
  </div>
  <h1 class="row-title">设置不同的大小</h1>
  <div class="row">
    <Henry-Icon icon="user-secret" size="2xs" />
    <Henry-Icon icon="bars" size="xs" />
    <Henry-Icon icon="shield-halved" size="sm" />
    <Henry-Icon icon="file" size="lg" />
    <Henry-Icon icon="filter" size="xl" />
    <Henry-Icon icon="gear" size="2xl" />
    <Henry-Icon icon="barcode" size="2x" />
    <Henry-Icon icon="folder" size="3x" />
    <Henry-Icon icon="folder-open" size="4x" />
  </div>
  <h1 class="row-title">旋转与翻转</h1>
  <div class="row">
    <Henry-Icon icon="user-secret" rotation="90" size="xl" />
    <Henry-Icon icon="bars" rotation="270" size="xl" />
    <Henry-Icon icon="shield-halved" rotation="180" size="xl" />
    <Henry-Icon icon="file" flip="horizontal" size="xl" />
    <Henry-Icon icon="filter" flip="vertical" size="xl" />
    <Henry-Icon icon="folder-open" flip="both" size="xl" />
  </div>
  <h1 class="row-title">动画效果</h1>
  <div class="row">
    <Henry-Icon icon="user-secret" size="xl" beat />
    <Henry-Icon icon="bars" size="xl" beat-fade />
    <Henry-Icon icon="shield-halved" size="xl" bounce />
    <Henry-Icon icon="file" size="xl" fade />
    <Henry-Icon icon="filter" size="xl" flip />
    <Henry-Icon icon="gear" size="xl" shake />
    <Henry-Icon icon="barcode" size="xl" spin />
    <Henry-Icon icon="folder" size="xl" spin spin-reverse />
    <Henry-Icon icon="folder-open" size="xl" spin-pulse />
  </div>
  <h1 class="row-title">自定义主题色</h1>
  <div class="row">
    <Henry-Icon icon="user-secret" type="primary"/>
    <Henry-Icon icon="bars" type="success"/>
    <Henry-Icon icon="shield-halved" type="warning"/>
    <Henry-Icon icon="file" type="danger"/>
    <Henry-Icon icon="filter" type="info"/>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
