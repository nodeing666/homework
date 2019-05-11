<template>
  <div class="header">
    <div class="header-wrapper clearfix">
      <!--左Logo-->
      <div class="header-logo fl" @click="gotoIndex">
        <span class="icon-moon icon-yijia"></span>
      </div>
      <!--右-->
      <div class="header-search fr">
        <span class="icon-moon icon-search"></span>
      </div>
      <div class="header-cart fr" @mouseenter="showCart" @mouseleave="hideCart" :class="{ 'keepStyle3' : flag3 }">
        <span class="icon-moon icon-cart1"></span>
        <!--购物车有商品再显示-->
        <div class="prompt" v-if="shopcartData.length > 0 ">{{ CHOOSE_GOODS }}</div>
      </div>
      <div class="header-user fr" @mouseenter="showUser" @mouseleave="hideUser" :class="{ 'keepStyle4' : flag4 }">
        <span class="icon-moon icon-user"></span>
      </div>
      <ul class="header-nav fr">
        <li>
          <a href="javascript:" class="nav-item">OnePlus 6T</a>
        </li>
        <li>
          <a href="javascript:" class="nav-item" @mouseover="showChildren" @mouseout="hideChildren" @click="gotoStore" :class="{'keepStyle1': flag1 }">
            商城
            <div class="arrow" :class="{ 'keepStyle2': flag2 }"></div>
          </a>
        </li>
        <li v-for="(item,index) in navData" :key="index">
          <a href="javascript:" class="nav-item" @click="gotoServer">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <!--隐藏显示区域1-->
    <div class="store-children" v-show="childrenShow" @mouseout="hideChildren" @mouseover="showChildren">
      <div class="children-wrapper">
        <ul>
          <li v-for="(item,index) in navChildren" :key="index" class="children-item" @click="gotoShop(item.link)">
            <span :class="item.icon_class"></span>
            <p>{{item.goods_category}}</p>
          </li>
        </ul>
      </div>
    </div>
    <!--隐藏区域2-->
    <div class="user-children-wrapper" v-show="userShow" @mouseenter="showUser" @mouseleave="hideUser">
      <div class="user-children">
        <div class="order">
          <a href="javascript:">订单</a>
        </div>
        <div class="order">
          <a href="javascript:">账户</a>
        </div>
        <div class="order">
          <a href="javascript:">推荐有礼</a>
        </div>
        <div class="sign-out">
          <a href="javascript:">登出V1556624940015</a>
        </div>
      </div>
    </div>
    <!--隐藏区域3-->
    <div class="cart" v-show="cartShow" @mouseleave="hideCart" @mouseenter="showCart">
      <!--购物车有货-->
      <div class="haveGoods" v-if="shopcartData.length > 0">
        <!-- 购物车有数据，即有选购商品的时候-->
        <div class="checkInfo">
          <span>已选择</span>&nbsp;
          <span>{{CHOOSE_GOODS}} 件商品</span>
        </div>
        <!--添加滚动条以及只保留横向滚动条  overflow-x: hidden   给高度可以限制最小高度  -->

        <!--外部再加上一层用来实现滚动，且又不会影响到内部的结构样式-->
        <div style="overflow: scroll; height: 300px; overflow-x: hidden; overflow-y: auto" class="scrollWrapper">
          <div class="goodsWrapper">
            <div class="goods_item clearfix" v-for="(item,index) in shopcartData" :key="index">
              <div class="pic fl">
                <img :src="item.cartImg" alt="">
              </div>
              <div class="info fl">{{item.goodsInfo}} ￥{{item.goodsPrice}}.00</div>
              <div class="count fl"> x {{item.count}}</div>
            </div>
          </div>
        </div>
        <div class="totalPrice">
          <p>总价<span>￥{{ TOTAL_PRICE }}</span></p>
          <p>支持免邮</p>
        </div>
        <!--两个按钮-->
        <div class="twoBth clearfix">
          <div class="btn1 fl">
            <div class="inner1 clearfix">
              <div class="shadow1 fl"></div>
              <button class='shopCart' @click="gotoShopcart">去购物车</button>
            </div>
          </div>
          <div class="btn2 fl">
            <div class="inner2 clearfix" @click="gotoOrder">
              <button class="pay">去付款</button>
              <div class="shadow2 fl"></div>
            </div>
          </div>
        </div>
      </div>
      <!--购物车无货-->
      <div class="empty" v-else>
        <div class="cart-top">
          您的购物车里没有商品  !
        </div>
        <div class="cart-bottom">
          <div class="bottom-wrapper">
            <div class="bottom-inner clearfix" @click="gotoStore">
              <button class="goShopping fl">去购物</button>
              <div class="test"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
  data () {
    return {
      navData: [],
      navChildren: [],
      childrenShow: false,
      userShow: false,
      cartShow: false,
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false
    };
  },
  computed: {
    // 实时跟踪购物车数据
    shopcartData () {
      return this.$store.state.shopcartData;
    },
    ...mapGetters([
      'CHOOSE_GOODS',
      'TOTAL_PRICE'
    ])
  },
  methods: {
    // 去购物车页面
    gotoShopcart () {
      this.$router.push({
        name: 'Shopcart'
      });
    },
    // 购物车没有货，去购物
    gotoStore () {
      this.$router.push({
        name: 'Store'
      });
    },
    // 去订单页支付
    gotoOrder () {
      this.$router.push({
        name: 'Order'
      });
    },
    // 去服务页
    gotoServer () {
      this.$router.push({
        name: 'Server'
      });
    },
    // 路由跳转
    gotoShop (link) {
      switch (link) {
        case 'phone':
          this.$router.push({
            name: 'Phone'
          });
          break;
        case 'headset':
          this.$router.push({
            name: 'Headset'
          });
          break;
        case 'wrapper':
          this.$router.push({
            name: 'Wrapper'
          });
          break;
        case 'dataLine':
          this.$router.push({
            name: 'DataLine'
          });
          break;
        case 'suit':
          this.$router.push({
            name: 'Suit'
          });
          break;
        case 'life':
          this.$router.push({
            name: 'Life'
          });
          break;
      }
    },
    gotoIndex () {
      this.$router.push({
        name: 'Index'
      });
    },
    showChildren () {
      this.childrenShow = true;
      this.flag1 = !this.flag1;
      this.flag2 = !this.flag2;
    },
    hideChildren () {
      this.childrenShow = false;
      this.flag1 = !this.flag1;
      this.flag2 = !this.flag2;
    },
    showUser () {
      this.userShow = true;
      this.flag4 = !this.flag4;
    },
    hideUser () {
      this.userShow = false;
      this.flag4 = !this.flag4;
    },
    showCart () {
      this.cartShow = true;
      this.flag3 = !this.flag3;
    },
    hideCart () {
      this.cartShow = false;
      this.flag3 = !this.flag3;
    },
    // 获取数据的方法
    async getNavData () {
      const {data} = await axios.get('/api/nav');
      this.navData = data;
    },
    async getChildren () {
      const {data} = await axios.get('/api/nav_children');
      this.navChildren = data;
    }
  },
  mounted () {
    this.getNavData();
    this.getChildren();
  },
  components: {

  }
};
</script>

<style lang="less" scoped>
  .header{
    width: 100%;
    background-color: #ffffff;
    position: relative;

    .header-wrapper{
      width: 1240px;
      margin: 0 auto;

      .header-logo{
        width: 30px;
        height: 30px;
        font-size: 34px;
        margin: 5px 0 0 35px;
        cursor: pointer;
      }

      .header-search,.header-cart,.header-user{
        font-size: 23px;
        padding: 13.3px 20px;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        transition: all .2s;
      }

      .header-cart{
        position: relative;

        .prompt{
          width: 20px;
          height: 20px;
          background-color: #eb0028;
          font-size: 12px;
          color: #ffffff;
          position: absolute;
          top: 30px;
          left: 35px;
          border-radius: 50%;
          text-align: center;
          line-height: 20px;
        }
      }

      .header-cart:hover,.header-user:hover{
        border-bottom: 2px solid black;
      }

      .keepStyle3,.keepStyle4{
        border-bottom: 2px solid black;
      }
      /*.header-cart:hover .icon-cart:before,.header-user:hover .icon-user:before{*/
        /*color: black;*/
        /*transition: all .7s;*/
      /*}*/
      .header-nav{
        margin-right: 225px;

        li{
          display: inline-block;
        }

        .keepStyle1{
          border-bottom: 2px solid #e70027!important;
          color: #ee0066!important;
        }
        .nav-item{
          display: inline-block;
          padding: 20px  35px;
          transition: all .3s;
          border-bottom: 2px solid #ffffff;
          color: #868482;
          font-weight: 500;
          position: relative;

          .keepStyle2{
            transform-origin: top;
            transform:translateY(8px)  rotate(180deg);
            border-color: #eb0028 transparent transparent transparent!important;
          }

          &:hover{
            border-bottom: 2px solid #e70027;
            color: #ee0066;
          }

          .arrow{
            width: 0px;
            height: 0px;
            border: 5px solid ;
            border-color: #868482 transparent transparent transparent;
            position: absolute;
            top: 26px;
            left: 70px;
            transition: .2s all;
          }
          &:hover .arrow{
            transform-origin: top;
            transform:translateY(8px)  rotate(180deg);
            border-color: #eb0028 transparent transparent transparent;
          }
        }
      }
    }
  }
  .store-children{
    width: 100%;
    height: 140px;
    background-color: #ffffff;
    border-top: 1px solid #dfdfdf;
    position: absolute;
    left: 0;
    top: 63px;
    /* z-index 为正，比默认z-index:auto; /0    要更高级， 层叠在上*/
    z-index: 1;
    box-shadow: 0 10px 15px rgba(0,0,0,.1);

    .children-wrapper{
      width: 1240px;
      margin: 0 auto;
      padding-left: 200px;
      padding-top: 40px;

      .children-item{
        width: 100px;
        height: 55px;
        display: inline-block;
        margin-right: 50px;
        /*border: 1px solid ;*/
        text-align: center;
        cursor: pointer;

        span{
          font-size: 26px;
        }
        &:hover .icon-phone:before,
        &:hover .icon-shujuxian:before,
        &:hover .icon-phonewrapper:before,
        &:hover .icon-chongdianqi:before,
        &:hover .icon-zhoubianyou:before,
        &:hover p{
          color: #e70027;
        }
      }
    }
  }
  .user-children-wrapper{
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
    width: 321px;
    height: 276px;
    border-top: 1px solid #dfdfdf;
    background-color: white;
    position: absolute;
    top: 63px;
    right: 132px;
    z-index: 1;
    padding: 22px 20px;
    /* z-index 为正，比默认z-index:auto; /0    要更高级， 层叠在上*/
    /* 层叠顺序：正z-index > z-index:auto/0; > inline/inline-block盒子 > float浮动盒子 > block块状 > 负z-index > background/border层叠上下文*/
    .user-children{
      width: 282px;
      height: 134px;

      .order{
        border-bottom: 1px solid #dfdfdf;
        width: 282px;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        color: #928492;
        padding-left: 3px;
        cursor: pointer;

        &:hover{
          color: black;
          transition: all .3s;
        }
      }
      .sign-out{
        width: 150px;
        height: 15px;
        margin-top: 43px;
        a{
          color: #00c3f9;
          font-size: 15px;
        }

        &:hover a{
          text-decoration: underline;
        }
      }
    }
  }
  .cart{
    width: 401px;
    background-color: white;
    position: absolute;
    top: 63px;
    right: 73px;
    z-index: 1;
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
    /* 有货 */
    .haveGoods{
      width: 401px;
      border-top: 1px solid #dfdfdf;

      .checkInfo{
        width: 360px;
        height: 60px;
        margin: 0 auto;
        line-height: 60px;

        span:nth-of-type(1){
          font-size: 20px;
          font-weight: 100;
          color: #3a3a3a;
        }
        span:nth-of-type(2){
          font-size: 14px;
          color: #888888;
        }
      }

      .goodsWrapper{
        width: 360px;
        margin: 0 auto;

        .goods_item{
          height: 112px;
          border-top: 1px solid #dfdfdf;
          padding-top: 21px;
          box-sizing: border-box;

          div{
            margin-left: 15px;
          }

          .info{
            width: 225px;
            line-height: 27px;
            color: #464646;
            font-weight: 100;
          }
          .count{
            margin-top: 20px;
            color: #464646;
          }
        }

        .pic{
          width: 66px;
          height: 66px;
          background-color: #f6f6f6;
          text-align: center;
          box-sizing: border-box;
          padding-top: 5px;

          img{
            height: 57px;
          }
        }
      }
      .totalPrice{
        height: 95px;
        width: 100%;
        border-top: 1px solid #dfdfdf;
        text-align: right;
        box-sizing: border-box;
        padding: 18px 20px 0 0;

        p{
          font-size: 15px;
          font-weight: 200;
          color: #848484;
        }

        span{
          font-size: 25px;
          color: #000;
        }
      }

      .twoBth{
        width: 365px;
        height: 58px;
        margin: 0 auto;

        .btn1{
          margin-right: 11px;
          width: 176px;
          height: 40px;

          .inner1{
            width: 176px;
            height: 40px;
            /*让里面案例根据这个进行绝对定位*/
            position: relative;
            overflow: hidden;
            border: 1px solid black;

            &:hover .shadow1{
              transform: translateX(0);
            }
            &:hover button{
              color: white;
              transition: all .3s;
            }
          }

          .shopCart{
            border: none;
            width: 174px;
            height: 38px;
            background-color: transparent;
            /* 这就是深灰色 */
            color: rgb(0,0,0.5);
            font-weight: 100;
            cursor: pointer;
            position: absolute;
            left: 0;
            top: 0;
          }

          .shadow1{
            width: 174px;
            height: 38px;
            background-color: #000;
            transform: translateX(-174px);
            transition: all .3s;
          }
        }

        .btn2{
          width: 176px;
          height: 40px;

          .inner2{
            width: 176px;
            height: 40px;
            /*让里面案例根据这个进行绝对定位*/
            position: relative;
            overflow: hidden;
            cursor: pointer;

            &:hover .shadow2{
              transform: translateX(0);
            }

            .pay{
              width: 175px;
              height: 39px;
              border: none;
              background-color: #eb0028;
              color: white;
              position: absolute;
              left: 0;
              top: 0;
            }

            .shadow2{
              width: 175px;
              height: 39px;
              background-color: rgba(0,0,0,0.7);
              opacity: .3;
              transform: translateX(-174px);
              transition: all .3s;
            }
          }
        }
      }
    }

    /* 无货 */
    .empty{
      width: 401px;
      height: 190px;
    }
    .cart-top{
      height: 109px;
      width: 401px;
      border-bottom: 1px solid #dfdfdf;
      font-size: 16px;
      color: #a6b3b7;
      text-align: center;
      line-height: 109px;
      border-top: 1px solid #dfdfdf;
      font-weight: 100;
    }

    .cart-bottom{
      height: 80px;
      width: 401px;
      /*position: relative;*/

      .bottom-wrapper{
        width: 359px;
        height: 40px;
        overflow: hidden;
        /*border: 1px solid red;*/
        margin: 21px 0 0 20px;

        .bottom-inner{
          width: 718px;
          height: 40px;
          cursor: pointer;
          &:hover .test{
            transform: translateX(0px);
          }
        }
      }

      .goShopping{
        width: 359px;
        height: 40px;
        background-color: #eb0028;
        border: none;
        border-radius: 4px;
        font-weight: 400;
        color: white;
      }
    }
  }
  .test{
    width: 359px;
    height: 40px;
    background-color: rgba(0,0,0,0.7);
    opacity: .3;
    transform: translateX(-359px);
    transition: all .2s;
  }
</style>
