<template>
	<div id="app">
		<img alt="Vue logo" :src="srcLogo">
		<div class="header">
			<v-header></v-header>
		</div>
		<div class="wrapper">
			<costs-table :costsList="paymentsList"></costs-table>
		</div>
			<h5>Total Amount: {{ totalAmount }} &#8381;</h5>
			
		<div>
			<add-costs-form @addInfoStr="addData"></add-costs-form>
		</div>
	</div>
</template>

<script>
import logoVue from './assets/logo.png';
import Header from './components/Header.vue';
import CostsTable from './components/CostsTable.vue';
import AddCostsForm from './components/AddCostsForm.vue'

export default {
	name: 'App',
	data() {
		return {
			srcLogo: logoVue,
			paymentsList: [],
		}
	},
	components: {
		'costs-table': CostsTable,
		'v-header': Header,
		'add-costs-form': AddCostsForm
	},
	methods: {
		addData(infoStr) {
			this.paymentsList.push(infoStr);
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
				(acc, cur) => acc + cur.amount,
				0
			);
		},
	},
	created() {
		this.paymentsList = this.fetchData();
	}
}
</script>
