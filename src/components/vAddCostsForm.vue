<template>
	<v-card >
		<div class="costs__form bg-white card">
			<h1>{{ title }}</h1>
			<div class="input-group input-group-sm mb-3">
				<v-text-field
					v-model="date"
					label="Date">
				</v-text-field>
				<v-btn
					color="error"
					small
					@click="clearFormDate"
					:disabled="this.date=== ''"
				>x</v-btn>
			</div>
			<div class="input-group input-group-sm mb-3">
				<v-select
					v-model="category"
					label="Category"
					:items="options"
				></v-select>
				<v-btn
					color="orange"
					small
					@click="delCategories"
					:disabled="!this.category"
				>DelAll
				</v-btn>
				<v-btn
					color="error"
					small
					@click="clearFormCategory"
					:disabled="!this.category"
				>x
				</v-btn>
			</div>
			<!-- //, Вставка новой категории -->
			<div class="input-group input-group-sm mb-3">
				<v-btn
					color="green"
					small
					@click="addNewCategory(addCat)"
					:disabled="!this.addCat"
				>addCat +
				</v-btn>
				<v-text-field
					v-model="addCat"
				></v-text-field>
				<v-btn
					color="error"
					small
					@click="clearFormAddCategory"
					:disabled="!this.addCat"
				>x</v-btn>
			</div>
			<!-- //, Вставка новой категории -->
			<div class="input-group input-group-sm mb-3">
				<v-text-field
					label="Amount"
					v-model.number="amount"
				></v-text-field>
				<v-btn
					color="error"
					small
					@click="clearFormAmount"
					:disabled="this.amount== 0"
				>x</v-btn>
			</div>
			<v-btn
				data-test="onSave"
				color="primary"
				@click="onSave"
				:disabled="this.date == '' && this.category == null && this.amount == '' && this.addCat == ''"
			>Save form
			</v-btn>
			&nbsp;
			<v-btn
				color="error"
				@click="clearForm"
				:disabled="this.date == '' && this.category == null && this.amount == '' && this.addCat == ''"
				>Clear Form</v-btn>
		</div>
	</v-card>
</template>
<script>
import { mapActions, mapMutations } from 'vuex';

export default {
	name: 'AddCostsForm',
	data() {
		return {
			title: 'Costs Form',
			date: '',
			amount: '',
         addCat: '',
			category: null,
		}
	},
	methods: {
      sendPayment() {
         console.log(' Значение a: ' + this.$route?.query?.value);
      },

      ...mapActions([
         'fetchCategoryList'
      ]),
		onSave() {
			const { id, amount, category} = this;
			const infoStr = {
            id,
				date: this.date || this.getCurrentDate,
				amount,
				category,
			}
			this.$emit('addInfoStr', infoStr);
		},
		clearForm() {
			this.clearFormDate();
			this.clearFormCategory();
			this.clearFormAmount();
         this.clearFormAddCategory();
		},
		clearFormCategory() {
			this.category = null;
		},

      //,_Вставка новой категории------------------
      ...mapMutations(['addNewCategory']),
      ...mapMutations(['delCategories']),
      clearFormAddCategory() {
			this.addCat = '';
		},
      //,_Вставка новой категории------------------

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
         return this.$store.getters.getCategories;
      }
	},
   created() {
      this.fetchCategoryList();
   }
}
</script>
