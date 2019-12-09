<template>
  <div id="app1">
    <v-navigation-drawer
      class="appDrawer"
      :mini-variant.sync="mini"
      :dark="$vuetify.dark"
      app
      v-model="drawer"
      hide-overlay
      width="271"
    >
      <v-layout justify-center pa-5>
        <div align="center">
          <img class="image" />
        </div>
      </v-layout>
      <v-divider></v-divider>

      <v-flex
        class="pa-4 menus"
        v-for="(item, index) in commonMenuItems"
        :key="index" 
      >
        <v-btn id="menus" :color="primaryColor" text :to="item.path">
          <v-icon :color="primaryColor" class="px-2">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-flex>
    </v-navigation-drawer>
  </div>
</template>
<script type="javascript" src="./js/drawer.js"></script>
<style src="./css/drawer.css"></style>
