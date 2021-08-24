<template>
   <div class="relative">
         <button
            class="btn"
            @click="modalEditStr=!modalEditStr"
         >...
         </button>
         <div
            class="modal2"
            v-if="modalEditStr"
         >
            <button
               class="btn btn-warning btn-sm"
               @click="delPluginStr"
            >Del
            </button>
            <button
               class="btn btn-success btn-sm"
               @click="editPluginStr"
            >{{ edit }}
            </button>

         </div>
         <app-db
            class="modal3 modal-backdrop2"
            v-if="showDb"
         >
         </app-db>
         <footer>
            <button
               class="btn btn-danger"
               @click="closeModal"
            >Close
            </button>
         </footer>
   </div>
</template>

<script>
import AppDb from '../db/AppDb.vue';

export default {
   data() {
      return {
         modalEditStr: false,
         showDb: false,
         edit: 'Edit'
      }
   },
   components: {
      'app-db': AppDb,
   },
   methods: {
      editPluginStr() {
         this.showDb = !this.showDb;
         if (this.edit == 'Edit') {
            this.edit = 'Close';
         } else {
            this.edit = 'Edit';
         }
      //   this.$log.editStr();
      },
      delPluginStr() {
         //this.$log.delStr();
         console.log('delPluginStr');

         //this.$log.delStr();
      }
   },
   mounted() {
      this.$log.EventBus.$on('delStr', this.delPluginStr);
   },
   beforeDestroy() {
      this.$log.EventBus.$off('delStr', this.delPluginStr);

   }
}



</script>
