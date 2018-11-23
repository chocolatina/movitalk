import Vue from 'vue'
import Router from 'vue-router'
import Talks from '@/components/pages/Top'
import Talk from '@/components/pages/Talk'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/talks', name: 'talks', component: Talks },
    { path: '/talk/:id', name: 'talk', component: Talk }
  ]
})
