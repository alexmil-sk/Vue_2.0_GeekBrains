<template>
	<div>
		<h1>Страница диаграмм</h1>
		<v-btn
			class="ma-2"
			color="orange"
			@click="showCharts = !showCharts"
		>Показать диаграммы
		</v-btn>
		<div class="flex flex-end"  v-if="showCharts">
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
		<router-view></router-view>
	</div>
</template>
<script>
import DoughnutChart from '../components/charts/DoughnutChart.vue';
import BarChart from '../components/charts/BarChart.vue';
import PolarAreaChart from '../components/charts/PolarAreaChart.vue';

export default {
	name: 'TheCharts',
	components: {
		'doughnut-chart': DoughnutChart,
		'bar-chart': BarChart,
		'polararea-chart': PolarAreaChart
	},
	data() {
		return {
			showCharts: false
		}
	},
}
</script>
	
