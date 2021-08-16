<template>
	<div class="costs__table">
		<table class="table">
         <thead>
            <tr>
               <th scope="col">#</th>
               <th scope="col">Date</th>
               <th scope="col">Category</th>
               <th scope="col">Amount</th>
            </tr>
         </thead>
         <tbody
            v-if="costsList.length"
         >
            <tr v-for="(item, idx) in costsList" :key="idx">
               <th scope="row">{{ idx+ 1 }}</th>
               <td>{{ item.date }}</td>
               <td>{{ toUpperCase (item.category) }}</td>
               <td>{{ item.amount }} &#8381;</td>
               <td>
                  <button
                     class="btn btn-danger btn-sm"
                     @click="removeBtn(idx)"
                  >x
                  </button>
               </td>
            </tr>
         </tbody>
         <tbody
            v-if="costs.length"
         >
            <tr v-for="cost in costs" :key="cost.key">
               <th scope="row">{{ cost.id }}</th>
               <td>{{ cost.date }}</td>
               <td>{{ toUpperCase (cost.category) }}</td>
               <td>{{ cost.amount }} &#8381;</td>
               <td>
                  <button
                     class="btn btn-danger btn-sm"
                     @click="removeCostLine(cost.key)"
                  >x
                  </button>
               </td>
            </tr>
         </tbody>
         <tbody v-else>
            <tr>
               <td class="text-red" colspan="4">Затраты отсутствуют! Надо что-нибудь купить!</td>
            </tr>
         </tbody>
      </table>
      <app-costs-list
         :costs="costs"
         @getCostsList="loadCostsList"
      >
      </app-costs-list>
	</div>
</template>
<script>
import AppCostsList from './db/AppCostsList';
import axios from 'axios';


export default {
	name: 'CostsTable',
	props: {
		costsList: {
			type: Array,
			default: () => [],
			require: true
		},
      costsListDel: {
			type: Array,
			default: () => [],
			require: true
		},
	},
   emits: ['removeCost'],

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
	components: {
      'app-costs-list': AppCostsList,

   },
	methods: {
		removeBtn(idx) {
			this.costsListDel.splice(idx, 1);
		},
		toUpperCase(item) {
			return item.toUpperCase();
		},
      //,__Добавляем в БД
		async createCost() {
         const response = await fetch('https://vuejs-2-geekbrains-hw5-default-rtdb.asia-southeast1.firebasedatabase.app/costs.json', {
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
			await response.json();
			this.costs.push({
				id: this.idNum,
				date: this.date,
				category: this.category,
				amount: this.amount
			});
         //this.costs.sort((prev, next) => prev.id - next.id);//,__Сортировка БД
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
					const { data } = await axios.get('https://vuejs-2-geekbrains-hw5-default-rtdb.asia-southeast1.firebasedatabase.app/costs.json');
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
                  this.costs.sort((prev, next) => prev.id - next.id);
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
				await axios.delete(`https://vuejs-2-geekbrains-hw5-default-rtdb.asia-southeast1.firebasedatabase.app/costs/${costKey}.json`);
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
	computed: {},
   mounted() {
		this.loadCostsList()
	}
};
</script>
