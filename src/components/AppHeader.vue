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
            search() {
                let indirizzo = this.store.movieApi + this.searchFilter;
                this.movieLoaded(indirizzo)
            },
            movieLoaded(address) {
                axios.get(address).then(r => {
                    this.store.movies = r.data.results;
                    console.log("movies", this.store.movies);
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
</template>