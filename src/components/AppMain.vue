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
                    <img :src="store.imageURL + movie.poster_path">
                    <div>
                        <h2>{{ movie.title }}</h2>
                        <p>{{ movie.original_title }}</p>
                        <span class="flags" :class="getFlags(movie.original_language)"></span><br>
                        <template v-for="star in Math.round(movie.vote_average / 2)">
                            <i class="fa-solid fa-star my-4"></i>
                        </template>
                        <template v-for="star in 5 - Math.round(movie.vote_average / 2)">
                            <i class="fa-regular fa-star my-4"></i>
                        </template>
                    </div>
                </div>
            </div>
            <div class="row">
                <h2>TV SERIES</h2>
                <div class="my-card d-flex flex-column" v-for="serie in this.store.tvSeries">
                    <img :src="store.imageURL + serie.poster_path">
                    <div>
                        <h2>{{ serie.name }}</h2>
                        <p>{{ serie.original_name }}</p>
                        <span :class="getFlags(serie.original_language)"></span><br>
                        <template v-for="star in Math.round(serie.vote_average / 2)">
                            <i class="fa-solid fa-star my-4"></i>
                        </template>
                        <template v-for="star in 5 - Math.round(serie.vote_average / 2)">
                            <i class="fa-regular fa-star my-4"></i>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.my-card {
    width: calc(100% / 5);
}

.flags {
    height: 2rem;
    width: 15%;
}

img {
    height: 360px;
}
</style>