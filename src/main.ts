import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAddressCard, faClipboardQuestion, faHome, faListCheck, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

library.add(faWhatsapp, faLinkedin, faInstagram, faGithub, faAddressCard, faHome, faClipboardQuestion, faListCheck);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
