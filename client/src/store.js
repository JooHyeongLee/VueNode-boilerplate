import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentView: 'dashboard',
        roomInfo: {},
    },
    mutations: {
        setCurrentView (state, currentView) {
            state.currentView = currentView;
        },
        setRoomInfo (state, roomInfo) {
            state.roomInfo = roomInfo;
        },
    },
});
