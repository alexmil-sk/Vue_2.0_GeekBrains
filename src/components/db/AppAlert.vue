<template>
	<div class="alert danger" v-if="alert" color="yellow">
		<h3>{{ alert.title }}</h3>
		<p>{{ alert.text }}</p>
		<v-btn
			color="error"
			@click="$emit('closeEr')"
		>Закрыть
		</v-btn>
	</div>
</template>
<script>
export default {
	props: ['alert'],
	emits: ['closeEr'],
}
</script>

