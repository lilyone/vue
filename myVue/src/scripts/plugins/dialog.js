let VueDialog = function(){};

import dialog from "./vue-dialog.vue";

VueDialog.install = function(){
  Vue.component('vue-dialog', dialog);
};

VueDialog.prototype.show = function() {
  console.log(99);
};

export default VueDialog;
