import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/layout/Layout'
import Home from './views/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: { name: 'home' },
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('./views/About.vue')
        },
        {
          path: 'events/activeline',
          name: 'activeline_events',
          component: () => import('./views/event/ActivelineEvent')
        },
        {
          path: 'events/deadline',
          name: 'deadline_events',
          component: () => import('./views/event/DeadlineEvent')
        }
      ]
    }
  ]
})
