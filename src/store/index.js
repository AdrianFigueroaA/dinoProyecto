import Vue from 'vue'
import Vuex from 'vuex'
import Datos from "./Datos";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Datos
  },
  plugins: [createPersistedState()],
})


