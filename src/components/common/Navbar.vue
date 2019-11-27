<template>
  <v-toolbar prominent extended height="80">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
import {
  error,
  info,
  primaryColor,
  secondaryColor,
  success,
  warning
} from "@/themes/themeUtil.js";
import Navbar from "./Navbar.vue";
export default {
  "components": {
    Navbar
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
</script>
<style></style>
