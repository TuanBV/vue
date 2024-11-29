<script setup>
import { ref, reactive } from 'vue'
const isMenuSp = ref(false)

const menu = reactive([
  {
    name: 'Destinations',
    url: '/'
  },
  {
    name: 'Planning',
    url: '/planning'
  },
  {
    name: 'Inspiration',
    url: '/inspiration'
  },
  {
    name: 'Shop',
    url: '/shop'
  }
])

const isLogin = ref(true)
</script>
<template>
  <div class="fixed top-0 z-[99] h-20 w-full bg-white">
    <!-- Menu PC -->
    <div class="m-auto h-full max-w-full xl:max-w-[75%]">
      <nav class="flex h-full items-center justify-between px-4 py-4">
        <div>
          <a class="h-[80px] text-3xl font-bold leading-none" href="#">
            <img src="assets/logo800x500.png" alt="" srcset="" class="h-[75px]" />
          </a>
        </div>

        <ul
          class="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform text-white xl:mx-auto xl:flex xl:w-auto xl:items-center xl:space-x-6"
        >
          <router-link
            v-for="item in menu"
            :key="item"
            :to="item.url"
            class="text-lg font-medium tracking-wider text-black hover:text-sky-500"
            >{{ item.name }}</router-link
          >
        </ul>
        <div>
          <div class="flex items-center justify-center gap-5">
            <div v-if="isLogin" class="flex items-center justify-center gap-5">
              <!-- Cart -->
              <router-link to="cart" class="flex items-center">
                <font-awesome-icon :icon="['fas', 'cart-shopping']" class="text-xl" />
              </router-link>
              <!-- Profile -->
              <router-link to="profile">
                <img
                  alt="avatar"
                  width="30px"
                  height="30px"
                  src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                  class="mx-auto mr-5 rounded-full shadow-lg"
                />
              </router-link>
              <!-- Button logout -->
              <button
                class="hidden items-center rounded-xl bg-cyan-500 px-3 py-1 text-lg font-normal tracking-wider text-white hover:text-orange-700 xl:block"
              >
                <font-awesome-icon :icon="['fas', 'sign-out']" class="mr-2 rotate-180" /> Logout
              </button>
            </div>
            <!-- Button menu for smartphone -->
            <button
              class="navbar-burger flex items-center xl:hidden"
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
          <div v-if="!isLogin" class="hidden xl:inline-block">
            <a
              class="rounded-xl bg-gray-50 px-6 py-2 font-normal tracking-[2px] text-gray-900 transition duration-200 hover:bg-gray-100 xl:ml-auto xl:mr-3"
              href="#"
              >Sign In</a
            >
            <a
              class="rounded-xl bg-blue-500 px-6 py-2 font-normal tracking-[2px] text-white transition duration-200 hover:bg-blue-600"
              href="#"
              >Sign up</a
            >
          </div>
        </div>
      </nav>
    </div>

    <!-- Menu smartphone -->
    <div class="navbar-menu relative z-50 w-full" :class="isMenuSp ? '' : 'hidden'">
      <div
        class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
        @click.self="isMenuSp = false"
      ></div>
      <nav
        class="fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col justify-between overflow-y-auto border-r bg-white p-6"
      >
        <div>
          <div class="mb-8 flex items-center">
            <a class="mr-auto text-3xl font-bold leading-none" href="#">
              <img src="assets/logo500x500.png" alt="" srcset="" class="h-[75px]" />
            </a>
            <button class="navbar-close" @click.prevent="isMenuSp = false">
              <svg
                class="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-500"
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
                  class="block rounded p-4 text-sm font-normal tracking-[2px] text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                  >{{ item.name }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div v-if="isLogin" class="flex w-full items-center justify-center text-gray-500">
          <font-awesome-icon :icon="['fas', 'sign-out']" class="mr-2 w-[17px] rotate-180" /> Logout
        </div>
        <div class="mt-auto" v-else>
          <div class="pt-6">
            <a
              class="mb-3 block rounded-xl bg-gray-50 px-4 py-3 text-center text-sm font-normal leading-loose tracking-[2px] hover:bg-gray-100"
              href="#"
              >Sign in</a
            >
            <a
              class="mb-2 block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-normal leading-loose tracking-[2px] text-white hover:bg-blue-700"
              href="#"
              >Sign Up</a
            >
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
