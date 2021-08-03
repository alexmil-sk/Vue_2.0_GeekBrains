<template>
	<div>
		<hr>
		<button
			@click="onClick"
		>Clicked {{ counter }} times
		</button>
		<hr>
	</div>
</template>
<script>
export default {
	name: 'CounterButton',
	data() {
		return {
			counter: 0,
		}
	},
	methods: {
		onClick() {
			this.counter++;
		},
		mouseOver() {
			console.log('mouseOver');
			//debugger;
		}
	},
	beforeCreate() {
		console.log('beforeCreate');
	},
	created() {
		console.log('created');
	},
	beforeMount() {

	},
	mounted() {
		console.log(this.$el);
		const btn = this.$el.querySelector('button');
		if (btn) {
			btn.addEventListener('mouseover', this.mouseOver)
		}
	},
	updated() {
		console.log('updated');
	}

};
</script>
<style lang="scss">
</style>