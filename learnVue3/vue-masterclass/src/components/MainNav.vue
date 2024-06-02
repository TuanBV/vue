<script setup>
import { ref } from "vue";

const company = ref("Bobo Careers")
</script>

<template>
  <header class="w-full text-sm">Main Nav</header>
  <div>{{ company }}</div>
</template>
