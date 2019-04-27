import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import dash from '@/components/dash'
import rankings from '@/components/rankings'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/dash',
      name: 'dash',
      component: dash
    },
    {
      path: '/rankings',
      name: 'rankings',
      component: rankings
    },
  ]
})
