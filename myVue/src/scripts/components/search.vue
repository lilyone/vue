<template>
  <div class="m-searche"></div>
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
      this.change(1);
    }
  }
</script>
