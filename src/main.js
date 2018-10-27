import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueCarousel from '@chenfengyuan/vue-carousel';



Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component(VueCarousel.name, VueCarousel)

new Vue({
  render: h => h(App)
}).$mount('#app')
