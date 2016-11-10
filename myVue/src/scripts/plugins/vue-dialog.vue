<template>
  <div class="m-dialog" v-if="isShow">
    <div class="yo-dialog yo-dialog-a">
      <header class="hd">
        <h2 class="title">标题</h2>
      </header>
      <div class="bd">
        <p>有title的dialog</p>
      </div>
      <footer class="ft">
        <button class="yo-btn yo-btn-dialog yo-btn-l" @click="close">取消</button>
        <button class="yo-btn yo-btn-dialog yo-btn-l" @click="close">确定</button>
      </footer>
    </div>
    <div class="yo-mask"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: true
      }
    },

    methods: {
      close(){
        this.isShow = false;
      }
    }
  }
</script>
