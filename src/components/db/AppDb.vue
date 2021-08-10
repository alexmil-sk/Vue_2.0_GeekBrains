<template>
	<div class="container">
		<app-alert
			:alert="alert"
			@closeEr="alert=null"
		>
		</app-alert>
		<form class="card" @submit.prevent="createCost">
			<h2>Мои затраты</h2>
			<div class="form-control">
				<label for="name">Введите порядковый номер затрат</label>
				<input type="number" id="idNum" v-model.trim="idNum"/>
			</div>
			<div class="form-control">
				<label for="name">Введите дату</label>
				<input type="text" id="date" v-model.trim="date"/>
			</div>
			<div class="form-control">
				<label for="name">Создать категорию</label>
				<input type="text" id="category" v-model.trim="category"/>
			</div>
			<div class="form-control">
				<label for="name">Укажите сумму затрат</label>
				<input type="number" id="amount" v-model.trim="amount"/>
			</div>
			<button
				class="btn primary"
				:disabled="idNum.length===0 || date.length===0 || category.length===0 || amount.length===0"
			>Создать статью затрат
			</button>
		</form>
		<app-loader v-if="loading"></app-loader>
		<app-costs-list
			v-else
			:costs="costs"
			@getCostsList="loadCostsList"
			@removeCost="removeCostLine"
		>
		</app-costs-list>
	</div>
</template>

<script>
import AppCostsList from './AppCostsList.vue';
import AppAlert from './AppAlert.vue';
import axios from 'axios';
import AppLoader from './AppLoader.vue';

export default {
	components: {
		'app-costs-list': AppCostsList,
		'app-alert': AppAlert,
		'app-loader': AppLoader,
	},
	data() {
		return {
			idNum: '',
			date: '',
			category: '',
			amount: '',
			costs: [],
			alert: null,
			loading: false,
		}
	},
	methods: {
		//,__Добавляем в БД
		async createCost() {
			const response = await fetch('https://vuejs-2-geekbrains-db-default-rtdb.asia-southeast1.firebasedatabase.app/costs.json', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					idNum: this.idNum,
					date: this.date,
					category: this.category,
					amount: this.amount
				})
			})
			const firebaseData = await response.json();
			this.costs.push({
				id: this.idNum,
				date: this.date,
				category: this.category,
				amount: this.amount
			});
			this.idNum = '';
			this.date = '';
			this.category = '';
			this.amount = '';
		},
		//,__Получаем из БД
		loadCostsList() {
			this.loading = true;
			setTimeout(async ()=> {
				try {
					const { data } = await axios.get('https://vuejs-2-geekbrains-db-default-rtdb.asia-southeast1.firebasedatabase.app/costs.json');
					if (!data) {
						throw new Error('Список затрат в БД пуст!');
					}
						this.costs = Object.keys(data).map(key => {
							return {
								//...data[key],
								key: key,
								id: data[key].idNum,
								date: data[key].date,
								category: data[key].category,
								amount: data[key].amount
							}
						});
						this.loading = false;
				} catch (e) {
					this.alert = {
						class: 'danger',
						title: 'Ошибка загрузки!',
						text: e.message,
					}
					this.loading = false;
					console.log(e.message);
				}
			},1500);

			
		},
		async removeCostLine(costKey) {
			try {
				const costPositionDel = this.costs.find(cost => cost.key === costKey);
				console.log(costPositionDel);
				await axios.delete(`https://vuejs-2-geekbrains-db-default-rtdb.asia-southeast1.firebasedatabase.app/costs/${costKey}.json`);
				this.costs = this.costs.filter(cost => cost.key !== costKey);
				this.alert = {
					class: 'primary',
					title: 'Выполнено!',
					text: `
						Затраты под номером (${costPositionDel.id}) от (${costPositionDel.date}) в категории (${costPositionDel.category}) на сумму (${costPositionDel.amount}) руб. из БД удалены успешно!`
				}
			} catch (e) {
				this.alert = {
					class: 'danger',
					title: 'Ошибка',
					text: 'Затраты не удалены! ' + e.message,
				}
			}
			
		}
	},
	mounted() {
		this.loadCostsList()
	}
};
</script>

<style>
</style>
