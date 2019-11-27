<template>
  <v-app>
    <div id="app">
      <div class="component-wrapper">
        <title>{{ customTitle }}</title>
        <Navbar/>
        <!-- <Drawer /> -->
      </div>
      <router-view />
    </div>
  </v-app>
</template>

<script>
/*eslint-disable*/
import Drawer from "./components/common/Drawer.vue";
import Navbar from "./components/common/Navbar.vue";
import custom from "@/configuration_properties.json";
export default {
  name: "App",
  data: () => {
    return {
      customTitle: ""
    };
  },
  components: {
    Navbar,
    Drawer
  },
  mounted() {
    this.$vuetify.rtl = custom.languageSettings.enableRtl;
  },
  created() {
    this.customTitle = custom.applicationSettings.applicationName;
    window.getApp = this;
  }
};
</script>

<style>
p {
  text-align: justify;
}
.v-app input.v-textfield {
  color: white;
}
</style>
