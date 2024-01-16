<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import LoginView from "./auth/LoginView.vue"
import RegisterView from "./auth/RegisterView.vue"

const isShowMenu = ref(true);
const isLogin = ref(false);
const isRegister = ref(false);

onMounted(() => {
  window.addEventListener('resize', () =>{
    if (window.innerWidth > 1024) {
      isShowMenu.value = true;
    }
  });
})

</script>

<template>
  <header>
    <div class="flex lg:hidden justify-between p-[1rem] border-b-[1px]">
      <img alt="Vue logo" class="logo" src="https://ssvsports.work/logo/small.png" width="50" height="50" />
      <button @click="isShowMenu=!isShowMenu">
        <font-awesome-icon :icon="['fas', 'bars']" size="xl" v-if="isShowMenu"/>
        <font-awesome-icon :icon="['fas', 'xmark']" size="xl" v-else/>
      </button>
    </div>

    <div class="wrapper lg:flex border-b-[1px] justify-between items-center pb-2 lg:w-[80%] w-full" :class="{'hidden' : isShowMenu}">
      <img src="https://ssvsports.work/logo/small.png" alt="Logo" width="50" height="50" class="hidden lg:block">

      <nav class="lg:flex lg:justify-end lg:h-[50px]">
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/recruit">Recruit</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/work">Library</RouterLink>

        <a @click="isLogin=!isLogin">Login</a>
        <a @click="isRegister=!isRegister">Register</a>
        <a>Log Out</a>

      </nav>
    </div>
  </header>

  <LoginView v-model:isLogin="isLogin"/>
  <RegisterView v-model:isRegister="isRegister"/>

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
    border-left: 1px solid var(--color-border);
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