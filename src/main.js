import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Maska from "maska";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./styles/index.css";
import "./styles/input.css";

createApp(App).use(Maska).use(store).use(router).mount("#app");
