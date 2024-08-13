<script setup>
import '@testing-library'
import { ref } from 'vue'
const nameCompany = ref('Boo Careers')
</script>
<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-gray-300 px-8">
        <router-link to="/" class="flex h-full items-center text-[20px] font-medium text-black">{{
          nameCompany
        }}</router-link>
      </div>
    </div>
  </header>
</template>
