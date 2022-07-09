import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Registro from './views/Registro.vue';
import Resultado from "./views/Resultado.vue";
import EDA from "./views/EDA.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
    {
      path: '/',
      component: Home,
      meta: {title: 'Inicio'}
    },
  {
      path: '/inicio',
      component: Home,
      meta: {title: 'Inicio'}
    },
    {
        path: '/objetivo',
        meta: {title: 'Acerca del proyecto'},
        component: About,
        // example of route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import('./views/About.vue')
    },
    {
        path: '/somos',
        meta: {title: 'Quienes Somos'},
        component: Home,
    },
    {
        path: '/eda',
        meta: {title: 'EDA'},
        component: EDA,
    },
    {
        path: '/formulario',
        meta: {title: 'Formulario'},
        component: Registro,
    },
    {
        path: '/resultados/:result',
        meta: {title: 'Resultados'},
        component: Resultado,
    },
    {path: '/:path(.*)', component: NotFound},
]
