import Vue from 'vue'
import Router from 'vue-router'
import About from 'components/About'
import Get from 'components/Get'
import Room from 'components/Room'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'index',
      component: About
    },
    {
      path: '/get',
      name: 'index',
      component: Get
    },
    {
      path: '/room/:id',
      name: 'index',
      component: Room
    },
  ]
})
