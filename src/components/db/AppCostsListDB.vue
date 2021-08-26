<template>
	<div>
		<div class="mtop-20">
			<div class="card1 flex just-spB alineItm-center" v-for="cost in costs" :key="cost.key">
				<h3 class="mtop-0">
					{{ cost.id }} - {{ cost.date }} - {{ cost.category }} -
					{{ cost.amount }} &#8381;
				</h3>
				<button
					class="btn btn-danger"
					@click="$emit('removeCost', cost.key)"
				>x
				</button>
			</div>
		</div>
		<div >
			<h6 class="card mtop-20" >
				После удаления данных из таблицы необходимо обновить БД, нажав на кнопку "Обновить БД"
			</h6>
			<button class="btn btn-warning mbot-25 mtop-20" @click="$emit('getCostsList')">
				Обновить БД
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
