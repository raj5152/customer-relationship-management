 <template>
  <transition name="company" mode="out-in">
    <v-card v-if="show" :color="secondaryColor">
      <v-toolbar dark :color="primaryColor">
        <v-card-text>
          <h4
            class="headline font-weight-light white--text"
            style="text-align:left;"
          >Recent Activity</h4>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-icon dark>refresh</v-icon>
      </v-toolbar>
      <v-card-text white style="text-align:left; height:200px;">
        <v-layout row wrap>
          <v-flex xs2 sm2 xl2 lg2 md2>
            <v-icon style="font-size:50px;" class="white--text">mdi-cart</v-icon>
          </v-flex>
          <v-flex xs10 sm10 xl10 lg10 md10>
            <p class="headline white--text">Delivered Order</p>
            <font
              class="subtitle-1 white--text pt-5"
            >Order of five washing machines delivered to user @johndoe.</font>
          </v-flex>
        </v-layout>
        <v-divider color="white" />
        <v-layout row wrap>
          <v-flex xs2 sm2 xl2 lg2 md2>
            <v-icon style="font-size:50px;" class="white--text">mdi-cart</v-icon>
          </v-flex>
          <v-flex xs10 sm10 xl10 lg10 md10>
            <p class="headline white--text">Delivered Order</p>
            <font
              class="subtitle-1 white--text"
            >Order of five washing machines delivered to user @johndoe.</font>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </transition>
</template>
<script type="javascript" src="./js/widget5.js">
</script>
<style>
@import "./css/widget1.css";
.v-application p {
  margin-bottom: 0px;
}
hr {
  border: 0;
  border-top: 1px solid #eee;
  margin: 0 0;
}
</style>
