<script setup>
import NavBar from 'components/navbar/NavBar.vue'
</script>
<template>
  <div class="bg-[url('assets/images/home-background.jpg')] h-[100vh]">
    <nav-bar></nav-bar>
    <div class="pt-[84px]">
      <router-view></router-view>
    </div>
  </div>
</template>
