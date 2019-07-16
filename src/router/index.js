import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import('@/pages/HelloWorld')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
