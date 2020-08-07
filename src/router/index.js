import Vue from 'vue';
import VueRouter from 'vue-router';

import tablaBd from '../components/TablaBd.vue';  // asumiendo que hicimos este componente
import detalles from '../components/Detalles.vue'
import editar from '../components/Editar.vue'

Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
    routes: [
      {
        path: '/', 
        component: tablaBd
      },
      {
        path:'/detalles/:id',
        component:detalles
      },
      {
        path:'/editar/:id',
        component:editar
      },
    ]
})