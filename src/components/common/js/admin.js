import {
  error,
  info,
  primaryColor,
  secondaryColor,
  success,
  warning
} from "@/themes/themeUtil.js";
import IdleDialog from "@/components/common/IdleDialog";
import Widget1 from "@/components/common/Widget1";
import Widget2 from "@/components/common/Widget2";
import Widget3 from "@/components/common/Widget3";
import Widget4 from "@/components/common/Widget4";
import Widget5 from "@/components/common/Widget5";

export default {
  "components": {
    IdleDialog,
    Widget1,
    Widget2,
    Widget3,
    Widget4,
    Widget5
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
  mounted() {
    this.show = true;
  }
};
