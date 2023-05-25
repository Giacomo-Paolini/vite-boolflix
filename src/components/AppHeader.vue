<script>
    import {store} from '../data/store'

    export default {
        name: "AppHeader",
        searchText: "",
        methods: {
            clickBtn() {
                this.$emit('myEvent')
            }
        }
    }
</script>

<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="d-flex flex-wrap justify-content-between p-2">
                    <h1>BOOLFIX</h1>
                    <div>
                        <input type="text" v-model="searchText">
                        <button @click="clickBtn">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>