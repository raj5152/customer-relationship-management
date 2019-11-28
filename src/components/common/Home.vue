<template>
  <v-container grid-list-md >
    <v-layout row wrap>
      <v-flex xs5 sm5 md5 lg10 xl8>
      
          <v-layout row wrap>
            <v-flex xs2 sm2 md2 lg6 xl8>
              <v-card max-width="500" height="315" >
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
            <v-flex   xs5 sm5 md5 lg6 xl8>
              <v-card max-height="315" max-width="500" >
                <v-toolbar color="pink" dark height="40">
                  <v-toolbar-title>Latest Rating and Reviews</v-toolbar-title>
                </v-toolbar>



                <!-- <div v-for="(item, index) in items" :key="index">
                  <v-flex>
                  <v-avatar color="indigo" size="36">
      <v-img :src="item.profilePic"></v-img>
    </v-avatar>
                
                {{item.name}}
                <font>{{item.designation}}</font>
                <font>{{item.team}}</font>
                 <v-rating
                   v-model="item.rating"
                   small
                   color="purple"
                   ></v-rating>
                   <v-divider
                    v-if="index + 1 < items.length"
                    :key="index"
                    ></v-divider>

                  </v-flex>
                </div> -->
                <v-list>
                  <v-list-item-group active-class="pink--text">
                    <template v-for="(item, index) in items">
                      <v-list-item :key="item.title">
                        <template v-slot:default="{ active, toggle }">
                          <!-- <v-list-item-avatar>
                            <v-img :src="item.profilePic"></v-img>
                          </v-list-item-avatar> -->
                          <v-list-item-content>
                            <!-- <font></font> -->
                            <v-list-item-title
                              
                            > {{index+1}}. {{item.name}}</v-list-item-title>
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
            <v-flex  xs5 sm5 md5 lg6 xl8>
              <v-card height="315" max-width="500"  >
                <v-toolbar color="pink" dark height="40">
                  <v-toolbar-title>Top Saling Products</v-toolbar-title>
                </v-toolbar>
                <v-flex  v-for="(item, index) in productsList" :key="index">
                <font >{{ index + 1 }}. {{ item.productName
                          }}{{ item.totalSold
                          }}{{ item.price }}</font>
                          <v-divider 
                        v-if="index + 1 < productsList.length"
                        :key="index"
                      ></v-divider>
                </v-flex>
                <!-- <v-list max-height="250">
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
                        v-if="index + 1 < productsList.length"
                        :key="index"
                      ></v-divider>
                    </template>
                  </v-list-item-group>
                </v-list> -->
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
      v-for="(item,i) in activities"
      :key="i"
    >
      <v-expansion-panel-header>
        <v-icon>mdi-cake-variant</v-icon>
        {{item.name}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
        </v-card>
      
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
import { GChart } from 'vue-google-charts';
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
      show: false,
      success,
      warning,
      activities:[
        {
          name:"Birthday"
        },
        {
          name:"Meetings"
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
        ['Day', 'Payment'],
        ['S', 400],
        ['M', 300],
        ['T', 500],
        ['W', 250],
        ['T', 400],
        ['F', 300],
        ['S', 500],
        ['S', 250],
        ['M', 300],
        ['T', 500],
        ['W', 250],
        ['T', 100]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Payments',
        }
      }
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
