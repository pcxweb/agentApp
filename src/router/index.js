import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import School from '@/page/school-detail/SchoolDetail'
import Stay from '@/page/stay-detail/StayDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/school/:id',
      name: 'School',
      component: School
    },
    {
      path: '/stay/:id',
      name: 'Stay',
      component: Stay
    }
  ]
})
