<template>
  <h1 class="title">henry的组件库展示</h1>
  <nav class="nav">
    <RouterLink to="/">Icon</RouterLink>
    <RouterLink to="/button">Button</RouterLink>
    <router-link to="/card">Card</router-link>
    <router-link to="/dialog">Dialog</router-link>
    <router-link to="/pager">Pager</router-link>
    <router-link to="/collapse">Collapse</router-link>
    <router-link to="/tooltip">Tooltip</router-link>
    <router-link to="/dropdown">Dropdown</router-link>
  </nav>
  <div class="displayArea">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
h1.title {
  text-align: center;
  // margin-top: 5em;
  font-weight: 200;
}

.nav {
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
}

.displayArea {
  margin-top: 2em;
}
.active {
  border-bottom: 3px solid hsla(160, 100%, 37%, 1);
}
</style>
