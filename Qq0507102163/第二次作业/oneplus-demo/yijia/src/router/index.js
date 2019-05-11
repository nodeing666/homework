import Vue from 'vue';
import Router from 'vue-router';
import Index from '../view/index';
import Phone from '../view/phone';
import Headset from '../view/headset';
import Wrapper from '../view/wrapper';
import DataLine from '../view/dataLine';
import Suit from '../view/suit';
import Life from '../view/life';
import Detail from '../view/detail';
import Shopcart from '../view/shopcart';
import Order from '../view/order';
import Store from '../view/store';
import Server from '../view/server';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/phone',
      name: 'Phone',
      component: Phone
    },
    {
      path: '/headset',
      name: 'Headset',
      component: Headset
    },
    {
      path: '/wrapper',
      name: 'Wrapper',
      component: Wrapper
    },
    {
      path: '/dataLine',
      name: 'DataLine',
      component: DataLine
    },
    {
      path: '/suit',
      name: 'Suit',
      component: Suit
    },
    {
      path: '/life',
      name: 'Life',
      component: Life
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/shopcart',
      name: 'Shopcart',
      component: Shopcart
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/server',
      name: 'Server',
      component: Server
    }
  ]
});
