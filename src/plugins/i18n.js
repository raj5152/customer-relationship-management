import Vue from "vue";
import VueI18n from "vue-i18n";
import Vuetify from "vuetify";
import english from "@/store/translation/en.json";

Vue.use(VueI18n);
Vue.use(Vuetify);
import customConfiguration from "@/configuration_properties.json";

const englishLanguage = Object.assign(english.commonComponents.login,
    english.commonComponents.drawer,
    english.commonComponents.pageNotFound,
    english.commonComponents.idleDialog,
    english.commonComponents.stepComponent,
    english.functionalComponents.regitserForm,
    english.functionalComponents.credientialsForm,
    english.functionalComponents.addressForm,
    english.functionalComponents.taxInformationForm,
    english.functionalComponents.reviewAndDeclaration,
    english.functionalComponents.personalDetails,
    english.functionalComponents.home,
    english.functionalComponents.configurationsProperties,
    english.schemaParser.common,
    english.schemaParser.translation,
    english.configurationsProperties,
    english.componentsConfigurations,
    english.schemaParser,
    english.serverProperties),
  messages = {
    "en": englishLanguage
  };

export const i18n = new VueI18n({
  "fallbackLocale": customConfiguration.languageSettings.selectedLanguage,
  "locale": customConfiguration.languageSettings.selectedLanguage,
  messages
});
