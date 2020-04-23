import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import navBar from './nav-bar.vue'
import Content from './contentPage.vue'
import Filter from './filter.vue'
import Service from './services.vue'
import Property from './properties.vue'
import Footer from './footer.vue'
import ownerEntry from './ownerEntry.vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

Vue.component('navbar',navBar);
Vue.component('contentpage',Content);
Vue.component('Filterr',Filter);
Vue.component('service',Service);
Vue.component('property',Property);
Vue.component('footeR',Footer);
Vue.component('ownentry',ownerEntry);
new Vue({
  el: '#app',
  render: h => h(App)

})
