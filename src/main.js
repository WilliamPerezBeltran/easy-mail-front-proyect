import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router'
import { routes } from './routes'
import VueResource from 'vue-resource'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueResource)


// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
// Vue.http.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// Vue.http.headers.common['Accept'] = 'application/json, text/plain, */*'
// Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'

Vue.http.options.root = "http://localhost:3000/"
Vue.http.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
Vue.config.productionTip = false

const router = new VueRouter({
	routes,
	mode:'history'
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
