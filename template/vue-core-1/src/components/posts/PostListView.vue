<script setup>
const props = defineProps(['posts']);
const emits = defineEmits(['update:posts'])

const updatePost = () => {
  const dataUpdate = [
    {
      url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      name: 'Nomad Tumbler - Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      name: 'Nomad Tumbler - Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      name: 'Nomad Tumbler - Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      url: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      name: 'Nomad Tumbler - Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
  ];
  emits('update:posts', dataUpdate);
};

</script>

<template>
  <div class="w-full flex justify-between  py-6 border-b-[1px]">
    <h2 class="text-sm sm:text-2xl">Posts</h2>
    <button @click="updatePost()" class="hover:text-cyan-500">
      <font-awesome-icon :icon="['fas', 'arrows-rotate']" /> Refresh
    </button>
  </div>
  <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-6">
    <a v-for="(item, index) in props.posts" :key="index" :href="item.url" class="group" >
      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img :src="item.url"
          :alt="item.alt"
          class="object-cover object-center group-hover:opacity-75"
          width="100%"
          height="100%"
        >
      </div>
      <h3 class="mt-6 text-sm text-gray-700 text-justify">{{  item.name }}</h3>
    </a>
  </div>

  <div class="text-right mt-6">
    <RouterLink to="/post-list" class="text-center hover:text-cyan-500">More ...</RouterLink>
  </div>
</template>
