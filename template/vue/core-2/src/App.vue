<template>
  <router-view />
</template>

<script setup>
import { RouterView } from 'vue-router';
import { useHead } from '@unhead/vue'

useHead({
  // ref (recommended)
  title: 'Test Title',
  // computed getter (recommended)
  meta: [{ name: 'description', content: () => "test meta" },],
})
</script>