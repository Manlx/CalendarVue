<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1>Gamers will Game</h1>
  <RouterView />
  <div class="RouterZ">
    <div class="RouterZB"><h1>Homes</h1></div>
    <div class="RouterZB"><h1>Homes</h1></div>
    <div class="RouterZB"><h1>Homes</h1></div>
  </div>
</template>

<style scoped>
.RouterZ{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: brown;
}
.RouterZB{
  background-color: aqua;
}
</style>
