export default {
   install(Vue) {

      if (this.installed) {
         return
      }
      this.installed = true;

      Vue.prototype.$log = {
         EventBus: new Vue(),
         editStr(name, settings) {
            this.EventBus.$emit('editStr', {
               name,
               ...settings
            });
         },
         delStr() {
            this.EventBus.$emit('delStr');
         },

      }
   }
}
