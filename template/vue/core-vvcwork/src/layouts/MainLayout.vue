<script setup>
// import MenuView from "@/components/MenuView.vue";
import { onMounted, reactive, ref } from "vue";

const isOpen = ref(false);
const menuTwo = ref("");
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
onMounted(() => {
  document.addEventListener("click", (event) => {
    if (event.target.className.includes("btn-menu")) {
      isOpen.value = true;
    } else {
      if (
        (!event.target.className.includes("menu-sp") && isOpen.value) ||
        (!event.target.className.includes("btn-menu") && !isOpen.value) ||
        (!event.target.className.includes("btn-menu-level") && !isOpen.value)
      ) {
        menuTwo.value = "";
        isOpen.value = false;
      } else {
        isOpen.value = true;
      }
    }
  });

  window.addEventListener("resize", () => {
    isOpen.value = false;
  });
});

const clickMenuTwo = (value) => {
  if (value) {
    isOpen.value = false;
    menuTwo.value = value;
  }
};

const clickMenuOne = () => {
  isOpen.value = false;
  menuTwo.value = "";
};
</script>

<template>
  <ul
    class="menu-sp md:hidden md:items-center text-gray-500 h-[100vh] md:h-auto md:static absolute md:w-auto w-[65%] ease-in-out duration-1000"
    :class="[isOpen && !menuTwo ? 'left-0' : 'left-[-100%]']"
  >
    <li
      v-for="item in menu"
      :key="item"
      class="py-4 border-b-[1px] border-gray-500 flex justify-between btn-menu-level"
    >
      <a :href="item.url">
        {{ item.name }}
      </a>

      <i
        v-if="item.children"
        @click="clickMenuTwo(item.children)"
        class="fa-solid fa-angle-right btn-menu-level"
      ></i>
    </li>
  </ul>
  <ul
    class="menu-level-two md:hidden md:items-center text-gray-500 h-[100vh] md:h-auto md:static absolute md:w-auto w-[65%] ease-in-out"
    :class="[
      isOpen && menuTwo ? 'left-0 duration-1000' : 'left-[-65%] duration-1000',
    ]"
  >
    <li class="border-b-[1px] border-gray-500 py-4 btn-menu-level">
      <i
        @click="clickMenuOne()"
        class="btn-menu-level fa-solid fa-angle-left"
      ></i>
    </li>
    <li
      v-for="index in menuTwo"
      :key="index"
      class="border-b-[1px] border-gray-500 py-4"
    >
      <a :href="index.url">
        {{ index.name }}
      </a>
    </li>
  </ul>
  <div
    :class="[
      isOpen
        ? 'ms-[65vw] duration-1000 ease-in-out'
        : 'ms-0 duration-1000 ease-in-out',
    ]"
  >
    <!-- <MenuView /> -->
    <div class="flex justify-between mx-6 py-2">
      <img src="@/assets/images/logo.png" alt="Logo" width="110" height="46" />
      <button type="button" class="btn-menu md:hidden">
        <i :class="[isOpen ? '' : 'btn-menu fa-solid fa-bars']"></i>
      </button>
    </div>
    <router-view />
  </div>
</template>
