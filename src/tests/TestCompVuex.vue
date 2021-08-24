<template>
	<div>
		<input v-model="propComp">
		<button
			class="btn btn-primary"
			@click="onSave"
		>Save
		</button>
	</div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
	name: "TestCompVuex",
	date() {
		return {
			propComp: '',
		};
	},
	methods: {
		...mapActions([
			'addData'
		]),
		onSave() {
			const { propComp } = this;
			this.addData(propComp);
		}
	}
}
</script>
