<script setup>
import { ref, reactive, onMounted } from 'vue'
const isMenuSp = ref(false)
const isCheckScroll = ref(0)
const isResize = ref(0)

const menu = reactive([
	{
		name: 'Home',
		url: '/'
	},
	{
		name: 'Product',
		url: '/product'
	},
	{
		name: 'Service',
		url: '/service'
	},
	{
		name: 'About Us',
		url: '/about-us'
	},
	{
		name: 'Contact',
		url: '/contact'
	},
	{
		name: 'Sale',
		url: '/sale'
	}
])

onMounted(() => {
	window.addEventListener("scroll", function () {
		isCheckScroll.value = window.scrollY;
	})
	window.addEventListener("resize", function () {
		isResize.value = window.outerWidth;
	})
})
</script>
<template>
	<div class="fixed w-full">
		<!-- Menu PC -->
		<div class="px-4 py-4 flex text-center justify-center duration-700"
			:class="isCheckScroll ? 'bg-[#ffffffe6] text-gray-700' : 'bg-none text-white'">
			<nav class="w-[70vw] flex items-center justify-between">
				<a class="text-2xl font-bold leading-none text-center" href="#">
					<div class="font-semibold">BUI VAN TUAN</div>
					<div class="text-xl">Developer</div>
				</a>
				<div v-if="isResize < 1024">
					<button class="navbar-burger flex items-center p-3"
						:class="isCheckScroll ? 'text-gray-700' : 'text-white'"
						@click.prevent="isMenuSp = !isMenuSp">
						<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</button>
				</div>
				<div v-else>
					<ul class="lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6"
						:class="isCheckScroll ? 'text-gray-700' : 'text-white'">
						<router-link v-for="item in menu" :key="item" :to="item.url"
							class="text-sm font-medium" :class="isCheckScroll ? 'hover:text-amber-900' : 'hover:text-[#ffff00]'">
							{{ item.name }}
						</router-link>
					</ul>
				</div>
			</nav>
		</div>

		<!-- Menu smartphone -->
		<div class="navbar-menu relative z-50" :class="isMenuSp ? '' : 'hidden'">
			<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" @click.self="isMenuSp = false"></div>
			<nav
				class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
				<div class="flex items-center mb-8">
					<a class="mr-auto text-3xl font-bold leading-none text-center" href="#">
						<div class="font-semibold">BUI VAN TUAN</div>
						<div class="text-xl">Developer</div>
					</a>
					<button class="navbar-close" @click.prevent="isMenuSp = false">
						<svg class="h-6 w-6 text-gray-700 cursor-pointer hover:text-gray-500"
							xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M6 18L18 6M6 6l12 12">
							</path>
						</svg>
					</button>
				</div>
				<div>
					<ul>
						<li class="mb-1" v-for="item in menu" :key="item">
							<router-link :to="item.url"
								class="block py-4 pe-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
								{{ item.name }}
							</router-link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
</template>