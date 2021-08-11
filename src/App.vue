<template>
	<div id="app">
      <div class="header">
			<v-header></v-header>
		</div>
      <div class="page-links">
         <router-link to='/dashboard'>Dashboard |</router-link>
         <router-link to='/about'> About |</router-link>
         <router-link to='/page404'> Page404 |</router-link>
         <router-link to='/pagelogin'> Authentification</router-link>
         <button
            class="btn btn-sm btn-danger ml-10"
            @click="goToPage('Page404')"
         >404
         </button>
      </div>
      <div class="content">
         <router-view></router-view>
      </div>
	</div>
</template>

<script>
import Header from './components/Header.vue';

export default {
	name: 'App',
	data() {
		return {

		}
	},
   components: {
		'v-header': Header,
   },
   methods: {
      goToPage(page) {
         this.$router.push({
            //name: `Page${page}`,
            name: page,
         })
      },
   }

}
</script>
