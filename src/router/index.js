import Vue from 'vue';
import Router from 'vue-router';
import App from '../App';
import TheRegistration from '../pages/TheRegistration';
import Transport from '../pages/Transport';
import Food from '../pages/Food';
import AppDb from '../components/db/AppDb';
import Entertainment from '../pages/Entertainment';
import Page404 from '../pages/Page404';

Vue.use(Router);

export default new Router({
   mode: 'history', //__История переходов по страницам
   routes: [
      {
         path: '/app',
         components: App,
         name: 'App'
      },
      {
         path: '/appdb',
         component: AppDb,
         name: 'AppDb',
      },
      {
         path: '/appdb/:Food',
         component: Food,
      },
      {
         path: '/appdb/:Transport',
         component: Transport,
      },
      {
         path: '/appdb/:Entertainment',
         component: Entertainment,
      },
      {
         path: '/registration',
         component: TheRegistration,
      },
      {
         path: '/page404',
         component: Page404,
         name: 'Page404'
      },
      //{
      //   path: '*',
      //   component: Page404,
      //   name: 'Page404'
      //}
   ]
});
