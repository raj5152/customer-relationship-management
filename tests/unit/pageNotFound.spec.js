import Vue from "vue";
import Vuex from "vuex";
import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import vuetify from "vuetify";
Vue.use(vuetify);
import Page from "@/components/common/PageNotFound.vue";
const localVue = createLocalVue();
localVue.use(Vuex);
const wrapper = mount(Page, {
  mocks: {
    $t: () => {}
  }
});
describe("Page", () => {
  test("call method on click", () => {
    wrapper.find('button[name="Home"]').trigger("click");
    wrapper.vm.goHome();
  });
});
