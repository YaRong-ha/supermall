import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  productList: []
};
const mutations = {
  addToCart: function(state, payload) {
    let hasProduct = state.productList.find(item => {
      return item.iid === payload.iid;
    }); //当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数；如果没找到则返回undefine
    if (hasProduct) {
      hasProduct.count += 1;
    } else {
      payload.count = 1;
      state.productList.push(payload);
    }
  },
  removeFromCart: function(state, payload) {
    for (let index in state.productList) {
      if (state.productList[index].iid === payload) {
        state.productList.splice(index, 1); //从数组中删除该元素
        break;
      }
    }
  }
};
const actions = {};
const getters = {};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
