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
      },
      {
        path: 'edit/:id',
        component: () => import('../views/backend/Edit.vue'),
        props: true
      },
      {
        path: 'view/:id',
        component: () => import('../views/backend/View.vue'),
        props: true
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
    path: '/productlist',
    component: () => import('../views/frontend/Product.vue')
  },
  {
    path: '/productdetail/:id',
    component: () => import('../views/frontend/Productdetail.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
