import Vue from "vue";
import Vuex from "vuex";
import Footer from "@/components/common/Footer.vue";
import Vuetify from "vuetify";
import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
Vue.use(Vuetify);
let localVue = createLocalVue();
localVue.use(Vuex);

describe("Footer", () => {
  let store;

  beforeEach(() => {
    let actions = {
      callRedirector: jest.fn()
    };
    store = new Vuex.Store({
      actions
    });
  });

  it("calls method on button click", () => {
    let wrapper = mount(Footer, {
      store,
      localVue,
      mocks: {
        $t: () => {}
      },
      data() {
        return {};
      }
    });
  });
});
