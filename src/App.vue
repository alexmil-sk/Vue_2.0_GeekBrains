<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<HelloWorld
			msg="Welcome to Your Vue.js App"
			:is-show= "isShow"
		/>
		<v-calculator msg="Calculator (Vue.JS 2.0)" />
		<Calculator msg="Calculator 2 (Vue.JS 2.0)" />>

	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Calculator from './components/v-calculator.vue';

export default {
	name: 'App',
	components: {
		HelloWorld,
		'v-calculator': Calculator,
		//'Calculator': Calculator
		//Calculator: Calculator
		Calculator
	}
}
</script>
