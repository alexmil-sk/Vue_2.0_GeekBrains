<template>
   <div class="modal1 modal-backdrop1">
   <div class="card2">
         <div class="header card">
            <h1>Form: {{ settings.compName}}</h1>
         </div>
         <div class="content">
            <add-template-form v-if="settings.compName === 'addPayment'"></add-template-form>
            <the-auth v-if="settings.compName === 'addAuth'"></the-auth>
         </div>
         <div class="footer">
            <button
               class="btn btn-danger"
               @click="closeModal"
            >Close
            </button>
         </div>
      </div>
   </div>
</template>
<script>
import AddTemplateForm from '../../pages/AddTemplateForm.vue';
import TheAuth from '../../pages/TheAuth.vue';
export default {
   props: {
      settings: {
         type: Object,
      }
   },
   components: {
      'add-template-form': AddTemplateForm,
      'the-auth': TheAuth,
      },
   emits: ['closeModal'],
   methods: {
      closeModal() {
         this.$emit('closeModal');
      }
   },
   mounted() {
      this.$modal.EventBus.$on('hide', this.closeModal);
   }
}
</script>
