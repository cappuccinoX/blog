import Vue from 'vue'
import Router from 'vue-router'

import Hello from './components/Hello'
import Homepage from './components/homepage'

Vue.config.debug = true
Vue.use(Router)

// const router = new Router({
//   routes: [
//     { name: 'hello', path: '/hello', component: Hello }
//   ]
// })
//
// new Vue({
//   el: '#app',
//   router,
//   render (createElement) {
//     return createElement(App)
//   }
// })

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: Homepage
    }
  ]
})

