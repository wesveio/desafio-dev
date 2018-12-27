import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Restaurant from './views/Restaurant.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/restaurant/:id',
      name: 'restaurant',
      component: Restaurant
    }
  ]
})
