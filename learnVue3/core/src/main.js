import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'vue-advanced-cropper/dist/style.css'

const app = createApp(App)
// Set constant global variables
app.config.globalProperties.$globalImg = {
  img: 'text',
  imgNo: 'text2'
}

// Using constant global variables
// this.<name variables>

app.use(createPinia())
app.use(router)

app.mount('#app')
