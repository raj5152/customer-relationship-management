import custom from "@/configuration_properties.json";
const {
  helpUrl
} = custom.applicationSettings;
export default {
  data() {
    return {
      helpUrl
    };
  },
  "name": "help"
};
