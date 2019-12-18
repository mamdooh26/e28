import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        favItemNumber : 0
    },
    mutations: {
        setFavItemNumber(state, payload){
            state.favItemNumber = payload;
        },
        updateFavItemNumber(state, payload){
            state.favItemNumber += payload;
        }
    }
})