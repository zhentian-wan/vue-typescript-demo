import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import HelloTs from '@/components/HelloTs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hello-ts',
      name: 'HelloTs',
      component: HelloTs
    }
  ]
})
