<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { 
    EffectFade, Navigation, Pagination, Zoom, Mousewheel, Autoplay,
} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { reactive } from 'vue';

const modules = [EffectFade, Navigation, Pagination, Zoom, Mousewheel, Autoplay] ;
const listSlides = reactive([
    {
        id: 1,
        url: 'images/1.jpg',
        alt: 'Image 1'
    },
    {
        id: 1,
        url: 'images/2.jpg',
        alt: 'Image 2'
    },
    {
        id: 1,
        url: 'images/3.jpg',
        alt: 'Image 3'
    },
])

</script>

<template>
    <swiper
        :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }"
        :slidesPerView="1"
        :spaceBetween="30"
        :effect="'fade'"
        :mousewheel="true"
        loop="true"
        zoom="true"
        :navigation="true"
        :pagination="{
            clickable: true,
        }"
        :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
        }"
        :modules="modules"
    >
        <swiper-slide v-for="slide in listSlides" :key="slide">
            <img :src="slide.url" :alt="slide.alt">
        </swiper-slide>
    </swiper>
</template>
