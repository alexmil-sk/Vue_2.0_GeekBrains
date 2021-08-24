<template>
	<div id="app">
		<img alt="Vue logo" :src="srcLogo">
		<HelloWorld
			msg="Welcome to Your Vue.js App"
		/>
		<v-calculator class="v-calculator" msg="Vue.JS 2.0" />

	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Calculator from './components/Calculator.vue';
import logoVue from './assets/logo.png';

export default {
	name: 'App',
	data() {
		return {
			srcLogo: logoVue,
		}
	},
	components: {
		HelloWorld,
		'v-calculator': Calculator,
		//'Calculator': Calculator
		//Calculator: Calculator
		//Calculator
	}
}
</script>
