<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout style="height: 500px;" align-center justify-center>
        <div class="text-xs-center">
          <v-icon x-large :color="primaryColor">lock</v-icon>
          <p class="display-1 font-weight-light">
            <font :color="primaryColor">Not Permitted</font>
          </p>
          <div>
            <p class="text-xs-center">
              <font :color="primaryColor">You are not permitted to perform this operation.</font>
            </p>
          </div>
        </div>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script type="javascript" src="./js/notPermitted.js">
