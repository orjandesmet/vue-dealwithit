<template>
  <div id="app">
    <deal-with-it :display-at="displayAt"></deal-with-it>
    <button type="button" @click="showTheGlasses()">Click me</button>
  </div>
</template>

<script>
import DealWithIt from './components/DealWithIt.vue'

export default {
  name: 'app',
  data: () => ({
    displayAt: null,
  }),
  components: {
    DealWithIt
  },
  methods: {
    showTheGlasses() {
      this.displayAt = { top: 20, left: 30 };
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
