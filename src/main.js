import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import 'amfe-flexible'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.use(Mint);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})