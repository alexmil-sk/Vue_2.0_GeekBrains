<template>
    <div id="#app">
      <div class="card navbar navbar-dark bg-primary mt-5">
         <the-header></the-header>
      </div>
      <div class="card navbar navbar-dark bg-primary mt-5">
         <router-view></router-view>
         <app-main></app-main>
      </div>

   </div>
</template>

<script>
import Header from './components/Header';
import AppMain from './AppMain.vue';

export default {
      name: 'App',
     components: {
      'the-header': Header,
      'app-main': AppMain,
     },
  provide() {
    return {
      emails: [
        {id: 1, theme: 'Купил себе PlayStation 5'},
        {id: 2, theme: 'Выучил Vue Router'},
        {id: 3, theme: 'Хочу изучить весь Vue'},
        {id: 4, theme: 'А следующий блок про Vuex!'},
        {id: 5, theme: 'А что там на счет Vue Hooks?'}
      ]
    }
  }
}
</script>

<style>
</style>
