<template>
  <div class="footer">
    <div class="footer-top">
      <div class="top-wrapper clearfix">
        <div class="listLink fl">
          <ul class="clearfix list-group">
            <li class="item" v-for="(item,index) in footerLinkData" :key="index">
              <p>{{item.title}}</p>
              <ul>
                <li class="item-list" v-for="(item2,index2) in item.list" :key="index2">{{item2.link}}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="customerService fr">
          <p>400-888-1111</p>
          <div class="customerServer-online">
            <div class="inner">
              <div class="shadow"></div>
              <button>在线客服</button>
            </div>
          </div>
          <p>周一至周日 9:00 - 22:00</p>
          <div class="icon-logo">
            <span class="icon-moon icon-weixin"></span>
            <span class="icon-moon icon-weibo"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="bottom-wrapper">
        <div class="upper clearfix">
          <div class="upper-left">
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1578761469,3386054634&fm=26&gp=0.jpg" alt="">&nbsp;&nbsp;中国(简体中文/CNY)
          </div>
          <div class="upper-right fr clearfix">
            <ul>
              <li class="china-item fl" v-for="(item,index) in chinaData" :key="index">{{item.link}}</li>
            </ul>
          </div>
        </div>
        <div class="under clearfix">
          <div class="under-left fl">
            <p>© 2013-2019 OnePlus. All Rights Reserved.</p>
            <p>粤ICP备13080605号-4 | 备案主体编号: 44201910955995</p>
            <div>
              <img src="https://statics.oneplus.cn/ov/assets/images/footer/badge.png" alt="">粤公网安备44030402001407号
            </div>
          </div>
          <div class="under-right fr clearfix">
            <div class="bottom1 fl">
              <img src="https://image01.oneplus.cn/shop/201811/13/835/51638e8fd2593c56856278feb794b506.png" alt="">
            </div>
            <div class="bottom2 fl">
              <img src="https://statics.oneplus.cn/ov/assets/images/footer/cnnic.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios';
export default {
  data () {
    return {
      footerLinkData: [],
      chinaData: []
    };
  },
  methods: {
    async getFooterLinkData () {
      const {data} = await axios.get('/api/footerLink');
      this.footerLinkData = data;
    },
    async getChinaData () {
      const {data} = await axios.get('/api/china');
      this.chinaData = data;
    }
  },
  mounted () {
    this.getFooterLinkData();
    this.getChinaData();
  },
  components: {

  }
};
</script>

<style lang="less" scoped>
  .footer{
    width: 100%;

    .footer-top{
      width: 100%;
      background-color: #fcfcfc;
      border-top: 1px solid #E2E2E2;

      .top-wrapper{
        width: 1200px;
        height: 313px;
        margin: 0 auto;
        /*border: 1px solid red;*/

        .listLink{
          width: 825px;
          height: 313px;
          /*border: 1px solid red;*/
          padding: 51px 20px 40px 22px;
          box-sizing: border-box;

          .item{
            float: left;
            &:nth-of-type(1),&:nth-of-type(2),&:nth-of-type(3){
              margin-right: 152px;
            }

            p{
              font-size: 15px;
              color: #101920;
              margin-bottom: 25px;
            }

            li{
              font-size: 14px;
              color: #828492;
              margin-bottom: 20px;
              font-weight: 500;
              cursor: pointer;
            }
          }
        }
        .customerService{
          width: 240px;
          height: 235px;
          /*border: 1px solid red;*/
          padding-top: 50px;
          text-align: center;

          p:nth-of-type(1){
            font-size: 20px;
            color: #000;
          }

          p:nth-of-type(2){
            font-size: 16px;
            color: #626262;
            margin-top: 20px;
          }
        }

        .customerServer-online{
          width: 240px;
          height: 50px;
          border: 1px solid #000;
          margin-top: 22px;
          background-color: #fff;

          .inner{
            width: 240px;
            height: 50px;
            overflow: hidden;
            position: relative;

            &:hover .shadow{
              transform: translateX(0);
            }
            &:hover button{
              color: #fff;
            }

            button{
              border: none;
              width: 240px;
              height: 50px;
              background-color: transparent;
              font-size: 16px;
              cursor: pointer;
              position: absolute;
              top: 0;
              left: 0;
            }

            .shadow{
              width: 240px;
              height: 50px;
              background-color: #000;
              transform: translateX(-240px);
              transition: all .3s;
            }
          }
        }
        .icon-logo{
          width: 75px;
          height: 19px;
          /*border: 1px solid;*/
          margin: 24px auto;

          span{
            font-size: 24px;
            margin-left: 5px;
          }
        }
      }
    }
    .footer-bottom{
      width: 100%;
      height: 262px;
      background-color: #f9f9f9;

      .bottom-wrapper{
        width: 1200px;
        margin: 0 auto;
        /*border: 1px solid red;*/

        .upper{
          width: 1200px;
          height: 121px;
          border-bottom: 1px solid #e0e0e0;
          position: relative;

          .upper-left{
            width: 183px;
            height: 18px;
            font-size: 16px;
            position: absolute;
            top: 48px;
            left: 29px;

            img{
              width: 18px;
              height: 14px;
              vertical-align: middle;
            }
          }
        }

        .upper-right{
          width: 580px;
          height: 15px;
          /*border: 1px solid red;*/
          position: absolute;
          top: 50px;
          right: 40px;

          .china-item{
            font-size: 12px;
            color: #323232;
            width: 93px;
            border-right: 1px solid #e0e0e0;
            text-align: center;
            height: 12px;
            cursor: pointer;

            &:nth-of-type(6){
              border: none;
            }

            &:nth-of-type(4),&:nth-of-type(5){
              margin: 0 5px;
            }
          }
        }
        .under{
          width: 1200px;
          height: 140px;

          .under-left{
            width: 312px;
            height: 79px;
            /*border: 1px solid red;*/
            margin: 30px 0 0 18px;

            div{
              font-size: 15px;
              color: #3d1849;

              img{
                vertical-align: middle;
              }
            }

            p{
              font-size: 10px;
              color: #9f9f9c;

              &:nth-of-type(1){
                margin-bottom: 14px;
              }

              &:nth-of-type(2){
                margin-bottom: 8px;
              }
            }
          }

          .under-right{
            width: 190px;
            height: 30px;
            margin: 25px 0 0 16px;

            .bottom2{
              margin-left: 25px;
            }

            img{
              width: 80px;
              height: 30px;
            }
          }
        }
      }
    }
  }
</style>
