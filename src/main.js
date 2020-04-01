import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Routes from './routes.js';
import VueResource from 'vue-resource'
// import VueAwesomeSwiper from 'vue-awesome-swiper';

// import 'swiper/css/swiper.css'

// vuetify.use(VueAwesomeSwiper);

Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: 'history',
//   default mode is "hash"
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router
}).$mount('#app')
