<template>
	<div id="app">
		<img alt="Vue logo" :src="srcLogo">
		<v-header></v-header>
		<div class="wrapper">
			<costs-table :costsList="paymentsList"></costs-table>
		</div>
		<div>
			<add-costs-form></add-costs-form>
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
		fetchData() {
			return [
				{
					date: '28.03.2020',
					category: 'Food',
					value: 169
				},
				{
					date: '24.03.2020',
					category: 'Transport',
					value: 360
				},
				{
					date: '24.03.2020',
					category: 'Cloths',
					value: 532
				},
			]
		}
	},
	created() {
		this.paymentsList = this.fetchData();
	}
}
</script>
