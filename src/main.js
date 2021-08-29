import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import './style.scss';
import store from './store';
import router from './router';
import modalWindow from './plugins/ModalWindow';
import contextMenu from './plugins/ContextMenu';
import vuetify from './plugins/vuetify';



Vue.use(modalWindow);
Vue.use(contextMenu);

Vue.config.productionTip = false;


new Vue({
   render: h => h(App),
   store,
   axios,
   vuetify,
	router
}).$mount('#app');

