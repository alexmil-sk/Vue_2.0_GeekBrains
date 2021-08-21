<template>
   <div v-if="showContext" class="modal4" :style="styles">
         <div
            v-for="(item, idx) in items"
            :key="idx" class="btn btn-dark mb-2"
            @click="onClick(item)"
         >
         {{ item.text }}
      </div>
      <!--
      <button
         class="btn btn-primary btn-sm mb-2"
         @click="onClose"
      >x
      </button>
      -->
   </div>
</template>
<script>

export default {
   name: 'ContextMenu',
   data() {
      return {
         showContext: false,
         items: [],
         xPos: 0,
         yPos: 0,
      }
   },
   methods: {
      onClick(item) {
         item.action();
         this.context.close();
      },
      onShown({items, caller}) {
         this.items = items;
         this.showContext = true;
         this.setPosition(caller);
      },
      onClose() {
         this.items = [];
         this.showContext = false;
         console.log('close');
      },
      setPosition(caller) {
         console.log('caller');
         const computedPosition = caller.getBoundingClientRect();
         this.xPos = computedPosition.left;
         this.yPos = computedPosition.top;
         console.log(computedPosition);

      }
   },
   computed: {
      styles() {
         return {
            top: `${this.yPos + 60}px`,
            left: `${this.xPos + 30}px`
         }
      }
   },
   mounted() {
      this.$context.EventBus.$on('show', this.onShown),
      this.$context.EventBus.$on('close', this.onClose)
   },
   beforeDestroy() {
      this.$context.EventBus.$off('show', this.onShown),
      this.$context.EventBus.$off('close', this.onClose)
   },

}
</script>

<style>

</style>
