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
    activeCard: {},
    opponentCard: {}
  },
  mutations: {
    setGame(state, data) {
      state.game = data
    },
    setActiveCard(state, card) {
      state.activeCard = card.id
    },
    setOpponentCard(state, card) {
      state.opponentCard = card.id
    },
    attack(state, cardData) {
      state.game = cardData
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
    getGame({ commit, dispatch }, gameId) {
      cardApi.get('' + gameId)
        .then(res => {
          commit('setGame', res.data.data)
        })
    },
    setActiveCard({ commit, dispatch }, activeCard) {
      commit('setActiveCard', activeCard)
    },
    setOpponentCard({ commit, dispatch }, opponentCard) {
      commit('setOpponentCard', opponentCard)
    },
    fight({ commit, dispatch, state }, gameData) {
      cardApi.put('' + state.game.id, gameData)
        .then(res => {
          console.log(res.data)
          dispatch('getGame', state.game.id)
        })
    }
  }
})
