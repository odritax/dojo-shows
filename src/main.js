import Vue from 'vue'
import App from './App.vue'
import VueFirestore from 'vue-firestore';       // adding this import
import router from './router';  // añadimos esta línea
Vue.config.productionTip = false;
Vue.use(VueFirestore, {key: 'id'});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
