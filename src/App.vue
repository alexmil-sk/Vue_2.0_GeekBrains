<template>
	<div id="app" v-clock>
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
		<h5  class="mbot-25">Total Costs Amount: {{ totalAmount }} &#8381;</h5>


		<div v-if="showForm">
			<add-costs-form @addInfoStr="addData"></add-costs-form>
		</div>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import CostsTable from './components/CostsTable.vue';
import AddCostsForm from './components/AddCostsForm.vue'

export default {
	name: 'App',
	data() {
		return {
			paymentsList: [],
			showForm: false,
		}
	},
	components: {
		'costs-table': CostsTable,
		'v-header': Header,
		'add-costs-form': AddCostsForm
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
	},
	computed: {
		totalAmount() {
			return this.paymentsList.reduce(
				(acc, cur) => acc + +(cur.amount),
				0
			);
		},

	},
	created() {
		this.paymentsList = this.fetchData();
	}
}
</script>
