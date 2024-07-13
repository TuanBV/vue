<!-- Menu has one level -->
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const isLogin = ref(false)
</script>

<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto p-4">
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="flex items-center justify-between">
          <a href="#" class="text-xl font-bold">ECommerce</a>

          <!-- Mobile menu button -->
          <div class="flex lg:hidden">
            <button
              @click="isOpen = !isOpen"
              type="button"
              class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg
                v-if="!isOpen"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
              </svg>

              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          :class="[isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0']"
          class="absolute inset-x-0 z-20 mt-[17px] h-[-webkit-fill-available] w-full justify-between bg-white px-6 py-4 transition-all duration-300 ease-in-out lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:justify-between lg:bg-transparent lg:p-0 lg:opacity-100 dark:bg-gray-800"
        >
          <div
            class="flex flex-col capitalize text-gray-600 lg:flex lg:flex-row lg:items-center dark:text-gray-300"
          >
            <router-link
              to="#"
              class="mt-2 transform font-medium transition-colors duration-300 hover:text-[#ff7e00] lg:mx-4 lg:mt-0 dark:hover:text-gray-200"
              >features</router-link
            >
            <router-link
              to="#"
              class="dropdown mt-2 transform font-medium transition-colors duration-300 hover:text-[#ff7e00] lg:mx-4 lg:mt-0 dark:hover:text-gray-200"
            >
              Categories
            </router-link>
            <router-link
              to="#"
              class="mt-2 transform font-medium transition-colors duration-300 hover:text-[#ff7e00] lg:mx-4 lg:mt-0 dark:hover:text-gray-200"
              >docs</router-link
            >
            <router-link
              to="#"
              class="mt-2 transform font-medium transition-colors duration-300 hover:text-[#ff7e00] lg:mx-4 lg:mt-0 dark:hover:text-gray-200"
              >support</router-link
            >
            <router-link
              to="#"
              class="mt-2 transform font-medium transition-colors duration-300 hover:text-[#ff7e00] lg:mx-4 lg:mt-0 dark:hover:text-gray-200"
              >blog</router-link
            >

            <!-- Input search -->
            <!-- <div class="relative mt-4 lg:mx-4 lg:mt-0">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  class="h-4 w-4 text-gray-600 dark:text-gray-300"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>

              <input
                type="text"
                class="w-full border-b border-gray-600 bg-white py-1 pl-10 pr-4 font-medium text-gray-700 placeholder-gray-600 focus:border-gray-600 focus:outline-none dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent"
                placeholder="Search"
              />
            </div> -->
          </div>
          <div class="block lg:hidden">
            <div class="mt-6 flex justify-center lg:mt-0 lg:flex" v-if="isLogin">
              <router-link
                to="#"
                class="me-2 transform rounded-md bg-gradient-to-r from-[#1089d3] to-[#12b1d1] px-4 py-2 font-medium text-white transition-colors duration-300 hover:text-white"
                aria-label="Github"
              >
                Register
              </router-link>
              <router-link
                to="#"
                class="ms-2 transform rounded-md bg-gradient-to-r from-[#1089d3] to-[#12b1d1] px-4 py-2 font-medium text-white transition-colors duration-300 hover:text-white"
                aria-label="Github"
              >
                Login
              </router-link>
            </div>
            <div class="mt-6 flex items-center justify-center gap-x-4 lg:mt-0 lg:flex" v-else>
              <router-link to="#"><i class="fa-solid fa-circle-user text-2xl"></i></router-link>
              <router-link to="#" class="rotate-180"
                ><i class="fa-solid fa-right-to-bracket text-2xl"></i
              ></router-link>
            </div>
          </div>
        </div>
        <div class="hidden lg:block">
          <div class="mt-6 flex justify-center lg:mt-0 lg:flex" v-if="isLogin">
            <router-link
              to="#"
              class="me-2 transform rounded-md bg-gradient-to-r from-[#1089d3] to-[#12b1d1] px-4 py-2 font-medium text-white transition-colors duration-300 hover:text-white"
              aria-label="Github"
            >
              Register
            </router-link>
            <router-link
              to="#"
              class="ms-2 transform rounded-md bg-gradient-to-r from-[#1089d3] to-[#12b1d1] px-4 py-2 font-medium text-white transition-colors duration-300 hover:text-white"
              aria-label="Github"
            >
              Login
            </router-link>
          </div>
          <div class="mt-6 flex items-center justify-center gap-x-4 lg:mt-0 lg:flex" v-else>
            <router-link to="#"><i class="fa-solid fa-circle-user text-2xl"></i></router-link>
            <router-link to="#" class="rotate-180"
              ><i class="fa-solid fa-right-to-bracket text-2xl"></i
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
