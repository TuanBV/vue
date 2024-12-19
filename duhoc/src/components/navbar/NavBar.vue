<script setup>
import { reactive } from 'vue'
const menu = reactive([
  {
    label: 'Các bước để du học',
    to: '/step-study-abroad'
  },
  {
    label: 'Du học',
    to: '/study-abroad',
    children: [
      {
        header: 'Du học Úc',
        to: '/australia',
        children: [
          { label: 'Học bổng', to: '/scholarship' },
          { label: 'Du học thạc sĩ', to: '/master' },
          { label: 'Du học cấp 3', to: '/high-school' },
          { label: 'Top trường', to: '/top-school' },
          { label: 'Chi phí', to: '/budget' }
        ]
      },
      {
        header: 'Du học Canada',
        to: '/canada',
        children: [
          { label: 'Học bổng', to: '/scholarship' },
          { label: 'Du học thạc sĩ', to: '/master' },
          { label: 'Du học cấp 3', to: '/high-school' },
          { label: 'Top trường', to: '/top-school' },
          { label: 'Chi phí', to: '/budget' }
        ]
      },
      {
        header: 'Du học Mỹ',
        to: '/usa',
        children: [
          { label: 'Học bổng', to: '/scholarship' },
          { label: 'Du học thạc sĩ', to: '/master' },
          { label: 'Du học cấp 3', to: '/high-school' },
          { label: 'Top trường', to: '/top-school' },
          { label: 'Chi phí', to: '/budget' }
        ]
      },
      {
        header: 'Du học Anh',
        to: '/english',
        children: [
          { label: 'Running', to: '/running' },
          { label: 'Football', to: '/football' },
          { label: 'Basketball', to: '/basketball' },
          { label: 'Tennis', to: '/tennis' },
          { label: 'Golf', to: '/golf' }
        ]
      },
      {
        header: 'Du học Nhật',
        to: '/japan',
        children: [
          { label: 'Học bổng', to: '/scholarship' },
          { label: 'Du học thạc sĩ', to: '/master' },
          { label: 'Du học cấp 3', to: '/high-school' },
          { label: 'Top trường', to: '/top-school' },
          { label: 'Chi phí', to: '/budget' }
        ]
      },
      {
        header: 'Du học Hàn',
        to: '/korea',
        children: [
          { label: 'Học bổng', to: '/scholarship' },
          { label: 'Du học thạc sĩ', to: '/master' },
          { label: 'Du học cấp 3', to: '/high-school' },
          { label: 'Top trường', to: '/top-school' },
          { label: 'Chi phí', to: '/budget' }
        ]
      }
    ]
  },
  {
    label: 'Khóa học',
    to: '/course',
    children: [
      {
        header: 'Featured',
        to: '/featured',
        children: [
          { label: 'New Releases', to: '/new-releases' },
          { label: 'Best Sellers', to: '/best-sellers' },
          { label: 'Y2K Sneakers', to: '/y2k-sneakers' },
          { label: 'Gifts for Him', to: '/gifts-for-him' }
        ]
      },
      {
        header: 'Shoes',
        to: '/shoes',
        children: [
          { label: 'All shoes', to: '/all' },
          { label: 'Lifestyle', to: '/lifestyle' },
          { label: 'Jordan', to: '/jordan' },
          { label: 'Running', to: '/running' },
          { label: 'Football', to: '/football' },
          { label: 'Basketball', to: '/basketball' },
          { label: 'Training and Gym ', to: '/training-gym' },
          { label: 'Nike by You', to: '/nike-by-you' }
        ]
      },
      {
        header: 'Clothing',
        to: '/clothing',
        children: [
          { label: 'All clothing', to: '/all' },
          { label: 'Hoodies and Sweatshirts', to: '/hoodies-sweatshirts' },
          { label: 'Jackets', to: '/jackets' },
          { label: 'Trousers and Tights', to: '/trousers-tights' },
          { label: 'Tracksuits', to: '/tracksuits' },
          { label: 'Tops and T-Shirts', to: '/top-shirts' },
          { label: 'Shorts ', to: '/shorts' },
          { label: 'Kits and Jerseys', to: '/kits-jerseys' }
        ]
      },
      {
        header: 'Discover Sport',
        to: '/discover-sport',
        children: [
          { label: 'Running', to: '/running' },
          { label: 'Football', to: '/football' },
          { label: 'Basketball', to: '/basketball' },
          { label: 'Tennis', to: '/tennis' },
          { label: 'Golf', to: '/golf' }
        ]
      }
    ]
  },
  {
    label: 'IELTS',
    to: '/ielts',
    children: [
      {
        header: 'Featured',
        to: '/featured',
        children: [
          { label: 'New Releases', to: '/new-releases' },
          { label: 'Best Sellers', to: '/best-sellers' },
          { label: 'Teens', to: '/teens' },
          { label: 'EasyOn', to: '/easy-on' },
          { label: 'Gifts for kids', to: '/gifts-for-kids' }
        ]
      },
      {
        header: 'Shoes',
        to: '/shoes',
        children: [
          { label: 'All shoes', to: '/all' },
          { label: 'Lifestyle', to: '/lifestyle' },
          { label: 'Jordan', to: '/jordan' },
          { label: 'Running', to: '/running' },
          { label: 'Football', to: '/football' },
          { label: 'Basketball', to: '/basketball' }
        ]
      },
      {
        header: 'Clothing',
        to: '/clothing',
        children: [
          { label: 'All clothing', to: '/all' },
          { label: 'Hoodies and Sweatshirts', to: '/hoodies-sweatshirts' },
          { label: 'Jackets', to: '/jackets' },
          { label: 'Trousers and Tights', to: '/trousers-tights' },
          { label: 'Tracksuits', to: '/tracksuits' },
          { label: 'Tops and T-Shirts', to: '/top-shirts' },
          { label: 'Shorts ', to: '/shorts' },
          { label: 'Kits and Jerseys', to: '/kits-jerseys' }
        ]
      },
      {
        header: 'Kids by age',
        to: '/kids-by-age',
        children: [
          { label: 'Older kids', to: '/older-kids' },
          { label: 'Younger kids', to: '/younger-kids' },
          { label: 'Baby & Toddler', to: '/baby-toddler' }
        ]
      }
    ]
  },
  {
    label: 'Dịch vụ sinh viên',
    to: '/service',
    children: [
      {
        header: 'Bảo hiểm y tế',
        to: '/history'
      },
      {
        header: 'Hỗ trợ tìm chỗ ở',
        to: '/why'
      },
      {
        header: 'Chuyển tiền',
        to: '/contact'
      },
      {
        header: 'Dịch vụ ngân hàng',
        to: '/policy'
      },
      {
        header: 'Dịch vụ giám hộ',
        to: '/office'
      },

      {
        header: 'Dịch vụ Sim',
        to: '/office'
      }
    ]
  },
  {
    label: 'Về chúng tôi',
    to: '/about',
    children: [
      {
        header: 'Lịch sử hình thành',
        to: '/history'
      },
      {
        header: 'Lý do chọn chúng tôi',
        to: '/why'
      },
      {
        header: 'Liên hệ',
        to: '/contact'
      },
      {
        header: 'Chính sách',
        to: '/policy'
      },
      {
        header: 'Văn phòng gần nhất',
        to: '/office'
      }
    ]
  }
])
</script>

<template>
  <nav class="fixed z-[99] w-full border-b-[1px] bg-white">
    <div
      class="wrapper relative m-auto flex h-[70px] max-w-[1300px] items-center justify-between px-10 leading-[70px] pc:px-0"
    >
      <div class="logo">
        <router-link to="/">
          <img src="assets/logo.png" alt="" srcset="" width="70px" height="70px" />
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
        <div class="links" v-for="(item, index) in menu" :key="index">
          <router-link
            :to="item.to"
            class="p-[9px_15px] text-lg underline-offset-0 transition-all ease-linear hover:pb-1 hover:text-[#025cbd] hover:underline hover:underline-offset-8"
            >{{ item.label }}</router-link
          >
          <input
            v-if="item?.children?.length"
            type="checkbox"
            :id="'showMega' + index"
            class="hidden"
          />
          <label v-if="item?.children?.length" :for="'showMega' + index" class="float-end pc:hidden"
            ><font-awesome-icon :icon="['fas', 'plus']"></font-awesome-icon
          ></label>

          <div
            v-if="item?.children?.length"
            class="mega-box invisible absolute left-0 top-[85px] w-full px-0 opacity-0"
          >
            <div
              class="content shadow-[0_6px_10px_rgba(0, 0, 0, 0.15)] grid w-full grid-cols-1 justify-between gap-4 bg-white px-[25px] py-[20px] tablet:grid-cols-2 pc:grid-cols-4"
            >
              <div class="row leading-9" v-for="(item2, index2) in item.children" :key="index2">
                <router-link :to="item.to + item2.to"
                  ><header class="font-medium">{{ item2.header }}</header></router-link
                >
                <div v-for="(item3, index3) in item2?.children" :key="index3">
                  <router-link
                    :to="item.to + item2.to + item3.to"
                    class="text-base hover:text-[#025cbd]"
                    >{{ item3.label }}</router-link
                  >
                </div>
              </div>
            </div>
          </div>
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
