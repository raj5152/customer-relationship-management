import {
  error,
  info,
  primaryColor,
  secondaryColor,
  success,
  warning
} from "@/themes/themeUtil.js";
import IdleDialog from "@/components/common/IdleDialog";
export default {
  "components": {
    IdleDialog
  },
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
  "methods": {
    goHome() {
      this.$router.push({
        "path": "/"
      });
    }
  }
};
