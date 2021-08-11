import Vue from 'vue';
import Router from 'vue-router';
import PageDashboard from '../pages/PageDashboard.vue';
import PageAbout from '../pages/PageAbout.vue';
import Page404 from '../pages/Page404.vue';
import AppDb from '../components/db/AppDb.vue';
import AddCostsForm from '../components/AddCostsForm.vue';
import PageLogin from '../pages/PageLogin.vue';




Vue.use(Router);

const router = new Router({
   mode: 'history',
   routes: [
      {
         path: '/pagelogin',
         component: PageLogin,
         name: 'PageLogin'
      },
      {
         path: '/dashboard',
         component: PageDashboard,
         name: 'Dashboard',
         children: [
            {
               path: '/addcostsform',
               component: AddCostsForm,
               name: 'AddCostsForm',
            },
            {
               path: '/appdb',
               component: AppDb,
               name: 'AppDb',
            },
         ]
      },
      {
         path: '/dashboard/:page',
         component: PageDashboard,
         name: 'Dashboard',
      },
      {
         path: '/about*',//,__Звездочка позволяет оставаться на странице при наличии любых символов после адреса страницы /about
         component: PageAbout,
         name: 'About'
      },
      {
         path: '/addcostsform',
         component: AddCostsForm,
         name: 'AddCostsForm',
      },
      {
         path: '/appdb',
         component: AppDb,
         name: 'AppDb',
      },
      {
         path: '/page404',
         component: Page404,
         name: 'Page404'
      },
      {
         path: '/pagelogin',
         components: PageLogin,
         name: 'PageLogin'
      },
      {
         path: '*',
         component: Page404,
         name: 'Page404'
      },
   ]
});


const isAuth = true;//,__Если значение false, то страница авторизации будет первой с невозможностью перейти на другие страницы

//,__Хук жизненного цикла beforeEach
router.beforeEach((to, from, next) => {
   if (to.name !== 'PageLogin' && !isAuth) {
      next({ name: 'PageLogin'})
   } else {
      next();
   }
});




//,__Хук жизненного цикла afterEach
const getTitleByRouteName = routeName => {
   return {
      'Dashboard': 'Page Dashboard',
      'About': 'Page About',
      'Page404': 'Not Found',
      'PageLogin': 'Authentification'
   }[routeName]
}

router.afterEach((to) => {
   document.title = getTitleByRouteName(to.name);
});

export default router;

