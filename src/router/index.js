import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/pages/Top'
import Talk from '@/components/pages/Talk'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '', name: 'Top', component: Top},
    {path: '/talk', name: 'Talk', component: Talk}
  ]
})
