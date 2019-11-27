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

const enableBgImage = custom.defaultConfigurations.enableCustomBackgroundImage,
  {
    applicationName
  } = custom.applicationSettings,
  support_link = custom.applicationSettings.supportUrl,
  company_site = custom.applicationSettings.companyWebsite;
let image = "",
  show = false;
if (enableBgImage == true) show = true;
else show = false;

export default {
  "data": () => {
    return {
      "errorLogin": false,
      "errorMessage": "",
      primaryColor,
      secondaryColor,
      info,
      error,
      success,
      warning,
      "loading": false,
      "username": "",
      "password": "",
      "gradients": "",
      logo,
      show,
      image,
      "enableLoginPage": false,
      applicationName,
      support_link,
      company_site,
      "loginRules": [v => {
        return Boolean(v);
      }]
    };
  },

  created() {
    this.enableLoginPage = true;
    grad();
    this.gradients = gradient();
  },
  "methods": {
    login() {
      this.$router.push("/");
    }
  }
};
