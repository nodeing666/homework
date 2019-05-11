<template>
  <div>
    <v-header></v-header>
    <div class="advertisingArea">
      <div class="area1">
        <div class="more">
          <p>了解更多</p>
        </div>
      </div>
      <div class="area2">
        <div class="buy">
          <p>立即购买</p>
        </div>
      </div>
      <div class="area3-group clearfix">
        <div class="ad1 fl"></div>
        <div class="ad2 fl"></div>
        <div class="ad3 fl"></div>
        <div class="ad4 fl"></div>
      </div>
      <div class="area4-join">
        <div class="join">
          <div class="join-inner">
            <div class="shadow"></div>
            <button>我要参加</button>
          </div>
        </div>
      </div>
    </div>
    <div class="newGoods">
      <div class="newGoods-wrapper">
        <ul class="clearfix">
          <li v-for="(item,index) in learnMoreData" :key="index" class="goods-item fl">
            <img :src="item.imgUrl" alt="">
            <p class="title">{{item.title}}</p>
            <p class="description">{{item.description}}</p>
            <a href="javascript:">{{item.link}}</a>
          </li>
        </ul>
      </div>
    </div>
    <v-security></v-security>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/javascript">
import vHeader from '../components/header';
import vSecurity from '../components/security';
import vFooter from '../components/footer';
import axios from 'axios';
export default {
  data () {
    return {
      learnMoreData: []
    };
  },
  methods: {
    async getLearnMoreData () {
      const {data} = await axios.get('/api/newGoods');
      this.learnMoreData = data;
    }
  },
  mounted () {
    this.getLearnMoreData();
  },
  components: {
    vHeader,
    vSecurity,
    vFooter
  }
};
</script>

<style lang="less" scoped>
  .advertisingArea{
    width: 100%;
    background-color: #ffffff;

    .area1{
      width: 100%;
      height: 644px;
      background: url("../assets/images/index(1).png") ;
      position: relative;

      .more{
        width: 241px;
        height: 62px;
        border: 1px solid #878b8f;
        font-size: 18px;
        font-weight: 400;
        color: #4e5759;
        text-align: center;
        line-height: 62px;
        position: absolute;
        top: 399px;
        left: 226px;
        cursor: pointer;

        &:hover{
          transition: all .7s;
          background-color: black;
          border: 1px solid black;
        }
        &:hover p{
          transition: all .7s;
          color: white;
        }
      }
    }

    .area2{
      width: 100%;
      height: 644px;
      background: url("../assets/images/index(2).png") ;
      position: relative;

      .buy{
        width: 241px;
        height: 62px;
        border: 1px solid #878b8f;
        font-size: 18px;
        font-weight: 400;
        color: #4e5759;
        text-align: center;
        line-height: 62px;
        position: absolute;
        top: 367px;
        left: 225px;
        cursor: pointer;

        &:hover{
          transition: all .7s;
          background-color: black;
          border: 1px solid black;
        }
        &:hover p{
          transition: all .7s;
          color: white;
        }
      }
    }
  }
  .area3-group{
    height: 1010px;
    width: 100%;
    margin-top: 8px;

     div{
      width: 669px;
      height: 500px;
      /*border: 1px solid red;*/
       margin-bottom: 10px;
       cursor: pointer;

       &:nth-of-type(1){
         background: url('../assets/images/index(3.1).png') 100% no-repeat;
       }
       &:nth-of-type(2){
         background: url('../assets/images/index(3.2).png') 100% no-repeat;
       }
       &:nth-of-type(3){
         background: url('../assets/images/index(3.3).png') 100% no-repeat;
       }
       &:nth-of-type(4){
         background: url('../assets/images/index(3.4).png') 100% no-repeat;
       }
    }

    div:nth-of-type(1),div:nth-of-type(3){
      margin-right: 10px;
    }
  }
  .area4-join{
    width: 100%;
    height: 512px;
    background: url("../assets/images/index(4).png");
    margin-top: 8px;
    position: relative;

    .join{
      width: 134px;
      height: 44px;
      border: 2px solid #ffffff;
      position: absolute;
      top: 284px;
      left: 609px;

      .join-inner{
        width: 134px;
        height: 44px;
        overflow: hidden;
        /*border: 1px solid ;*/
        &:hover button{
          color: #555555;
          transition: all .2s;
        }
        &:hover .shadow{
          transform: translateX(0);
        }
        button{
          border: none;
          background-color: transparent;
          color: #ffffff;
          width: 134px;
          height: 44px;
          cursor: pointer;
          position: absolute;
          top: 0;
          font-weight: 500;
        }

        .shadow{
          width: 132px;
          height: 42px;
          background-color: #ffffff;
          transform: translateX(-134px);
          transition: all .2s;
        }
      }
    }
  }
  .newGoods{
    width: 100%;
    height: 507px;
    background-color: #f6f6f6;
    border-bottom: 1px solid #e4e4e4;
    margin-top: 10px;

    .newGoods-wrapper{
      width: 1240px;
      margin: 0 auto;
      padding: 80px 18px 0 18px;
      height: 507px;

      .goods-item{
        width:360px;
        height: 225px;

        img{
          width: 100%;
          cursor: pointer;
        }

        &:nth-of-type(1),&:nth-of-type(2){
          margin-right: 60px;
        }

        .title{
          font-size: 16px;
          color: #626262;
          /* 加入行高，清楚p标签自带的内边距*/
          line-height: 18px;
          margin-top: 20px;
        }

        .description{
          font-size: 18px;
          color: #000;
          margin-top: 10px;
        }

        a{
          font-size: 16px;
          color: #40a0cd;
          display: inline-block;
          margin-top: 18px;
        }
      }
    }
  }
</style>
