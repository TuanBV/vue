<template>
  <nav class="fixed z-[99] w-full bg-white">
    <div
      class="wrapper relative m-auto flex h-[70px] max-w-[1300px] items-center justify-between px-0 leading-[70px]"
    >
      <div class="logo">
        <router-link to="/">
          <img src="assets/logo.svg" alt="" srcset="" width="70px" height="70px" />
        </router-link>
      </div>
      <input type="radio" name="slider" id="menu-btn" class="hidden" />
      <input type="radio" name="slider" id="close-btn" class="hidden" />
      <div class="nav-links block pc:inline-flex">
        <label
          for="close-btn"
          class="absolute right-[30px] top-[10px] block items-end text-xl pc:hidden"
          ><font-awesome-icon :icon="['fas', 'close']" class="mr-3"
        /></label>
        <div class="links">
          <router-link
            to="/new-featured"
            class="p-[9px_15px] text-lg transition-all duration-300 ease-linear hover:text-[#025cbd]"
            >New & Featured</router-link
          >
        </div>
        <div class="links">
          <router-link
            to="/men"
            class="p-[9px_15px] text-lg transition-all duration-300 ease-linear hover:text-[#025cbd]"
            >Men</router-link
          >
        </div>
        <div class="links">
          <router-link
            to="/women"
            class="p-[9px_15px] text-lg transition-all duration-300 ease-linear hover:text-[#025cbd]"
          >
            <span>Women</span>
          </router-link>
          <input type="checkbox" id="showMega1" class="hidden" />
          <label for="showMega1" class="float-end pc:hidden"
            ><font-awesome-icon :icon="['fas', 'plus']"></font-awesome-icon
          ></label>
          <div class="mega-box invisible absolute left-0 top-[85px] w-full px-0 opacity-0">
            <div
              class="content shadow-[0_6px_10px_rgba(0, 0, 0, 0.15)] flex w-full justify-between bg-white px-[25px] py-[20px]"
            >
              <div class="row flex w-[calc(25%-30px)] items-center leading-[45px]">
                <img
                  src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                  alt=""
                  width="auto"
                  height="auto"
                />
              </div>
              <div class="row grid w-[calc(25%-30px)] leading-[45px]">
                <header class="text-xl font-medium">Design Services</header>
                <router-link to="#" class="hover:text-[#025cbd]">Graphics</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">Vectors</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">Business</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">Custom logo</router-link>
              </div>
              <div class="row grid w-[calc(25%-30px)] leading-[45px]">
                <header class="text-xl font-medium">Email Services</header>
                <router-link to="#" class="hover:text-[#025cbd]">Personal Email</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">Business Email</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">Mobile Email</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">Web Marketing</router-link>
              </div>
              <div class="row grid w-[calc(25%-30px)] leading-[45px]">
                <header class="text-xl font-medium">Security services</header>
                <router-link to="#" class="hover:text-[#025cbd]">Site Seal</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">VPS Hosting</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">Mobile Email</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">Web Marketing</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="links">
          <router-link
            to="/kids"
            class="p-[9px_15px] text-lg transition-all duration-300 ease-linear hover:text-[#025cbd]"
          >
            <span>Kids</span>
          </router-link>
          <input type="checkbox" id="showMega2" class="hidden" />
          <label for="showMega2" class="float-end pc:hidden"
            ><font-awesome-icon :icon="['fas', 'plus']"></font-awesome-icon
          ></label>

          <div class="mega-box invisible absolute left-0 top-[85px] w-full px-0 opacity-0">
            <div
              class="content shadow-[0_6px_10px_rgba(0, 0, 0, 0.15)] flex w-full justify-between bg-white px-[25px] py-[20px]"
            >
              <div class="row flex w-[calc(25%-30px)] items-center leading-[45px]">
                <img
                  src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                  alt=""
                  width="auto"
                  height="auto"
                />
              </div>
              <div class="row grid w-[calc(25%-30px)] leading-[45px]">
                <header class="text-xl font-medium">Design Services</header>
                <router-link to="#" class="hover:text-[#025cbd]">Graphics</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">Vectors</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">Business</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">Custom logo</router-link>
              </div>
              <div class="row grid w-[calc(25%-30px)] leading-[45px]">
                <header class="text-xl font-medium">Email Services</header>
                <router-link to="#" class="hover:text-[#025cbd]">Personal Email</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">Business Email</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">Mobile Email</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">Web Marketing</router-link>
              </div>
              <div class="row grid w-[calc(25%-30px)] leading-[45px]">
                <header class="text-xl font-medium">Security services</header>
                <router-link to="#" class="hover:text-[#025cbd]">Site Seal</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">VPS Hosting</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">Mobile Email</router-link>
                <router-link to="#" class="hover:text-[#025cbd]">Web Marketing</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="links">
          <router-link
            to="/sale"
            class="p-[9px_15px] text-lg transition-all duration-300 ease-linear hover:text-[#025cbd]"
            >Sale</router-link
          >
        </div>
      </div>
      <label for="menu-btn" class="menu-btn block cursor-pointer text-xl pc:hidden"
        ><font-awesome-icon :icon="['fas', 'bars']" class="mr-3"
      /></label>
    </div>
  </nav>
</template>
<style scope>
.links:hover .mega-box {
  transition: all 0.3s ease;
  top: 70px;
  opacity: 1;
  visibility: visible;
}
.content .row .mega-links {
  margin-left: -40px;
}
.row .mega-links li {
  padding: 0 20px;
}
.row .mega-links li a {
  padding: 0px;
  padding: 0 20px;
  font-size: 17px;
  display: block;
}

@media screen and (max-width: 970px) {
  .nav-links {
    position: fixed;
    height: 100vh;
    width: 100%;
    max-width: 350px;
    top: 0;
    left: -100%;
    background: white;
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
  #menu-btn:checked ~ .menu-btn {
    display: none;
  }
  #close-btn:checked ~ .menu-btn {
    display: block;
  }
  .nav-links .links {
    margin: 15px 10px;
    padding: 0 20px;
    display: block;
    font-size: 20px;
  }
  input[type='checkbox']:checked ~ .mega-box {
    max-height: 100%;
  }
  .mega-box {
    position: static;
    top: 65px;
    opacity: 1;
    visibility: visible;
    padding: 0 20px;
    max-height: 0px;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .mega-box .content {
    box-shadow: none;
    flex-direction: column;
    padding: 20px 20px 0 20px;
  }
  .mega-box .content .row {
    width: 100%;
    margin-bottom: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }
  .mega-box .content .row:nth-child(1),
  .mega-box .content .row:nth-child(2) {
    border-top: 0px;
  }
  .content .row .mega-links {
    border-left: 0px;
    padding-left: 15px;
  }
}
</style>
