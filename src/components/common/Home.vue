<template>
  <v-content>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs5 sm5 md5 lg10 xl8>
          <v-layout row wrap>
            <v-flex xs2 sm2 md2 lg6 xl8>
              <v-card max-width="500" height="315">
                <v-toolbar color="pink" dark height="40">
                  <v-toolbar-title>Sales</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <!-- <GChart
                type="DonutChart"
                :data="chartData"
                :options="chartOptions"
  /> -->
                  <v-icon>mdi-chart-bar</v-icon>
                  <vc-donut :sections="sections" :has-legend="true"></vc-donut>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs5 sm5 md5 lg6 xl8>
              <v-card max-width="500" height="315">
                <v-toolbar color="pink" dark height="40">
                  <v-toolbar-title>Payments</v-toolbar-title>
                </v-toolbar>
                <GChart
                  type="ColumnChart"
                  :data="chartData"
                  :options="chartOptions"
                />
              </v-card>
            </v-flex>
          </v-layout>

          <v-layout row wrap class="pt-2">
            <v-flex xs5 sm5 md5 lg6 xl8>
              <v-card max-height="315" max-width="500">
                <v-toolbar color="pink" dark height="40">
                  <v-toolbar-title>Latest Rating and Reviews</v-toolbar-title>
                </v-toolbar>
                <v-list>
                  <v-list-item-group active-class="pink--text">
                    <template v-for="(item, index) in items">
                      <v-list-item :key="item.title">
                        <template v-slot:default="{ active, toggle }">
                          <v-list-item-content>
                            <v-list-item-title>
                              {{ index + 1 }}.
                              {{ item.name }}</v-list-item-title
                            >
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
              <v-card height="315" max-width="500">
                <v-toolbar color="pink" dark height="40">
                  <v-toolbar-title>Top Saling Products</v-toolbar-title>
                </v-toolbar>
                <v-flex v-for="(item, index) in productsList" :key="index">
                  <font
                    >{{ index + 1 }}. {{ item.productName }}{{ item.totalSold
                    }}{{ item.price }}</font
                  >
                  <v-divider
                    v-if="index + 1 < productsList.length"
                    :key="index"
                  ></v-divider>
                </v-flex>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs5 sm5 md5 lg2 xl4>
          <v-card height="650">
            <v-toolbar color="pink" dark height="40">
              <v-toolbar-title>Activities</v-toolbar-title>
            </v-toolbar>
            <v-expansion-panels>
              <v-expansion-panel
                v-for="(item, i) in activities"
                :key="i"
                class="text-xs-left"
              >
                <v-expansion-panel-header>
                  <v-flex>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-flex>
                  <v-flex class="text-xs-left">
                    {{ item.name }}
                  </v-flex>
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  v-for="(data, i) in item.data"
                  :key="i"
                >
                  <v-flex v-if="item.name == 'Birthday'">
                    <img :src="item.proPic" />
                    {{ item.data[i].name }}
                  </v-flex>
                  <v-flex v-if="item.name == 'Meetings'">
                    <v-icon small>check</v-icon>
                    {{ item.data[i].option }}
                  </v-flex>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
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
import { GChart } from "vue-google-charts";
Vue.use(Donut);
export default {
  components: {
    GChart
  },
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
      success,
      warning,
      activities: [
        {
          name: "Birthday",
          icon: "mdi-cake-variant",
          data: [
            {
              proPic: "",
              name: "Riyaz M"
            },
            {
              proPic: "",
              name: "Vishwa N"
            },
            {
              proPic: "",
              name: "Deelip LD"
            },
            {
              proPic: "",
              name: "Shravan KS"
            }
          ]
        },
        {
          name: "Meetings",
          icon: "group_work",
          data: [
            {
              option: "Sales team meeting 10am"
            },
            {
              option: "Design team meeting for latest update"
            }
          ]
        },
        {
          name: "Notifications",
          icon: "mdi-bell"
        }
      ],
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
          profilePic: "12 hr",
          designation: "Associate Software Engineer",
          name: "Riyaj Mulla",
          team: "FusionEssence Front End-DEV",
          rating: 2
        }
      ],
      chartData: [
        ["Day", "Payment"],
        ["S", 400],
        ["M", 300],
        ["T", 500],
        ["W", 250],
        ["T", 400],
        ["F", 300],
        ["S", 500],
        ["S", 250],
        ["M", 300],
        ["T", 500],
        ["W", 250],
        ["T", 100]
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Payments"
        }
      }
    };
  },
};
</script>
<style>
.v-rating .v-icon {
  padding: 0rem;
}
</style>
