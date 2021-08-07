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
			<costs-table
            :costsList="currentElems"
            :costsListDel="paymentsList"
         ></costs-table>
		</div>
      <v-pagination
         :currentPage="currentPage"
         :nStr="nStr"
         :length="paymentsList.length"
         @paginate="onChangePage"
      ></v-pagination>

		<h5  class="mbot-25">Total Costs Amount: {{ totalAmount }} &#8381;</h5>

		<div v-if="showForm">
			<add-costs-form @addInfoStr="addData"></add-costs-form>
		</div>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import CostsTable from './components/CostsTable.vue';
import AddCostsForm from './components/AddCostsForm.vue';
import Pagination from './components/Pagination.vue';


export default {
	name: 'App',
	data() {
		return {
			paymentsList: [],
			showForm: false,
         currentPage: 1,
         nStr: 6,
		}
	},
	components: {
		'costs-table': CostsTable,
		'v-header': Header,
		'add-costs-form': AddCostsForm,
      'v-pagination': Pagination,
	},
	methods: {
		addData(infoStr) {
			if (infoStr.amount == 0 || infoStr.category === '') {
				alert('"Категория затрат" и "Сумма затрат" являются обязательными полями!');
			} else if (isNaN(infoStr.amount)) {
				alert('"Сумма затрат" должна быть числом!');
			} else {
				this.paymentsList.push(infoStr);
			}
		},
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
      onChangePage(p) {
         this.currentPage = p;
      }
	},
	computed: {
		totalAmount() {
			return this.paymentsList.reduce(
				(acc, cur) => acc + +(cur.amount),
				0
			);
		},
      currentElems() {
         const {nStr, currentPage} = this;
         //return this.paymentsList.splice(nStr * (currentPage - 1), nStr * (currentPage - 1) + nStr);
         return this.paymentsList.slice(nStr * (currentPage-1), nStr * (currentPage-1) + nStr);
      }
	},
	created() {
		this.paymentsList = this.fetchData();
	}
}
</script>
