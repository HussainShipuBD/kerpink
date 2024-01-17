import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import about from '@/components/about.vue'
import contact from '@/components/contact.vue'
import services from '@/components/services.vue'
import login from '@/components/login.vue'
import signUp from '@/components/signUp.vue'
import orderPage from '@/components/orderPage.vue'
import profile from '@/components/profile.vue'
import portfolio from '@/components/portfolio.vue'
import portfolioDetails from '@/components/portfolioDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/orderPage',
      name: 'orderPage',
      component: orderPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolio
    },
    {
      path: '/portfolioDetails',
      name: 'portfolioDetails',
      component: portfolioDetails
    },
   
  ]
})
