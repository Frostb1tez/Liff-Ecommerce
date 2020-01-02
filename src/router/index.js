import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    component: () => import('../components/Layout.vue'),
    children: [
      {
        path: 'create', component: () => import('../views/backend/Create.vue')
      },
      {
        path: 'index', component: () => import('../views/backend/Index.vue')
      }
    ]
  },
  {
    path: '/loginbackend',
    component: () => import('../views/backend/LoginBackend.vue')
  },
  {
    path: '/',
    component: () => import('../views/frontend/Home.vue')
  },
  {
    path: '/confirmotp',
    component: () => import('../views/frontend/ConfirmOTP.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
