import Vue from 'vue';
const mutations = {
  // 在mutations中，第一个参数可以直接拿到状态，第二个参数是视图层传过来的单条数据对象
  ADD_SHOPCART (state, obj) {
    // 若购物车中已存在当前商品，即多次点击加入购物车，则从第二次开始，每次点击不会再添加一整条商品数据，而是增加商品总数即可
    // 一来数据量传输小，二来方便取到该商品的数量值，  在将商品数据push到总购物车数据之前，做判断
    let haveData = false;
    // 1.先遍历查看当前数据在购物车中有没有存在
    state.shopcartData.forEach((item) => {
      if (item.id === obj.data.id) { // 若存在这条数据
        haveData = true;
        // 已有的商品总数累加即可
        item.count += obj.num;
      }
    });
    // 如果购物车没有这个商品，无这条数据
    if (!haveData) {
      // 第一次将该商品数据添加到购物车中，添加数量属性, 通过Vue的set 方法
      // 第一个参数是数据对象，第二个参数是新的属性名，第三个参数是设置的新值
      Vue.set(obj.data, 'count', obj.num);
      state.shopcartData.push(obj.data); // 每个新来的商品组装好新的数据对象后在发送到shopcartData
    }
  },
  // 增加商品数量
  INCREASE_SHOPCART (state, id) {
    state.shopcartData.forEach((item) => {
      if (item.id === id) { // 当前操作的这个商品
        item.count++;
      }
    });
  },
  // 减少商品数量
  DECREASE_SHOPCART (state, id) {
    state.shopcartData.forEach((item) => {
      if (item.id === id && item.count > 1) { // 当前商品数量大于1 才可以减
        item.count--;
      }
    });
  },
  // 删除商品
  DELETE_SHOPCART (state, id) {
    state.shopcartData = state.shopcartData.filter((item) => {
      return item.id !== id;
    });
  },
  // 清空购物车商品
  EMPTY_CART (state) {
    state.shopcartData = [];
  }
};

export default mutations;
