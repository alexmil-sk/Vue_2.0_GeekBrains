<template>
	<div >
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
   props: {
      length: Number, //,__Количество всех элементов
      n: {//,__Количество отображаемых элементов
         type: Number,
         default: 5,
      },
      current: Number, //,__Текущая страница
   },
	data: () => ({
			title: 'Pagination Title'
	}),
   methods: {
      onClick(p) {
         if (p < 1 || p > this.amountPages) {
            return
         }
         this.$emit('changePage', p);
      }
   },
   computed: {
      amountPages() {
         return Math.ceil(this.length / this.n);
      }
   },
}
</script>
<style lang="scss">
.pagination-wrapper {
   display: flex;
   justify-content: space-between;
   border: 1px solid #000;
}
</style>
