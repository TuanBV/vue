<!-- Menu has multi level -->
<script setup></script>

<template>
  <nav class="fixed z-[99] w-full bg-white shadow-md lg:text-gray-500">
    <div
      class="wrapper container relative mx-auto flex h-16 items-center justify-between px-8 leading-10 lg:px-0"
    >
      <div class="logo">
        <router-link to="#" class="text-xl font-bold text-gray-500">ECommerce</router-link>
      </div>
      <input type="radio" name="slider" id="menu-btn" class="hidden" />
      <input type="radio" name="slider" id="close-btn" class="hidden" />
      <ul class="nav-links inline-flex">
        <label
          for="close-btn"
          class="btn close-btn absolute right-7 top-3 hidden cursor-pointer text-xl text-white"
          ><i class="fas fa-times"></i
        ></label>
        <li>
          <router-link
            to="#"
            class="transform font-medium text-white transition-colors duration-300 hover:text-[#ff7e00] lg:mx-4 lg:text-gray-500"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="#"
            class="transform font-medium text-white transition-colors duration-300 hover:text-[#ff7e00] lg:mx-4 lg:text-gray-500"
            >About</router-link
          >
        </li>
        <li>
          <router-link
            to="#"
            class="desktop-item font-medium text-white transition-colors duration-300 hover:text-[#ff7e00] lg:mx-4 lg:text-gray-500"
            >Dropdown Menu</router-link
          >
          <input type="checkbox" id="showDrop" class="hidden" />
          <label for="showDrop" class="mobile-item hidden text-white lg:text-gray-500"
            >Dropdown Menu</label
          >
          <ul
            class="drop-menu invisible static top-20 w-48 rounded-sm bg-transparent leading-10 text-white opacity-100 shadow-lg lg:absolute lg:bg-white lg:text-gray-500 lg:opacity-0"
          >
            <li>
              <router-link
                to="#"
                class="ms-4 block text-base font-medium hover:text-[#ff7e00] lg:text-xl"
                >Drop menu 1</router-link
              >
            </li>
            <li>
              <router-link
                to="#"
                class="ms-4 block text-base font-medium hover:text-[#ff7e00] lg:text-xl"
                >Drop menu 2</router-link
              >
            </li>
            <li>
              <router-link
                to="#"
                class="ms-4 block text-base font-medium hover:text-[#ff7e00] lg:text-xl"
                >Drop menu 3</router-link
              >
            </li>
            <li>
              <router-link
                to="#"
                class="ms-4 block text-base font-medium hover:text-[#ff7e00] lg:text-xl"
                >Drop menu 4</router-link
              >
            </li>
          </ul>
        </li>
        <li>
          <router-link
            to="#"
            class="desktop-item transform font-medium text-white transition-colors duration-300 hover:text-[#ff7e00] lg:mx-4 lg:text-gray-500"
            >Mega Menu</router-link
          >
          <input type="checkbox" id="showMega" class="hidden" />
          <label for="showMega" class="mobile-item hidden text-white lg:text-gray-500"
            >Mega Menu</label
          >
          <div
            class="mega-box lg:text-gray invisible static left-0 top-20 w-full overflow-hidden bg-transparent text-white opacity-100 shadow-md lg:visible lg:absolute lg:opacity-0"
          >
            <div
              class="content flex w-full justify-between bg-transparent p-8 text-white shadow-lg lg:bg-white lg:text-gray-500"
            >
              <div class="row lg:w-[calc(25% - 30px)] w-full leading-10">
                <span class="ld:text-xl text-base font-medium">Design Services</span>
                <ul class="mega-links">
                  <li class="px-5 py-0">
                    <router-link to="#" class="text-sm hover:text-[#ff7e00] lg:text-base"
                      >Graphics</router-link
                    >
                  </li>
                  <li class="px-5 py-0">
                    <router-link to="#" class="text-sm hover:text-[#ff7e00] lg:text-base"
                      >Vectors</router-link
                    >
                  </li>
                  <li class="px-5 py-0">
                    <router-link to="#" class="text-sm hover:text-[#ff7e00] lg:text-base"
                      >Business cards</router-link
                    >
                  </li>
                  <li class="px-5 py-0">
                    <router-link to="#" class="text-sm hover:text-[#ff7e00] lg:text-base"
                      >Custom logo</router-link
                    >
                  </li>
                </ul>
              </div>
              <div class="row lg:w-[calc(25% - 30px)] w-full leading-10">
                <span class="ld:text-xl text-base font-medium">Email Services</span>
                <ul class="mega-links">
                  <li class="px-5 py-0">
                    <router-link to="#" class="text-sm hover:text-[#ff7e00] lg:text-base"
                      >Personal Email</router-link
                    >
                  </li>
                  <li class="px-5 py-0">
                    <router-link to="#" class="text-sm hover:text-[#ff7e00] lg:text-base"
                      >Business Email</router-link
                    >
                  </li>
                  <li class="px-5 py-0">
                    <router-link to="#" class="text-sm hover:text-[#ff7e00] lg:text-base"
                      >Mobile Email</router-link
                    >
                  </li>
                  <li class="px-5 py-0">
                    <router-link to="#" class="text-sm hover:text-[#ff7e00] lg:text-base"
                      >Web Marketing</router-link
                    >
                  </li>
                </ul>
              </div>
              <div class="row lg:w-[calc(25% - 30px)] w-full leading-10">
                <span class="ld:text-xl text-base font-medium">Security services</span>
                <ul class="mega-links">
                  <li class="px-5 py-0">
                    <router-link to="#" class="text-sm hover:text-[#ff7e00] lg:text-base"
                      >Site Seal</router-link
                    >
                  </li>
                  <li class="px-5 py-0">
                    <router-link to="#" class="text-sm hover:text-[#ff7e00] lg:text-base"
                      >VPS Hosting</router-link
                    >
                  </li>
                  <li class="px-5 py-0">
                    <router-link to="#" class="text-sm hover:text-[#ff7e00] lg:text-base"
                      >Privacy Seal</router-link
                    >
                  </li>
                  <li class="px-5 py-0">
                    <router-link to="#" class="text-sm hover:text-[#ff7e00] lg:text-base"
                      >Website design</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <router-link
            to="#"
            class="transform font-medium text-white transition-colors duration-300 hover:text-[#ff7e00] lg:mx-4 lg:text-gray-500"
            >Feedback</router-link
          >
        </li>
      </ul>
      <label
        for="menu-btn"
        class="btn menu-btn block cursor-pointer text-xl text-[gray!important] lg:hidden"
        ><i class="fa-solid fa-bars"></i
      ></label>
    </div>
  </nav>
</template>
<style scoped>
.nav-links li:hover .drop-menu,
.nav-links li:hover .mega-box {
  transition: all 0.3s ease;
  opacity: 1;
  visibility: visible;
}

@media screen and (max-width: 970px) {
  .wrapper .nav-links {
    position: fixed;
    height: 100vh;
    width: 100%;
    max-width: 350px;
    top: 0;
    left: -100%;
    background: #242526;
    display: block;
    padding: 50px 10px;
    line-height: 50px;
    overflow-y: auto;
    box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.18);
    transition: all 0.3s ease;
  }
  /* custom scroll bar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #242526;
  }
  ::-webkit-scrollbar-thumb {
    background: #3a3b3c;
  }
  #menu-btn:checked ~ .nav-links {
    left: 0%;
  }
  #menu-btn:checked ~ .btn.menu-btn {
    display: none;
  }
  #close-btn:checked ~ .btn.menu-btn {
    display: block;
  }
  .nav-links li {
    margin: 15px 10px;
  }
  .nav-links .drop-menu {
    opacity: 1;
    top: 65px;
    visibility: visible;
    padding-left: 20px;
    width: 100%;
    max-height: 0px;
    overflow: hidden;
    box-shadow: none;
    transition: all 0.3s ease;
  }
  #showDrop:checked ~ .drop-menu,
  #showMega:checked ~ .mega-box {
    max-height: 100%;
  }
  .nav-links .desktop-item {
    display: none;
  }
  .nav-links .mobile-item {
    display: block;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .nav-links .mobile-item:hover {
    background: #3a3b3c;
  }
  .drop-menu li {
    margin: 0;
  }

  .mega-box .content {
    box-shadow: none;
    flex-direction: column;
    padding: 20px 20px 0 20px;
  }
  .mega-box .content .row:nth-child(1),
  .mega-box .content .row:nth-child(2) {
    border-top: 0px;
  }
}
</style>
