<template>
   <div>
      <div class="card ">
         <h2>{{ title }}</h2>
         <div class="form-control card">
            <label for="id">Login</label>
            <input
               class="form-control"
               type="text"
               placeholder="Введите ваш логин"
               id="Login"
            >
         </div>
         <div class="form-control card">
            <label for="password">Password</label>
            <input
               class="form-control"
               type="password"
               placeholder="Введите ваш пароль"
               id="password"
               :disabled="this.dateTempl == ''"
            >
         </div>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         title: 'Auth`s Form',
      }
   },

}
</script>
<style lang="">

</style>
