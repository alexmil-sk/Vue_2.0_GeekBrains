import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      paymentsList: [],
      categories: []
   },
   mutations: {
      setPaymentListData(state, payload) {
         //,__Вариант_1__Реактивность
         //state.paymentsList[0] = payload;
         //state.paymentsList = [...state.paymentsList]

         //,__Вариант_2__Реактивность
         //Vue.set(state.paymentsList,0,payload)
         state.paymentsList = payload;
      },
      addDataToPaymentList(state, payload) {
         state.paymentsList.push(payload);
      },
      setCategoriesListData(state, payload) {
         state.categories = payload;
      },
      //,_Вставка новой категории------------------
      addNewCategory(state, payload) {
         state.categories.unshift(payload);
      },
      delCategories(state) {
         state.categories.splice(0, state.categories.length);
         console.log(state.categories);
      },
      //,-----------------------------------------

   },
   getters: {
      getPaymentsList: state => state.paymentsList,
      getFullPaymentAmount: state => {
         return state.paymentsList.reduce((res, cur) => res += +(cur.amount), 0);
      },
      getCategories: state => state.categories,
   },
   actions: {
      fetchData({ commit }) {
         if(this.state.paymentsList.length) return
         return new Promise((resolve) => {
            setTimeout(() => {
               const items = [];
               for (let i = 0; i < 10; i++) {
                  items.push({
                     id: i + 1,
                     date: "05.08.2021",
                     category: "Sport",
                     amount: 200 + i,
                  })
               }
               resolve(items);
            },1000)
         })
         .then(res => commit('setPaymentListData', res))
      },
      fetchCategoryList({commit}) {
         return new Promise((resolve) => {
               setTimeout(() => {
                  const categories = ['Sport', 'Food', 'Education', 'Internet', 'Community'];

                  resolve(categories);
               }, 1000)
         })
         .then(res => commit('setCategoriesListData', res))
		},
   },
});
