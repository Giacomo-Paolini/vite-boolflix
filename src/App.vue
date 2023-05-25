<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import {store} from './data/store'

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
  },
  methods: {
    myAction() {
      console.log("click Search")
    }
  }
}
</script>

<template>
  <header>
    <AppHeader @my-event="myAction"/>
  </header>
  <main>
    <AppMain />
  </main>
</template>
