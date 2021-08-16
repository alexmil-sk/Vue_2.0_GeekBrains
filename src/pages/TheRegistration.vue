<template>
   <div>
      <div class="card text-danger">
         <h1 class="text-primary">{{ title }}</h1>
      </div>
      <add-costs-modal
         :settings="settings"
         v-if="showFormModal"
         @closeModal='showFormModal=!showFormModal'
      ></add-costs-modal>
      <button
         type="button"
         class="btn btn-warning btn-sm"
         @click="showAuthModalFn"
      >ADD AUTH`s Form
      </button>
   </div>
</template>
<script>
//import TheAuth from './TheAuth.vue';
import AddCostsModal from '../components/modal/AddCostsModal';


export default {
   name: 'Registration',
   data() {
      return {
         title: 'Страница регистрации',
         showFormModal: false,
         settings: {
            compName: 'addPayment'
         },
      }
   },
    components: {
     // 'the-auth': TheAuth,
     'add-costs-modal': AddCostsModal
      },
   methods: {
      showAuthModalFn() {
         this.settings.compName = 'addAuth';
         this.showFormModal = true;
      }
   }

}
</script>
