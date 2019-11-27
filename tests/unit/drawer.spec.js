import Vue from "vue";
import Vuex from "vuex";
import Drawer from "@/components/common/Drawer.vue";
import Vuetify from "vuetify";
import {
  createLocalVue, mount, shallowMount
} from "@vue/test-utils";
Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(Vuex);

describe("Drawer", () => {
  let store;

  beforeEach(() => {
    const actions = {
      "AUTHENTICATION_LOGOUT": jest.fn()
    };
    store = new Vuex.Store({
      actions
    });
    jest.useFakeTimers();
  });
  it("call method on click", () => {
    const wrapper = mount(Drawer, {
      store,
      localVue,
      "mocks": {
        "$t": () => {}
      },
      data() {
        return {
          "isAuthenticated": true
        };
      }
    });

    wrapper.find("button[name=\"bookmark\"]").trigger("click");
    wrapper.vm.favorite("subItem");
  });
  it("call method on click", () => {
    const wrapper = mount(Drawer, {
      store,
      localVue,
      "mocks": {
        "$t": () => {}
      },
      data() {
        return {
          "isAuthenticated": true
        };
      }
    });
    wrapper.find("button[name=\"clear\"]").trigger("click");
    wrapper.vm.favorite("subItem");
  });
  it("call method on click", () => {
    const wrapper = mount(Drawer, {
      store,
      localVue,
      "mocks": {
        "$t": () => {}
      },
      data() {
        return {
          "isAuthenticated": true
        };
      }
    });
    wrapper.vm.$router = [];
    wrapper.vm.logout();
  });
});
