<script setup>
import { reactive, ref } from 'vue'
import SubNav from 'components/SubNav.vue'
import RegisterButton from 'components/buttons/RegisterButton.vue'
import LoginButton from 'components/buttons/LoginButton.vue' 
import ProfileUser from 'components/ProfileUser.vue'

const nameCompany = ref('Boo Careers')
const navBar = reactive([
  {
    name: 'Teams',
    url: '/teams'
  },
  {
    name: 'Location',
    url: '/location'
  },
  {
    name: 'Life at Boo Corp',
    url: '/life'
  },
  {
    name: 'Jobs',
    url: '/jobs'
  },
  {
    name: 'About',
    url: '/about'
  },
])
const isLogin = ref(false);

</script>

<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto hidden lg:grid grid-cols-12 h-full flex-nowrap border-b border-solid border-gray-300 px-10 justify-between">
        <div class="left-0 col-span-2">
          <router-link to="/" class="flex h-full items-center text-[20px] font-medium text-black">{{
            nameCompany
          }}</router-link>
        </div>
        <nav class="h-full flex list-none justify-center col-span-7">
          <router-link v-for="item in navBar" :key="item" :to="item.url"
            class="flex h-full items-center py-2.5 px-2 text-gray-600 font-medium ml-9 hover:text-orange-800 text-center"
          >{{ item.name }}</router-link>
        </nav>

        <div class="h-full items-center flex justify-end col-span-3">
          <ProfileUser v-if="isLogin"/>
          <div v-else>
            <RegisterButton />
            <LoginButton class="ml-6"/>
          </div>
        </div>
      </div>
      <div class="block lg:hidden mx-auto h-full flex-nowrap border-b border-solid border-gray-300 px-10 justify-between">
        <div class="left-0 col-span-2">
          <router-link to="/" class="flex h-full items-center text-[20px] font-medium text-black">
            {{ nameCompany }}
          </router-link>
        </div>

        <div class="h-full items-center flex justify-end col-span-3">
          <ProfileUser v-if="isLogin"/>
          <div v-else>
            <RegisterButton />
            <LoginButton class="ml-6"/>
          </div>
        </div>
      </div>
      <SubNav />
    </div>
  </header>
</template>
