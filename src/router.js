import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let pageView = (name) => {
  return () => import(/*webpackChunkName:  "[request]"*/ `@/views/${name}.vue`)
}

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: pageView('Home'),
    },
    {
      path: '/about',
      name: 'about',
      component: pageView('About'),
    }
  ]
})
