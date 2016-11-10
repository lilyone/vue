<template>
  <div class="m-my">
    我的
  </div>
</template>

<script>
  import { changeIndex } from "../vuex/actions";

  export default {
    vuex: {
      actions: {
        change: changeIndex
      }
    },
    ready() {
      this.change(3);
    }
  }
</script>
