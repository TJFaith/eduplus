import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'




const career_communities =() =>
  import(/* webpackChunkName: "career_communities" */'../views/Career_Communities.vue')

  const career_community_layout =() =>
  import(/* webpackChunkName: "career_community_layout" */'../views/career_community_layout.vue')

  const career_home=() =>
  import(/*webpackChunkName: "career_home" */'../views/career_home.vue')

const certification =() =>
  import(/* webpackChunkName: "certification" */'../views/Certification.vue')

  const contact =() =>
  import(/* webpackChunkName: "contact" */'../views/Contact.vue')

  const about =() =>
  import(/* webpackChunkName: "about" */'../views/About.vue')

  const login =() =>
  import(/* webpackChunkName: "login" */ '../views/Login.vue')

  const forgot_password =() =>
  import(/* webpackChunkName: "forgot_password" */ '../views/forgot_password.vue')

  const resource_center =() =>
  import(/* webpackChunkName: "resource_center" */'../views/Resource_Center.vue')

  const signup =() =>
  import(/* webpackChunkName: "signup" */'../views/signup.vue')
  
  const assessment =() =>
  import(/* webpackChunkName: "assessment" */'../views/dashboard/assessment/assessment.vue')

// dashboard 
const dashboard_layout =() =>
import(/* webpackChunkName: "dashboard_layout" */'../views/dashboard/layout.vue')

const dashboard_home =() =>
import(/* webpackChunkName: "dashboard_home" */'../views/dashboard/home.vue')

const community =() =>
import(/* webpackChunkName: "community" */'../views/dashboard/community.vue')

const singleCommunity =() =>
import(/* webpackChunkName: "singleCommunity" */'../views/dashboard/singleCommunity.vue')

const myCommunity =() =>
import(/* webpackChunkName: "myCommunity" */'../views/dashboard/myCommunity.vue')

const dashboard_resource_center =() =>
import(/* webpackChunkName: "dashboard_resource_center" */'../views/dashboard/rescource_center.vue')
// dashboard assessment 

const newAssessment =() =>
import(/* webpackChunkName: "newAssessment" */'../views/dashboard/assessment/NewAssessment.vue')

const assessment_hhistory =() =>
import(/* webpackChunkName: "newAssessment" */'../views/dashboard/assessment_hhistory.vue')

const result =() =>
import(/* webpackChunkName: "newAssessment" */'../views/dashboard/assessment/result.vue')

// Primary Routes
const primary_assessment =() =>
  import(/* webpackChunkName: "assessment" */'../views/dashboard/assessment/primary_assessment.vue')

const primary_result =() =>
import(/* webpackChunkName: "newAssessment" */'../views/dashboard/assessment/primary_result.vue')
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      title: 'Eduplus',
      // metaTags: [
      //   {
      //     name: 'description',
      //     content: 'The home page of our example app.'
      //   },
      //   {
      //     property: 'og:description',
      //     content: 'The home page of our example app.'
      //   }
      // ]
    }
  },
  {
    path: '/career_Communities',
    name: 'career_Communities',
    component: career_communities,
    meta: {
      title: 'Eduplus -- Career Community',
    }
  },
  {
    path: '/career_Communities/home',
    name: 'c_feeds',
    component: career_community_layout,
    meta: {
      title: 'Eduplus -- Career Community feeds',
    },
    children:[
      {
        path:'/career_Communities/home/:startRange/:endRange',
        name:'career_home',
        component:career_home
      },
      {
        path: '/community/:community_id/',
        name: 'generalSingleCommunity',
        component: singleCommunity
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: about,
    meta: {
      title: 'Eduplus -- About Us',
    }
  },
  {
    path: '/certification/:startRange/:endRange',
    name: 'certification',
    component: certification,
    meta: {
      title: 'Eduplus -- Certification',
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact,
    meta: {
      title: 'Eduplus -- Contact',
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      title: 'Eduplus -- User Login',
    }
  },
  {
    path:'/forgot_password',
    name:'forgot_password',
    component:forgot_password,
    meta:{
      title:'Eduplus -- Forgotten Password'
    }
  },
  {
    path: '/resource_center',
    name: 'resource_center',
    component: resource_center,
    meta: {
      title: 'Eduplus -- Resource Center',
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup,
    meta: {
      title: 'Eduplus -- Sign Up',
    }
  },

  // ROUTES FOR ASSESSMENT
  {
    path:'/assessment',
    name:'assessment',
    component:assessment
  },
  {
    path:'/result',
    name:'result',
    component:result
  },
  // Primary Secion
  {
    path:'/primary_assessment',
    name:'primary_assessment',
    component:primary_assessment
  },
  {
    path:'/primary_result',
    name:'primary_result',
    component:primary_result
  },


  // dashboard route
  {
    path:'/dashboard',
    name:'dashboard',
    component:dashboard_layout,
    meta:{
      title:'Eduplus -- Dashboard'
    },
    children:[
      {
      path:'/dashboard',
      name:'all_certification',
      component:dashboard_home
      },
      {
        path:'/dashboard/assessment',
        component:newAssessment
      },
      {
        path:'/dashboard/assessment_hhistory',
        component:assessment_hhistory
      },
      {
        path:'/dashboard/community',
        component:community,
        children:[
          {
            path: '/dashboard/community/all/',
            name: 'myCommunity',
            component: myCommunity
          },
          {
            path: '/dashboard/community/:community_id/',
            name: 'singleCommunity',
            component: singleCommunity
          }
        ]
      },
   
      {
        path:'/dashboard/dashboard resource center',
        component:dashboard_resource_center
      }
      
     
    ]
  }




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
