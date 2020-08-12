<template>
    <b-container fluid>
      <b-card no-body>
        <b-tabs card>
          <b-tab v-for="(boost, name) in weatherBoosts" :key="name" :title="name">
            <b-card-body>
              <b-row>
                <b-col v-for="(item, itemName) in boost" :key="itemName" class="col">
                  <b-card
                          header-tag="header"
                  >
                    <b-card-title>{{ item }}</b-card-title>
                    <b-card-text>Content will be added here in the future.</b-card-text>
                  </b-card>
                </b-col>
              </b-row>
            </b-card-body>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'WeatherBoosts',
  data () {
    return {
      errors: []
    }
  },
  computed: {
    ...mapState([
      'weatherBoosts',
      'areLoading'
    ])
  },
  methods: {
    ...mapActions([
      'getWeatherBoosts'
    ])
  },
  created () {
    this.getWeatherBoosts()
  }
}
</script>

<style scoped>

</style>
