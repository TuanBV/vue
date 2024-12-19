<script setup>
import { ref, watch } from 'vue'
const isModal = ref(false)
const product = defineModel()

watch(product, () => {
  isModal.value = true
})
</script>

<template>
  <div
    v-if="isModal"
    class="fixed left-0 top-0 z-[999] flex h-full w-[100vw] items-center justify-center bg-black bg-opacity-35"
    @click.self="isModal = !isModal"
  >
    <div
      class="h-[80%] w-[80%] overflow-hidden rounded-lg bg-white p-5 shadow-2xl pc:h-[60%] pc:w-[60%]"
    >
      <button class="float-end" @click="isModal = false">
        <font-awesome-icon :icon="['fas', 'close']" />
      </button>
      <div class="grid h-full w-full grid-cols-1 py-2 pc:grid-cols-5">
        <div class="p-5 pc:col-span-3">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            class="md:h-full h-32 w-full object-cover"
          />
        </div>

        <div class="p-6 text-center pc:col-span-2">
          <p class="text-sm font-semibold uppercase tracking-widest">Run with the pack</p>

          <h2 class="mt-6 font-black uppercase">
            <span class="text-2xl font-black"> Get 20% off </span>

            <span class="mt-2 block text-sm">On your next order over $50</span>
          </h2>

          <a
            class="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
            href="#"
          >
            Get Discount
          </a>

          <p class="mt-8 text-xs font-medium uppercase text-gray-400">
            Offer valid until 24th March, 2021 *
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
