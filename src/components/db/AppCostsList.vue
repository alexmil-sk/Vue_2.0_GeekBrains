<template>
	<div>
		<div v-if="costs.length !== 0">
			<div class="card inline" v-for="cost in costs" :key="cost.key">
				<h3>
					{{ cost.id }} - {{ cost.date }} - {{ cost.category }} -
					{{ cost.amount }} &#8381;
				</h3>
				<button
					class="btn danger"
					@click="$emit('removeCost', cost.key)"
				>x
				</button>
			</div>
		</div>
		<div class="card" v-else>
			<h3>
				Чтобы загрузить список затрат нажмите на кнопку ниже
			</h3>
			<button class="btn warning" @click="$emit('getCostsList')">
				Загрузить
			</button>
		</div>
	</div>
</template>
<script>
export default {
	props: ['costs'],
	emits: ['getCostsList', 'removeCost'],
};
</script>
<style>
</style>