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
			<button
				class="btn btn-danger btn-sm"
				@click="clearFormDate"
			>x</button>
		</div>
      <div class="input-group input-group-sm mb-3">
         <span class="input-group-text" id="inputGroup-sizing-sm">category</span>
         <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            v-model="category" v-if="options"
         >
            <option :value="null" disabled>Выберите категорию</option>
            <option
               v-for="option in options"
               :value="option"
               :key="option"
            >{{ option }}
            </option>
         </select>
         <button
				class="btn btn-danger btn-sm"
				@click="clearFormCategory"
			>x</button>
      </div>
      <div class="input-group input-group-sm mb-3">
			<span class="input-group-text" id="inputGroup-sizing-sm">amount</span>
			<input
				type="number"
				class="form-control"
				aria-label="Sizing example input"
				aria-describedby="inputGroup-sizing-sm"
				v-model.number="amount"
				placeholder="0"
			/>
			<button
				class="btn btn-danger btn-sm"
				@click="clearFormAmount"
			>x</button>
		</div>
		<button
			type="button"
			class="btn btn-primary btn-sm"
			@click="onSave"
		>Save form
		</button>
		&nbsp;
		<button
			type="button"
			class="btn btn-danger btn-sm"
			@click="clearForm"
			>Clear Form</button>
	</div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
	name: 'AddCostsForm',
	data() {
		return {
			title: 'Costs Form',
			date: '',
			amount: '',
			category: null,
		}
	},
	methods: {
      ...mapActions([
         'fetchCategoryList'
      ]),
		onSave() {
			const { amount, category} = this;
			const infoStr = {
				date: this.date || this.getCurrentDate,
				amount,
				category,
			}
			this.$emit('addInfoStr', infoStr);
		},
		clearForm() {
			this.clearFormDate()
			this.clearFormCategory();
			this.clearFormAmount();
		},
		clearFormCategory() {
			this.category = null;
		},
		clearFormAmount() {
			this.amount = '';
		},
		clearFormDate() {
			this.date = '';
		},
	},
	computed: {
		getCurrentDate() {
			const today = new Date();
			const d = '0' + today.getDate();
			const m = '0' + (today.getMonth() + 1);
			const y = today.getFullYear();
			return `${d}.${m}.${y}`;
		},
      options(){
         return this.$store.getters.getCategories
      }
	},
   created() {
      this.fetchCategoryList();
   }
}
</script>
<style lang="scss">

</style>
