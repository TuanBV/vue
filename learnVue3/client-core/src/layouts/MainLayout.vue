<script setup>
import Navbar from 'components/navbar/NavbarView.vue'
</script>
<template>
  <Navbar />

  <div class="container mx-auto">
    <router-view></router-view>
  </div>
</template>
