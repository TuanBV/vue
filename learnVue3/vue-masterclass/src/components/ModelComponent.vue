<script setup>
const value = defineModel()
</script>

<template>
  {{  value }}
  <br>
  <button @click="value+=1">Click In</button>
</template>
