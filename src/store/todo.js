import Vue from 'vue'
import Vuex from 'vuex'
import * as types from "./musations-types";

Vue.use(Vuex)

export default ({
    namespace: true,
    state: {
        list:['花生','红豆','豌豆尖']
    },
    mutations: {
        [types.ADD_MESSAGE](state, message){
            return state.list.push(message);
        }
        /*addMessage(state, message){
            return state.list.push(message);
        }*/
    },
    actions: {

    },
    modules: {

    }
})

