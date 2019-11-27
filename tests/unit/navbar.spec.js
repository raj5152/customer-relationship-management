import VueI18n from "vue-i18n";
import Vue from "vue";
Vue.use(VueI18n);
import Vuex from 'vuex'
import Navbar from "@/components/common/Navbar.vue";
import Vuetify from "vuetify";
import {
    shallowMount,
    mount,
    createLocalVue
} from "@vue/test-utils";
import {
    exportAllDeclaration
} from "@babel/types";
Vue.use(Vuetify);
let localVue = createLocalVue();
localVue.use(Vuex);
jest.mock("@/components/common/NotificationsList.vue", () => ({
    "notificationId": "818191",
    "message": "EOD batch jobs are paused",
    "type": "Warning",
    "raisedBy": "admin",
    "timeLabel": "4 min ago",
    "raisedAt": "2019-02-27T06:36:24.954Z"
}), {
    virtual: true
});

describe('Navbar', () => {
    let store, actions
    beforeEach(() => {
        actions = {
            callRedirector: function () {
                return response
            }
        }
        store = new Vuex.Store({
            actions
        })
        jest.useFakeTimers();
    })
    let wrappers = mount(Navbar, {
        store,
        localVue,
        mocks: {
            $t: () => {}
        },
        data() {
            return {
                isAuthenticated: true
            }
        }
    });
    it('renders a navigation bar', () => {
        wrappers.find('button[name="drawer"]').trigger('click')
    })

    it('renders a ful screen', () => {
        wrappers.find('button[name="handleFullScreen"]').trigger('click')
    })

    it('renders a logout feature', () => {
        let wrappers = mount(Navbar, {
            store,
            localVue,
            mocks: {
                $t: () => {}
            },
            data() {
                return {
                    isAuthenticated: true
                }
            }
        });
        wrappers.vm.$router = [];
        wrappers.find('#logout').trigger('click');
    })

})