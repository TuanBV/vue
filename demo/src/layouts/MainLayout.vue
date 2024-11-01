<script setup>
import NavBar from 'components/navbar/NavBar.vue'
</script>
<template>
  <nav-bar></nav-bar>
  <!-- bg-[#EFEFEF] -->
  <div class="min-h-[100vh] w-full pt-20">
    <router-view></router-view>
  </div>
</template>
