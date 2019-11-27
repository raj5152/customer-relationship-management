import {
  error,
  info,
  primaryColor,
  secondaryColor,
  success,
  warning
} from "@/themes/themeUtil.js";
import IdleVue from "idle-vue";
import IdleVueComponent from "idle-vue/src/components/Idle.vue";
import Vue from "vue";
import timeout from "@/configuration_properties.json";
Vue.component("idle-view", IdleVueComponent);
const customTimeout = timeout.defaultConfigurations.idleTimeoutInterval,
  eventsHub = new Vue();
Vue.use(IdleVue, {
  "eventEmitter": eventsHub,
  "idleTime": customTimeout
});
export default {
  "data": () => {
    return {
      error,
      info,
      "logoutConfirm": false,
      primaryColor,
      secondaryColor,
      "show": false,
      success,
      warning
    };
  },
  "methods": {
    logout() {
      router.push("/");
      this.logoutConfirm = false;
    }
  },
  onIdle() {
    this.logoutConfirm = true;
  }
};
