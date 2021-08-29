<template>
   <div>
      <div class="card text-danger">
         <h1 class="text-primary">{{ title }}</h1>
      </div>
      <transition name="fade">
         <add-costs-modal
            :settings="settings"
            v-if="showFormModal"
            @closeModal='onHide'
         ></add-costs-modal>
      </transition>
      <button
         type="button"
         class="btn btn-warning btn-sm"
         @click="showAuthModalFn"
      >ADD AUTH`s Form
      </button>
   </div>
</template>
<script>
import AddCostsModal from '../components/modal/AddCostsModal';


export default {
   name: 'Registration',
   data() {
      return {
         title: 'Страница регистрации',
         showFormModal: false,
         settings: {
            compName: 'addAuth'
         },
      }
   },
    components: {
      //'add-auth-modal': () => import('../components/modal/AddAuthModal'),
      'add-costs-modal': AddCostsModal,

      },
   methods: {
      showAuthModalFn() {
         this.settings.compName = 'addAuth';
         this.showFormModal = true;
         //this.$modal.show('theauth', {header: "Auth Form"});
      },
      onHide() {
         this.showFormModal = false;
         this.settings = {};
      }
   },
   mounted() {
      this.$modal.EventBus.$on('show', this.showFormModalFn);
      this.$modal.EventBus.$on('hide', this.onHide);
   },
   beforeDestroy() {
      this.$modal.EventBus.$off('show', this.showFormModalFn);
      this.$modal.EventBus.$off('hide', this.onHide);
   }

}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
   transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
   opacity: 0;
}
</style>
