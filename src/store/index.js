import Vuex from 'vuex'
import Vue from 'vue';
import app from './modules/app'
import getters from './getter'
import menu from './modules/menu'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    app,
    menu
  },
  getters
});

export default store
