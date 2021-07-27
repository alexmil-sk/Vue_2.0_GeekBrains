<template>
	<div>
		<h2>{{ msg }}</h2>
		<h4>{{ message }}</h4>
	</div>
</template>
<script>
export default {
	name: 'Calculator',
	data: () => ({
		message: 'Заголовок по умолчанию'
	}),
	props: {
		msg: String,
	}
}
</script>
