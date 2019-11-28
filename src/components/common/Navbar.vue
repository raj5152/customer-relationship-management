<template>
  <v-toolbar prominent extended height="80" class="pt-4">
     <v-icon  @click="toggleDrawer()" :color="primaryColor"
          >mdi-menu</v-icon
        >
        <v-flex lg1/>
        <v-flex xs sm md lg1 xl1 v-for="item in menus" :key="item" >
    <v-checkbox
      v-model="checkbox"
      :label="item"
    ></v-checkbox>
        </v-flex>
    <v-spacer></v-spacer>
   
      <v-icon class="pa-1">mdi-magnify</v-icon>
      <v-icon class="pa-1">mdi-bell</v-icon>
      <v-icon class="pa-1">mdi-dots-vertical</v-icon>
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
// import Navbar from "./Navbar.vue";
import event from '@/event.js';
export default {
  "components": {
    // Navbar  
  },
  "data": () => {
    return {
      error,
      info,
      primaryColor,
      secondaryColor,
      success,
      warning,
      menus:[
        'Production',
        'Purcahse',
        'Inventory',
        'WMS',
        'CRM',
        'Sales',
        'More'
      ]
    };
  },
  "methods": {
    toggleDrawer() {
      event.$emit('APP_DRAWER_TOGGLED', true);
    }
  }
};
</script>
<style></style>
