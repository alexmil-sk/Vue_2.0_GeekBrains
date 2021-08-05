<template>
	<div>
		<nav aria-label="Page navigation">
			<ul class="pagination pagination-sm justify-content-center">
				<li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
				<li class="page-item active"><a class="page-link  text-white" href="#">1</a></li>
				<li class="page-item"><a class="page-link" href="#">2</a></li>
				<li class="page-item"><a class="page-link" href="#">3</a></li>
				<li class="page-item"><a class="page-link" href="#">Next</a></li>
			</ul>
		</nav>
	</div>
</template>
<script>
export default {
	name: 'Pagination',
	data: () => ({
			title: 'Pagination Title'

	}),
	
}
</script>
<style lang="scss">
	
</style>