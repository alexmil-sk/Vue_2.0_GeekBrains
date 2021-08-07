<template>
	<div class="costs__table">
		<table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Date</th>
						<th scope="col">Category</th>
						<th scope="col">Amount &#8381;</th>
					</tr>
				</thead>
				<tbody v-if="costsList.length">
					<tr v-for="(item, idx) in costsList" :key="idx">
						<th scope="row">{{ idx + 1}}</th>
						<td>{{ item.date }}</td>
						<td>{{ toUpperCase (item.category) }}</td>
						<td>{{ item.amount }}</td>
						<td>
							<button
								class="btn btn-danger btn-sm"
								@click="removeBtn(idx)"
							>x
							</button>
						</td>
					</tr>
				</tbody>
			<tbody v-else>
				<tr>
					<td class="text-red" colspan="4">Затраты отсутствуют! Надо что-нибудь купить!</td>
				</tr>
			</tbody>
		</table>
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
		},
      costsListDel: {
			type: Array,
			default: () => [],
			require: true
		}
	},
	data() {
		return {
		}
	},
	components: {
	},
	methods: {
		removeBtn(idx) {
			this.costsListDel.splice(idx, 1);
		},
		toUpperCase(item) {
			return item.toUpperCase();
		}
	},
	computed: {},
};
</script>
<style lang="scss">



</style>
