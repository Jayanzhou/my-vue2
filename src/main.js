import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routers: [
    {
      path: '/first',
      component: 
    }
  ]
});



const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
