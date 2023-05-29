<script>
    import {store} from '../data/store'
    import axios from 'axios'

    export default {
        name: "AppHeader",
        data() {
            return {
                store,
                searchFilter: "",
            }
        },
        methods: {
            // search() {
            //     let indirizzo = this.store.movieApi + this.searchFilter;
            //     this.movieLoaded(indirizzo)
            // },
            movieLoaded() {
                axios.get("https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=" + this.searchFilter).then(r => {
                    this.store.movies = r.data.results;
                    console.log("movies", this.store.movies);
                })
            },
            seriesLoaded() {
                axios.get("https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=" + this.searchFilter).then(r => {
                    this.store.tvSeries = r.data.results;
                    console.log("TV Series", this.store.tvSeries);
                })
            }
        },
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
                            <input @keyup.enter="this.movieLoaded(), this.seriesLoaded()" type="search" v-model="searchFilter">
                            <button @click="this.movieLoaded(), this.seriesLoaded()">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>