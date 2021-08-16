import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import './style.scss';
import store from './store';
import router from './router';
import modalWindow from './plugins/ModalWindow';



Vue.config.productionTip = false;

Vue.use(modalWindow);

new Vue({
   render: h => h(App),
   store,
   axios,
   router
}).$mount('#app');
