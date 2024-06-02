<script setup>
import { reactive } from "vue";

const menu = reactive([
  {
    url: "#home",
    name: "Home",
  },
  {
    url: "#about",
    name: "About",
  },
  {
    url: "#service",
    name: "Service",
    children: [
      {
        url: "#service1",
        name: "Service1",
      },
      {
        url: "#service2",
        name: "Service2",
      },
      {
        url: "#service3",
        name: "Service3",
      },
    ],
  },
  {
    url: "#contact",
    name: "Contact",
  },
]);
// const mouseover = () => {
//   isOpen.value = true;
// };
// const mouseleave = () => {
//   isOpen.value = false;
// };
</script>

<template>
  <header class="w-full">
    <div class="md:flex justify-between items-center">
      <div class="flex justify-between mx-6 py-2">
        <img
          src="@/assets/images/logo.png"
          alt="Logo"
          width="110"
          height="46"
        />
      </div>
      <div>
        <ul
          class="hidden md:flex md:items-center text-white h-[100vh] md:h-auto md:static absolute md:w-auto bg-red-300"
        >
          <li v-for="item in menu" :key="item" class="my-6">
            <a :href="item.url" v-if="!item.children">
              {{ item.name }}
            </a>
            <span
              v-else
              v-on:mouseover="mouseover"
              v-on:mouseleave="mouseleave"
            >
              {{ item.name }}
              <!-- <ul class="dropdown" :class="{ isOpen }">
                <li v-for="child in item.children" :key="child">
                  <a :href="child.url">
                    {{ child.name }}
                  </a>
                </li>
              </ul> -->
            </span>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
