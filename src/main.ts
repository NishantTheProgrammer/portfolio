import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import ToastPlugin from 'vue-toast-notification';

import { faAddressCard, faClipboardQuestion, faDatabase, faHome, faListCheck, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faCss3, faCss3Alt, faCuttlefish, faDyalog, faGithub, faHtml5, faInstagram, faJava, faJsSquare, faLaravel, faLinkedin, faLinux, faPhp, faPython, faReact, faUnity, faVuejs, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

library.add(faWhatsapp, faLinkedin, faInstagram, faGithub, faAddressCard, faHome, faClipboardQuestion, faListCheck, faHtml5, faCss3Alt, faJsSquare, faReact, faVuejs, faPython, faDyalog, faDatabase, faLinux, faPhp, faLaravel, faBootstrap, faJava, faCuttlefish, faUnity ,faLaravel);

const app = createApp(App);
app.use(ToastPlugin);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
