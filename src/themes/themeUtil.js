import colors from "@/themes/defaultColorPalette.scss";
import defaultLogo from "@/assets/default_logo.png";

let error = "",
  primaryColor = "",
  secondaryColor = "",
  info = "",
  success = "",
  warning = "",
  customColor = "",
  color = [],
  logo = "",
  defaultGradient = "";
const gradients = "";

primaryColor = colors.primary;
secondaryColor = colors.secondary;
info = colors.infos;
error = colors.errors;
success = colors.successColor;
warning = colors.warningColor;

logo = defaultLogo;
const gradient = function () {
    let colorss = "linear-gradient(45deg";
    for (let i = 0; i < color.length; i++) colorss += `,${color[i]}`;

    colorss += ")";
    return colorss;
  },
  grad = function () {
    color = [];
    defaultGradient = defaultGradient.
      replace(/]/g, "").
      replace(/\[/g, "").
      replace(/ /g, "");
    customColor = defaultGradient.split(",");
    for (let i = 0; i < customColor.length; i++) color.push(customColor[i]);
    gradient();
  };

export {
  primaryColor,
  secondaryColor,
  info,
  error,
  success,
  warning,
  gradients,
  colors,
  customColor,
  grad,
  gradient,
  logo
};
