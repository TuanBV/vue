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
    <!-- :autoplay="{
        delay: 20000,
        disableOnInteraction: false
      }" -->
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff'
      }"
      :spaceBetween="30"
      :effect="'fade'"
      :navigation="true"
      :pagination="{
        clickable: true
      }"
      :loop="true"
      :modules="modules"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false
      }"
      class="mySwiper"
    >
      <swiper-slide>
        <div
          class="flex h-full w-full justify-center bg-[url('assets/images/slider_1.jpeg')] bg-cover"
        >
          <div class="pt-20 xl:w-[75%]">
            <button
              type="submit"
              class="group relative isolation-auto z-10 mx-auto flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-gray-50 bg-gray-50 px-4 py-2 text-lg shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-emerald-500 before:transition-all before:duration-700 hover:text-gray-50 before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 lg:font-semibold"
            >
              Shopping Now ...
            </button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-full w-full bg-[url('assets/images/slider_2.jpeg')] bg-cover">aasas</div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-full w-full bg-[url('assets/images/slider_3.jpeg')] bg-cover">aasas</div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-full w-full bg-[url('assets/images/slider_4.jpeg')] bg-cover">aasas</div>
      </swiper-slide>
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
.swiper-button-prev {
  border: 1px solid red;
  padding: 5px;
  border-radius: 5px;
}
</style>
