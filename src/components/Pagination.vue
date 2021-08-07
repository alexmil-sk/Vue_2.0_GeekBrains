<template>
	<div>
      <div class="pagination-wrapper">
         <button
            class="btn btn-sm btn-warning me-2"
            @click="onClick(currentPage--)"
         >Previous
         </button>
         <div class="btn-group me-1" role="group" aria-label="First group">
            <button
               type="button"
               class="pages btn btn-outline-secondary me-1"
               v-for="page in amountPages"
               :key="page"
               @click="onClick(page)"
            >{{ page }}</button>
         </div>
         <button
            class="btn btn-sm btn-warning me-1"
            @click="onClick(currentPage++)"
         >Next
         </button>
      </div>
	</div>
</template>
<script>
export default {
	name: 'Pagination',
	data: () => ({
			title: 'Pagination Title',

	}),
   props: {
      length: Number, //,__Количество строк в таблице
      nStr: {//,__Количество строк на странице
         type: Number,
         default: 6,
      },
      currentPage: Number, //,__Текущая страница
   },
   methods: {
      onClick(p) {
         if (p < 1 || p > this.amountPages) {
            return;
         }
         this.$emit('paginate', p);
      },
   },
   computed: {
      amountPages() {
         return Math.ceil(this.length / this.nStr);
      }
   }

}
</script>
