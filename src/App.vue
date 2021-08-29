<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
		<v-app-old></v-app-old>
		<div class="flex flex-end">
			<div   class="w500">
				<doughnut-chart></doughnut-chart>
			</div>
			<div  class="w500">
				<bar-chart></bar-chart>
			</div>
			<div  class="w500">
				<polararea-chart></polararea-chart>
			</div>
		</div>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import App_ from './App_.vue';
import DoughnutChart from './components/charts/DoughnutChart.vue';
import BarChart from './components/charts/BarChart.vue';
import PolarAreaChart from './components/charts/PolarAreaChart.vue';



export default {
	components: {
		'v-app-old': App_,
		'doughnut-chart': DoughnutChart,
		'bar-chart': BarChart,
		'polararea-chart': PolarAreaChart
	},
  name: 'App',

  data: () => ({
  }),
};
</script>
