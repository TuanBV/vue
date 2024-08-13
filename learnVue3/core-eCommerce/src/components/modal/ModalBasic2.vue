<script setup>
import { onMounted } from 'vue';

const variable = defineModel()

onMounted(() => {
  console.log(variable.value);
})
</script>

<template>
  <div class="relative flex justify-center">
    <button
      @click="variable = true"
      class="mx-auto transform rounded-md bg-blue-600 px-6 py-2 capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
    >
      Open Modal
    </button>

    <div
      v-show="variable"
      class="fixed inset-0 z-10 overflow-y-auto bg-white"
      @click.self="variable = false"
    >
      <div
        class="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0"
      >
        <span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="relative inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle rtl:text-right dark:bg-gray-900"
        >
          Modal Basic
          <button @click="variable=false">click</button>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- aria-labelledby="modal-title"
role="dialog"
aria-modal="true" -->
<!-- x-transition:enter="transition duration-300 ease-out"
x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
x-transition:leave="transition duration-150 ease-in"
x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95" -->
