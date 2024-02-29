<script setup>
import { onMounted } from 'vue' 
const props = defineProps(['products']);

onMounted(() => {
  console.log(props.products);
})

</script>

<template>
  <div class="product-list">
    <div class="w-full">
      <h2 class="text-sm sm:text-2xl py-6 border-b-[1px]">Products</h2>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-6">
        <a v-for="item in props.products" :href="item.url" class="group" >
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img :src="item.url"
              :alt="item.alt"
              class="h-full w-full object-cover object-center group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{  item.name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$ {{ item.price }}</p>
        </a>
      </div>
    </div>
  </div>
</template>
