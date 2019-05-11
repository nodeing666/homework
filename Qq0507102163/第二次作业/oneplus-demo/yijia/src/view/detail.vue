<template>
  <div>
    <v-header></v-header>
    <div class="detail-wrapper clearfix" :class="{addLength : infoData.children.length > 3}">
      <!--左边商品图片-->
      <div class="detail-image fl">
        <img :src="infoData.detailImg" alt="" style="height: 600px">
      </div>
      <!--右边商品属性-->
      <div class="detail-props fr">
        <div class="goods-name">{{infoData.goodsInfo}}</div>
        <div class="children-wrapper" v-if="infoData.children">
          <div class="children-item clearfix" v-for="(item,index) in infoData.children" :key="index">
            <div class="left fl">
              <p class="name">{{item.goods_name}}</p>
              <p class="version">{{item.version}}</p>
              <p class="info">{{item.goods_info}}</p>
            </div>
            <div class="right fr">
              <img :src="item.imgUrl" alt="" style=" height: 121px;">
            </div>
          </div>
        </div>
        <p class="price">
          <span class="old-price" v-if="infoData.old_price">￥{{infoData.old_price}}</span><span class="new-price">￥{{infoData.goods_price}}</span>
        </p>
        <!--购物按钮-->
        <div class="cart-wrapper" @click="addShopcart">
          <div class="cart-inner clearfix">
            <button class="shopping-cart fl">加入购物车</button>
            <div class="shadow"></div>
          </div>
        </div>
        <!--库存-->
        <p class="inventory">
          库存 : {{infoData.inventory}}
        </p>
        <div class="after-sales">
          <p class="title">
            售后政策
          </p>
          <p class="content">
            7 天无理由退换 | 15 天退货保障 | 30 天换货保障
          </p>
        </div>
        <div class="after-sales">
          <p class="title">
            物流信息
          </p>
          <p class="content">
            全场满99元包邮，当天18点前支付24小时内发货
          </p>
        </div>
        <div class="payment">
          <p>支付方式</p>
          <img src="../assets/images/payment.png" alt="">
        </div>
      </div>
    </div>
    <!--下面详情介绍-->
    <div class="detail-info-wrapper">
      <div class="evaluation">
        <span>详情</span><span>评价</span>
      </div>
      <!--标题文字1-->
      <div class="title">
        <div class="content-up">{{infoData.detailInfo1_title}}</div>
        <div class="content-down" style="width: 949px; margin: 25px auto;">{{infoData.detailInfo1_content}}</div>
      </div>
      <!--图片1-->
      <div class="detail-info-image1">
        <img :src="infoData.detailUrl1" alt="">
      </div>
      <!--标题文字2-->
      <div class="title">
        <div class="content-up">{{infoData.detailInfo2_title}}</div>
        <div class="content-down" style="width: 949px;margin: 25px auto;">{{infoData.detailInfo2_content}}</div>
      </div>
      <!--图片2 , 由于没法找到合适比例的素材，这里写死-->
      <div class="detail-info-image2">
        <img src="../assets/images/second-pic.png" alt="">
      </div>
    </div>
    <!--三包服务,注意事项-->
    <div class="attention-matters">
      <div class="matters-wrapper">
        <!--这个位置循环数据-->
        <div class="matters-one clearfix">
          <div class="matters-title fl">
            三包服务介绍
          </div>
          <div class="matters-content fr">
            <ul>
              <li>
                承保周期：充电器、数据线、移动电源、耳机（有线/无线耳机），自签收之日起，可享受七天无理由退货，十五天换货，一年内保修（森海塞尔耳机两年内保修）；皮套、保护壳、屏幕保护膜、所有生活馆商品，自签收之日起，可享受七天无理由退货，十五天换货。
              </li>
              <li>
                退换货要求：商品及包装保持一加出售时原状、配件及单据完好、齐全，并提供相关订单号、发票及三包凭证；非产品问题的退换，需产品包装完好，且仅退换一次，消费者承担邮费；产品问题的退换，请先联系一加人工客服，确认产品问题后，提供退换相关凭证，使用指定物流到付的方式寄回给一加。
              </li>
            </ul>
          </div>
        </div>
        <div class="matters-two clearfix">
          <div class="matters-title fl">
            签收注意事项 <br>
            (签收时请注意以下信息 )
          </div>
          <div class="matters-content fr">
            <ul>
              <li>若存在包装破损等影响签收的原因，请直接拒收，并及时联系一加人工客服协助处理；</li>
              <li>签收后请尽快查看商品（配件、发票、三包凭证等）是否完整，若发现商品错误、商品少发、商品表面有质量问题等，请于24小时内联系一加人工客服协助处理。</li>
            </ul>
          </div>
        </div>
        <div class="matters-three clearfix">
          <div class="matters-title fl">
            退货办理流程
          </div>
          <div class="matters-content fr">
            <ul>
              <li>根据三包政策，符合退换货条件的，请拨打400-888-1111或通过商城在订单中心申请退换货，提供三包的相关凭证，会有专门的人员为您进行处理。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios';
import vHeader from '../components/header';
import vFooter from '../components/footer';
export default {
  data () {
    return {
      infoData: [],
      detailData: []
    };
  },
  methods: {
    async getDetail (id) {
      const {data} = await axios.get(`/api/allGoods/${id}`);
      this.infoData = data;
    },
    async getDetailData () {
      const {data} = await axios.get('/api/detail');
      this.detailData = data;
    },
    // 将单条数据添加到购物车总商品中，不能只当前商品的 mock 数据，而是根据需求组成新对象发送过去
    addShopcart () {
      this.$store.commit('ADD_SHOPCART', {
        data: this.infoData,
        //  与魅族商城不同，这里加入购物车没有 + - 数量的累加，点击一次默认商品数量加一，因此这里 num 给 1 即可
        num: 1
      });
    }
  },
  mounted () {
    this.getDetail(this.$route.params.id);
    this.getDetailData();
  },
  components: {
    vHeader,
    vFooter
  }
};
</script>

<style lang="less" scoped>
  .detail-wrapper{
    width: 100%;
    height: 1100px;
    background-color: #f6f6f6;
    border-top: 1px solid transparent;

    .detail-image{
      /*border: 1px solid red;*/
      margin: 40px 0 0 20px;
    }

    .detail-props{
      width: 604px;
      margin: 113px 76px 0 0;

      .goods-name{
        height: 66px;
        width: 100%;
        border-bottom: 1px solid #dfdfdf;
        color: #000;
        font-size: 28px;
        padding-top: 5px;
        font-weight: 100;
        box-sizing: border-box;
      }

      .children-wrapper{
        padding-top: 40px;
      }
      .children-item{
        width: 604px;
        height: 121px;
        background-color: #fff;
        border-bottom: 1px solid #f6f6f6;

        .left{
          width: 300px;
          height: 76px;
          margin: 30px 0 0 30px;

          .name{
            font-size: 16px;
            font-weight: 100;
            color: #555555;
          }

          .version{
            color: #bbbbbb;
            font-size: 12px;
          }

          .info{
            font-size: 14px;
            font-weight: 400;
            color: #00c3f5;
          }

          p{
            margin-bottom: 7px;
            cursor: pointer;
          }
        }

        .right{
          width: 126px;
          height: 121px;
          /*border: 1px solid;*/
        }
      }

      .price{
        height: 28px;
        width: 100%;
        /*border: 1px solid red;*/
        margin-top: 22px;

        .old-price{
          color: #969696;
          font-size: 16px;
          text-decoration: line-through;
          font-weight: 500;
        }
        .new-price{
          font-size: 28px;
        }
      }
      .cart-wrapper{
        width: 290px;
        height: 50px;
        overflow: hidden;
        /*border: 1px solid red;*/
        margin-top: 26px;
        border-radius: 2px;
        cursor: pointer;

        .shadow{
          width: 290px;
          height: 50px;
          background-color: rgba(0,0,0,0.7);
          opacity: .3;
          transform: translateX(-359px);
        }

        .shopping-cart{
          width: 290px;
          height: 50px;
          background-color: #eb0028;
          border: none;
          font-weight: 400;
          color: white;
          font-size: 17px;
        }

        .cart-inner{
          width: 580px;
          height: 50px;
          &:hover .shadow{
            transform: translateX(0px);
            transition: all .2s;
          }
        }
      }
      .inventory{
        /*border: 1px solid red;*/
        margin: 22px 0 10px 0;
        font-size: 16px;
        color: #4b4b4b;
        font-weight: 100;
      }

      .after-sales{
        height: 102px;
        width: 100%;
        border-bottom: 1px solid #dfdfdf;
        padding-top:24px;
        font-weight: 100;

        .title{
          font-size: 16px;
          color: #4f565b;
        }

        .content{
          font-size: 14px;
          color: #8a8a8a;
          margin-top: 10px;
        }
      }
      .payment{
        /*border: 1px solid red;*/
        margin-top: 23px;

        p{
          font-size: 16px;
          color: #4f565b;
        }
        img{
          margin-top: 5px;
        }
      }
    }
  }

  .addLength{
    height: 1300px;
  }

  .detail-info-wrapper{
    width: 100%;
    background-color: #fff;

    .evaluation{
      height: 61px;
      border-bottom: 1px solid #dfdfdf;
      text-align: center;
      line-height: 61px;

      span{
        font-size: 16px;
        cursor: pointer;

        &:nth-of-type(2){
          color: #a0a2a0;
          margin-left: 32px;
        }
      }
    }
    .title{
      height: 336px;
      width: 100%;
      text-align: center;
      /*line-height: 336px;*/
      padding-top: 116px;
      box-sizing: border-box;

      .content-up{
        font-size: 30px;
        font-weight: 100;
      }

      .content-down{
        font-size: 18px;
        font-weight: 100;
        color: #666683;
        margin-top: 25px;
      }
    }
    .detail-info-image1{
      height: 586px;

      img{
        width: 100%;
        height: 100%;
      }
    }
    .detail-info-image2{
      height: 415px;
    }
  }
  .attention-matters{
    height: 650px;
    background-color: #efefef;

    .matters-wrapper{
      width: 820px;
      margin: 0 auto;
      /*border: 1px solid red;*/

      .matters-one{
        height: 254px;
        width: 100%;
        padding-top: 90px;
        box-sizing: border-box;

        .matters-title{
          height: 230px;
          width: 182px;
          border-bottom: 1px solid #e0e0e0;
          font-size: 15px;
          font-weight: 100;
        }

        .matters-content{
          width: 598px;
          height: 230px;
          border-bottom: 1px solid #e0e0e0;

          li{
            list-style: disc;
            line-height: 27px;
            margin-bottom: 8px;
            color: #9ea09e;
            font-weight: 100;
          }
        }
      }
      .matters-two{
        height: 150px;
        width: 100%;
        padding-top: 100px;
        box-sizing: border-box;

        .matters-title{
          height: 120px;
          width: 182px;
          border-bottom: 1px solid #e0e0e0;
          font-size: 15px;
          font-weight: 100;
        }

        .matters-content{
          width: 598px;
          height: 120px;
          border-bottom: 1px solid #e0e0e0;

          li{
            list-style: disc;
            line-height: 27px;
            margin-bottom: 8px;
            color: #9ea09e;
            font-weight: 100;
          }
        }
      }
      .matters-three{
        height: 254px;
        width: 100%;
        padding-top: 100px;
        box-sizing: border-box;

        .matters-title{
          height: 94px;
          width: 182px;
          border-bottom: 1px solid #e0e0e0;
          font-size: 15px;
          font-weight: 100;
        }

        .matters-content{
          width: 598px;
          height: 94px;
          border-bottom: 1px solid #e0e0e0;

          li{
            list-style: disc;
            line-height: 27px;
            margin-bottom: 8px;
            color: #9ea09e;
            font-weight: 100;
          }
        }
      }
    }
  }
</style>
