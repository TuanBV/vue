import 'assets/main.css'

import {
    createApp
} from 'vue'
import {
    createPinia
} from 'pinia'
import App from './App.vue'
import router from './router'
import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
    faSearch,
    faSignOut,
    faCartShopping,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
library.add(faSearch, faSignOut, faCartShopping, faUser)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')