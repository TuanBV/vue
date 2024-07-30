<script setup>
const isModalResult = defineModel()

</script>

<template>
    <div v-show="isModalResult.flagShow" class="fixed inset-0 z-[999] bg-[#686e79b4] w-full h-full flex my-auto"
        @click.self="isModalResult.flagShow = false">
        <div class="relative transform overflow-hidden transition-all m-auto">
            <div @click.prevent="isModalResult.flagShow = false" class="cursor-pointer flex justify-end mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-[20px]">
                    <path fill="#ff0000"
                        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
            </div>
            <div class="text-center justify-items-center grid gap-y-3 px-2">
                <h3 class="font-medium text-lg bg-white px-2 rounded-md" :class="[isModalResult.flagAnswer ? 'text-green-500' : 'text-red-500']">
                    {{ isModalResult.flagAnswer ? 'Chúc mừng bạn trả lời đúng' : 'Rất tiếc bạn trả lời sai mất rồi'}}
                </h3>
                <img :src="isModalResult.image"
                    alt="Đáp án đúng" class="w-[200px] h-[200px]">
            </div>
        </div>
    </div>
</template>