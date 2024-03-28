<script setup>
// Menu using the components
// import MenuView from '../components/MenuView.vue'

// Menu using the router link
import MenuView2 from '../components/menu/MenuView2.vue'
import FooterView from '../components/footer/footerView2.vue'
import { onMounted } from 'vue'

onMounted(() => {})
</script>

<template>
  <MenuView2 />
  <RouterView id="router-view" />
  <FooterView />
</template>
