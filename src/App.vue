<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="RouteHeader">
    <router-link to="/AssignmentSchedule">Assignment Calendar</router-link>
    <router-link to="/ClassSchedule">Class Schedule</router-link>
  </div>
  
  <RouterView />
  <h2>After</h2>
</template>

<style>
  .RouteHeader{
    
    background-color: #454545;
    margin: 30px 60px;
    padding: 30px 60px;
    border:#454545 solid 5px;
    border-radius: 50px;
    display: flex;
    justify-content: space-around;
  }
  .RouteHeader a{
    font-size: 3vw;
  }
</style>
