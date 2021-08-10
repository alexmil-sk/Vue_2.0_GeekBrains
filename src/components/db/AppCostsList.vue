<template>
	<div>
		<div>
			<h6 class="card mtop-20" >
				После удаления данных из БД необходимо обновить таблицу, нажав на кнопку "Обновить данные в таблице"
			</h6>
			<button class="btn btn-warning mbot-25 mtop-20" @click="$emit('getCostsList')">
				Обновить данные в таблице
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
