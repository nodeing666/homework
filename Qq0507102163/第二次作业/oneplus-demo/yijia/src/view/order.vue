<template>
  <div>
    <v-header></v-header>
    <div class="content-wrapper">
      <div class="address">
        <div class="title">
          提交订单
        </div>
        <div class="address-info">
          <p>收货地址</p>
          <p>李云龙</p>
          广东省汕头市国瑞观海居<br>
          电话 : 15625709941<br>
          <div class="edit">
            修改
          </div>
        </div>
        <div class="distribution">
          <p>配送方式</p>
          <p>快递配送</p>
          <p>感谢加友的支持， 订单支付后预计在48小时内为您发货</p>
        </div>
      </div>
      <div class="list-info">
        <div class="title clearfix">
          <div class="fl shop-list">商品清单</div>
          <div class="fr return-shopcart">
            <a href="javascript:" @click="gotoShopcart">返回购物车修改</a>
          </div>
        </div>
        <!-- 商品列表 -->
        <div class="goods-list clearfix" v-for="(item, index) in shopcartData" :key="index">
          <!--左图-->
          <div class="pic fl">
            <img :src="item.cartImg" alt="" style="height: 84px;">
          </div>
          <!--右信息-->
          <div class="right-info fr">
            <div class="up">
              <div class="product-info fl">{{ item.goodsInfo }}</div>
              <div class="product-price fl">
                ￥ {{ item.goodsPrice }}.00
                <p>节省: ￥ {{ item.oldPrice - item.goodsPrice }}.00</p>
              </div>
              <div class="product-count fl"> x {{ item.count }}</div>
              <div class="product-total fl">￥  {{ item.goodsPrice * item.count}}.00</div>
            </div>
            <div class="down fl">
              <p>清单</p>
              <ul>
                <li v-for="(children,index) in item.children" :key="index" >
                  {{ children.goods_name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--发票-->
      <div class="invoice clearfix">
        <div class="left fl">发票信息</div>
        <div class="right fr">
          电子发票, 个人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="javascript:">修改</a>
        </div>
      </div>
      <!--优惠券-->
      <div class="coupon clearfix">
        <div class="left fl">
          <span>优惠券</span><br>
          <span>礼品券</span>
        </div>
        <div class="right fr">
          <span>无可用优惠券</span><br>
          <span>无可用礼品券</span>
        </div>
      </div>
      <div class="commit-order clearfix">
        <div class="commit-order-wrapper fr">
          <!--上部分-->
          <div class="up clearfix">
            <div class="left fl">
              <span>商品总金额</span><br>
              <span>优惠金额</span><br>
              <span>运费</span>
            </div>
            <div class="right fr">
              <span>￥{{ OLD_TOTAL_PRICE }}</span><br>
              <span>-￥{{ (OLD_TOTAL_PRICE-TOTAL_PRICE) }}.00</span><br>
              <span>+￥0.00</span>
            </div>
          </div>
          <!--下部分-->
          <div class="down">
            应付总额
            <div class="total-price">￥{{ TOTAL_PRICE }}</div>
            <div class="order-btn">
              <div class="inner clearfix" @click="payment">
                <button class="commit-order-btn">提交订单</button>
                <div class="shadow fl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/javascript">
import vHeader from '../components/header';
import vFooter from '../components/footer';
import { mapGetters, mapMutations } from 'vuex';
export default {
  data () {
    return {

    };
  },
  methods: {
    gotoShopcart () {
      this.$router.push({
        name: 'Shopcart'
      });
    },
    payment () {
      alert('支付成功');
      // 清空当前购物车数据，并返回首页
      this.EMPTY_CART();
      this.$router.push({
        name: 'Index'
      });
    },
    ...mapMutations([
      'EMPTY_CART'
    ])
  },
  computed: {
    shopcartData () {
      return this.$store.state.shopcartData;
    },
    ...mapGetters([
      'CHOOSE_GOODS',
      'OLD_TOTAL_PRICE',
      'TOTAL_PRICE'
    ])
  },
  components: {
    vHeader,
    vFooter
  }
};
</script>

<style lang="less" scoped>
  .content-wrapper{
    width: 100%;
    background-color: #efefef;
    padding: 30px 0 55px 0;

    /* 收货地址 */
    .address{
      width: 962px;
      height: 360px;
      background-color: #fff;
      margin: 10px auto;

      .title{
        height: 70px;
        border-bottom: 1px solid #dfdfdf;
        padding: 20px 0 0 40px;
        font-size: 20px;
        font-weight: 100;
        box-sizing: border-box;
        margin-bottom: 25px;
      }
      .address-info{
        width: 840px;
        height: 132px;
        border-bottom: 1px solid #dfdfdf;
        margin: 0 auto;
        font-size: 14px;
        padding-left: 5px;
        position: relative;

        .edit{
          color: #00b5e3;
          position: absolute;
          top: 0;
          right: 0;
          cursor: pointer;

          &:hover{
            text-decoration: underline;
          }
        }

        p:nth-of-type(1){
          font-size: 16px;
          color: #666666;
          margin-bottom: 15px;
        }
        p:nth-of-type(2){
          font-size: 16px;
          margin-bottom: 10px;
        }
      }
      .distribution{
        width: 840px;
        height: 99px;
        margin: 0 auto;
        /*border: 1px solid red;*/
        padding-top: 23px;

        p:nth-of-type(1){
          font-size: 15px;
          color: #666666;
        }
        p:nth-of-type(2){
          font-size: 15px;
          margin-top: 10px;
        }
        p:nth-of-type(3){
          font-size: 14px;
          margin-top: 3px;
          color: #999999;
        }
      }
    }

    .list-info{
      width: 962px;
      background-color: #fff;
      margin: 0 auto;

      .title{
        height: 49px;
        padding: 28px 50px 0 70px;

        div:nth-of-type(1){
          font-size: 16px;
        }

        div:nth-of-type(2){
          font-size: 14px;
          color: #0099CC;

          &:hover{
            text-decoration: underline;
          }
        }
      }

      .goods-list{
        width: 842px;
        height: 243px;
        border-bottom: 1px solid #dfdfdf;
        margin: 0 auto;
        padding-top: 35px;
        box-sizing: border-box;

        &:last-child{
          border: none;
        }

        .right-info{
          width: 749px;
          height: 209px;

          .up{
            width: 749px;
            height: 70px;
            border-bottom: 1px solid #dfdfdf;
            padding-top: 10px;

            .product-info{
              font-size: 16px;
              font-weight: 100;
            }

            .product-price{
              margin-left: 128px;
              font-size: 16px;
              font-weight: 100;
              text-align: center;

              p{
                font-size: 14px;
                color: #c6c8ca;
              }
            }

            .product-count{
              margin-left: 87px;
              font-weight: 100;
            }

            .product-total{
              margin-left: 88px;
              font-size: 15px;
            }
          }
          .down{
            /*height: 93px;*/
            width: 881px;
            padding-bottom: 25px;
            color: #828282;
            line-height: 25px;

            li{
              list-style: disc;
              margin-left: 16px;
            }

            p{
              margin-top: 25px;
              font-weight: 400;
              color: #000;
              cursor: pointer;
            }
          }
        }
      }
    }

    .invoice{
      height: 65px;
      width: 962px;
      background-color: #fff;
      margin: 0 auto;
      border-top: 1px solid #dfdfdf;
      padding: 24px 50px 0 70px;
      box-sizing: border-box;

      .left{
        font-size: 16px;
        color: #666666;
        font-weight: 100;
      }

      .right{
        font-size: 13px;
        color: #999999;

        a{
          color: #0099CC;

          &:hover{
            text-decoration: underline;
          }
        }
      }
    }

    .coupon{
      width: 962px;
      height: 132px;
      background-color: #f9f9f9;
      margin: 0 auto;
      padding: 35px 77px 0 70px;

      .left,.right{
        span:nth-of-type(1){
          display: inline-block;
          margin-bottom: 20px;
        }
      }
      .left{
        font-size: 16px;
      }
    }
    .commit-order{
      width: 962px;
      height: 326px;
      background-color: #fff;
      margin: 0 auto;
      padding: 32px 50px 0 0 ;

      .commit-order-wrapper{
        width: 415px;
        height: 259px;

        .up{
          width: 415px;
          height: 121px;
          border-bottom: 1px solid #dfdfdf;

          .left{
            font-size: 16px;
            line-height: 38px;
          }

          .right{
            font-size: 15px;
            text-align: right;
            color: #9aa8a6;
            line-height: 38px;
          }
        }

        .down{
          height: 137px;
          width: 415px;
          padding-top: 48px;
          font-size: 15px;
          position: relative;

          .total-price{
            font-size: 30px;
            position: absolute;
            top: 25px;
            right: 0;
          }

          .order-btn{
            width: 410px;
            height: 50px;
            margin-top: 20px;

            .inner{
              width: 410px;
              height: 50px;
              position: relative;
              overflow: hidden;
              cursor: pointer;

              &:hover .shadow{
                transform: translateX(0);
                transition: all .3s;
              }

              .commit-order-btn{
                width: 410px;
                height: 50px;
                background-color: #eb0028;
                color: #ffffff;
                font-size: 16px;
                border: none;
                position: absolute;
                top: 0;
                left: 0;
              }

              .shadow{
                width: 410px;
                height: 50px;
                background-color: rgba(0,0,0,0.7);
                opacity: .3;
                transform: translateX(-410px)
              }
            }
          }
        }
      }
    }
  }
</style>
