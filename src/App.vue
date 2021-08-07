<template>
	<div id="app">
		<div class="header">
			<v-header></v-header>
		</div>
		<div class="wrapper">
			<h1 class="t-left">My personal costs</h1>
			<div class="t-left">
				<button type="button" class="btn btn-success btn-sm" @click="showForm = !showForm">ADD NEW COST</button>
			</div>
			<costs-table :costsList="paymentsList"></costs-table>
		</div>
      <!--
		<h5  class="mbot-25">Total Costs Amount: {{ totalAmount }} &#8381;</h5>
      -->
      <h5  class="mbot-25">Total Costs Amount: {{ getFPV }} &#8381;</h5>


		<div v-if="showForm">
			<add-costs-form @addInfoStr="addDataStore"></add-costs-form>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';//,__Преобразовывает мутации в методы и подмешиват их в инстантс того приложения, где мы его вызываем
import Header from './components/Header.vue';
import CostsTable from './components/CostsTable.vue';
import AddCostsForm from './components/AddCostsForm.vue'


export default {
	name: 'App',
	data() {
		return {
			//paymentsList: [],//,__Удаляем, т.к. paymentslist уже имеется в mapGetters в computed
			showForm: false,
		}
	},
	components: {
		'costs-table': CostsTable,
		'v-header': Header,
		'add-costs-form': AddCostsForm
	},
	methods: {
      //...mapMutations([//,__Вариант_1__Написания мутации
      //   'setPaymentListData',
      //]),
      ...mapMutations({
         loadData: 'setPaymentListData', //,__Вариант_2__Написания мутации
         addDataStore: 'addDataToPaymentList',
      }),
		//addData(infoStr) {
		//	if (infoStr.amount == 0 || infoStr.category === '') //{
		//		alert('"Категория затрат" и "Сумма затрат" //являются обязательными полями!');
		//	} else if (isNaN(infoStr.amount)) {
		//		alert('"Сумма затрат" должна быть числом!');
		//	} else {
		//		this.paymentsList.push(infoStr);
		//	}
		//},
		fetchData() {
			return [
				{
					date: '28.03.2020',
					category: 'Food',
					amount: 169
				},
				{
					date: '24.03.2020',
					category: 'Transport',
					amount: 360
				},
				{
					date: '24.03.2020',
					category: 'Cloths',
					amount: 532
				},
			]
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
      }

	},
	created() {
		//this.paymentsList = this.fetchData();
      //this.$store.commit('setPaymentListData', this.fetchData());//,__Заменяем данное выражение выражением из mapMutations

      //this.setPaymentListData(this.fetchData());//,__Вариант_1__Написания метода при 1-м варианте мутации

      //this.loadData(this.fetchData());//,__Вариант_2__Написания метода при 2-м варианте мутации

      //this.$store.dispatch('fetchData');//,__Имитация запроса от сервера

      this.fetchListData();
	}
}
</script>
