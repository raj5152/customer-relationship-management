<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs5 sm5 md5 lg8 xl8>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs2 sm2 md2 lg6 xl8>
              <v-card max-width="500" class="mx-auto">
                <v-toolbar color="pink" dark height="40">
                  <v-toolbar-title>Sales</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <vc-donut :sections="sections" :has-legend="true"></vc-donut>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs5 sm5 md5 lg6 xl8>
              <v-card max-width="500" class="mx-auto">
                <v-toolbar color="pink" dark height="40">
                  <v-toolbar-title>Payments</v-toolbar-title>
                </v-toolbar>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs5 sm5 md5 lg6 xl8>
              <v-card max-width="500" class="mx-auto">
                <v-toolbar color="pink" dark height="40">
                  <v-toolbar-title>Latest Rating and Reviews</v-toolbar-title>
                </v-toolbar>
                <v-list two-line>
                  <v-list-item-group active-class="pink--text">
                    <template v-for="(item, index) in items">
                      <v-list-item :key="item.title">
                        <template v-slot:default="{ active, toggle }">
                          <v-list-item-avatar>
                            <v-img :src="item.profilePic"></v-img>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title
                              v-text="item.name"
                            ></v-list-item-title>
                            <v-list-item-subtitle
                              class="text--primary"
                              v-text="item.designation"
                            ></v-list-item-subtitle>
                            <v-list-item-subtitle
                              v-text="item.team"
                            ></v-list-item-subtitle
                          ></v-list-item-content>
                          <v-list-item-action>
                            <v-rating
                              v-model="item.rating"
                              small
                              color="purple"
                            ></v-rating>
                          </v-list-item-action>
                        </template>
                      </v-list-item>
                      <v-divider
                        v-if="index + 1 < items.length"
                        :key="index"
                      ></v-divider>
                    </template>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-flex>
            <v-flex xs5 sm5 md5 lg6 xl8>
              <v-card max-width="500" class="mx-auto">
                <v-toolbar color="pink" dark height="40">
                  <v-toolbar-title>Top Salling Products</v-toolbar-title>
                </v-toolbar>
                <v-list>
                  <v-list-item-group active-class="pink--text">
                    <template v-for="(item, index) in productsList">
                      <v-list-item :key="item.title">
                        <v-list-item-title
                          >{{ index + 1 }}. {{ item.productName
                          }}{{ item.totalSold
                          }}{{ item.price }}</v-list-item-title
                        >
                      </v-list-item>
                      <v-divider
                        v-if="index + 1 < items.length"
                        :key="index"
                      ></v-divider>
                    </template>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs5 sm5 md5 lg4 xl4>
        <v-container>
        <v-card max-width="500" class="mx-auto">
                <v-toolbar color="pink" dark height="40">
                  <v-toolbar-title>Top Salling Products</v-toolbar-title>
                </v-toolbar></v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
/*eslint-disable*/
import {
  error,
  info,
  primaryColor,
  secondaryColor,
  success,
  warning
} from "@/themes/themeUtil.js";
import Navbar from "./Navbar.vue";
import Donut from "vue-css-donut-chart";
import "vue-css-donut-chart/dist/vcdonut.css";
import Vue from "vue";
Vue.use(Donut);
export default {
  data: () => {
    return {
      sections: [
        { value: 70, label: "Completed", color: "#9C9FF0" },
        { value: 20, label: "Urgent", color: "#EADC03" },
        { value: 10, label: "Normal", color: "#94FB06" }
      ],
      error,
      info,
      primaryColor,
      secondaryColor,
      show: false,
      success,
      warning,
      productsList: [
        {
          productName: "Samsung Galaxy A7",
          totalSold: 15,
          price: "14,000/-"
        },
        {
          productName: "Samsung Galaxy A7",
          totalSold: 15,
          price: "14,000/-"
        },
        {
          productName: "Samsung Galaxy A7",
          totalSold: 15,
          price: "14,000/-"
        }
      ],
      items: [
        {
          profilePic: "15 min",
          designation: "Associate Software Engineer",
          name: "Vishwa N",
          team: "FusionEssence Front End-DEV",
          rating: 3
        },
        {
          profilePic: "2 hr",
          designation: "Associate Software Engineer",
          name: "Dileep Kumar L D P",
          team: "FusionEssence Front End-DEV",
          rating: 1
        },
        {
          profilePic: "6 hr",
          designation: "Associate Software Engineer",
          name: "Shravan Kumar K S",
          team: "Essence-Core",
          rating: 3
        },
        {
          profilePic: "12 hr",
          designation: "Associate Software Engineer",
          name: "Riyaj Mulla",
          team: "FusionEssence Front End-DEV",
          rating: 2
        }
      ]
    };
  },
  mounted() {
    this.show = true;
  }
};
</script>
<style>
.v-rating .v-icon {
  padding: 0rem;
}
</style>
