<template>
  <ul class="goods_wrapper clearfix">
    <li @click="clickItem(item)" v-for="(item,index) in data" :key="index" class="goods_item" :class="{'last-child' : (index+1) % 3 ===0}">
      <a href="javascript:">
        <img :src="item.goodsUrl" alt="" class="goods_img">
        <div class="goods_info">{{item.goodsInfo}}</div>
        <div class="goods_price">
          ￥{{item.goods_price}}
          <!-- 存在旧价格就显示-->
          &nbsp;<span class="old_price" v-if="item.old_price">￥{{item.old_price}}</span>
        </div>
      </a>
      <div class="discount" v-if="item.discount">{{item.discount}}</div>
      <div class="sold-out" v-if="item.isSoldOut ==='yes'">
        <div class="inner">已售完</div>
      </div>
    </li>
  </ul>
</template>

<script type="text/javascript">
export default {
  data () {
    return {

    };
  },
  props: {
    data: {
      // 数据类型
      type: Array,
      default () {
        return [];
      }
    }
  },
  methods: {
    clickItem (item) {
      // 触发一个自定事件，将每一步手机对应的信息带出去到父组件中,因为这个组件用在不同的地方有着不同的功能，
      // 用在商品商品列表点击后跳转至详情页，用在别的地方可能会跳转到别的页面，所以这里跳转路由交由其父组件去执行
      this.$emit('clickItem', item); // 将当前商品的信息带出去
    }
  },
  components: {

  }
};
</script>

<style lang="less" scoped>
  .goods_wrapper{
    width: 100%;
    background-color: #F9F9F9;
    border-bottom: 1px solid #DFDFDF;

    .goods_item{
      width: 449px;
      height: 540px;
      float: left;
      border-right: 1px solid #dfdfdf;
      border-bottom: 1px solid #dfdfdf;
      background-color: #f9f9f9;
      text-align: center;
      position: relative;
      cursor: pointer;
      transition: all .3s ;

      .sold-out{
        width: 449px;
        height: 540px;
        background-color: rgba(255,255,255,.6);
        position: absolute;
        top: 0;
        left: 0;

        .inner{
          background-color: #CCCCCC;
          width: 60px;
          height: 25px;
          line-height: 25px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          font-size: 15px;
          color: #ffffff;
        }
      }

      &.last-child{
        border-right: none;
      }

      &:hover{
        background-color: #ffffff;
      }

      .goods_img{
        margin-top: 43px;
        /*border: 1px solid red;*/
      }

      .goods_info{
        margin-top: 20px;
        font-size: 14px;
        color: #101920;
      }

      .goods_price{
        font-size: 14px;
        color: #101920;
        margin-top: 5px;

        .old_price{
          color: #828282;
          text-decoration: line-through;
        }
      }

      .discount{
        width: 42px;
        height: 24px;
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 12px;
        color: #fff;
        background-color: #eb0028;
        text-align: center;
        line-height: 24px;
      }
    }
  }
</style>
