import Vue from 'vue'
import Vuex from 'vuex'
import {dataService} from '../shared/services/data-service';
Vue.use(Vuex)

const state = {
  proffesionalExperience: [],
};

const mutations = {
  getProffesionalExpierence(state, list) {
    state.proffesionalExperience = list;
  },
};

const actions = {
  getProffesionalExpierenceAction({commit}) {
    const list = dataService.fetchProffesionalExpierence();
    commit('getProffesionalExpierence', list);
  },
};



export default new Vuex.Store({
  strict: process.env.NODE_ENV != 'production',
  state,
  mutations,
  actions,
})
