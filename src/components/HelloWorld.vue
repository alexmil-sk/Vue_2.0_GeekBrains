<template>
  <div class="hello" v-if="isShow">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
   msg: String,
	isShow: {
		type:Boolean,
		required: false,
		default: true
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only --><style scoped lang="scss">

</style>
