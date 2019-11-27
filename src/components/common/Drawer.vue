<template>
  <div id="app1">
    <v-navigation-drawer
      :right="$vuetify.rtl"
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
          <img class="image"  />
        </div>
      </v-layout>
      <v-divider></v-divider>

      <!-- <v-list>
        <v-list-group
          :class="$vuetify.rtl?'borderright':'borderleft'"
          v-for="(item,index) in commonMenuItems"
          :key="index"
        >
          <template v-slot:activator>
            <v-list-item-content class="pa-0">
              <v-layout>
                <v-icon color="#000">{{item.icon}}</v-icon>
                <v-flex class="pl-3"></v-flex>
                <v-list-item-title class="subtitle-1 font-weight-light white--text">{{ $t(item.title) }}</v-list-item-title>
              </v-layout>
            </v-list-item-content>
          </template>
          <v-list-item
            class="v-list__item--active v-list__item v-list__item--link theme--light pa-0"
            v-for="subItem in item.items"
            :key="subItem.id"
          >
            <v-list-item>
              <v-list-item class="wrappers">
                <v-list-item-content class="pa-0">
                  <v-flex class="pt-2">
                    <v-layout :class="$vuetify.rtl?'pr-4':'pl-4'">
                      &nbsp;&nbsp;
                      <router-link
                        v-bind:to="subItem.path"
                        class="caption font-weight-regular"
                        active-class="primary--text active"
                      >
                        <font class="caption font-weight-bold">{{ $t(subItem.title) }}</font>
                      </router-link>
                    </v-layout>
                  </v-flex>
                </v-list-item-content>
              </v-list-item>
            </v-list-item>
          </v-list-item>
        </v-list-group>
      </v-list> -->
    </v-navigation-drawer>
  </div>
</template>
<script type="javascript" src="./js/drawer.js">
</script>
<style src="./css/drawer.css">
</style>
