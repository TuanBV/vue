<script setup>
// import { onMounted, watchEffect } from 'vue';
// Using components
import { ref } from 'vue';
import ProductListView from '../components/products/ProductListView.vue';
import PostListView from '../components/posts/PostListView.vue';

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

const posts = ref([
  {
    url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    name: 'Earthen Bottle - Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    name: 'Earthen Bottle - Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    name: 'Earthen Bottle - Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    name: 'Earthen Bottle - Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
])

</script>

<template>
  <div class="pt-[71px] mx-auto max-w-2xl lg:max-w-7xl">
    <div class="w-full mb-20">
      <!-- Component products -->
      <div class="mt-6">
        <ProductListView v-model:products="products"/>
      </div>
      <!-- Component posts -->
      <div class="mt-6">
        <PostListView v-model:posts="posts"/>
      </div>
    </div>
  </div>
</template>
