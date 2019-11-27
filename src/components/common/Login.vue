<template>
  <v-dialog v-model="enableLoginPage" width="400">
    <v-card>
      <v-flex xs12 sm12 md6 lg12>
        <div class="text-xs-center">
          <v-layout>
            <div class="layout column align-center">
              <div class="pb-4">
                <img src="@/assets/default_logo.png" id="images" />
              </div>
              <span class="display-1 font-weight-light flex">{{applicationName}}</span>
            </div>
          </v-layout>
        </div>
        <br />

        <div class="text-xs-center pl-12">
          <v-flex>
            <v-form lazy-validation ref="loginForm">
              <v-flex xs12 sm12 md10 lg10>
                <v-text-field
                  class="mt-2 pl-5 pr-5"
                  append-icon="person"
                  name="username"
                  :label="$t('loginUsernameField_label')"
                  type="text"
                  :rules="loginRules"
                  :error="errorLogin"
                  :color="primaryColor"
                  v-model="username"
                  required
                  @keyup.enter="username.length>0 ? login(): false;"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md10 lg10>
                <v-text-field
                  class="mt-2 pl-5 pr-5"
                  append-icon="mdi-lock"
                  name="password"
                  :label="$t('loginPasswordField_label')"
                  :rules="loginRules"
                  id="password"
                  type="password"
                  :color="primaryColor"
                  v-model="password"
                  :error="errorLogin"
                  :error-messages="errorMessage"
                  required
                  @keyup.enter="password.length >0 ? login(): false;"
                ></v-text-field>
              </v-flex>
            </v-form>
            <br />
            <v-flex xs12 sm12 md10 lg10>
              <v-layout
                id="wrappers"
                xs11
                sm11
                md9
                lg8
                xl8
                class="mr-5"
                :class="$vuetify.rtl?'text-xs-left':'text-xs-right'"
              >
                <div class="pt-3">
                  <a :href="company_site" target="_blank" class="ml-5">
                    <font :color="primaryColor">{{$t('company_site')}}</font>
                  </a>
                </div>
                <v-spacer></v-spacer>
                <v-btn
                  id="login"
                  class="body-1 font-weight-light white--text text-none"
                  :color="primaryColor"
                  dark
                  @click="login"
                  :loading="loading"
                >{{ $t('loginButton_text') }}</v-btn>
              </v-layout>
            </v-flex>
            <br />
          </v-flex>
        </div>
      </v-flex>
    </v-card>
  </v-dialog>
</template>
<script type="javascript" src="./js/login.js">
</script>
<style scoped src="./css/login.css">
</style>
