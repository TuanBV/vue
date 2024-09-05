<template>
  <!-- <font-awesome-icon :icon="['fas', 'search']" class="mr-3"/> -->
  <main>
    <div class="w-full">
      <section>
        <div class="container mx-auto my-40 text-center text-white">
          <div class="text-lg font-medium uppercase tracking-[.2rem]">
            Don't watch the clock. Do what it does
          </div>
          <div class="text-[100px] font-semibold tracking-[0.5rem]">KEEP GOING</div>
          <button class="mt-10 bg-white px-5 py-3 font-bold text-black hover:bg-[#b0fcfdfd] hover:text-[#703f27]">
            Start Now
          </button>
        </div>
      </section>
      <section class="bg-white py-40">
        <div class="container mx-auto">
          <div class="grid grid-cols-3 gap-4 lg:mx-32 p-2 border rounded-lg">
            <div class="col-span-1 px-4">
              <div class="my-2 text-center">
                <img src="assets/images/avatar.jpg" alt="avatar"
                  class="aspect-square w-[200px] mx-auto shadow-md shadow-gray-500">
                <p class="mt-4 text-2xl font-normal">BUI VAN TUAN</p>
                <p>Python Developer</p>
              </div>
              <div class="text-sm">
                <h3 class="text-white bg-[#377584] px-2 py-3 uppercase font-medium">
                  <font-awesome-icon :icon="['fas', 'contact-card']" class="mr-3" /> About me
                </h3>
                <div class="my-3">
                  <font-awesome-icon :icon="['fas', 'phone']" class="mr-3 text-gray-500" /> 0398.2828.79
                </div>
                <div class="my-3">
                  <font-awesome-icon :icon="['fas', 'envelope-open']" class="mr-3 text-gray-500" /> tuanbuibvt@gmail.com
                </div>
                <div class="my-3">
                  <font-awesome-icon :icon="['fas', 'birthday-cake']" class="mr-3 text-gray-500" /> 10/05/1998
                </div>
                <div class="my-3">
                  <font-awesome-icon :icon="['fas', 'location-dot']" class="mr-3 text-gray-500" /> Kim Thành, Hải Dương
                </div>
              </div>
            </div>
            <div class="col-span-2 px-4">
              <div>
                <h3 class="text-white bg-[#377584] px-2 py-3 uppercase font-medium">
                  <font-awesome-icon :icon="['fas', 'bullseye']" class="mr-3" /> Career Objectives
                </h3>
                <div class="my-3">
                  <span class="font-semibold text-sm">Short-term : </span> <span></span>
                </div>
                <div class="my-3">
                  <span class="font-semibold text-sm">Long-term :</span> <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
