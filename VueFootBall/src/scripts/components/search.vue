<template>
  <div class="m-searche">{{curIndex}}</div>
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
    data(){
      return {}
    },
    ready() {
      this.change(1);
    }
  }
</script>
