<template>
	<div class="card">
		<h1 class="text-red">{{ title }}</h1>
		<v-app-bar
			color="#B2FF59"
			
		>
			<ul class="mt-4">
				<v-btn class="mr-2" color="accent1 dark" elevation="12" large><router-link to="/">Главная</router-link></v-btn>
				<v-btn class="mr-2" color="accent" elevation="12" large><router-link to="/vappdb">База данных FireBase</router-link></v-btn>
				<v-btn class="mr-2" color="accent" elevation="12" large><router-link to="/vappdb/Food?value=200">Затраты кат. "FOOD" </router-link></v-btn>
				<v-btn class="mr-2" color="accent" elevation="12" large><router-link to="/vappdb/Transport?value=50">Затраты кат. "Transport" </router-link></v-btn>
				<v-btn class="mr-2" color="accent" elevation="12" large><router-link to="/vappdb/Entertainment?value=2000">Затраты кат. "Entertainment" </router-link></v-btn>
				<v-btn class="mr-2" color="accent" elevation="12" large><router-link to="/registration">Registration</router-link></v-btn>
				<v-btn class="mr-2" color="accent" elevation="12" large><router-link to="/vcalc">Калькулятор</router-link></v-btn>
				<v-btn class="mr-2" color="accent" elevation="12" large><router-link to="/page404">Page404</router-link></v-btn>
				<v-btn color="error" elevation="20" @click="goToPage404">Page404</v-btn>
			</ul>
		</v-app-bar>
	</div>
</template>
<script>
export default {
	name: 'Header',
	data() {
		return {
			dialog: true,
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
