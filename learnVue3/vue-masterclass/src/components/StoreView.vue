<script setup>
import { ref } from 'vue';
import ModelComponent from './ModelComponent.vue';
import SlideComponent from './SlideVue.vue';
const nameLogo = 'Core Vue'
const url = "https://careers.google.com/"
const value = ref(0);
</script>
<template>
  <headers class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="flex h-full text-nowrap border-b border-solid border-gray-500 px-3">
        <a href="#" class="flex h-full items-center text-xl">{{ nameLogo }}</a>
      </div>
      <button @click="value-=2">Click Out</button>
      <br/>
      <ModelComponent v-model="value"/>

    </div>
    <SlideComponent />
  </headers>
</template>
