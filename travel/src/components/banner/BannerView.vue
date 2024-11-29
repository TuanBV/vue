<script setup></script>

<template>
  <section class="relative flex items-center justify-center">
    <h1
      class="absolute z-20 flex w-3/4 items-center justify-center text-center text-[88px] font-bold leading-none text-white 2xl:w-1/2 2xl:text-[70px]"
    >
      Discover story-worthy travel moments
    </h1>
    <div class="flex w-full">
      <div class="relative flex max-h-[800px] w-1/3 items-center overflow-hidden">
        <img src="assets/images/image1.avif" alt="" srcset="" class="w-full object-cover" />
        <a
          href="#"
          class="absolute z-10 flex h-full w-full items-end bg-[#3c3c3c40] p-7 hover:cursor-pointer hover:bg-transparent"
          @mouseover="isHovered = true"
          @mouseleave="isHovered = false"
        >
          <div class="flex w-full items-center justify-between text-[32px] leading-8 text-white">
            <span class="w-4/6">The top 5 car-free day trips from Barcelona</span>
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </div>
        </a>
      </div>
      <div class="relative flex max-h-[800px] w-1/3 items-center overflow-hidden">
        <img src="assets/images/image2.avif" alt="" srcset="" class="w-full object-cover" />
        <a
          href="#"
          class="absolute z-10 flex h-full w-full items-end bg-[#3c3c3c40] p-7 hover:cursor-pointer hover:bg-transparent"
        >
          <div class="flex w-full items-center justify-between text-[32px] leading-8 text-white">
            <span class="w-4/6">A first-time guide to Troyes, France</span>
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </div>
        </a>
      </div>
      <div class="relative flex max-h-[800px] w-1/3 items-center overflow-hidden">
        <img src="assets/images/image3.avif" alt="" srcset="" class="w-full object-cover" />
        <a
          href="#"
          class="absolute z-10 flex h-full w-full items-end bg-[#3c3c3c40] p-7 hover:cursor-pointer hover:bg-transparent"
        >
          <div class="flex w-full items-center justify-between text-[32px] leading-8 text-white">
            <span class="w-4/6">How to spend the best weekend in Cairo, Egypt's capital city</span>
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
