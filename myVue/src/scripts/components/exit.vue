<template>
  exit...
</template>
<script>
  import { changeIndex } from "../vuex/actions";
  import { getIndex } from '../vuex/getters';
  export default {
    vuex: {
      actions: {
        change: changeIndex
      },
      getters: {
        curIndex: getIndex
      }
    },
    ready() {
      this.change(4);
    }
  }
</script>
