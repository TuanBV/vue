<script setup>
// import { onMounted, watchEffect } from 'vue';
// Using components
import { ref } from 'vue';
import ProductListView from '../components/products/ProductListView.vue';

// lifecycle hooks
// onMounted(() => {
//   console.log(count.value);
// })
const products = ref([
  {
    url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    name: 'Earthen Bottle',
    price: '48',
    alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    name: 'Earthen Bottle',
    price: '48',
    alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    name: 'Earthen Bottle',
    price: '48',
    alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    name: 'Earthen Bottle',
    price: '48',
    alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
])

// watchEffect(() => {
//   console.log(count.value);
// })

</script>

<template>
  <ProductListView v-model:products="products"/>
</template>
