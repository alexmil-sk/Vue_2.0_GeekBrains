<template>
	<div id="app">
		<div class="header">
			<v-header></v-header>
		</div>
      <div class="page-links">
         <router-link to='/dashboard'>Dashboard /</router-link>
         <router-link to='/about'>About /</router-link>
         <router-link to='/page404'>Page404</router-link>
      </div>
      <router-view></router-view>
      <page-dashboard v-if="page==='dashboard'"></page-dashboard>
      <page-about v-else-if="page==='about'"></page-about>
      <page-404 v-else-if="page==='page404'"></page-404>
		<div class="wrapper bg-white">
			<h1 class="t-left">My personal costs</h1>
         <div class="inline">
            <div class="t-left">
               <button type="button" class="btn btn-success btn-sm" @click="showDB = !showDB">ADD WITH HTTP DB</button>
            </div>
            <div class="t-left">
               <button type="button" class="btn btn-success btn-sm" @click="showForm = !showForm">ADD WITH COSTS FORM</button>
            </div>
         </div>
			<costs-table
            :costsList="currentElems"
            :costsListDel="paymentsList"
         ></costs-table>
		</div>
      <v-pagination
         :currentPage="currentPage"
         :nStr="nStr"
         :quantElems="paymentsList.length"
         @getPage="onChangePage"
      ></v-pagination>
      <h5 class="mbot-25">Total Costs Amount:&nbsp;<span class="badge bg-secondary">{{ getFPV }} &#8381;</span></h5>
      <app-db v-if="showDB"></app-db>
		<add-costs-form @addInfoStr="addDataStore" v-if="showForm"></add-costs-form>



	</div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';//,__Преобразовывает мутации в методы и подмешиват их в инстантс того приложения, где мы его вызываем
import Header from './components/Header.vue';
import CostsTable from './components/CostsTable.vue';
import AddCostsForm from './components/AddCostsForm.vue';
import Pagination from './components/Pagination.vue';
import AppDb from './components/db/AppDb.vue';

export default {
	name: 'App',
	data() {
		return {
			//paymentsList: [],//,__Удаляем, т.к. paymentslist уже имеется в mapGetters в computed
			showForm: false,
         showDB: false,
         currentPage: 1,
         nStr: 4,
         page: 'dashboard',

		}
	},
	components: {
		'costs-table': CostsTable,
		'v-header': Header,
		'add-costs-form': AddCostsForm,
      'v-pagination': Pagination,
      'app-db': AppDb,
	},
	methods: {
      //...mapMutations([//,__Вариант_1__Написания мутации
      //   'setPaymentListData',
      //]),
      ...mapMutations({
         loadData: 'setPaymentListData', //,__Вариант_2__Написания мутации
         addDataStore: 'addDataToPaymentList',
      }),
      onChangePage(page) {
         this.currentPage = page;
      },
      setPage() {
         //this.page = location.href.slice(22);//, __ Применяется если в href указывается название страницы без #
         this.page = location.hash.slice(1);//, __ Применяется если в href указывается название страницы c #
         console.log(location);
      },
	},
	computed: {
      ...mapGetters({
         paymentsList: 'getPaymentsList'
      }),
      ...mapActions({
         fetchListData: 'fetchData'
      }),
		totalAmount() {
			return this.paymentsList.reduce(
				(acc, cur) => acc + +(cur.amount),
				0
			);
		},
      getFPV() {
         return this.$store.getters.getFullPaymentAmount;
      },
      currentElems() {
         const {nStr, currentPage} = this;
         return this.paymentsList.slice(nStr * (currentPage - 1), nStr * (currentPage - 1) + nStr);
         },

	},
	created() {
		//this.paymentsList = this.fetchData();
      //this.$store.commit('setPaymentListData', this.fetchData());//,__Заменяем данное выражение выражением из mapMutations

      //this.setPaymentListData(this.fetchData());//,__Вариант_1__Написания метода при 1-м варианте мутации

      //this.loadData(this.fetchData());//,__Вариант_2__Написания метода при 2-м варианте мутации

      //this.$store.dispatch('fetchData');//,__Имитация запроса от сервера

      this.fetchListData();
	},
   mounted() {
      this.setPage();
      window.addEventListener('hashchange', () => {
         this.setPage();
      });
      console.log(this.page);
   },
}
</script>
