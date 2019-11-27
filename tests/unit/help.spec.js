import Vue from "vue";
import Vuex from "vuex";
import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import vuetify from "vuetify";
Vue.use(vuetify);
import Help from "@/components/common/Help.vue";
const localVue = createLocalVue();
localVue.use(Vuex);
const wrapper = mount(Help, {
  mocks: {
    $t: () => {}
  }
});
describe("Help", () => {
  test("call method on click", () => {});
});
