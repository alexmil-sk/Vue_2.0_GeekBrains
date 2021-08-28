<template>
   <div>
      <div class="card ">
         <h2>new Payment</h2>
         <div class="form-control card">
            <label for="id">Id</label>
            <input
               class="form-control"
               type="number"
               placeholder="Введите номер затрат"
               id="id"
               v-model.trim="idTempl"
            >
         </div>
         <div class="form-control card">
            <label for="date">Date</label>
            <input
               class="form-control"
               type="text"
               placeholder="Текущая дата"
               id="date"
               v-model="dateTempl"
               :disabled="this.dateTempl == ''"
            >
         </div>
         <div class="form-control card">
            <label for="category">Category</label>
            <input
               class="form-control"
               type="text"
               placeholder="Введите категорию затрат"
               id="category"
               v-model="categoryTempl"
            >
         </div>
         <div class="form-control card">
            <label for="amount">Amount</label>
            <input
               class="form-control"
               type="number"
               placeholder="Введите сумму затрат"
               id="amount"
               v-model="amountTempl"
            >
         </div>
         <div class="card">
            <button
               class="btn btn-success btn-sm mb-2"
               type="button"
               @click="addTemplInfo"
            >Заполнить затраты
            </button>
            <router-link to="/appdb">
               <button
                  class="btn btn-primary btn-sm mb-2"
                  @click="createCost"
               >Занести в БД</button>
            </router-link>
            <button
               class="btn btn-danger btn-sm"
               type="button"
               @click="clearTemplateForm"
               :disabled="this.categoryTempl == '' && this.amountTempl == '' && this.idTempl == ''"
            >Очистить форму</button>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'TamplateForm',
   data() {
      return {
         titleTempl: 'new Payment',
         idTempl: '',
         dateTempl: '',
         categoryTempl: '',
         amountTempl: '',
         costs: [],
      }
   },

   emits: ['addInfoStrTempl'],
   methods: {
      addTemplInfo() {
         const idTemplNew = this.idTempl;
         const categoryTemplNew = this.$route.params.Food;
         const amountTemplNew = this.$route.query.value;
         this.idTempl = idTemplNew;
         this.dateTempl = this.getCurrentDate;
         this.categoryTempl = categoryTemplNew;
         this.amountTempl = amountTemplNew;

         console.log(idTemplNew, this.dateTempl, categoryTemplNew, amountTemplNew);
      },
      clearTemplateForm() {
            this.clearFormId();
            this.clearFormCategory();
            this.clearFormAmount();
      },
      clearFormId() {
			this.idTempl = '';
		},
      clearFormAmount() {
			this.amountTempl = '';
		},
      clearFormCategory() {
			this.categoryTempl = '';
		},

      //,===================================
      async createCost() {
         const response = await fetch('https://vuejs-2-geekbrains-hw5-default-rtdb.asia-southeast1.firebasedatabase.app/costs.json', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					idNum: this.idTempl,
					date: this.dateTempl,
					category: this.categoryTempl,
					amount: this.amountTempl
				})
			})
			await response.json();
			this.costs.push({
				id: this.idNum,
				date: this.date,
				category: this.category,
				amount: this.amount
			});
			this.idTempl = '';
			this.dateTempl = '';
			this.categoryTempl = '';
			this.amountTempl = '';
		},
      //,===============================================
   },
   computed: {
    getCurrentDate() {
			const today = new Date();
         var d = today.getDate();
         var m = (today.getMonth() + 1);
         var y = today.getFullYear();

         if (d < 10) {
            d = '0' + d;
         } else if (m < 10) {
            m = '0' + m;
         }
			return `${d}.${m}.${y}`;
		},
  },
}
</script>
