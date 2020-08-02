import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import career_communities from '../views/Career_Communities.vue'
import certification from '../views/Certification.vue'
import contact from '../views/Contact.vue'
import about from '../views/About.vue'
import login from '../views/Login.vue'
import resource_center from '../views/Resource_Center.vue'
import signup from '../views/signup.vue'



// import assessment from '../views/assessment/assessment.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/career_Communities',
    name: 'career_Communities',
    component: career_communities
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/certification',
    name: 'certification',
    component: certification
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/resource_center',
    name: 'resource_center',
    component: resource_center
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },




  // {
  //   path: '/assessment/:id/',
  //   name: 'assessment',
  //   component: assessment
  // }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
