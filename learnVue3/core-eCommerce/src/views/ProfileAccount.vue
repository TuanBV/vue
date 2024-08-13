<script setup>
import { reactive, ref, shallowRef, watch } from 'vue'
import { Cropper } from 'vue-advanced-cropper'
import ModalQA from 'components/modal/ModalQA.vue'
import ModalBasic from 'components/modal/ModalBasic2.vue'

const data = reactive({
  full_name: 'Bùi Văn Tuấn',
  nickname: 'Tuấn Suy',
  email: 'tuanbuibvt@gmail.com',
  phone: '0398282879',
  address: 'Kim Thành, Hải Dương',
  coin: 6000,
  point: 6000,
  type_account: 'VIP',
  created_date: '2022-10-10',
  birthday: '1998-10-05',
  bank_qr: '',
  avatar: 'https://ssvsports.work//img/avatar/tuanbv.png',
  danhhieu_id: 1,
  information: 'asadsadsa'
})
const cropper = ref(null)
const isModal = ref(false)
const isModalEdit = ref(false)
const isModalPassword = ref(false)
const isOpenModalQA = ref(false)
const isOpenModalBasic = shallowRef(false)
const result = reactive({
  image: null
})
const appellation = [
  {
    id: 1,
    img: 'https://ssvsports.work/icon/danhhieu/vip.gif',
    name: 'VIP PRO (TK full vip)'
  },
  {
    id: 2,
    img: 'https://ssvsports.work/icon/danhhieu/vip-month.png',
    name: 'VIP Month(TK vip tháng)'
  },
  {
    id: 3,
    img: 'https://ssvsports.work/icon/danhhieu/rich-vip.gif',
    name: 'Rich Vip (TK có trên 10.000 Scoin + Vip)'
  },
  {
    id: 4,
    img: '	https://ssvsports.work/icon/danhhieu/rich.png',
    name: 'Rich (TK có trên 10.000 Scoin)'
  },
  {
    id: 5,
    img: 'https://ssvsports.work/icon/danhhieu/ongvang.png',
    name: 'Ong vàng (TK tạo từ 1 năm trở lên)'
  },
  {
    id: 6,
    img: 'https://ssvsports.work/icon/danhhieu/cohon.png',
    name: 'Cô hồn (TK 1 tháng không sử dụng)'
  },
  {
    id: 7,
    img: 'https://ssvsports.work/icon/danhhieu/ongcon.png',
    name: 'Ong non (Tài khoản mới tạo dưới 1 năm)'
  }
]

const crop = () => {
  const { canvas } = cropper.value.getResult()
  result.image = canvas.toDataURL('image/png')
  data.avatar = result.image
  isModal.value = false
}

const uploadFile = (e) => {
  result.image = URL.createObjectURL(e.target.files[0])
  isModal.value = true
}

const uploadQRcode = (e) => {
  if (e.target.files.length) data.bank_qr = URL.createObjectURL(e.target.files[0])
}

const close = () => {
  result.image = null
  isModal.value = false
}

const showModal = () => {
  isOpenModalQA.value = true;
}

const showModalBasic = () => {
  isOpenModalBasic.value = true;
}

watch(isModal, () => {
  document.getElementById('avatar').value = null
})
</script>

<template>
  <div
    ref="modal-avatar"
    class="fixed inset-0 left-0 z-[100] flex w-full items-center justify-center bg-[#686e79b4]"
    v-if="isModal"
    @click.self="isModal = false"
  >
    <div class="opacity-1 z-11 block w-full bg-white shadow-xl lg:w-[70vw] lg:rounded-md">
      <div class="flex w-full justify-end p-3 text-2xl">
        <button type="button" @click="close"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="my-5 h-[30vh] w-full p-3 md:h-[40vh] lg:h-[60vh]">
        <Cropper
          ref="cropper"
          :src="result.image"
          :stencil-props="{
            aspectRatio: 1 / 1
          }"
        />
      </div>
      <div class="my-3 flex w-full justify-center">
        <button
          type="button"
          @click.prevent="crop"
          class="mr-3 rounded-md bg-green-500 px-5 py-2 font-medium text-white"
        >
          Chọn
        </button>
        <button
          type="button"
          class="rounded-md bg-red-500 px-5 py-2 font-medium text-white"
          @click="close"
        >
          Thoát
        </button>
      </div>
    </div>
  </div>
  <div
    class="fixed inset-0 left-0 z-[100] flex w-full items-center justify-center bg-[#686e79b4]"
    v-if="isModalEdit"
    @click.self="isModalEdit = false"
  >
    <div
      class="opacity-1 z-11 block h-full w-full overflow-y-auto bg-white p-3 shadow-xl md:h-auto lg:w-[60vw] lg:rounded-md"
    >
      <div class="flex w-full justify-between p-3 text-2xl">
        <p class="text-lg md:text-xl">Chỉnh sửa thông tin cá nhân</p>
        <button type="button" @click="isModalEdit = false">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 border-t-[1px] py-5 lg:grid-cols-2">
        <div>
          <label
            for="fullname"
            class="ext-gray-900 col-span-2 block text-sm font-medium leading-6 lg:col-span-1"
            >Họ tên</label
          >
          <input
            type="email"
            name="fullname"
            v-model="data.full_name"
            class="ing-1 ring-insetring-gray-300 focus:ing-indigo-600 block w-full rounded-md border py-1.5 pl-2 pr-20 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            placeholder="abc@mail.com"
          />
        </div>
        <div>
          <label
            for="nickname"
            class="ext-gray-900 col-span-2 block text-sm font-medium leading-6 lg:col-span-1"
            >Nickname</label
          >
          <input
            type="text"
            name="nickname"
            v-model="data.nickname"
            min="10"
            max="11"
            class="ing-1 ring-insetring-gray-300 focus:ing-indigo-600 block w-full rounded-md border py-1.5 pl-2 pr-20 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            placeholder="0923923122"
          />
        </div>
        <div>
          <label
            for="phone"
            class="ext-gray-900 col-span-2 block text-sm font-medium leading-6 lg:col-span-1"
            >Số điện thoại</label
          >
          <input
            type="text"
            name="phone"
            v-model="data.phone"
            min="10"
            max="11"
            class="ing-1 ring-insetring-gray-300 focus:ing-indigo-600 block w-full rounded-md border py-1.5 pl-2 pr-20 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            placeholder="0923923122"
          />
        </div>
        <div>
          <label
            for="birthday"
            class="ext-gray-900 col-span-2 block text-sm font-medium leading-6 lg:col-span-1"
            >Sinh nhật</label
          >
          <input
            type="date"
            name="birthday"
            v-model="data.birthday"
            class="ing-1 ring-insetring-gray-300 focus:ing-indigo-600 block w-full rounded-md border px-2 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <label
            for="phone"
            class="ext-gray-900 col-span-2 block text-sm font-medium leading-6 lg:col-span-1"
            >Địa chỉ liên hệ</label
          >
          <input
            type="text"
            name="phone"
            v-model="data.address"
            class="ing-1 ring-insetring-gray-300 focus:ing-indigo-600 block w-full rounded-md border py-1.5 pl-2 pr-20 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            placeholder="Hà Nội"
          />
        </div>
        <div>
          <label
            for="birthday"
            class="ext-gray-900 col-span-2 block text-sm font-medium leading-6 lg:col-span-1"
            >Ngày tham gia</label
          >
          <input
            type="date"
            name="birthday"
            v-model="data.created_date"
            class="ing-1 ring-insetring-gray-300 focus:ing-indigo-600 block w-full rounded-md border px-2 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div class="mb-2 grid grid-cols-2 items-center gap-3 md:flex">
        <label for="qr" class="block text-sm font-medium leading-6 text-gray-900">QR code</label>
        <div class="ml-4 mr-2">
          <label for="qr" class="rounded-md bg-gray-400 px-5 py-2 text-sm text-white"
            >Chọn file</label
          >
          <input
            id="qr"
            name="qr"
            type="file"
            class="hidden text-gray-900 shadow-sm"
            accept="image/png, image/jpeg"
            @change.prevent="uploadQRcode"
          />
        </div>
        <div v-if="data.bank_qr">
          <img :src="data.bank_qr" alt="QR code" class="h-[150px] w-[150px]" />
        </div>
      </div>
      <div>
        <label
          for="information"
          class="ext-gray-900 col-span-2 block text-sm font-medium leading-6 lg:col-span-1"
          >Giới thiệu bản thân</label
        >
        <textarea
          name="information"
          id=""
          class="w-full rounded-md border p-2"
          rows="10"
          v-model="data.information"
        ></textarea>
      </div>
      <div class="my-3 flex w-full justify-center">
        <button
          type="button"
          @click.prevent=""
          class="mr-3 rounded-md bg-green-500 px-5 py-2 font-medium text-white"
        >
          Cập nhật
        </button>
        <button
          type="button"
          class="rounded-md bg-red-500 px-5 py-2 font-medium text-white"
          @click="isModalEdit = false"
        >
          Thoát
        </button>
      </div>
    </div>
  </div>
  <div
    class="fixed inset-0 left-0 z-[100] flex w-full items-center justify-center bg-[#686e79b4]"
    v-if="isModalPassword"
    @click.self="isModalPassword = false"
  >
    <div class="opacity-1 z-11 block w-full bg-white p-3 shadow-xl lg:w-[30vw] lg:rounded-md">
      <div class="flex w-full justify-between p-3 text-2xl">
        <p class="text-lg md:text-xl">Thay đổi mật khẩu</p>
        <button type="button" @click="isModalPassword = false">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-4 border-t-[1px] py-5">
        <div>
          <label for="price" class="block text-sm leading-5 text-gray-900">Mật khẩu hiện tại</label>
          <input
            type="password"
            name="Password"
            class="ing-1 ring-insetring-gray-300 focus:ing-indigo-600 block w-full rounded-md border py-1.5 pl-2 pr-20 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            placeholder="*****"
          />
        </div>
        <div>
          <label for="price" class="block text-sm leading-5 text-gray-900">Mật khẩu mới</label>
          <input
            type="password"
            name="Password"
            class="ing-1 ring-insetring-gray-300 focus:ing-indigo-600 sm:ext-sm block w-full rounded-md border py-1.5 pl-2 pr-20 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6"
            placeholder="*****"
          />
        </div>
        <div>
          <label for="price" class="block text-sm leading-5 text-gray-900"
            >Nhập lại mật khẩu mới</label
          >
          <input
            type="password"
            name="Password"
            class="ing-1 ring-insetring-gray-300 focus:ing-indigo-600 sm:ext-sm block w-full rounded-md border py-1.5 pl-2 pr-20 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6"
            placeholder="*****"
          />
        </div>
      </div>
      <div class="my-3 flex w-full justify-center">
        <button
          type="button"
          @click.prevent=""
          class="mr-3 rounded-md bg-yellow-500 px-5 py-2 font-medium text-white"
        >
          Cập nhật
        </button>
        <button
          type="button"
          class="rounded-md bg-red-500 px-5 py-2 font-medium text-white"
          @click="isModalPassword = false"
        >
          Thoát
        </button>
      </div>
    </div>
  </div>
  <div class="mx-auto my-[50px] max-w-screen-xl">
    <div class="grid-cols-4 lg:grid lg:grid-flow-col lg:grid-rows-4 lg:gap-4" v-show="!isModal">
      <div class="row-span-4 bg-white p-3 lg:rounded-md lg:border">
        <div class="relative mb-3 w-full">
          <img
            :src="data.avatar"
            alt="avatar"
            width="100%"
            height="100%"
            class="aspect-square w-full rounded-t-2xl"
          />
          <label
            for="avatar"
            class="absolute bottom-0 w-full bg-[#9ca3afab] text-center leading-9 text-white"
          >
            Upload ảnh
          </label>
          <input
            type="file"
            @change="uploadFile"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            hidden
          />
        </div>
        <div>
          <label
            for="price"
            class="flex items-center justify-between border-b-[1px] pb-3 text-sm font-medium leading-6 text-gray-900"
          >
            <span>{{ data.full_name }} ({{ data.nickname }})</span>
            <button @click.prevent="isModalEdit = true">
              <i class="fa-solid fa-pen"></i>
            </button>
          </label>
          <div class="my-5 grid grid-cols-1 gap-4">
            <div><i class="fa-solid fa-envelope mr-3"></i> {{ data.email }}</div>
            <div><i class="fa-solid fa-calendar-days mr-3"></i> {{ data.birthday }}</div>
            <div><i class="fa-solid fa-voicemail mr-3"></i> {{ data.phone }}</div>
            <div><i class="fa-solid fa-globe mr-3"></i> {{ data.address }}</div>
            <div><i class="fa-regular fa-calendar-check mr-3"></i> {{ data.created_date }}</div>
            <div><i class="fa-solid fa-dollar-sign mr-3"></i> {{ data.coin }} scoin</div>
            <div class="flex aspect-square w-full justify-center" v-if="data.bank_qr">
              <img :src="data.bank_qr" alt="QR code" class="w-full" />
            </div>
          </div>
          <a
            class="hover:cursor-pointer hover:bg-white hover:text-yellow-600"
            @click.prevent="isModalPassword = true"
            >Đổi mật khẩu</a
          >
          <button @click="showModal">QA</button><br/>
          <button @click="showModalBasic">ModalBasic</button>
        </div>
      </div>
      <div class="col-span-3 row-span-1 border-t-[1px] bg-white p-5 lg:rounded-md lg:border">
        <h3 class="pb-3 pt-2 text-xl font-medium">Giới thiệu cá nhân</h3>
        <div v-html="data.information" v-if="data.information"></div>
      </div>
      <div class="col-span-3 row-span-1 border-t-[1px] bg-white p-5 lg:rounded-md lg:border">
        <h3 class="pb-5 pt-3 text-xl font-medium">Danh hiệu</h3>
        <div
          class="customer-scroll grid h-[290px] grid-cols-2 gap-3 overflow-y-scroll pr-2 sm:grid-cols-3 md:h-[280px] lg:h-[250px] lg:grid-cols-3"
        >
          <div v-for="item in appellation" :key="item" class="flex rounded-md border p-5">
            <input type="radio" v-model="appellationUser" :value="item.id" :id="item.id" />
            <label :for="item.id" class="ml-4 w-full">
              <div class="w-full text-center text-xs">{{ item.name }}</div>
              <div class="mt-1 flex w-full justify-center">
                <img :src="item.img" :alt="item.name" width="50" height="50" />
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="col-span-3 row-span-2 border-t-[1px] bg-white p-5 lg:rounded-md lg:border">
        <h3 class="pb-5 pt-3 text-xl font-medium">Thành tích</h3>
        <div class="flex flex-wrap">
          <div class="relative flex w-full items-center pb-5 pt-5">
            <div class="absolute inset-0 flex h-full w-9 items-center justify-center">
              <div class="pointer-events-none h-full w-1 bg-gray-200"></div>
            </div>
            <div
              class="title-font relative z-10 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gray-400 text-sm font-medium text-white"
            >
              <i class="fa-solid fa-trophy"></i>
            </div>
            <div class="flex flex-grow flex-col items-start pl-6 sm:flex-row md:pl-8">
              <div class="flex-grow sm:pl-6">
                <h2 class="title-font mb-1 text-xl font-medium text-gray-900">
                  Tên giải đấu - Thời gian
                </h2>
                <p class="leading-relaxed">Vô địch</p>
              </div>
            </div>
          </div>
          <div class="relative flex w-full items-center pb-5">
            <div class="absolute inset-0 flex h-full w-9 items-center justify-center">
              <div class="pointer-events-none h-full w-1 bg-gray-200"></div>
            </div>
            <div
              class="title-font relative z-10 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gray-400 text-sm font-medium text-white"
            >
              <i class="fa-solid fa-trophy"></i>
            </div>
            <div
              class="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8"
            >
              <div class="flex-grow sm:pl-6">
                <h2 class="title-font mb-1 text-xl font-medium text-gray-900">The Catalyzer</h2>
                <p class="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. .
                </p>
              </div>
            </div>
          </div>
          <div class="relative flex w-full items-center pb-5">
            <div class="absolute inset-0 flex h-full w-9 items-center justify-center">
              <div class="pointer-events-none h-full w-1 bg-gray-200"></div>
            </div>
            <div
              class="title-font relative z-10 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gray-400 text-sm font-medium text-white"
            >
              <i class="fa-solid fa-trophy"></i>
            </div>
            <div
              class="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8"
            >
              <div class="flex-grow sm:pl-6">
                <h2 class="title-font mb-1 text-xl font-medium text-gray-900">
                  Tên giải đấu - Thời gian
                </h2>
                <p class="leading-relaxed">Tham</p>
              </div>
            </div>
          </div>
          <div class="relative flex w-full items-center pb-5">
            <div class="absolute inset-0 flex h-full w-9 items-center justify-center">
              <div class="pointer-events-none h-full w-1 bg-gray-200"></div>
            </div>
            <div
              class="title-font relative z-10 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gray-400 text-sm font-medium text-white"
            >
              <i class="fa-solid fa-trophy"></i>
            </div>
            <div
              class="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8"
            >
              <div class="flex-grow sm:pl-6">
                <h2 class="title-font mb-1 text-xl font-medium text-gray-900">Neptune</h2>
                <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalQA v-model="isOpenModalQA"/>
  <ModalBasic v-model="isOpenModalBasic"/>
</template>

<style scope>
.customer-scroll::-webkit-scrollbar {
  width: 8px;
}

.customer-scroll::-webkit-scrollbar-track {
  background-color: hsl(0, 0%, 89%);
  border-radius: 100px;
}

.customer-scroll::-webkit-scrollbar-thumb {
  background-color: #0baf9a;
  border-radius: 100px;
}
</style>
