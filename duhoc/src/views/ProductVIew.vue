<script setup>
import { ref, watch } from 'vue'
import ProductDetailView from 'components/product/ProductDetailView.vue'

const productList = ref([
  {
    id: 1,
    name: 'Basic Tee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 99.99,
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: 1,
    name: 'Basic Tee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 99.99,
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: 1,
    name: 'Basic Tee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 99.99,
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: 1,
    name: 'Basic Tee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 99.99,
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: 1,
    name: 'Basic Tee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 99.99,
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: 1,
    name: 'Basic Tee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 99.99,
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: 1,
    name: 'Basic Tee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 99.99,
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: 1,
    name: 'Basic Tee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 99.99,
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: 1,
    name: 'Basic Tee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 99.99,
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: 1,
    name: 'Basic Tee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 99.99,
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: 1,
    name: 'Basic Tee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 99.99,
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  }
])

const product = ref()
watch(product, () => {
  console.log(product.value)
})
</script>

<template>
  <section>
    <div class="mx-auto max-w-7xl px-4 py-8 tablet:px-6 pc:px-8 pc:py-12">
      <header>
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

        <p class="mt-4 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
          dicta incidunt est ipsam, officia dolor fugit natus?
        </p>
      </header>

      <div class="mt-8">
        <p class="text-sm text-gray-500">Showing <span> 4 </span> of 40</p>
      </div>

      <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 tablet:grid-cols-3 pc:grid-cols-4">
        <div v-for="(item, index) in productList" :key="index">
          <div class="group block overflow-hidden" @click="product = item">
            <img
              :alt="item.name"
              :src="item.image"
              class="aspect-square object-cover transition duration-500 group-hover:scale-105"
              width="300"
              height="300"
            />

            <div class="relative flex justify-between bg-white px-2 pt-3">
              <div>
                <h3 class="text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  {{ item.name }}
                </h3>
                <p class="mt-1">
                  <span class="text-sm text-gray-900"> £{{ item.price }} </span>
                </p>
              </div>
              <button>
                <font-awesome-icon
                  :icon="['fas', 'plus']"
                  class="h-3 w-3 rounded-full border-[1px] border-[#14B8A6] p-1 text-[#14B8A6]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ol class="mt-8 flex justify-center gap-1 text-xs font-medium">
        <li>
          <a
            href="#"
            class="inline-flex size-8 items-center justify-center rounded border border-gray-100"
          >
            <span class="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a href="#" class="block size-8 rounded border border-gray-100 text-center leading-8">
            1
          </a>
        </li>

        <li class="block size-8 rounded border-black bg-black text-center leading-8 text-white">
          2
        </li>

        <li>
          <a href="#" class="block size-8 rounded border border-gray-100 text-center leading-8">
            3
          </a>
        </li>

        <li>
          <a href="#" class="block size-8 rounded border border-gray-100 text-center leading-8">
            4
          </a>
        </li>

        <li>
          <a
            href="#"
            class="inline-flex size-8 items-center justify-center rounded border border-gray-100"
          >
            <span class="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ol>
    </div>
    <ProductDetailView v-model="product" />
  </section>
</template>
