<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout row wrap>
          <v-flex lg6 sm6 md6 xs12 style="background-color:#9C9FF0">
            <v-container grid-list-md>
              <v-layout row wrap class="pt-12 mt-12">
                <v-flex />
                <v-flex class="pt-12 mt-12">
                  <v-card class="pt-6 mt-6">
                    <v-card-text class="pt-12 mt-12">
                      <font
                        style="font-size:120px;"
                        class="pa-12"
                        color="#9C9FF0"
                        >C</font
                      >
                    </v-card-text></v-card
                  > </v-flex
                ><v-flex class="pt-12 mt-12">
                  <v-card class="pt-6 mt-6">
                    <v-card-text class="pt-12 mt-12"
                      ><font
                        style="font-size:120px;"
                        class="pa-12"
                        color="#9C9FF0"
                        >R</font
                      ></v-card-text
                    ></v-card
                  > </v-flex
                ><v-flex class="pt-12 mt-12">
                  <v-card class="pt-6 mt-6">
                    <v-card-text class="pt-12 mt-12"
                      ><font
                        style="font-size:120px;"
                        class="pa-12"
                        color="#9C9FF0"
                        >M</font
                      ></v-card-text
                    ></v-card
                  >
                </v-flex>
                <v-flex />
              </v-layout>
            </v-container>
            <font color="white" class="pl-12"
              >Customer Relationship Management</font
            >
          </v-flex>
          <v-flex lg6 sm6 md6 xs12>
            <v-card-text class="pt-12 mt-12">
              <v-form lazy-validation ref="loginForm" class="py-12">
                <v-text-field
                  prepend-inner-icon="mdi-map-marker"
                  label="Location"
                  type="text"
                  :error="errorLogin"
                  :color="primaryColor"
                  v-model="username"
                  required
                  @keyup.enter="login()"
                  class="pt-12"
                ></v-text-field>
                <v-text-field
                  prepend-inner-icon="mdi-email"
                  label="Email Id"
                  type="text"
                  :error="errorLogin"
                  :color="primaryColor"
                  v-model="username"
                  required
                  @keyup.enter="login()"
                ></v-text-field>
                <v-text-field
                  prepend-inner-icon="lock"
                  label="Password"
                  type="password"
                  :color="primaryColor"
                  v-model="password"
                  :error="errorLogin"
                  :error-messages="errorMessage"
                  required
                  @keyup.enter="login()"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="#7A7C86"
                dark
                :loading="loading"
                style="width: 50%; height:50px;margin: 0 auto;"
                @click="login()"
                class="text-none"
                >Login</v-btn
              >
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import {
  error,
  grad,
  gradient,
  info,
  logo,
  primaryColor,
  secondaryColor,
  success,
  warning
} from "@/themes/themeUtil.js";
import custom from "@/configuration_properties.json";
export default {
  "data": () => {
    return {
      "errorLogin": false,
      "errorMessage": "",
      primaryColor,
      secondaryColor,
      info,
      error,
      success,
      warning,
      "loading": false,
      "username": "",
      "password": "",
      "gradients": "",
      logo,
      "loginRules": [v => {
          return Boolean(v) || "Required";
        }]
    };
  },

  created() {
    grad();
    this.gradients = gradient();
  },
  "methods": {
    login() {
      if (this.username === "admin" && this.password === "admin") this.$router.push("/Home");
      else {
        this.errorLogin = true;
        this.errorMessage = "Invalid username or password";
      }
    }
  }
};
</script>
<style scoped src="./css/login.css"></style>
