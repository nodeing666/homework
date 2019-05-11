<template>
  <div>
    <v-header></v-header>
    <div class="content-wrapper">
      <v-security type="shopcart"></v-security>
      <!-- 中间部分 -->

      <!--购物车有商品-->
      <div class="have_goods" v-if="shopcartData.length > 0 ">
        <div class="cart-title">
          购物车
        </div>
        <div class="cart-product clearfix" v-for="(item,index) in shopcartData" :key="index">
          <div class="left fl">
            <img :src="item.cartImg" alt="" style="height: 84px;">
          </div>
          <div class="right fr">
            <div class="product-info fl">{{ item.goodsInfo }}</div>
            <div class="product-price fl">
              ￥ {{ item.goodsPrice }}.00
              <p>节省: ￥ {{ item.oldPrice - item.goodsPrice }}.00</p>
            </div>
            <div class="product-count clearfix fl">
              <button class="fl" @click="decrease(item.id)">-</button>
              <input class="fl" type="number" v-model="item.count" readonly>
              <button class="fl" @click="increase(item.id)">+</button>
            </div>
            <div class="item-total fl">￥  {{ item.goodsPrice * item.count}}.00</div>
            <div class="item-delete fl" @click="deleteShopcart(item.id)">
              <img src="../assets/images/delete.png" alt="">
            </div>
          </div>
          <div class="product-list fr" v-if="item.children">
            <p>清单</p>
              <ul>
                <li v-for="(children,index) in item.children" :key="index" >
                  {{ children.goods_name }}
                </li>
              </ul>
          </div>
        </div>
        <!--底部部分-->
        <div class="cart-footer">
          已选择 <span>{{ CHOOSE_GOODS }}</span> 件商品
          <div class="right-side">
            <div class="subtotal clearfix">
              <div class="left fl">
                <p>购物车商品小计</p>
                <p>节省</p>
              </div>
              <div class="right fr">
                <p>￥ {{ OLD_TOTAL_PRICE }}</p>
                <p>￥ {{ -(OLD_TOTAL_PRICE - TOTAL_PRICE) }}.00</p>
              </div>
            </div>
            <div class="total">
              <div class="fl total-price-left">
                <p>总价</p>
                <p>支持免邮</p>
              </div>
              <div class="fr total-price-right">
                ￥ {{ TOTAL_PRICE }}
              </div>
            </div>
            <div class="two-button clearfix">
              <div class="btn1 fl">
                <div class="inner1 clearfix">
                  <div class="shadow1 fl"></div>
                  <button class="go-on-Shopping" @click="gotoStore">继续购物</button>
                </div>
              </div>
              <div class="btn2 fr">
                <div class="inner2 clearfix" @click="gotoOrder">
                  <button class="go-to-pay">去付款</button>
                  <div class="shadow2 fl"></div>
                </div>
              </div>
            </div>
            <div class="coupons">请在下一步使用优惠券</div>
          </div>
        </div>
      </div>

      <!--购物车没有商品-->
      <div class="empty_goods" v-else>
        <div class="cart-logo">
          <span class="icon-moon icon-cart2"></span>
        </div>
        <div class="title">你的购物车还没有商品</div>
        <div class="shop-btn">
          <div class="inner clearfix" @click="gotoStore">
            <button class="shopping">去购物</button>
            <div class="shadow fl"></div>
          </div>
        </div>
      </div>
      <!--你可能喜欢-->
      <div class="maybe-love">
        你可能喜欢
      </div>
      <div class="like-goods">
        <ul class="clearfix">
          <li v-for="(item, index) in maybeLove" :key="index" class="like-item fl" :class="{'last-child':(index+1) %4 === 0}">
            <div class="img">
              <img :src="item.imgUrl" alt="" style="height: 289px;">
            </div>
            <div class="info">
              <div>{{item.goodsInfo}}</div>
              <div>￥ {{item.goodsPrice}}</div>
            </div>
            <div class="add-btn">
              <div class="inner clearfix">
                <div class="shadow fl"></div>
                <button class="add-shopcart">加入购物车</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/javascript">
import vHeader from '../components/header';
import vFooter from '../components/footer';
import vSecurity from '../components/security';
import { mapGetters, mapMutations } from 'vuex';
import axios from 'axios';
export default {
  data () {
    return {
      flag: true,
      maybeLove: []
    };
  },
  methods: {
    // 获取你可能喜欢的数据
    async getMaybeLove () {
      const { data } = await axios.get('/api/maybeLove');
      this.maybeLove = data;
    },
    increase (id) {
      this.INCREASE_SHOPCART(id);
    },
    decrease (id) {
      this.DECREASE_SHOPCART(id);
    },
    deleteShopcart (id) {
      this.DELETE_SHOPCART(id);
    },
    ...mapMutations([
      'INCREASE_SHOPCART',
      'DECREASE_SHOPCART',
      'DELETE_SHOPCART'
    ]),
    gotoStore () {
      this.$router.push({
        name: 'Store'
      });
    },
    gotoOrder () {
      this.$router.push({
        name: 'Order'
      });
    }
  },
  computed: {
    // 同步购物车数据
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
    vFooter,
    vSecurity
  },
  mounted () {
    this.getMaybeLove();
  }
};
</script>

<style lang="less" scoped>
  .content-wrapper{
    width: 100%;
    background-color: #efefef;

    .have_goods{
      width: 1200px;
      /*height: 1015px;*/
      background-color: #fff;
      margin: 0 auto;

      .cart-title{
        height: 71px;
        width: 100%;
        border-bottom: 1px solid #dfdfdf;
        font-size: 18px;
        color: black;
        box-sizing: border-box;
        padding: 25px 0 0 30px;
        font-weight: 100;
      }

      .cart-product{
        /*height: 190px;*/
        width: 1140px;
        border-bottom: 1px solid #dfdfdf;
        margin: 0 auto;
        padding-top: 20px;
        padding-left: 20px;

        &:last-child{
          border: none;
        }
        .left{
          /*border: 1px solid red;*/
        }

        .right{
          height: 60px;
          width: 881px;
          /*border: 1px solid red;*/
          margin: 15px 10px 0 0;
          padding-left: 10px;

          .product-info{
            /*border: 1px solid red;*/
            font-size: 16px;
            font-weight: 100;
            margin-top: 10px;
            width: 250px;
          }
          .product-price{
            text-align: center;
            /*border: 1px solid red;*/
            margin: 0 0 15px 116px;
            font-size: 15px;

            p{
              font-size: 12px;
              color: #828282;
              margin-top: 3px;
            }
          }
          .product-count{
            border: 1px solid #dfdfdf;
            margin: 5px 0 0  82px;

            button{
              border: none;
              background-color: #fff;
              width: 30px;
              height: 30px;
              font-size: 18px;
              cursor: pointer;
              color: #878787;

              &:hover{
                background-color: rgba(0,0,0,0.1);
              }
            }

            input{
              width: 30px;
              height: 30px;
              border: none;
              text-align: center;
              color: #878787;
            }
          }
          .item-total{
            /*border: 1px solid red;*/
            margin: 11px 0 0  94px;
            color: #878787;
            font-size: 15px;
          }
          .item-delete{
            margin: 11px 0 0 50px ;
            cursor: pointer;
            width: 22px;
            height: 22px;

            &:hover{
              border: 1px solid #dfdfdf;
            }
          }
        }

        .product-list{
          /*height: 93px;*/
          width: 881px;
          border-top: 1px solid #dfdfdf;
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

      .cart-footer{
        width: 1140px;
        height: 352px;
        margin: 0 auto;
        padding: 35px 20px 45px 20px;
        font-size: 14px;
        color: #828282;

        span{
          color: #000;
          font-size: 15px;
        }

        .right-side{
          float: right;
          width: 412px;
          height: 280px;

          .subtotal{
            height: 80px;
            width: 412px;
            border-bottom: 1px solid #dfdfdf;
            /*line-height: 30px;*/
            .left{
              p:nth-of-type(1){
                margin-bottom: 12px;
              }
            }

            .right{
              text-align: right;
              font-size: 15px;
              p:nth-of-type(1){
                margin-bottom: 12px;
              }
            }
          }

          .total{
            width: 412px;
            height: 115px;
            padding-top: 18px;

            .total-price-left{
              p:nth-of-type(1){
                margin: 5px 0 20px 0;
              }
            }

            .total-price-right{
              font-size: 25px;
              color: #000;
            }
          }

          .two-button{
            width: 412px;
            height: 55px;

            .btn1{
              width: 200px;
              height: 55px;

              .inner1{
                width: 200px;
                height: 55px;
                position: relative;
                border: 1px solid black;
                border-radius: 2px;
                overflow: hidden;

                &:hover .shadow1{
                  transform: translateX(0);
                }

                &:hover .go-on-Shopping{
                  color: white;
                }

                .go-on-Shopping{
                  width: 200px;
                  height: 55px;
                  position: absolute;
                  top: 0;
                  left: 0;
                  border: none;
                  background-color: transparent;
                  border-radius: 2px;
                  font-size: 16px;
                  font-weight: 400;
                  cursor: pointer;
                }

                .shadow1{
                  width: 199px;
                  height: 54px;
                  background-color: #000;
                  transform: translateX(-200px);
                  border-radius: 2px;
                  transition: all .3s;
                }
              }
            }

            .btn2{
              width: 200px;
              height: 55px;

              .inner2{
                width: 200px;
                height: 55px;
                position: relative;
                border-radius: 2px;
                overflow: hidden;
                cursor: pointer;

                &:hover .shadow2{
                  transform: translateX(0);
                }

                &:hover .go-to-pay{
                  color: white;
                }

                .go-to-pay{
                  width: 200px;
                  height: 55px;
                  position: absolute;
                  top: 0;
                  left: 0;
                  border: none;
                  background-color: #eb0028;
                  border-radius: 2px;
                  font-size: 16px;
                  font-weight: 400;
                  color: #ffffff;
                }

                .shadow2{
                  width: 199px;
                  height: 54px;
                  background-color: rgba(0,0,0,0.7);
                  opacity: .3;
                  transform: translateX(-200px);
                  border-radius: 2px;
                  transition: all .3s;
                }
              }
            }
          }

          .coupons{
            margin-top: 8px;
          }
        }
      }
    }

    .maybe-love{
      width: 1200px;
      height: 130px;
      margin: 0 auto;
      text-align: center;
      line-height: 130px;
      font-size: 20px;
      color: #898b89;
    }

    /* 无货提示 */
    .empty_goods{
      width: 1200px;
      height: 414px;
      background-color: #fff;
      margin: 0 auto;
      text-align: center;
      padding-top: 75px;

      .cart-logo{
        .icon-cart2{
          font-size: 100px;
        }
      }

      .title{
        margin-top: 64px;
        font-size: 16px;
        color: #928292;
      }

      .shop-btn{
        width: 200px;
        height: 40px;
        margin-top: 45px;
        margin-left: 500px;
        position: relative;
        cursor: pointer;

        .inner{
          width: 200px;
          height: 40px;
          border-radius: 3px;
          position: relative;
          overflow: hidden;

          &:hover .shadow{
            transform: translateX(0);
          }

          .shopping{
            border: none;
            width: 200px;
            height: 40px;
            background-color: #eb0028;
            color: #ffffff;
            border-radius: 3px;
            position: absolute;
            top: 0;
            left: 0;
          }

          .shadow{
            width: 199px;
            height: 39px;
            border-radius: 3px;
            background-color: rgba(0,0,0,0.7);
            opacity: .3;
            transform: translateX(-200px);
            transition: all .3s;
          }
        }
      }

    }

    .like-goods{
      width: 1200px;
      height: 473px;
      padding-bottom: 30px;
      margin: 0 auto;

      .like-item{
        width: 289px;
        height: 442px;
        background-color: #fff;
        margin-right: 14px;

        &.last-child{
          margin-right: 0;
        }

        .info{
          height: 45px;
          text-align: center;
          color: #898b89;
          font-size: 14px;

          div:nth-of-type(2){
            margin-top: 4px;
          }
        }

        .add-btn{
          width: 232px;
          height: 40px;
          margin: 40px 0 0 29px;

          .inner{
            width: 232px;
            height: 40px;
            border: 1px solid #eb0028;
            position: relative;
            overflow: hidden;
            cursor: pointer;

            &:hover .shadow{
              transform: translateX(0);
              transition: all .3s;
            }

            &:hover .add-shopcart{
              color: white;
            }

            &:hover{
              border: 1px solid #B8001F;
            }

            .add-shopcart{
              width: 232px;
              height: 40px;
              background-color: transparent;
              border: none;
              color: #eb0028;
              position: absolute;
              top: 0;
              left: 0;
              cursor: pointer;
            }

            .shadow{
              width: 232px;
              height: 40px;
              background-color: #B8001F;
              transform: translateX(-232px);
              transition: all .3s;
            }
          }
        }
      }
    }
  }
</style>
