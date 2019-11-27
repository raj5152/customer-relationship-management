<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout style="height: 500px;" align-center justify-center>
        <div class="text-xs-center">
          <p class="display-1 font-weight-light">
            <font :color="primaryColor">{{$t('pageNotFound_message')}}</font>
          </p>
          <div>
            <v-btn
              name="Home"
              :color="primaryColor"
              dark
              @click="goHome"
            >{{$t('pageNotFoundReturn_home_link')}}</v-btn>
          </div>
        </div>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script type="javascript" src="./js/pageNotFound.js">
