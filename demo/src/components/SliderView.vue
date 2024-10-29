<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'

const modules = [EffectFade, Navigation, Pagination, Autoplay]
</script>

<template>
  <div class="h-[40vh] w-[100vw] xl:h-[80vh]">
    <swiper
      :style="{
        '--swiper-navigation-color': '#508E09',
        '--swiper-pagination-color': '#fff'
      }"
      :spaceBetween="30"
      :effect="'fade'"
      :navigation="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }"
      :pagination="{
        clickable: true
      }"
      :loop="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><img src="assets/images/slider_1.jpeg" /></swiper-slide>
      <swiper-slide><img src="assets/images/slider_2.jpeg" /></swiper-slide>
      <swiper-slide><img src="assets/images/slider_3.jpeg" /></swiper-slide>
      <swiper-slide><img src="assets/images/slider_4.jpeg" /></swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  object-fit: cover;
}
</style>
