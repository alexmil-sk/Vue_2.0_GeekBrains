<template>
	<div class="costs__form bg-white card">
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
				:disabled="this.date=== ''"
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
				class="btn btn-warning btn-sm"
				@click="delCategories"
            :disabled="!this.category"
			>DelAll
         </button>
         <button
				class="btn btn-danger btn-sm"
				@click="clearFormCategory"
            :disabled="!this.category"

			>x
         </button>
      </div>
      <!-- //, Вставка новой категории -->
      <div class="input-group input-group-sm mb-3">
			<button
				class="btn btn-success btn-sm"
				@click="addNewCategory(addCat)"
			>addCat +
         </button>
			<input
				type="text"
				class="form-control"
				aria-label="Sizing example input"
				aria-describedby="inputGroup-sizing-sm"
				v-model="addCat"
				placeholder="Добавить категорию"
			/>
			<button
				class="btn btn-danger btn-sm"
				@click="clearFormAddCategory"
            :disabled="!this.addCat"
			>x</button>
		</div>
      <!-- //, Вставка новой категории -->
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
				:disabled="this.amount== 0"
			>x</button>
		</div>
		<button
			type="button"
			class="btn btn-primary btn-sm"
			@click="onSave"
         :disabled="this.date == '' && this.category == null && this.amount == '' && this.addCat == ''"
		>Save form
		</button>
		&nbsp;
		<button
			type="button"
			class="btn btn-danger btn-sm"
			@click="clearForm"
         :disabled="this.date == '' && this.category == null && this.amount == '' && this.addCat == ''"
			>Clear Form</button>
	</div>
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
         return this.$store.getters.getCategories
      }
	},
   created() {
      this.fetchCategoryList();
   }
}
</script>
