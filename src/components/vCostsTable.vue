<template>
	<v-container>
		<v-row>
			<v-btn
			>Add New Cost<v-icon color="blue darken-2">mdi-format-align-justify</v-icon>
			</v-btn>
		</v-row>
		<v-row>
			<v-col cols="9">
				<v-simple-table class="warning">
					<v-row>
						<v-col scope="col" cols="1">#</v-col>
						<v-col scope="col" cols="3">Date</v-col>
						<v-col scope="col" cols="3">Category</v-col>
						<v-col scope="col" cols="3">Amount</v-col>
						<v-col scope="col" cols="1"></v-col>
						<v-col scope="col" cols="1"></v-col>
					</v-row>
					<tbody
						v-if="costsList.length"
					>
						<v-row v-for="(item, idx) in costsList" :key="idx">
							<v-col scope="row">{{ idx+ 1 }}</v-col>
							<v-col>{{ item.date }}</v-col>
							<v-col>{{ toUpperCase (item.category) }}</v-col>
							<v-col>{{ item.amount }} &#8381;</v-col>
							<v-col>
								<button
									class="btn btn-danger btn-sm"
									@click="removeBtn(idx)"
								>x
								</button>
							</v-col>
							<v-col>
								<span class="relative" @click="onContextMenuClick($event, item)">...</span>
							</v-col>
						</v-row>
					</tbody>
				</v-simple-table>
			</v-col>
			<v-col cols="3" class="info mt-3">
				CHAT
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<v-simple-table class="success">
					<tbody
						v-if="costs.length"
					>
						<v-row>
							<v-col scope="col" cols="1">#</v-col>
							<v-col scope="col" cols="3">Date</v-col>
							<v-col scope="col" cols="3">Category</v-col>
							<v-col scope="col" cols="3">Amount</v-col>
							<v-col scope="col" cols="1"></v-col>
						</v-row>
						<v-row v-for="cost in costs" :key="cost.key">
							<v-col scope="row">{{ cost.id }}</v-col>
							<v-col>{{ cost.date }}</v-col>
							<v-col>{{ cost.category }}</v-col>
							<v-col>{{ cost.amount }} &#8381;</v-col>
							<v-col>
								<button
									class="btn btn-danger btn-sm"
									@click="removeCostLine(cost.key)"
								>x
								</button>
							</v-col>
						</v-row>
					</tbody>
					<tbody v-else>
						<tr>
							<td class="text-red" colspan="4">Затраты отсутствуют! Надо что-нибудь купить!</td>
						</tr>
					</tbody>
				</v-simple-table>
				<template>
					<v-data-table
						:items="costs"
						:items-per-page="5"
						class="elevation-1"
					></v-data-table>
				</template>
				<app-costs-list
					:costs="costs"
					@getCostsList="loadCostsList"
				>
				</app-costs-list>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import AppCostsList from './db/AppCostsList';
import axios from 'axios';
//import ModalContextMenu from './modal/ModalContextMenu.vue';


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
      //'modal-context-menu': ModalContextMenu

   },
	methods: {
      onContextMenuClick(event, item) {
         console.log(event);
         const items = [
            {
               text: 'Редактировать',
               action: () => {
                  this.$modal.show('', {editedItem: this.item})
                  console.log('Редактировать', item);
               }
            },
            {
               text: 'Удалить',
               action: () => {
                  this.removeBtn();
                  this.$modal.hide(this.item);
                  console.log('Удалить', item);
               }
            }
         ];
         this.$context.show({event, items});
      },
		removeBtn(idx) {
			this.costsListDel.splice(idx, 1);
		},
		toUpperCase(item) {
			return item.toUpperCase();
		},
      //delPluginStr() {
      //   this.costsListDel.splice(this.idx, 1);
      //},
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
				console.log('costPositionDel');
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

		},


	},
	computed: {},
   mounted() {

	},
   beforeDestroy() {

   }
};
</script>
