<script>
// import AppHeader from './components/AppHeader.vue'
// import AppMain from './components/AppMain.vue'
import {store} from './data/store'
import axios from 'axios'

export default {
  name: "App",
  components: {
    // AppHeader,
    // AppMain,
  },
  data() {
    return {
      searchFilter: "",
      store,
      movies: [],
    }
  },
  methods: {
    search() {
      let indirizzo = this.store.movieApi + this.searchFilter;
      this.movieLoaded(indirizzo)
    },
    movieLoaded(address) {
      axios.get(address).then(r => {
        this.movies = r.data.results;
        console.log(this.movies);
    })
    }
  },
  computed: {
    filterMovies() {
      return this.store.movieApi.filter(movie => {
        return movie.title.toLowerCase().startsWith(this.searchFilter)
      })
    }
  },
  mounted() {
    this.movieLoaded(this.store.movieApi)
  }
}
</script>

<template>
  <header>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="d-flex flex-wrap justify-content-between p-2">
                    <h1>BOOLFIX</h1>
                    <div>
                        <input @keyup.enter="search" type="search" v-model="searchFilter">
                        <button @click="search">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </header>
  <main>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="my-card d-flex flex-column" v-for="movie in this.movies">
                    <img src="" alt="">
                    <h2>{{ movie.name }}</h2>
                    <p>{{ movie.original_name }}</p>
                    <p>{{ movie.original_language }}</p>
                    <p>{{ movie.vote_average }}</p>
                </div>
            </div>
        </div>
    </div>
  </main>
</template>

<style scoped>
.my-card {
  width: calc(100% / 5);
}
</style>
