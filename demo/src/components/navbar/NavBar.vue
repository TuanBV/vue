<script setup>
import { ref, reactive } from 'vue'
const isMenuSp = ref(false)

const menu = reactive([
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Product',
    url: '/product'
  },
  {
    name: 'Sale',
    url: '/sale'
  },
  {
    name: 'Contact',
    url: '/contact'
  },
  {
    name: 'About Us',
    url: '/about-us'
  }
])
</script>
<template>
  <div class="fixed top-0 h-20 w-full border-b-[1px] border-gray-300 bg-white">
    <!-- Menu PC -->
    <div class="m-auto h-full max-w-full xl:max-w-[75%]">
      <nav class="flex h-full items-center justify-between px-4 py-4">
        <div>
          <a class="h-[80px] text-3xl font-bold leading-none" href="#">
            <img src="assets/logo.png" alt="" srcset="" class="h-[75px]" />
          </a>
        </div>
        <div class="xl:hidden">
          <button
            class="navbar-burger flex items-center p-3 text-blue-600"
            @click.prevent="isMenuSp = !isMenuSp"
          >
            <svg
              class="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul
          class="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform text-white xl:mx-auto xl:flex xl:w-auto xl:items-center xl:space-x-6"
        >
          <router-link
            v-for="item in menu"
            :key="item"
            :to="item.url"
            class="text-lg font-medium tracking-wider text-gray-600 hover:text-orange-700"
            >{{ item.name }}</router-link
          >
        </ul>
        <a
          class="hidden rounded-xl bg-gray-50 px-6 py-2 font-medium tracking-[2px] text-gray-900 transition duration-200 hover:bg-gray-100 xl:ml-auto xl:mr-3 xl:inline-block"
          href="#"
          >Sign In</a
        >
        <a
          class="hidden rounded-xl bg-blue-500 px-6 py-2 font-medium tracking-[2px] text-white transition duration-200 hover:bg-blue-600 xl:inline-block"
          href="#"
          >Sign up</a
        >
      </nav>
    </div>

    <!-- Menu smartphone -->
    <div class="navbar-menu relative z-50 w-full" :class="isMenuSp ? '' : 'hidden'">
      <div
        class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
        @click.self="isMenuSp = false"
      ></div>
      <nav
        class="fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-white px-6 py-6"
      >
        <div class="mb-8 flex items-center">
          <a class="mr-auto text-3xl font-bold leading-none" href="#">
            <img src="assets/logo.png" alt="" srcset="" class="h-[75px]" />
          </a>
          <button class="navbar-close" @click.prevent="isMenuSp = false">
            <svg
              class="h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li v-for="item in menu" :key="item">
              <router-link
                :to="item.url"
                class="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600"
                >{{ item.name }}</router-link
              >
            </li>
          </ul>
        </div>
        <div class="mt-auto">
          <div class="pt-6">
            <a
              class="mb-3 block rounded-xl bg-gray-50 px-4 py-3 text-center text-xs font-semibold leading-loose leading-none hover:bg-gray-100"
              href="#"
              >Sign in</a
            >
            <a
              class="mb-2 block rounded-xl bg-blue-600 px-4 py-3 text-center text-xs font-semibold leading-loose text-white hover:bg-blue-700"
              href="#"
              >Sign Up</a
            >
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
