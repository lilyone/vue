<template>
  <div class="m-detail">
    <header>
      <ul>
        <li class="iconfont" v-link="{path: '/index'}">&#xe679;</li>
        <li class="title">
          {{{article.title}}}
        </li>
        <li class="iconfont">&#xe684;</li>
      </ul>
    </header>
    <article id="content" v-scroll="artId">
      <div>
        {{{article.content}}}
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        artId: '',
        article: {}
      }
    },

    ready() {
      var that = this;
      this.$http.get('/rest/detail')
        .then((res) => {
          res.data.data.forEach(function({id, title, content}){
            if(that.$route.params.id == id) {
              that.article = {title, content};
              Vue.nextTick(() => {
                that.artId = '#content';
              });
              return;
            }
          });
        });
    }
  }
</script>
