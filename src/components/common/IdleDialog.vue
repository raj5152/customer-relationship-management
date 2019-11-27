<template>
  <v-flex xs2 sm2 md2 lg2 xl2>
    <v-dialog v-model="logoutConfirm" :persistent="true" max-width="450">
      <v-card>
        <v-toolbar dark :color="secondaryColor">
          <v-icon>timer</v-icon>
          <v-card-title class="text--left headline font-weight-light">{{$t('sessionExpire_title')}}</v-card-title>
        </v-toolbar>
        <v-card-text class="subheading font-weight-light">{{$t('sessionExpire_message')}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            id="ok"
            class="body-1 font-weight-light"
            :color="primaryColor"
            dark
            small
            @click="logout();"
          >{{$t('sessinLogout_OkButton_text')}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
</template>
<script type="javascript" src="./js/idleDialog.js">
</script>
          
        
