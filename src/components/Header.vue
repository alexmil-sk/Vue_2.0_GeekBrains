<template>
	<div class="card">
		<h1 class="text-red">{{ title }}</h1>
      <ul class="navbar navbar-dark bg-primary card1">
         <li class="btn list-group-item"><router-link to="/">Сводная таблица</router-link></li>
         <li class="btn list-group-item"><router-link to="/appdb">База данных FireBase</router-link></li>
         <li class="btn list-group-item"><router-link to="/appdb/Food?value=200">Затраты кат. "FOOD" </router-link></li>
         <li class="btn list-group-item"><router-link to="/appdb/Transport?value=50">Затраты кат. "Transport" </router-link></li>
         <li class="btn list-group-item"><router-link to="/appdb/Entertainment?value=2000">Затраты кат. "Entertainment" </router-link></li>
         <li class="btn list-group-item"><router-link to="/page404">Page404</router-link></li>
         <li><button class="btn btn-danger" @click="goToPage404">Page404</button></li>
      </ul>
	</div>
</template>
<script>
export default {
	name: 'Header',
	data() {
		return {
			title: 'MY TOTAL COSTS CALCULATION'
		}
	},
   methods: {
      goToPage404 () {
         this.$router.push('/page404');
      }
   }

}
</script>
