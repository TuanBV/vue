<script setup>
import { reactive } from 'vue'

const data = reactive([
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
        name: 'Product Name',
        price: 9.99,
        isLike: true
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
        name: 'Product Name',
        price: 9.99,
        isLike: true
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
        name: 'Product Name',
        price: 9.99,
        isLike: false
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
        name: 'Product Name',
        price: 9.99,
        isLike: false
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
        name: 'Product Name',
        price: 9.99,
        isLike: false
    },
    {
        id: 6,
        img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
        name: 'Product Name',
        price: 9.99,
        isLike: false
    },
    {
        id: 7,
        img: 'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
        name: 'Product Name',
        price: 9.99,
        isLike: false
    }
])
</script>

<template>
    <section class="bg-white py-8">
        <div class="container mx-auto flex flex-wrap items-center pb-12 pt-4">
            <div class="container mx-auto mt-0 flex w-full flex-wrap items-center justify-center px-2 py-3">
                <router-link to="/" class="text-xl font-bold uppercase tracking-wide text-gray-800 no-underline hover:text-orange-700">
                    Store
                </router-link>
            </div>

            <div class="flex w-full flex-col p-6 md:w-1/3 xl:w-1/4" v-for="item in data" :key="item">
                <a href="#">
                <img class="hover:grow hover:shadow-lg" :src="item.img" />
                <div class="flex items-center justify-between pt-3">
                    <p class="">{{ item.name }}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" v-if="item.isLike" class="w-[16px] h-[16px]" @click="item.isLike = !item.isLike">
                        <path
                            d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                        />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" v-else class="w-[16px] h-[16px]" @click="item.isLike = !item.isLike">
                        <path
                            d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                        />
                    </svg>
                </div>
                <p class="pt-1 text-gray-900">£{{ item.price }}</p>
                </a>
            </div>
        </div>
    </section>
</template>
