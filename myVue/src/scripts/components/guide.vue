<template>
  <div class="m-guide">
    <div class="swiper-container" id="guide-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="img in imgList">
          <img v-if="$index==3" v-link="{path: '/index'}" :src="img" />
          <img v-else :src="img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgList: [
          "/images/slide1.png",
          "/images/slide2.png",
          "/images/slide3.png",
          "/images/slide4.png"
        ]
      }
    },

    ready() {
      new Swiper('#guide-swiper');
    }
  }
</script>
