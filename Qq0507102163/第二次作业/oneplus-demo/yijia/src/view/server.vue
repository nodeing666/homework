<template>
  <div>
    <v-header></v-header>
    <!--服务搜索-->
    <div class="search-server">
      <img class="bg"  src="../assets/images/server.png" alt="">
      <div class="search-input clearfix">
        <div class="left fl">
          <span class="icon-moon icon-search"></span>
        </div>
        <div class="right fl">
          <input type="text" placeholder="搜索服务">
        </div>
      </div>
    </div>
    <!--常用服务-->
    <div class="frequently-server">
      <div class="title">
        常用服务
      </div>
      <div class="server-group">
        <ul class="clearfix">
          <li class="server-item fl" v-for="(item, index) in ServerData" :key="index">
            <a href="javascript:">
              <div class="logo">
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="server-title">
                {{ item.title }}
              </div>
              <div class="server-content">
                <div class="inner">
                  {{ item.content }}
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--热门主题-->
    <div class="hot-topic">
      <div class="topic-title">
        热门主题
      </div>
      <div class="topic-wrapper">
        <ul class="topic-item-wrapper">
          <li class="topic-item clearfix" v-for="(item, index) in HotTopicData" :key="index">
            <div class="advertise-pic fl">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="article-wrapper fr">
              <div class="title">{{ item.title }}</div>
              <div class="content">
                {{ item.content }}
              </div>
              <div class="detail">
                <a :href="item.href">查看详情 &nbsp;></a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--发现更多-->
    <div class="find-more">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <!--联系我们-->
    <div class="contact-us">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/javascript">
import vHeader from '../components/header';
import vFooter from '../components/footer';
import axios from 'axios';
export default {
  data () {
    return {
      ServerData: [],
      HotTopicData: []
    };
  },
  methods: {
    async getServerData () {
      const { data } = await axios.get('/api/commonServices');
      this.ServerData = data;
    },
    async getHotTopicData () {
      const { data } = await axios.get('/api/hotTopic');
      this.HotTopicData = data;
    }
  },
  mounted () {
    this.getServerData();
    this.getHotTopicData();
  },
  components: {
    vHeader,
    vFooter
  }
};
</script>

<style lang="less" scoped>
  .search-server{
    width: 100%;
    height: 600px;
    position: relative;

    .bg{
      height: 600px;
      z-index: -1;
    }
    .search-input{
      height: 51px;
      width: 601px;
      position: absolute;
      top: 212px;
      left: 374px;
      background-color: #fff;

      .left{
        width: 58px;
        height: 51px;
        font-size: 18px;
        padding: 16px 10px 0 30px;
      }
      .right{
        width: 543px;
        height: 51px;

        input{
          width: 543px;
          height: 51px;
          border: none;
          font-size: 16px;
          font-weight: 100;
        }
      }
    }
  }
  .frequently-server{
    width: 100%;
    height: 1019px;
    background-color: #f9f9f9;

    .title{
      height: 209px;
      font-size: 36px;
      text-align: center;
      line-height: 209px;
      font-weight: 100;
    }

    .server-group{
      width: 1187px;
      height: 720px;
      margin: 0 auto;

      .server-item{
        height: 349px;
        width: 277px;
        background-color: #fff;
        margin-right: 26px;
        transition: all .2s;

        &:hover{
          transform: translateY(-10px);
          box-shadow:  0 5px 10px rgba(0,0,0,0.15);
          transition: all .2s;
        }

        &:nth-of-type(1),&:nth-of-type(2),&:nth-of-type(3),&:nth-of-type(4){
          margin-bottom: 20px;
        }

        &:nth-of-type(4),&:nth-of-type(8){
          margin-right: 0;
        }

        .logo{
          height: 224px;
          text-align: center;
          line-height: 224px;
          padding-top: 23px;
          img{
            height: 70px;
          }
        }

        .server-title{
          height: 30px;
          font-size: 24px;
          font-weight: 100;
          text-align: center;
          line-height: 0.8;
        }
        .server-content{
          height: 95px;
          padding: 8px 0 0 23px;

          .inner{
            width: 230px;
            height: 40px;
            text-align: center;
            font-weight: 100;
          }
        }
      }
    }
  }
  .hot-topic{
    height: 2209px;
    background-color: #fff;

    .topic-title{
      height: 209px;
      font-size: 35px;
      text-align: center;
      line-height: 209px;
      font-weight: 100;
    }

    .topic-wrapper{
      height: 2000px;
      width: 1200px;
      margin: 0 auto;

      .topic-item-wrapper{
        font-size: 0;
      }

      .topic-item{
        width: 1200px;
        height: 300px;
        margin-bottom: 100px;

        img{
          height: 300px;
          cursor: pointer;
        }

        .article-wrapper{
          width: 514px;
          height: 300px;
          padding-top: 20px;

          .title{
            height: 100px;
            font-size: 36px;
            font-weight: 100;
            line-height: 1.2;
          }

          .content{
            height: 145px;
            font-size: 16px;
            font-weight: 100;

            &:nth-of-type(2){
              padding-top: 20px;
            }
          }

          .detail{
            font-size: 16px;
            color: #0099cc;
            font-weight: 600;
          }
        }
      }
    }
  }
</style>
