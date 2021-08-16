<template>
    <div id="#app">
      <div class="card navbar navbar-dark bg-primary mt-5">
         <the-header></the-header>
         <button type="button" class="btn btn-warning btn-sm mb-3" @click="showMain = !showMain">SHOW / HIDE COSTS TABLE</button>
      </div>
      <add-costs-modal
         :settings="settings"
         v-if="showFormModal"
         @closeModal='showFormModal=!showFormModal'
      ></add-costs-modal>
      <div class="card navbar navbar-dark bg-primary mt-5">
         <div
            class="card flex just-spB"
            v-if="showMain"
         >
            <div class="card mb-5">
               <button type="button" class="btn btn-success btn-sm mb-3" @click="showFormModalFn">ADD TAMPLATE COSTS FORM</button>
               <button type="button" class="btn btn-success btn-sm" @click="showAuthModalFn">ADD AUTH`s Form</button>
            </div>
            <app-main></app-main>
         </div>
         <div class="card text-dark" v-else>
            <h4>Выберите пункт меню или откройте Сводную таблицу затрат ("COSTS TABLE")</h4>
         </div>
         <router-view></router-view>
      </div>
   </div>
</template>

<script>
import Header from './components/Header';
import AppMain from './AppMain.vue';
import AddCostsModal from './components/modal/AddCostsModal';

export default {
   name: 'App',
   data() {
      return {
         showFormModal: false,
         showMain: false,
         settings: {
            compName: 'addPayment'
         },
      }
   },
   components: {
      'the-header': Header,
      'app-main': AppMain,
      'add-costs-modal': AddCostsModal,
   },
   methods: {
      showFormModalFn() {
         this.settings.compName = 'addPayment';
         this.showFormModal = true
      },
      showAuthModalFn() {
         this.settings.compName = 'addAuth';
         this.showFormModal = true
      }
   },
   mounted() {
      this.$modal.EventBus.$on('show', this.showCostsModalFn);
      this.$modal.EventBus.$on('hide', this.hideCostsModalFn);
   },
   beforeDestroy() {
      this.$modal.EventBus.$off('show', this.showCostsModalFn);
      this.$modal.EventBus.$off('hide', this.hideCostsModalFn);
   }
}



</script>
