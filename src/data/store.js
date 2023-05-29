import { reactive } from "vue";

export const store = reactive({
    movieApi: 'https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=',
    tvSeriesApi: 'https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=',
    universalApi: 'https://developers.themoviedb.org/3',
    movies: [],
    tvSeries: [],
});


// api key
// d9c01bdd6ecd4cabc6841b7024bc5c0a