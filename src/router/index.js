import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import School from '@/page/school-detail/SchoolDetail'
import Stay from '@/page/stay-detail/StayDetail'
import searchstay from '@/page/find-stay/StaySearch'
import searchschool from '@/page/find-school/schoolSearch'
import searchcity from '@/page/find-city/citySearch'
import service from '@/page/service/service'

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
    },
    {
      path: '/searchstay/',
      name: 'searchstay',
      component: searchstay
    },
    {
      path: '/searchschool/',
      name: 'searchschool',
      component: searchschool
    },
    {
      path: '/searchcity/',
      name: 'searchcity',
      component: searchcity
    },
    {
      path: '/service/',
      name: 'service',
      component: service
    }
  ]
})
