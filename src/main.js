// import plugins ============
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSession from 'vue-session'
import bootstrap from 'bootstrap-vue'
import GoogleSignInButton from 'vue-google-signin-button-directive'
import VueSweetalert2 from 'vue-sweetalert2';

// import $ from "jquery"; 

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueSession)
Vue.use(bootstrap)
Vue.use(VueSweetalert2)


// Vue.use(adminLte)



// import components ===============
import header from './components/header.vue'
import footer from './components/footer.vue'
import sidebar from './components/sidebar.vue'
import  loader from './components/loader.vue'
import  timer from './components/timer.vue'
import  new_comunity from './components/new_comunity.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'animate.css/animate.min.css'
import 'sweetalert2/dist/sweetalert2.min.css';


import vuetify from './plugins/vuetify';

// use compoenent ------------------------------------
Vue.component('app-header',header)
Vue.component('app-footer',footer)
Vue.component('app-sidebar',sidebar)
Vue.component('app-loader', loader)
Vue.component('app-timer', timer)
Vue.component('new-comunity', new_comunity)

// Include jQuery
window.$ = window.jQuery = require("jquery");
window.$ = require('jquery') 

require('@/assets/css/style.css')
require('@/assets/dist/css/adminlte.css')
// require('@/assets/plugins/jquery/jquery.min.js')
require('@/assets/dist/js/adminlte.min.js')



// Global variables
export const bus = new Vue();
Vue.prototype.$hostname = "http://localhost/MY_WEB_WORKS/eduplus_new/front.eduplus/api/";
// Vue.prototype.$hostname = 'https://eduplus.sch.ng/api/';



new Vue({
  GoogleSignInButton,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
