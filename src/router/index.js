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
         //components: () => import( /* webpackChunkName: "App" */ '../App'),
         components: App,
         name: 'App'
      },
      {
         path: '/appdb',
         //component: () => import(/* webpackChunkName: "AppDb" */'../components/db/AppDb'),
         component: AppDb,
         name: 'AppDb',
      },
      {
         path: '/appdb/:Food',
         component: Food,
         name: 'Food',
      },
      {
         path: '/appdb/:Transport',
         component: Transport,
         name: 'Transport',
      },
      {
         path: '/appdb/:Entertainment',
         component: Entertainment,
         name: 'Entertainment',
      },
      {
         path: '/registration',
         //component: () => import( /* webpackChunkName: "TheRegistration" */ '../pages/TheRegistration'),
         component: TheRegistration,
         name: 'TheRegistration'
      },
      {
         path: '/page404',
         //component: () => import( /* webpackChunkName: "Page404" */ '../pages/Page404'),
         component: Page404,
         name: 'Page404'
      },
      //{
      //   path: '*',
      //   component: () => import( /* webpackChunkName: "Page404" */ '../pages/Page404'),
      //   name: 'Page404'
      //}
   ]
});
