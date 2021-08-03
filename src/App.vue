<template>
	<div id="app">
		<img alt="Vue logo" :src="srcLogo">
		<HelloWorld
			msg="Welcome to Your Vue.js App"
		/>
		<v-calculator class="v-calculator" msg="Vue.JS 2.0"></v-calculator>
		<counter-button v-if="show"></counter-button>
		<counter-button v-show="show"></counter-button>
		<button @click="show=!show">Скрыть / Отобразить</button>

	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Calculator from './components/v-calculator.vue';
import logoVue from './assets/logo.png';
import CounterButton from './components/CounterButton.vue';

export default {
	name: 'App',
	data() {
		return {
			srcLogo: logoVue,
			show: true,
		}
	},
	components: {
		HelloWorld,
		'v-calculator': Calculator,
		//'Calculator': Calculator
		//Calculator: Calculator
		//Calculator
		'counter-button': CounterButton,
	},

}
</script>
