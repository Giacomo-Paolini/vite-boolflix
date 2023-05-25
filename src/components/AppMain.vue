<script>
    import {store} from '../data/store'

    export default {
        name: "AppMain",
        data() {
            return {
                store,
            }
        },
    }
</script>

<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="my-card">
                    {{ this.store.searchMovieApi }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.my-card {
    width: 20rem;
    height: 25rem;
}
</style>