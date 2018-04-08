import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'
import Form from './views/form'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/form',
      name: 'form_main',
      component: Form
    }
  ]
})

