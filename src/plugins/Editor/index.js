export default ({
   install(Vue) {

      if (this.installed) {
         return
      }

      this.installed = true;

      Vue.prototype.$editor = {
         EventBus: new Vue(),
         edit(editBtn, delBtn) {
            this.EventBus.$emit('show', {
               editBtn,
               delBtn
            });
         },
         del() {
            this.EventBus.$emit('hide');
         },
      };
   },
});
