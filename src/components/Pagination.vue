<template>
	<div >
         <div class="btn-group me-2 mbot-25" role="group" aria-label="First group">
            <button
               type="button"
               class="btn btn-outline-light me-2"
               @click="onClick(currentPage--)"
            >Previous
            </button>
            <button
               type="button"
               class="pages btn btn-outline-light me-2"
               v-for="page in amountPages"
               :key="page"
               @click="onClick(page)"
            >{{ page }}
            </button>
            <button
               type="button"
               class="btn btn-outline-light"
               @click="onClick(currentPage++)"
            >Next
            </button>
         </div>
	</div>
</template>
<script>
export default {
	name: 'Pagination',
   props: {
      quantElems: Number, //,__Количество всех элементов
      nStr: {//,__Количество отображаемых элементов
         type: Number,
         default: 4,
      },
      currentPage: Number, //,__Текущая страница
   },
	data: () => ({
			title: 'Pagination Title'
	}),
   methods: {
      onClick(p) {
         if (p < 1 || p > this.amountPages) {
            return;
         }
         this.$emit('getPage', p);
      }
   },
   computed: {
      amountPages() {
         return Math.ceil(this.quantElems / this.nStr);
      }
   },
}
</script>
