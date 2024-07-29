<script setup>
import { ref } from 'vue'

const isLogin = ref(true)

const showSubMenu = (idElement, e = null) => {
  // Handle button fa-angle-down when click
  e?.currentTarget.classList.toggle('rotate-180')
  document.getElementById(idElement).classList.toggle('hidden')
}


</script>
<template>
  <div class="relative">
    <nav class="left-0 top-0 z-50 w-full shadow-md">
      <!-- PC -->
      <div class="container m-auto hidden px-4 md:grid md:grid-cols-12">
        <div class="col-span-3 flex items-center font-bold">
          <router-link to="/" class="flex items-center">
            <img src="https://ssvsports.work/logo/small.png" alt="Logo" height="50" width="50" />
            <span class="ms-2 text-3xl font-bold uppercase">SSVSports</span>
          </router-link>
        </div>
        <div class="col-span-6 flex justify-center">
          <ul class="hidden cursor-pointer items-center text-base font-medium md:flex">
            <li class="px-6 py-5 hover:text-orange-700"><router-link to="/">Home</router-link></li>
            <li class="dropdown relative inline-block px-6 py-5 hover:text-orange-700">
              <span>
                <router-link to="/">Store</router-link>
                <i class="fa-solid fa-chevron-down ms-3"></i>
              </span>
              <ul
                class="dropdown-content absolute left-0 mt-5 hidden w-[300px] rounded-md border text-sm text-gray-700 shadow"
              >
                <li class="border-b">
                  <router-link
                    class="whitespace-no-wrap block bg-white px-4 py-2 hover:bg-gray-400 hover:text-white"
                    to="/"
                    >Việt Nam</router-link
                  >
                </li>
                <li class="border-b">
                  <router-link
                    class="whitespace-no-wrap block bg-white px-4 py-2 hover:bg-gray-400 hover:text-white"
                    to="/"
                    >Thái Lan</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="whitespace-no-wrap block bg-white px-4 py-2 hover:bg-gray-400 hover:text-white"
                    to="/"
                    >Lào</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="px-6 py-5 hover:text-orange-700">
              <router-link to="/">Blog</router-link>
            </li>
            <li class="px-6 py-5 hover:text-orange-700">
              <router-link to="/">Contact</router-link>
            </li>
          </ul>
        </div>
        <div class="col-span-3 flex justify-end">
          <div v-if="isLogin" class="flex items-center">
            <div>
              <p>Hoàng Văn Chính</p>
            </div>
            <div class="drop-down relative text-gray-500">
              <div class="flex items-center">
                <router-link to="/profile" class="ms-2 cursor-pointer p-0">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                    alt="icon"
                    width="46"
                    height="46"
                    class="my-2 rounded-full shadow-md"
                  />
                </router-link>
              </div>
              <div
                class="sub-drop-down absolute right-3 hidden w-48 overflow-hidden rounded-md border bg-white shadow"
              >
                <ul>
                  <li
                    class="flex items-center space-x-2 border-b px-3 py-3 text-sm font-medium hover:bg-slate-400 hover:text-white"
                  >
                    <router-link to="/">Profile</router-link>
                  </li>
                  <li
                    class="flex items-center space-x-2 border-b px-3 py-3 text-sm font-medium hover:bg-slate-400 hover:text-white"
                  >
                    <router-link to="/">Settings</router-link>
                  </li>
                  <li
                    class="flex items-center space-x-2 px-3 py-3 text-sm font-medium hover:bg-slate-400 hover:text-white"
                  >
                    <router-link to="/">Logout</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div v-else class="flex items-center">
            <button
              class="h-10 rounded-md bg-blue-500 px-5 py-1 text-base font-medium text-white hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <!-- Smartphone -->
      <div class="container m-auto block items-center justify-between md:hidden">
        <div class="grid grid-cols-6 px-4 py-3 md:hidden">
          <div class="col-span-4 flex">
            <button class="group focus:outline-none">
              <i class="fa-solid fa-bars group-focus:opacity-0"></i>
              <div
                class="menu absolute -left-full top-0 z-50 h-screen w-8/12 border bg-gray-100 opacity-0 transition-all duration-300 group-focus:left-0 group-focus:opacity-100"
              >
                <ul class="flex w-full flex-col items-start text-base text-gray-500">
                  <li class="btn-close w-full px-6 py-4 text-right">
                    <input type="radio" name="close" id="close" class="opacity-0" />
                    <label for="close"><i class="fa-solid fa-xmark"></i></label>
                  </li>
                  <li class="w-full px-6 py-4 text-left">
                    <router-link to="/">Home</router-link>
                  </li>
                  <li class="w-full px-6 py-4 text-left">
                    <router-link to="/profile">Profile</router-link>
                  </li>
                  <li class="relative w-full px-6 py-4 text-left">
                    <label class="flex items-center justify-between">
                      <router-link to="/">Store</router-link>
                      <i
                        class="fa-solid fa-angle-down"
                        @click="showSubMenu('dropdownSM', $event)"
                      ></i>
                    </label>
                    <ul id="dropdownSM" class="left-0 mt-4 hidden bg-white">
                      <li>
                        <router-link class="whitespace-no-wrap block px-4 py-2" to="#"
                          >Việt Nam</router-link
                        >
                      </li>
                      <li>
                        <router-link class="bg-whit whitespace-no-wrap block px-4 py-2" to="#"
                          >Thái Lan</router-link
                        >
                      </li>
                      <li>
                        <router-link class="whitespace-no-wrap block px-4 py-2" to="#"
                          >Lào</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="w-full px-6 py-4 text-left">
                    <router-link>Blog</router-link>
                  </li>
                  <li class="w-full px-6 py-4 text-left">
                    <router-link>Contact</router-link>
                  </li>
                </ul>
              </div>
            </button>
            <router-link to="/" class="ms-3 flex items-center text-xl font-bold">
              <img src="https://ssvsports.work/logo/small.png" alt="Logo" height="40" width="40" />
              <span class="ms-1 text-base font-bold uppercase">SSVSports</span>
            </router-link>
          </div>
          <div class="col-span-2 flex items-center justify-end text-center">
            <div v-if="isLogin" class="drop-sown-sm relative">
              <div class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                  alt="icon"
                  width="30"
                  height="30"
                  class="img-person rounded-full shadow-md"
                  @click="showSubMenu('menuRightSM')"
                />
              </div>
              <div
                id="menuRightSM"
                class="absolute -right-4 mt-5 hidden w-48 overflow-hidden rounded border bg-white shadow"
              >
                <ul>
                  <li
                    class="space-x-2 border-b px-3 py-2 text-start text-sm font-medium hover:bg-slate-400"
                  >
                    <p>
                      <b>Hoàng Văn Chính</b> <br />
                      chinhhv@saisystem.vn
                    </p>
                  </li>
                  <li
                    class="flex items-center space-x-2 border-b px-3 py-2 text-sm font-medium hover:bg-slate-400"
                  >
                    <router-link to="/profile">Profile</router-link>
                  </li>
                  <li
                    class="flex items-center space-x-2 border-b px-3 py-2 text-sm font-medium hover:bg-slate-400"
                  >
                    <router-link to="/">Settings</router-link>
                  </li>
                  <li
                    class="flex items-center space-x-2 px-3 py-2 text-sm font-medium hover:bg-slate-400"
                  >
                    <router-link to="/">Logout</router-link>
                  </li>
                </ul>
              </div>
            </div>
            <router-link
              class="block w-[50%] rounded-md bg-blue-500 px-2 font-medium text-white hover:bg-blue-600"
              v-else
            >
              Login
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scope>
.dropdown:hover > .dropdown-content {
  display: block;
}

.drop-down:hover > .sub-drop-down {
  display: block;
}
</style>