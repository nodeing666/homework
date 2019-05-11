<template>
  <div>
    <v-header></v-header>
    <swiper></swiper>
    <div class="filterBox clearfix">
      <div class="content" @click="filterGoods">
        全部产品
        <div class="arrow" :class="{ arrow2: arrowFlag }"></div>
      </div>
      <div class="condition fr">
        <span :class="{'checked': active ===0 }" @click="changeFilter(0,'')">全部产品</span>
        <span :class="{'checked': active ===1 }" @click="changeFilter(1,'6T')">OnePlus 6T</span>
        <span :class="{'checked': active ===2 }" @click="changeFilter(2,'6')">OnePlus 6</span>
        <span :class="{'checked': active ===3 }" @click="changeFilter(3,'5T')">OnePlus 5T</span>
      </div>
    </div>
    <goodsList :data="allGoodsData" @clickItem="gotoDetail"></goodsList>
    <v-security></v-security>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/javascript">
import vHeader from '../components/header';
import vFooter from '../components/footer';
import vSecurity from '../components/security';
import goodsList from '../components/goodsList';
import Swiper from '../components/swiper';
import axios from 'axios';
export default {
  data () {
    return {
      allGoodsData: [],
      arrowFlag: true,
      active: 0,
      allGoodsDataCopy: []
    };
  },
  methods: {
    async getAllGoodsData () {
      const { data } = await axios.get('/api/allGoods');
      this.allGoodsData = data;
      this.allGoodsDataCopy = [].concat(data);
    },
    filterGoods () {
      this.arrowFlag = !this.arrowFlag;
    },
    changeFilter (key, value) {
      // 筛选后，点击全部可以复原数据，所以这里每一次筛选之前都先将原数据补充满
      this.allGoodsData = [].concat(this.allGoodsDataCopy);
      this.active = key;
      this.allGoodsData = this.allGoodsData.filter((item) => {
        return item.category !== value;
      });
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
  components: {
    vHeader,
    vFooter,
    vSecurity,
    goodsList,
    Swiper
  },
  mounted () {
    this.getAllGoodsData();
  }
};
</script>

<style lang="less" scoped>
  .filterBox{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #dfdfdf;
    /*position: fixed;*/
    position: relative;
    .content{
      width: 238px;
      height: 28px;
      font-size: 14px;
      color: #9fa19f;
      font-weight: 100;
      position: absolute;
      top: 15px;
      left: 90px;
      cursor: pointer;

      .arrow{
        width: 0;
        height: 0;
        border: 7px solid ;
        border-color: #868686 transparent transparent transparent;
        position: absolute;
        top: 9px;
        left: 190px;
        transition: .2s all;
      }
      .arrow2{
        transform-origin: top;
        transform:translateY(8px)  rotate(180deg);
        transition: .2s all;
        border-color: #868686 transparent transparent transparent;
      }
    }
    .condition{
      margin-top: 20px;

      span{
        cursor: pointer;
        font-weight: 100;
        margin-right: 30px;

        &:hover{
          color: #00c3f5;
          transition: all .2s;
        }
      }

      .checked{
        color: #00c3f5;
      }
    }
  }
</style>
