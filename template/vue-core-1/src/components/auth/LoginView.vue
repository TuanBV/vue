<script setup>
const props = defineProps(['isLogin']);
const emits = defineEmits(['update:isLogin']);
const closeModal = () => {
  emits('update:isLogin', false);
}
</script>

<template>
  <div class="bg-slate-50" v-if="props.isLogin">
    <div class="flex w-full h-full">
      <div @click="closeModal" class="absolute bg-black opacity-30 inset-0 z-0"></div>
        <div class="w-full md:w-[44rem] md:left-[calc(50%-22rem)] top-[calc(50%-10rem)] p-3 mx-auto absolute my-auto rounded-xl shadow-lg bg-white">
          <div>
            <div class="text-center flex-auto justify-center leading-6">
              <h2 class="text-2xl font-bold py-4 border-b-2 border-slate-200">Login</h2>
              <div class="py-4">
                <p class="text-md text-gray-500 px-8">
                  Do you really want to exit without saving your work?
                </p>
              </div>
            </div>
            <div class="p-3 pt-5 mt-5 text-center space-x-4 md:block border-t-2 border-slate-200">
              <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100">
                Login
              </button>
              <button @click="closeModal" class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600">
                Close
              </button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
