<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
  <div class="bg-slate-50">
    <div class="flex w-full h-full">
      <div class="absolute bg-black opacity-100 inset-0 z-0 bg-[url('../assets/images/bg-login.png')] bg-cover"></div>
        <div class="w-full md:w-[30rem] md:left-[calc(50%-15rem)] top-[20%] p-3 mx-auto absolute my-auto rounded-xl shadow-lg bg-white">
          <div class="text-center my-2">
            <div class="text-center flex-auto justify-center leading-6">
              <h2 class="text-2xl font-bold py-4 border-b-2 border-slate-200">Login</h2>
              <div class="py-4 px-4">
                <div class="block text-start">
                  <label for="username" class="text-[16px] px-2">Username</label>
                  <input type="text" placeholder="Username ..." class="w-full border-[1px] rounded-[5px] h-[28px] border-slate-300 px-2">
                  <span class="text-red-600 text-xs px-2">Please input username</span>
                </div>
                <div class="block text-start pt-2">
                  <label for="username" class="text-[16px] px-2">Password</label>
                  <input type="text" placeholder="Password ..." class="w-full border-[1px] rounded-[5px] h-[28px] border-slate-300 px-2">
                  <span class="text-red-600 text-xs px-2">Incorrect password</span>
                </div>
              </div>
            </div>
            <div class="p-3 pt-5 mt-5 text-center space-x-4 md:block border-t-2 border-slate-200">
              <button class="mb-2 md:mb-0 bg-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-md hover:shadow-lg hover:bg-blue-600">
                Login <font-awesome-icon :icon="['fas', 'arrow-right-to-bracket']" size="xl"/>
              </button>
              <button class="mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-green-600"
                @click="isLogin=false"
              >
                <RouterLink to="register">Register <font-awesome-icon :icon="['fas', 'user-plus']" size="xl"/></RouterLink>
              </button>
            </div>
            <RouterLink to="/reset-password" class="text-center text-blue-600 underline underline-offset-1 hover:text-gray-500 hover:text-base">Forgot password?</RouterLink>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>
