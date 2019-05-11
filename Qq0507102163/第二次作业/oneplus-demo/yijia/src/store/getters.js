const getters = {
  // 已选择的商品数
  CHOOSE_GOODS (state) {
    let total = 0;
    state.shopcartData.forEach((item) => {
      total += item.count;
    });
    return total;
  },
  // 选中商品的总价
  TOTAL_PRICE (state) {
    let price = 0;
    state.shopcartData.forEach((item) => {
      price += item.count * item.goodsPrice;
    });
    price = price.toFixed(2).toString();
    return price;
  },
  // 选中商品总价（未打折）
  OLD_TOTAL_PRICE (state) {
    let price = 0;
    state.shopcartData.forEach((item) => {
      price += item.count * item.oldPrice;
    });
    price = price.toFixed(2).toString();
    return price;
  }
};

export default getters;
