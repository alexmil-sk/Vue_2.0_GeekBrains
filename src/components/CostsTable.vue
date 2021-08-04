<template>
	<div class="costs__table">
		<h1 >{{ title }}</h1>
		<div class="costs__list">
			<div class="costs__item" v-for="(item, idx) in costsList" :key="idx">
				<span>{{ idx + 1 }}). {{ item.date }} / {{ item.category }} / {{ item.amount }} &#8381;</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'CostsTable',
	props: {
		costsList: {
			type: Array,
			default: () => [],
			require: true
		}
	},
	data() {
		return {
			title: 'My personal costs'
		}
	},
	methods: {
		
	},
};
</script>
<style lang="scss">



</style>