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
import event from "@/event";
import menu from "@/store/menus/menus.json";
import custom from "@/configuration_properties.json";
const {
  applicationName
} = custom.applicationSettings;
export default {
  "name": "drawer",
  "props": {
    "expanded": {
      "default": true,
      "type": Boolean
    }
  },
  created() {
    this.listMenus = menu;
    event.$on("APP_DRAWER_TOGGLED", () => {
      this.drawer = !this.drawer;
    });
    event.$on("Close", () => {
      this.drawer = false;
    });
    grad();
    this.gradients = gradient();
  },
  data() {
    return {
      applicationName,
      "colors": [],
      "commonMenuItems": menu,
      "customColor": "",
      "drawer": true,
      error,
      "favorites": [],
      "gradients": "",
      info,
      "listMenus": [],
      logo,
      "mini": false,
      primaryColor,
      "right": null,
      secondaryColor,
      success,
      warning
    };
  },
  "methods": {
  },
  mounted() {
    this.$root.$on("APP_DRAWER_TOGGLED", arg => {
      this.drawer = !this.drawer;
    });
  },
  "watch": {

    /*
     * Drawer() {
     *   event.$emit("drawerEvent", this.drawer);
     * }
     */
  }
};
