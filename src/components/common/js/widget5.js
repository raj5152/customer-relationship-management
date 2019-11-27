import {
  error,
  info,
  primaryColor,
  secondaryColor,
  success,
  warning
} from "@/themes/themeUtil.js";
export default {
  "data": () => {
    return {
      error,
      info,
      primaryColor,
      secondaryColor,
      "show": false,
      success,
      warning
    };
  },
  mounted() {
    this.show = true;
  }
};
