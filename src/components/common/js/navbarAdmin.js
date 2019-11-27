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
import utils from "@/utils";
const {
  applicationName
} = custom.applicationSettings;
export default {
  "name": "app-toolbar",
  "components": {
  },
  "computed": {
  },
  created() {},
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
      "search": "",
      "show": false
    };
  },
  "methods": {
    drawer() {
      this.$root.$emit("APP_DRAWER_TOGGLED", true);
    },
    clearSearch() {
      this.search = "";
    },
    handleFullScreen() {
      utils.toggleFullScreen();
    }
  },
  mounted() {},
  "watch": {
  }
};
