/* eslint-disable no-console */
import Vue from 'vue'
import App from './App.vue'
import VAlertResource from './components/alert/index';
import './components/alert/alert.css'

console.log(VAlertResource);
Vue.config.productionTip = false
Vue.use(VAlertResource);
new Vue({
    render: h => h(App)
}).$mount('#app')
