import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ElementUi from '@/components/ElementUi'
import LoginWithoutElementUi from '@/components/LoginWithoutElementUi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginWithoutElementUi',
      component: LoginWithoutElementUi
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ElementUi',
      name: 'ElementUi',
      component: ElementUi
    }

  ]
})
