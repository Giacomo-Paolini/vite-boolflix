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
    <main>

        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <h2 class="my-4">MOVIES</h2>
                    <div class="my-card d-flex flex-column" v-for="movie in this.store.movies">
                        <template v-if="movie.poster_path == null">
                            <img src="https://img.freepik.com/premium-vector/glitch-background-with-tv-noise-texture-no-signal-label-attention-sign-triangular-frame_167184-570.jpg" class="placeholder" alt="">
                        </template>
                        <template v-else>
                            <img :src="store.imageURL + movie.poster_path">
                        </template>
                        <div>
                            <h3>{{ movie.title }}</h3>
                            <p>{{ movie.original_title }}</p>
                            <span class="flags" :class="getFlags(movie.original_language)"></span><br>
                            <div>
                                <i v-for="index in Math.round(movie.vote_average / 2)" :key="index" class="fa-solid fa-star my-4"></i>
                                <i v-for="index in 5 - (Math.round(movie.vote_average / 2))" :key="index" class="fa-regular fa-star my-4"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h2 class="my-4">TV SERIES</h2>
                    <div class="my-card d-flex flex-column" v-for="serie in this.store.tvSeries">
                        <template v-if="serie.poster_path == null">
                            <img src="https://img.freepik.com/premium-vector/glitch-background-with-tv-noise-texture-no-signal-label-attention-sign-triangular-frame_167184-570.jpg" class="placeholder" alt="">
                        </template>
                        <template v-else>
                            <img :src="store.imageURL + serie.poster_path">
                        </template>
                        <div>
                            <h3>{{ serie.name }}</h3>
                            <p>{{ serie.original_name }}</p>
                            <span :class="getFlags(serie.original_language)"></span><br>
                            <div>
                                <i v-for="index in Math.round(serie.vote_average / 2)" :key="index" class="fa-solid fa-star my-4"></i>
                                <i v-for="index in 5 - (Math.round(serie.vote_average / 2))" :key="index" class="fa-regular fa-star my-4"></i>
                            </div>
                        </div>
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

.flags {
    height: 2rem;
    width: 15%;
}

img {
    height: 360px;
    width: 240px;
}

.placeholder {
    object-fit: cover;
}

main {
    background-color: #434242;
    color: white;
}

h2 {
    font-size: 2.5rem;
}
</style>