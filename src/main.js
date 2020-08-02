// import plugins ============
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSession from 'vue-session'
import bootstrap from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueSession)
Vue.use(bootstrap)


// import components ===============
import header from './components/header.vue'
import footer from './components/footer.vue'
import sidebar from './components/sidebar.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'animate.css/animate.min.css'
import 'sweetalert2/dist/sweetalert2.min.css';

// use compoenent ------------------------------------
Vue.component('app-header',header)
Vue.component('app-footer',footer)
Vue.component('app-sidebar',sidebar)

require('@/assets/css/style.css')

// Global variables
Vue.prototype.$hostname = "http://localhost/MY_WEB_WORKS/eduplus_new/front.eduplus/api/";

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
