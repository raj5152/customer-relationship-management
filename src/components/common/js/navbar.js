import {
  error,
  grad,
  gradient,
  info,
  logo,
  primaryColor,
  secondaryColor,
  success,
  warning
} from "@/themes/themeUtil.js";
import custom from "@/configuration_properties.json";
import event from '@/event';

const {
  applicationName
} = custom.applicationSettings;
export default {
  "name": "app-toolbar",
  "components": {
  },
  "computed": {
  },
  created() {
  },

  "data": () => {
    return {
      applicationName,
      error,
      info,
      logo,
      primaryColor,
      secondaryColor,
      success,
      warning,
      "searchText": ""
    };
  },
  "methods": {
    toggleDrawer() {
      event.$emit('APP_DRAWER_TOGGLED', true);
    },
    show() {
    },
    logout() {
      this.open = false;
      this.logoutConfirm = false;
      this.$router.push("/");
    }
  },
  mounted() {},
  "watch": {
  }
};
