<!-- Menu using component -->
<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const isShowMenu = ref(true)

const setTitle = function (title) {
  document.title = title
}

onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      isShowMenu.value = true
    }
  })
})
</script>

<template>
  <header class="bg-gradient-to-r from-green-400 to-blue-500 text-white">
    <div class="flex lg:hidden justify-between p-[1rem] border-b-[1px]">
      <img alt="Vue logo" class="logo" src="../../assets/images/logo.png" width="110" height="46" />
      <button @click="isShowMenu = !isShowMenu">
        <font-awesome-icon :icon="['fas', 'bars']" size="xl" v-if="isShowMenu" />
        <font-awesome-icon :icon="['fas', 'xmark']" size="xl" v-else />
      </button>
    </div>

    <div
      class="wrapper lg:flex border-b-[1px] justify-between items-center py-2 px-8 lg:w-[80%] w-full"
      :class="{ hidden: isShowMenu }"
    >
      <img
        src="../../assets/images/logo.png"
        alt="Logo"
        width="110"
        height="46"
        class="hidden lg:block"
      />

      <nav class="lg:flex lg:justify-center lg:h-[50px]">
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/recruit">Recruit</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Dashboard</RouterLink>
        <RouterLink to="/work">Library</RouterLink>
      </nav>

      <div class="flex">
        <button class="w-[100px]" type="button" @click="setTitle('Check')">
          <span>Check</span>
        </button>
        <button class="w-[100px]" type="button" @click="setTitle('Logout')">
          <span>Log Out</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
@media (max-width: 1024px) {
  nav a {
    display: block;
    width: 100vw;
    font-size: 1rem;
    padding: 1rem 0 1rem 0;
  }

  nav a:last-child {
    padding-bottom: 1rem;
  }
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav a {
    display: flex;
    align-items: center;
    padding: 0 2rem 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
  }

  header .wrapper {
    width: 100%;
  }
}
</style>
