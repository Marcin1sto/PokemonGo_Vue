<template>
  <b-container fluid>
    <b-row>
      <b-col></b-col>
      <b-col role="group" class="col-4 searchInput">
        <label for="input-live">Pokemon name:</label>
        <b-form-input
          id="input-live"
          v-model="searchValue"
          :state="nameState"
          @input="handleInput"
          aria-describedby="input-live-help input-live-feedback"
          placeholder="Enter your name"
          trim
        ></b-form-input>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-card>
      <b-card-body>
        <div class="text-center" v-if="areLoading">
          <b-spinner label="Spinning"></b-spinner>
        </div>
        <div v-else  v-for="pokemonIndex in pokemonsFilteredIndexes" :key="pokemons[pokemonIndex].id">{{ pokemons[pokemonIndex].name }}</div>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Pokemons',
  data () {
    return {
      searchValue: '',
      pokemonsFilteredIndexes: [],
      errors: []
    }
  },
  computed: {
    nameState () {
      if (this.searchValue.length > 2 && this.pokemonsFilteredIndexes.length > 0) {
        return true
      } else {
        return false
      }
    },
    ...mapState([
      'pokemons',
      'areLoading'
    ])
  },
  methods: {
    handleInput () {
      if (this.searchValue.length > 2) {
        const arrayOfPokemonsIndexes = Object.keys(this.pokemons)

        this.pokemonsFilteredIndexes = arrayOfPokemonsIndexes.filter(pokemonIndex => {
          const pokemon = this.pokemons[pokemonIndex]
          return pokemon.name.toLowerCase().includes(this.searchValue)
        })
      } else {
        this.pokemonsFilteredIndexes = []
      }
    },
    ...mapActions([
      'getPokemons'
    ])
  },
  created () {
    this.getPokemons()
  }
}
</script>

<style lang="scss">
  .searchInput {
    margin-bottom: 25px;
  }
</style>
