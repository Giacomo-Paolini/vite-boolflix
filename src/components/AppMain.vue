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
                <div class="my-card d-flex flex-column" v-for="movie in this.store.movies">
                    <h2>{{ movie.title }}</h2>
                    <p>{{ movie.original_title }}</p>
                    <span :class="getFlags(movie.original_language)"></span>
                    <p>{{ movie.original_language }}</p>
                    <p>{{ movie.vote_average }}</p>
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