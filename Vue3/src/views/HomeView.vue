<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
const count = ref(0);

// lifecycle hooks
onMounted(() => {
  console.log(count.value);
})

watchEffect(() => {
  console.log(count.value);
})

</script>

<template>
  <main>
    <button @click="count++" class="text-orange-800">Count</button>

    {{ count }}
    <TheWelcome />
  </main>
</template>
