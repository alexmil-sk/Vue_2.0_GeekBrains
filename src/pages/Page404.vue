<template>
   <div>
      <h1>{{ title }}</h1>
      <h3 class="text-white">{{ text }}</h3>
   </div>
</template>
<script>
export default {
   name: 'Page404',
   data() {
      return {
         title: 'Page 404 Title',
         text: 'Страница не существует',
      }
   },

}
</script>
