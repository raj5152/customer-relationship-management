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
    grad();
    this.gradients = gradient();
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
    show() {
      alert();
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
