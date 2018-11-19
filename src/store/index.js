import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const Talk = {
  state: {
    talk: ''
  },
  getters: {
    talk (state) { return state.talk }
  },
  mutations: {
    getTalk (state, payload) {
      state.talk = payload.talk
    }
  },
  actions: {
    async getTalkAction (context) {
      const payload = {
        talk: ''
      }
      await axios.get('http://localhost:3000/talk/index').then((res) => {
        payload.talk = res.data
      })
      context.commit('getTalk', payload)
    }
  }
}

const store = new Vuex.Store({
  modules: {
    Talk
  }
})
export default store
