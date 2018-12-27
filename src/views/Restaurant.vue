<template>
  <div id="restaurant">
    <div>
      <section
        class="group-section"
        v-for="(groupItem, groupIndex) in groupedItems"
        :key="groupIndex"
      >
        <h1 class="group-title">{{ groupIndex.replace(/_/g, ' ') }}</h1>
        <div class="container">
          <Card :items="groupItem"></Card>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
import Card from '@/components/Card.vue'

export default {
  name: 'restaurant',
  components: {
    Card
  },
  data: function() {
    return {
      id: this.$route.params.id,
      restaurant: []
    }
  },
  computed: {
    groupedItems() {
      return this.groupBy(this.restaurant, 'group')
    }
  },
  methods: {
    getMenu: function() {
      let vm = this
      axios
        .get(`https://challange.goomer.com.br/restaurants/${vm.id}/menu`)
        .then(response => {
          vm.restaurant = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    groupBy: function(arr, key) {
      const result = {}
      arr.filter(function(el) {
        let objKeys = Object.keys(result)
        let lowerEl = el[key].toLowerCase().replace(/ /g, '_')
        if (objKeys.indexOf(lowerEl) === -1) {
          result[lowerEl] = []
        }
        result[lowerEl].push(el)
      })
      return result
    }
  },
  created() {
    this.getMenu()
  }
}
</script>

<style>
.group-section {
  padding: 30px 0;
}
.group-section:nth-child(even) {
  background-color: #f3f3f3;
}
.group-title {
  text-transform: uppercase;
  display: inline-block;
  background-color: #158ad0;
  padding: 5px 20px;
  border-radius: 50px;
  color: #fff;
  margin-bottom: 20px;
  font-size: 22px;
}
</style>
