import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import './style.scss';
import store from './store';

Vue.config.productionTip = false;


new Vue({
   render: h => h(App),
   store,
   axios
}).$mount('#app');
