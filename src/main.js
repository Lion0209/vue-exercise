// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('todo-item',{
  template:'\
  <li>\
    {{title}}\
    <button v-on:click="$emit(\'remove\')">x</button>\
  </li>\
  ',
  props:['title'] 
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})


