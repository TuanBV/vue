<script setup>
const props = defineProps(['products']);
const emits = defineEmits(['update:products'])

const updateProduct = () => {
  const dataUpdate = [
    {
      url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      name: 'Nomad Tumbler',
      price: '35',
      alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      name: 'Nomad Tumbler',
      price: '35',
      alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      name: 'Nomad Tumbler',
      price: '35',
      alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      name: 'Nomad Tumbler',
      price: '35',
      alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      name: 'Nomad Tumbler',
      price: '35',
      alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      name: 'Nomad Tumbler',
      price: '35',
      alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
  ];
  emits('update:products', dataUpdate);
};

</script>

<template>
  <div class="w-full flex justify-between  py-6 border-b-[1px]">
    <h2 class="text-sm sm:text-2xl">Products</h2>
    <button @click="updateProduct()" class="hover:text-cyan-500">
      <font-awesome-icon :icon="['fas', 'arrows-rotate']" /> Refresh
    </button>
  </div>
  <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-6">
    <a v-for="(item, index) in props.products" :key="index" :href="item.url" class="group" >
      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img :src="item.url"
          :alt="item.alt"
          class="object-cover object-center group-hover:opacity-75"
          width="100%"
          height="100%"
        >
      </div>
      <h3 class="mt-4 text-sm text-gray-700">{{  item.name }}</h3>
      <p class="mt-1 text-lg font-medium text-gray-900">$ {{ item.price }}</p>
    </a>
  </div>
  <div class="text-right mt-6">
    <RouterLink to="/product-list" class="text-center hover:text-cyan-500">More ...</RouterLink>
  </div>
</template>
