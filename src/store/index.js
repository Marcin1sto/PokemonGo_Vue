import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/**
 * Here you need add your API Key from rapidapi.com
 * @type {{'x-rapidapi-key': string, 'x-rapidapi-host': string, useQueryString: boolean}}
 */
const headers = {
  'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com',
  'x-rapidapi-key': 'RAPID-KEY',
  useQueryString: true
}

/**
 * Endpoints for Api
 * @type {string}
 */
const apiPokemons = 'https://pokemon-go1.p.rapidapi.com/pokemon_names.json'
const apiBoosts = 'https://pokemon-go1.p.rapidapi.com/weather_boosts.json'

export default new Vuex.Store({
  state: {
    pokemons: [],
    weatherBoosts: [],
    areLoading: false,
    images: []
  },
  mutations: {
    setPokemons: (state, pokemons) => {
      state.pokemons = pokemons
    },
    setBoosts: (state, weatherBoosts) => {
      state.weatherBoosts = weatherBoosts
    },
    setLoading: (state, value) => {
      state.areLoading = value
    }
  },
  actions: {
    getPokemons ({ commit }) {
      commit('setLoading', true)

      axios.get(apiPokemons, {
        headers
      })
        .then(response => {
          commit('setPokemons', response.data)
        })
        .finally(response => {
          commit('setLoading', false)
        })
    },
    getWeatherBoosts ({ commit }) {
      commit('setLoading', true)

      axios.get(apiBoosts, {
        headers
      })
        .then(response => {
          commit('setBoosts', response.data)
        })
        .finally(response => {
          commit('setLoading', false)
        })
    }
  },
  modules: {
  }
})
