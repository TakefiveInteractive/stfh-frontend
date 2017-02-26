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
      name: 'about',
      alias: '/',
      component: About
    },
    {
      path: '/get',
      name: 'get',
      component: Get
    },
    {
      path: '/room/:id',
      name: 'room',
      component: Room
    },
    {
      path: '/room',
      redirect: '/room/undefined',
      canReuse: () => false
    },
  ]
})
