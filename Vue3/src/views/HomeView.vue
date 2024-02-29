<script setup>
// import { onMounted, watchEffect } from 'vue';
// Using components
import { reactive } from 'vue';
import ProductListView from '../components/products/ProductListView.vue';

// lifecycle hooks
// onMounted(() => {
//   console.log(count.value);
// })
const products = reactive([
  {
    url: '11111',
    name: '111112',
    title: '111112',
    price: '111113',
    alt: '111113',
  },
  {
    url: '11111',
    name: '111112',
    title: '111112',
    price: '111113',
    alt: '111113',
  }
])


// watchEffect(() => {
//   console.log(count.value);
// })

</script>

<template>
  <ProductListView v-model:products="products"/>
</template>
