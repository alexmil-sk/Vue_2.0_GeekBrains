<template>
	<div class="costs__form">
		<h1>{{ title }}</h1>
		<div class="input-group input-group-sm mb-3">
			<span class="input-group-text" id="inputGroup-sizing-sm">date</span>
			<input
				type="text"
				class="form-control"
				aria-label="Sizing example input"
				aria-describedby="inputGroup-sizing-sm"
				v-model="date"
				placeholder="Дата произведенных затрат"
			/>
		</div>
		<div class="input-group input-group-sm mb-3">
			<span class="input-group-text" id="inputGroup-sizing-sm">amount</span>
			<input
				type="text"
				class="form-control"
				aria-label="Sizing example input"
				aria-describedby="inputGroup-sizing-sm"
				v-model="amount"
				placeholder="Сумма затрат"
			/>
		</div>
		<div class="input-group input-group-sm mb-3">
			<span class="input-group-text" id="inputGroup-sizing-sm">category</span>
			<input
				type="text"
				class="form-control"
				aria-label="Sizing example input"
				aria-describedby="inputGroup-sizing-sm"
				v-model="category"
				placeholder="Категория затрат"
			/>
		</div>
		<button
			type="button"
			class="btn btn-primary btn-sm"
			@click="onSave"
		>Save form
		</button>
	</div>
</template>
<script>
export default {
	name: 'AddCostsForm',
	data() {
		return {
			title: 'Costs Form',
			date: '',
			amount: '',
			category: '',
		}
	},
	methods: {
		onSave() {
			const { amount, category} = this;
			const infoStr = {
				date: this.date || this.getCurrentDate,
				amount,
				category, 
			}
			this.$emit('addInfoStr', infoStr);
		}
	},
	computed: {
		getCurrentDate() {
			const today = new Date();
			const d = '0' + today.getDate();
			const m = '0' + (today.getMonth() + 1);
			const y = today.getFullYear();
			return `${d}.${m}.${y}`;
		}
	}
}
</script>
<style lang="scss">
	
</style>