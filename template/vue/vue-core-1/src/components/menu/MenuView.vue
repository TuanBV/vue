<!-- Menu using router link -->
<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
// import SearchView from '../search/SearchView.vue';

const isShowMenu = ref(true)
// const inputSearch = ref('');

onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      isShowMenu.value = true
    }
  })
})
</script>

<template>
  <header class="border-b-[1px] bg-gradient-to-r from-green-400 to-blue-500 text-white">
    <div class="flex lg:hidden justify-between p-[1rem]">
      <img alt="Vue logo" class="logo" src="../../assets/images/logo.png" width="110" height="46" />
      <button @click="isShowMenu = !isShowMenu">
        <font-awesome-icon :icon="['fas', 'bars']" size="xl" v-if="isShowMenu" />
        <font-awesome-icon :icon="['fas', 'xmark']" size="xl" v-else />
      </button>
    </div>

    <div
      class="wrapper lg:flex justify-between items-center lg:w-[80%] w-full mx-auto max-w-2xl lg:max-w-7xl"
      :class="{ hidden: isShowMenu }"
    >
      <img
        src="../../assets/images/logo.png"
        alt="Logo"
        width="110"
        height="46"
        class="hidden lg:block"
      />
      <nav class="lg:flex lg:justify-end lg:h-[50px]">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/recruit">Recruit</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/work">Work</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  position: fixed;
  width: 100%;
  background-color: white;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
}

nav a.router-link-exact-active {
  color: yellow;
}

nav a:first-of-type {
  border: 0;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
@media (max-width: 1024px) {
  nav a {
    display: block;
    /* width: 100vw; */
    font-size: 1rem;
    padding: 1rem 0 1rem 0;
  }

  nav a:last-child {
    padding-bottom: 1rem;
  }
}

@media (min-width: 1024px) {
  nav a {
    display: flex;
    align-items: center;
    padding: 0 2rem 0 2rem;
    font-size: larger;
  }

  nav a:hover {
    color: #06b6d4;
    font-weight: 700;
  }

  header {
    display: flex;
    place-items: center;
    padding: 10px 0;
  }

  header .wrapper {
    width: 100%;
  }
}
</style>
