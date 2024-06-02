import "./assets/main.scss";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/styles.css";
import "@/assets/css/fix-2403.css";
import "@/assets/css/font-awesome.min.css";
import "@/assets/js/jquery.min.js";
import "@/assets/js/bootstrap.bundle.min.js";
import "@/assets/js/mmenu.min.js";
import "@/assets/js/slick.min.js";
import "@/assets/js/app.js";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@unhead/vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(createHead());

app.mount("#app");
