<script setup>
import { onMounted, reactive } from 'vue'

const isOpenModalQA = defineModel()
const question = reactive({
    
})

onMounted(() => {
    console.log(isOpenModalQA.value);
});
</script>

<template>
    <div
        v-show="isOpenModalQA"
        class="fixed inset-0 z-[99] bg-[#686e79b4] w-full h-full flex my-auto"
        @click.self="isOpenModalQA = false"
    >
        <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full h-[60%] md:w-[60%] md:h-[60%] m-auto"
        >
            <div class="border-b p-4">
                <h3 class="font-medium text-lg">Từ điển SSVsports ?</h3>
            </div>

            <div class="mt-2 text-center">
                <h3
                class="text-lg font-medium capitalize leading-6 text-gray-800 dark:text-white"
                id="modal-title"
                >
                Archive Project
                </h3>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum aliquam
                ea, ratione deleniti porro officia? Explicabo maiores suscipit.
                </p>
            </div>

            <div class="mt-5 sm:flex sm:items-center sm:justify-between">
            <a href="#" class="text-sm text-blue-500 hover:underline">Learn more</a>

            <div class="sm:flex sm:items-center">
                <button
                @click="isOpenModalQA = false"
                class="mt-2 w-full transform rounded-md border border-gray-200 px-4 py-2 text-sm font-medium capitalize tracking-wide text-gray-700 transition-colors duration-300 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 sm:mx-2 sm:mt-0 sm:w-auto dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                Cancel
                </button>
                <button
                class="mt-2 w-full transform rounded-md bg-blue-600 px-4 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mt-0 sm:w-auto"
                >
                Archive
                </button>
            </div>
            </div>
        </div>
    </div>
</template>