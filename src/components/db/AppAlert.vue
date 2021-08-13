<template>
	<div class="alert" v-if="alert" :class="alert.class">
		<h3>{{ alert.title }}</h3>
		<p>{{ alert.text }}</p>
		<button
			class="btn btn-danger"
			:class="alert.type"
			@click="$emit('closeEr')"
		>Закрыть
		</button>
	</div>
</template>
<script>
export default {
	props: ['alert'],
	emits: ['closeEr'],
}
</script>
<style>

</style>
