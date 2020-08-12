<template>
    <div id="">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/">PokemonGo</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/pokemons/" tag="b-nav-item">Pokemons</router-link>
            <router-link to="/weather-boosts/" tag="b-nav-item">Weather boosts</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <div></div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <b-container id="content" fluid>
        <b-row>
          <b-col><router-view/></b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Layout'
}
</script>

<style lang="scss">
  #content {
    margin-top: 15px;
  }
</style>
