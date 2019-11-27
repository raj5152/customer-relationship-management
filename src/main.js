import "./plugins/vuetify";
import Vue from "vue";
import App from "./App.vue";
import router from "./framework/router/router";
import Vuetify from "vuetify";
import VueI18n from "vue-i18n";
import {
  i18n
} from "@/plugins/i18n";
import "./plugins/vuetify";
import vuetify from "./plugins/vuetify";
Vue.config.lang = "en";
Vue.use(VueI18n);
Vue.use(Vuetify);
Vue.config.productionTip = false;
new Vue({
  router,
  i18n,
  vuetify,
  "render": h => {
    return h(App);
  }
}).$mount("#app");
