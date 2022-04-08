import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import vistaNaranja from '../views/ProductoFrutaNView.vue'
import vistaFresa from '../views/ProductoFrutaFView.vue'
import vistaManzana from '../views/ProductoFrutaMView.vue'
import vistaFrijol from '../views/ProductoGranoFView.vue'
import vistaCafe from '../views/ProductoGranoCView.vue'
import vistaLenteja from '../views/ProductoGranoLView.vue'
import vistaTomate from '../views/ProductoVerduraTView.vue'
import vistaBrocoli from '../views/ProductoVerduraBView.vue'
import vistaZanahoria from '../views/ProductoVerduraZView.vue'
import vistaInicio from '../views/InformacionView.vue'
import vistaGuia from '../views/VideosGuiaView.vue'
import vistaRegistro from '../views/RegistroView.vue'
import vistaVerduras from '../views/VerdurasView.vue'
import vistaFrutas from '../views/FrutasView.vue'
import vistaGranos from '../views/GranosView.vue'
import vistaPerfil from '../views/PerfilView.vue'
import vistaAyuda from '../views/PageAyudaView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: vistaInicio
  },
  {
    path: '/vistaInicio',
    name: 'inicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/InformacionView.vue')
  },
  {
    path: '/vistaNaranja',
    name: 'vistaNaranja',
    component: vistaNaranja
  },
  {
    path: '/vistaNaranja',
    name: 'vistaNaranja',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductoFrutaNView.vue')
  },
  {
    path: '/vistaFresa',
    name: 'vistaFresa',
    component: vistaFresa
  },
  {
    path: '/vistaFresa',
    name: 'vistaFresa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductoFrutaFView.vue')
  },
  {
    path: '/vistaFrijol',
    name: 'vistaFrijol',
    component: vistaFrijol
  },
  {
    path: '/vistaFrijol',
    name: 'vistaFrijol',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductoGranoFView.vue')
  },
  {
    path: '/vistaCafe',
    name: 'vistaCafe',
    component: vistaCafe
  },
  {
    path: '/vistaCafe',
    name: 'vistaCafe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductoGranoCView.vue')
  },
  {
    path: '/vistaLenteja',
    name: 'vistaLenteja',
    component: vistaLenteja
  },
  {
    path: '/vistaLenteja',
    name: 'vistaLenteja',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductoGranoLView.vue')
  },
  {
    path: '/vistaManzana',
    name: 'vistaManzana',
    component: vistaManzana
  },
  {
    path: '/vistaManzana',
    name: 'vistaManzana',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductoFrutaMView.vue')
  },
  {
    path: '/vistaTomate',
    name: 'vistaTomate',
    component: vistaTomate
  },
  {
    path: '/vistaTomate',
    name: 'vistaTomate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductoVerduraTView.vue')
  },
  {
    path: '/vistaBrocoli',
    name: 'vistaBrocoli',
    component: vistaBrocoli
  },
  {
    path: '/vistaBrocoli',
    name: 'vistaBrocoli',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductoVerduraBView.vue')
  },
  {
    path: '/vistaZanahoria',
    name: 'vistaZanahoria',
    component: vistaZanahoria
  },
  {
    path: '/vistaZanahoria',
    name: 'vistaZanahoria',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductoVerduraZView.vue')
  },
  {
    path: '/vistaGuia',
    name: 'vistaGuia',
    component: vistaGuia
  },
  {
    path: '/vistaGuia',
    name: 'vistaGuia',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VideosGuiaView.vue')
  },
  {
    path: '/vistaInicio',
    name: 'vistaInicio',
    component: vistaInicio
  },
  {
    path: '/vistaInicio',
    name: 'vistaInicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/InformacionView.vue')
  },
  {
    path: '/vistaRegistro',
    name: 'vistaRegistro',
    component: vistaRegistro
  },
  {
    path: '/vistaRegistro',
    name: 'vistaRegistro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistroView.vue')
  },
  {
    path: '/vistaVerduras',
    name: 'vistaVerduras',
    component: vistaVerduras
  },
  {
    path: '/vistaVerduras',
    name: 'vistaVerduras',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VerdurasView.vue')
  },
  {
    path: '/vistaFrutas',
    name: 'vistaFrutas',
    component: vistaFrutas
  },
  {
    path: '/vistaFrutas',
    name: 'vistaFrutas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FrutasView.vue')
  },
  {
    path: '/vistaGranos',
    name: 'vistaGranos',
    component: vistaGranos
  },
  {
    path: '/vistaGranos',
    name: 'vistaGranos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GranosView.vue')
  },
  {
    path: '/vistaPerfil',
    name: 'vistaPerfil',
    component: vistaPerfil
  },
  {
    path: '/vistaPerfil',
    name: 'vistaPerfil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PerfilView.vue')
  },
  {
    path: '/vistaAyuda',
    name: 'vistaAyuda',
    component: vistaAyuda
  },
  {
    path: '/vistaAyuda',
    name: 'vistaAyuda',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PageAyudaView.vue')
  }


]

const router = new VueRouter({
  routes
})

export default router
