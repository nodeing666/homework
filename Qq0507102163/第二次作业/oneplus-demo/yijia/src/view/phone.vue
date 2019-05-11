<template>
  <div>
    <v-header></v-header>
    <!--广告图-->
    <div class="adPic">
      <img src="../assets/images/phone.png" alt="">
    </div>
    <!--商品列表-->
    <goodsList :data="goodsData" @clickItem="gotoDetail"></goodsList>
    <v-security></v-security>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios';
import vHeader from '../components/header';
import vFooter from '../components/footer';
import vSecurity from '../components/security';
import goodsList from '../components/goodsList';
export default {
  data () {
    return {
      goodsData: []
    };
  },
  methods: {
    async getGoodsData () {
      const {data} = await axios.get('/api/phone');
      this.goodsData = data;
    },
    gotoDetail (item) { // 拿到其子组件 goodsList 通过自定义事件传过来的商品信息
      this.$router.push({
        name: 'Detail',
        params: {
          // 这里是给详情页设置对应的动态路由，方便详情页那边获取这个参数进行数据筛选操作
          id: item.id
        }
      });
    }
  },
  components: {
    vHeader,
    vFooter,
    vSecurity,
    goodsList
  },
  mounted () {
    this.getGoodsData();
  }
};
</script>

<style lang="less" scoped>
  .adPic{
    width: 100%;
    height: 264px;
  }
</style>
