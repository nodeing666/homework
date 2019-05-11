<template>
  <div>
    <v-header></v-header>
    <!--广告图-->
    <div class="adPic">
      <img src="../assets/images/dataLine.png" alt="">
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
      const {data} = await axios.get('/api/dataLine');
      this.goodsData = data;
    },
    gotoDetail (item) {
      this.$router.push({
        name: 'Detail',
        params: {
          id: item.id
        }
      });
    }
  },
  mounted () {
    this.getGoodsData();
  },
  components: {
    vHeader,
    vFooter,
    vSecurity,
    goodsList
  }
};
</script>

<style lang="less" scoped>
  .adPic{
    width: 100%;
    height: 264px;
  }
</style>
