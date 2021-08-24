<template>
   <div>
      <nav class="navbar navbar-dark bg-primary" v-if="visible">

            <h3>GEEKBRAINS</h3>
            <ul class="navbar-menu">
               <li><a href="/dashboard">Главная</a></li>
               <li>
               <a custom to="/mail">Почта</a>
               </li>
               <li><a href="#">Выйти</a></li>
            </ul>
      </nav>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>
