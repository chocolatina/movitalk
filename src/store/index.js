import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    memo: 1,
    number: 5
  },
  getters: {
    memo (state) {
      return state.memo
    }
  },
  mutations: {
    addMemo (state, n) {
      // state.memo.push
      state.memo += n
    },
    increment (state, n) {
      state.memo += n
    }

  },
  actions: {
    increment (context, n) {
      context.commit('increment', n)
    }
  },
  modules: {
  }
})
export default store
