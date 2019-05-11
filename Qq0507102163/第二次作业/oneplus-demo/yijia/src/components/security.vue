<template>
  <div :class="{'security': type === 'normal', 'security-shopcart': type === 'shopcart'}">
    <div class="security-wrapper">
      <ul class="clearfix">
        <li class="security-item" v-for="(item, index) in securityData" :key="index">
          <div class="logo">
            <span :class="item.icon_class"></span>
          </div>
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios';
export default {
  data () {
    return {
      securityData: []
    };
  },
  // 组件内部接收外部的值，需要props
  props: {
    type: {
      type: String,
      default: 'normal'
    }
  },
  methods: {
    async getSecurityData () {
      const {data} = await axios.get('/api/security');
      this.securityData = data;
    }
  },
  mounted () {
    this.getSecurityData();
  },
  components: {

  }
};
</script>

<style lang="less" scoped>
  .security{
    width: 100%;
    height: 198px;
    background-color: #ffffff;
    padding-top: 47px;

    .security-wrapper{
      width: 1240px;
      margin: 0 auto;
      padding: 0 104px;

      .security-item {
        float: left;
        width: 115px;
        height: 115px;
        text-align: center;
        cursor: pointer;

        &:nth-of-type(1), &:nth-of-type(2), &:nth-of-type(3) {
          margin-right: 190px;
        }

        p{
          font-size: 16px;
          color: #6C7271;
          margin-top: 25px;
        }

        span{
          font-size: 62px;
        }
      }
    }
  }
  // 在购物车页面中
  .security-shopcart{
    width: 100%;
    background-color: #efefef;

    .security-wrapper{
      width: 1200px;
      height: 170px;
      margin: 0 auto;
      padding: 30px 104px 0 104px;
      background-color: #f9f9f9;

      .security-item {
        float: left;
        width: 115px;
        height: 115px;
        text-align: center;
        cursor: pointer;

        &:nth-of-type(1), &:nth-of-type(2), &:nth-of-type(3) {
          margin-right: 175px;
        }

        p{
          font-size: 16px;
          color: #6C7271;
          margin-top: 25px;
        }

        span{
          font-size: 62px;
        }
      }
    }
  }
</style>
