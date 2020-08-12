export default [
  {
    path: '/weather-boosts',
    name: 'Weather Boosts',
    component: () => import('../components/WeatherBoosts'),
    props: true
  },
  {
    path: '/pokemons',
    name: 'Pokemons',
    component: () => import('../components/Pokemons'),
    props: true
  }
]
