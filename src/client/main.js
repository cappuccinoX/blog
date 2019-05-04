import router from './router'
import App from './App'
import Vue from 'vue'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
