/*eslint-disable*/
import {
  error,
  info,
  logo,
  primaryColor,
  secondaryColor,
  success,
  warning
} from "@/themes/themeUtil.js";
import custom from "@/configuration_properties.json";
const {applicationName} = custom.applicationSettings;
export default {
  components: {},
  computed: {},
  created() {},
  data: () => {
    return {
      applicationName,
      error,
      info,
      logo,
      primaryColor,
      secondaryColor,
      success,
      address: "",
      warning,
      place: "Jaipur 302016",
      location: false,
      items: [
        {
          image: "@/assets/img/maniac.jpg",
          cart: "My Cart(1)",
          itemName: "Maniac Men's Sweater"
        },
        {
          image: "@/assets/img/71ZU4VsevqL._AC_AA100_.jpg",
          cart: "My Cart(1)",
          itemName: "Infinix Smart 3 Plus (Sapphire Cyan, 32 GB)"
        },
        {
          image: "@/assets/img/diesel.jpg",
          cart: "My Cart(1)",
          itemName: "Diesel Analog Blue Dial Men's Watch - DZ1787"
        },
        {
          image: "@/assets/img/macbook.jpg",
          cart: "My Cart(1)",
          itemName:
            "Apple MacBook Air (13-inch Retina Display, 1.6GHz Dual-core Intel Core i5, 128GB) - Space Grey"
        }
      ]
    };
  },
  methods: {},
  mounted() {},
  watch: {}
};
