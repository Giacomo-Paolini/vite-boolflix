<script>
    import {store} from '../data/store'

    export default {
        name: "AppMain",
        data() {
            return {
                store,
                allFlags: "",
            }
        },
        methods: {
            getFlags(OgLanguage) {
                if (OgLanguage == "en") {
                    OgLanguage = "gb";
                } else if (OgLanguage == "ja"){
                    OgLanguage = "jp";
                } else if (OgLanguage == "zh"){
                    OgLanguage = "cn";
                } else if (OgLanguage == "hi"){
                    OgLanguage = "in";
                }
                
                this.allFlags = `fi fi-${OgLanguage}`;
                return this.allFlags;
            }
        }
    }
</script>

<template>
    <div class="container-fluid">
        <div class="container mt-3">
            <div class="row">
                <h2>MOVIES</h2>
                <div class="my-card d-flex flex-column" v-for="movie in this.store.movies">
                    <h2>{{ movie.title }}</h2>
                    <p>{{ movie.original_title }}</p>
                    <span :class="getFlags(movie.original_language)"></span>
                    <p>{{ movie.original_language }}</p>
                    <p>{{ movie.vote_average }}</p>
                </div>
            </div>
            <div class="row">
                <h2>TV SERIES</h2>
                <div class="my-card d-flex flex-column" v-for="serie in this.store.tvSeries">
                    <h2>{{ serie.name }}</h2>
                    <p>{{ serie.original_name }}</p>
                    <span :class="getFlags(serie.original_language)"></span>
                    <p>{{ serie.original_language }}</p>
                    <p>{{ serie.vote_average }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.my-card {
    width: calc(100% / 5);
}

img {
    height: 2rem;
    width: 15%;
}
</style>