<template>
  <div class="main-container">
      <header>
          <ul>
              <li class="iconfont">&#xe610;</li>
              <li>
                  <span>彭展</span>
                  <span class="active">刘东</span>
              </li>
              <li class="iconfont">&#xe689;</li>
          </ul>
      </header>
      <nav>
          <ul id="swiper-nav">
              <li v-for="nav in indexNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''">{{nav}}</li>
          </ul>
      </nav>
      <section>
        <div class="swiper-container" id="index-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div v-loading="isLoading"></div>
              <section id="index-scroll" v-show="!isLoading">
                <ul>
                  <li v-for="l in list" v-link="{name: 'detail', params: {id: l.id}}"><span><i><img v-bind:src="l.img" alt=""></i><b>{{l.title}}</b></span></li>
                </ul>
              </section>
            </div>
            <div class="swiper-slide" id="lifescroll">
              <section id="waterfall"></section>
            </div>
            <div class="swiper-slide">
              <section id="css3waterfall">
                <div class="cont">
                  <div class="pic">
                    <div v-for="item in beautylist">
                      <span>
                        <img v-bind:src="item.img" />
                        <i v-html="item.title"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
  import commonUtil from "../utils/commonUtil";
  import waterfall from "../utils/waterfall.util.js";
  import { changeIndex } from "../vuex/actions";

  import loadingss from "../libs/vue-loading";

  var mySwiper = null;

  export default {
    directives: { loading: loadingss },
    vuex: {
      actions: {
        change: changeIndex
      }
    },
    data() {
      return {
        list: [],
        curIndex: 0,
        indexNav: ['足球现场', '足球生活', '足球小姐'],
        beautylist: [],
        isLoading: true
      }
    },

    ready: function() {
      var that = this;
      this.$http.get('/rest/list')
        .then((res) => {
          this.list = res.data.data;
          Vue.nextTick(function(){
            that.isLoading = false;
            commonUtil.isAllLoaded('#index-scroll', function(){
              new IScroll('#index-scroll', {
                click: true
              });
            });
          });

          mySwiper = new Swiper("#index-swiper", {
            onSlideChangeStart: function(){
              that.curIndex = mySwiper.activeIndex;
            },
            onSlideChangeEnd: function(){
              if(mySwiper.activeIndex === 1){
                var lifeScroll = new IScroll('#lifescroll', {
                  click: true
                });
                waterfall(lifeScroll);
              }
            }
          });
        });

        // css3waterfall 数据拉取
        this.$http.get('/rest/listcss3waterfall')
          .then((res) => {
              this.beautylist = res.data.data;
              Vue.nextTick(function() {
                  commonUtil.isAllLoaded('#css3waterfall', function() {
                    var myScroll = new IScroll('#css3waterfall');
                  });
              });
          });

        this.change(0);
    },

    methods: {
      switchSwiper(index) {
        this.curIndex = index;
        mySwiper.slideTo(index);
      }
    }
  }
</script>
