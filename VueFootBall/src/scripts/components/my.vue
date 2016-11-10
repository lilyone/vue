<template>
  <div class="m-my">
    <vue-dialog></vue-dialog>
  </div>
</template>

<script>
  import { changeIndex } from "../vuex/actions";

  import VueDialog from "../plugins/dialog";
  Vue.use(VueDialog);

  let dialog = new VueDialog();

  export default {
    vuex: {
      actions: {
        change: changeIndex
      }
    },
    data(){
      return {}
    },
    ready() {
      this.change(3);
    }
  }
</script>
