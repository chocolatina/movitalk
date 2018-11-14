import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/pages/Top'
import Watch from '@/components/pages/Watch'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '', name: 'Top', component: Top},
    {path: '/watch', name: 'Watch', component: Watch}
  ]
})
