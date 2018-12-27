<template>
  <section>
    <div class="container">
      <h1 class="title">Conheça nossos Restaurantes</h1>
      <Card :items="restaurants"></Card>
    </div>
  </section>
</template>

<script>
const axios = require('axios')
import Card from '@/components/Card.vue'

export default {
  name: 'home',
  components: {
    Card
  },
  data: function() {
    return {
      restaurants: []
    }
  },
  methods: {
    getRestaurants: function() {
      let vm = this
      axios
        .get('https://challange.goomer.com.br/restaurants')
        .then(response => {
          vm.restaurants = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created() {
    this.getRestaurants()
  }
}
</script>

<style>
section {
  padding: 30px 0;
}
.title {
  text-transform: uppercase;
  display: inline-block;
  background-color: #158ad0;
  padding: 5px 20px;
  border-radius: 50px;
  color: #fff;
  margin-bottom: 20px;
  font-size: 22px;
  font-family: 'Quicksand', sans-serif;
}
</style>
