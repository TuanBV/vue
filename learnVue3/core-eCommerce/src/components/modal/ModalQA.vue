<script setup>
import { reactive } from 'vue'
import ModalResult from 'components/modal/ModalResult.vue'

const isOpenModalQA = defineModel()
const isModalResult = reactive({
    flagShow: false,
    flagAnswer: false,
    image: '',
})

const checkAnswer = (answer) => {
    console.log('1');
    if (answer === 1) {
        isModalResult.flagAnswer = true
        isModalResult.image = 'https://ssvsports.work/v1/upload/slides/2024/07/10/2024-07-10-09-29-21-img-20240709-173248.jpg'
        isModalResult.flagShow = true
        return
    }
    isModalResult.flagAnswer = false
    isModalResult.image = 'https://ssvsports.work/v1/upload/slides/2024/07/10/2024-07-10-09-29-21-img-20240709-173248.jpg'
    isModalResult.flagShow = true
}

</script>

<template>
    <div v-show="isOpenModalQA" class="fixed inset-0 z-[99] bg-[#686e79b4] w-full h-full flex my-auto"
        @click.self="isOpenModalQA = false">
        <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full md:w-[60%] m-auto">
            <div class="border-b p-4 flex justify-between items-center">
                <h3 class="font-medium text-lg">Từ điển SSVsports ?</h3>
                <div @click.prevent="isOpenModalQA = false" class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-[20px] h-[20px]">
                        <path
                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </div>
            </div>
            <!--  sm:flex sm:items-center sm:justify-between -->
            <div class="grid grid-cols-3 gap-4 p-3">
                <div class="col-span-2">
                    <div class="bg-gray-200 rounded-md p-3 pb-20">
                        <p class="font-bold">Câu hỏi</p>
                        <p class="font-medium">Ai là người lớn tuổi nhất công ty hiện nay ?</p>
                    </div>
                    <div class="py-3">
                        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div class="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                style="width: 10%"> 10%</div>
                        </div>
                    </div>
                    <div class="bg-blue-100 rounded-md p-2 flex justify-between px-12">
                        <div class="font-medium">Chính xác 1 / 10</div>
                        <div class="font-medium">Tiến độ 1 / 10</div>
                    </div>
                    <div class="p-3">
                        <div class="grid grid-cols-3">
                            <div class="text-center mx-auto">
                                <p class="font-bold text-green-500">Đúng</p>
                                <img src="https://ssvsports.work/v1/upload/slides/2024/07/10/2024-07-10-09-29-21-img-20240709-173248.jpg"
                                    alt="Đáp án đúng" class="w-[100px] h-[100px]">
                            </div>
                            <div class="text-center mx-auto">
                                <p class="font-bold text-red-500">Sai</p>
                                <img src="https://ssvsports.work/v1/upload/slides/2024/07/10/2024-07-10-09-29-21-img-20240709-173248.jpg"
                                    alt="Đáp án đúng" class="w-[100px] h-[100px]">
                            </div>
                            <div class="text-center mx-auto">
                                <p class="font-bold text-orange-500">Hoàn thành</p>
                                <img src="https://ssvsports.work/v1/upload/slides/2024/07/10/2024-07-10-09-29-21-img-20240709-173248.jpg"
                                    alt="Đáp án đúng" class="w-[100px] h-[100px]">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid gap-y-2">
                    <div class="py-2 min-h-[80px] rounded-md bg-gray-200 px-2 items-center flex cursor-pointer" @click="checkAnswer(1)">
                        <span class="p-3 bg-gray-400 rounded-[50%] me-3 font-bold w-[30px] h-[30px] flex justify-center items-center">1</span>A Hiếu
                    </div>
                    <div class="py-2 min-h-[80px] rounded-md bg-gray-200 px-2 items-center flex cursor-pointer" @click="checkAnswer(2)">
                        <span class="p-3 bg-gray-400 rounded-[50%] me-3 font-bold w-[30px] h-[30px] flex justify-center items-center">2</span>
                        Sếp Arima
                    </div>
                    <div class="py-2 min-h-[80px] rounded-md bg-gray-200 px-2 items-center flex cursor-pointer" @click="checkAnswer(3)">
                        <span class="p-3 bg-gray-400 rounded-[50%] me-3 font-bold w-[30px] h-[30px] flex justify-center items-center">3</span>
                        Sếp Arima
                    </div>
                    <div class="py-2 min-h-[80px] rounded-md bg-gray-200 px-2 items-center flex cursor-pointer" @click="checkAnswer(4)">
                        <span class="p-3 bg-gray-400 rounded-[50%] me-3 font-bold w-[30px] h-[30px] flex justify-center items-center">4</span>
                        Sếp Arima
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ModalResult v-model="isModalResult"/>
</template>