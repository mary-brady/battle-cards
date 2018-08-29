import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let cardApi = Axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    game: {},
    activeCard: {}
  },
  mutations: {
    setGame(state, data) {
      state.game = data
    },
    setActiveCard(state, card) {
      state.activeCard = card
    }
  },
  actions: {
    gameStart({ commit, dispatch }, newGameData) {
      cardApi.post('/', { gameConfig: newGameData })
        .then(res => {
          console.log(res.data)
          commit('setGame', res.data)
        })
    },
    setActiveCard({ commit, dispatch }, activeCard) {
      commit('setActiveCard', activeCard)
    }
  }
})
