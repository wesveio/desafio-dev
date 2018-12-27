<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <footerbar></footerbar>
  </div>
</template>

<script>
import navbar from '@/components/Nav.vue'
import footerbar from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    navbar,
    footerbar
  }
}
</script>

<style>
@import url(../node_modules/bootstrap/dist/css/bootstrap.min.css);
@import url('https://fonts.googleapis.com/css?family=Quicksand');
@import url('https://use.fontawesome.com/releases/v5.6.3/css/all.css');
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
