<template>
  <div class="swiper" :style="swiperSize">
    <ul class="swiper-ul" :style="listWrapper" @transitionend="setDuration">
      <li class="swiper-list">
        <a href="javascript:">
          <img src="../assets/images/swiper1.png" alt="" :style="swiperSize">
        </a>
      </li>
      <li class="swiper-list">
        <a href="javascript:">
          <img src="../assets/images/swiper2.png" alt="" :style="swiperSize">
        </a>
      </li>
      <li class="swiper-list">
        <a href="javascript:">
          <img src="../assets/images/swiper3.png" alt="" :style="swiperSize">
        </a>
      </li>
      <!--补充第一张-->
      <li class="swiper-list">
        <a href="javascript:">
          <img src="../assets/images/swiper1.png" alt="" :style="swiperSize">
        </a>
      </li>
    </ul>
    <ul class="swiper-pagination">
      <li @click="changePic(0)" :class="{'active': 0 ===activeIndex}"></li>
      <li @click="changePic(1)" :class="{'active': 1 ===activeIndex}"></li>
      <li @click="changePic(2)" :class="{'active': 2 ===activeIndex}"></li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      activeIndex: 0,
      timer: null,
      haveDuration: true
    };
  },
  methods: {
    setTimer () {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.activeIndex === 3) {
          // 第四张过渡效果结束后直接进入到这里判断，并第一时间切换到第一张，而且是没有任何过渡效果和延时，看不出来的，实现了首尾无缝链接
          this.activeIndex = 0;
          this.haveDuration = false;
        } else {
          this.activeIndex++;
          this.haveDuration = true;
        }
      }, this.delay);
    },
    // 第三张图到第四张图的过渡效果完成后，直接进行判断并设置
    setDuration () {
      if (this.activeIndex === 3) {
        // 第四张过渡效果结束后直接进入到这里判断，并第一时间切换到第一张，而且是没有任何过渡效果和延时，看不出来的，实现了首尾无缝链接
        this.activeIndex = 0;
        this.haveDuration = false;
      }
    },
    changePic (id) {
      this.activeIndex = id;
      this.haveDuration = true;
      clearInterval(this.timer);
    }
  },
  computed: {
    swiperSize () {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`
      };
    },
    listWrapper () {
      return {
        width: `${this.width * 4}px`,
        height: `${this.height}px`,
        transform: `translateX(-${this.activeIndex * 1349}px)`,
        // 如果可以有过渡效果的过就设置成0.8s,如果没有就设置成'' , 让这整条样式不起作用   transitionDuration: ’‘ 这样就失效了
        transitionDuration: this.haveDuration ? '1s' : ''
      };
    }
  },
  props: {
    height: {
      type: Number,
      default: 469
    },
    width: {
      type: Number,
      default: 1349
    },
    delay: {
      type: Number,
      default: 5000
    }
  },
  mounted () {
    this.setTimer();
  },
  components: {

  }
};
</script>

<style lang="less" scoped>
  .swiper{
    position: relative;
    overflow: hidden;

    .swiper-ul{
      /* 字体设置成0，清除Ul内部子项之前的空隙 */
      font-size: 0;

      .swiper-list{
        display: inline-block;
      }
    }
  }
  .swiper-pagination{
    position: absolute;
    left: 43%;
    bottom: 20px;

    li{
      display: inline-block;
      width: 50px;
      height: 2px;
      margin: 0 5px;
      background-color: #333333;
      cursor: pointer;
      transition: all .8s;

      // 展示图片对应的切换按钮会有一个样式
      &.active{
        background-color: transparent;
        border: 1px solid #fff;
      }
    }
  }
</style>
