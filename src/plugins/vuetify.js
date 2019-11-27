import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";
Vue.use(Vuetify);

export default new Vuetify({
  "theme": {
    "dark": false,
    "icons": {
      "iconfont": "mdi"
    },
    "options": {
      "customProperties": true
    },
    "themes": {
      "dark": {
        "primary": "#2196F3"
      },
      "light": {
        "primary": "#42a5f5"
      }
    }
  }
});
