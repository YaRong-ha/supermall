<template>
  <div id="cart">
    <nav-bar class="nav">
      <h3 slot="middle">购物车({{ allCount }})</h3>
    </nav-bar>
    <better-scroll class="content">
      <cart-list
        v-for="(item, index) in allProduct"
        :key="index"
        :product="item"
        @buy="buy"
      ></cart-list>
    </better-scroll>
    <settlement
      :allPrice="allPrice"
      :buyCount="buyCount"
      @calcPrice="calcPrice"
      @emptyPrice="emptyPrice"
      :judge="judge"
    ></settlement>
  </div>
</template>

<script>
/*eslint-disable */
import NavBar from "components/common/navbar/NavBar";
import CartList from "views/cart/childCart//CartList";
import Settlement from "views/cart/childCart/Settlement";
import BetterScroll from "components/common/betterScroll/BetterScroll";
export default {
  name: "Cart",
  components: {
    NavBar,
    BetterScroll,
    CartList,
    Settlement
  },
  data() {
    return {
      allCount: 0, //购物车物件总数量
      allProduct: [], //保存所有购物车物品
      allPrice: 0, //选中购买的总价格
      buyCount: 0 //选中购买的总数量,
    };
  },
  activated() {
    //非常关键，不使用actived的话，当再次添加商品到购物车时，还是使用上次的旧数据
    this.initialize();
  },
  methods: {
    initialize: function() {
      this.allCount = this.$store.state.productList.length;
      this.allProduct = this.$store.state.productList;
    },
    buy: function(obj) {
      //当用户单个勾选商品时，计算价格以及计算购买数量
      if (obj.active) {
        this.allPrice = this.allPrice + obj.price * obj.count;
        this.buyCount++;
      } else {
        this.allPrice = this.allPrice - obj.price * obj.count;
        this.buyCount--;
      }
    },
    calcPrice: function() {
      //计算全选的价格
      this.allPrice = 0;
      this.buyCount = this.allProduct.length;
      for (let item of this.allProduct) {
        this.allPrice = this.allPrice + item.price * item.count;
      }
    },
    emptyPrice: function() {
      this.allPrice = 0;
      this.buyCount = 0;
    }
  },
  computed: {
    judge: function() {
      return { finalResult: this.buyCount === this.allCount };
    }
  }
};
</script>

<style scoped>
#cart {
  position: relative;
  height: 100vh;
}
.nav {
  color: white;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0px;
  right: 0px;
}
</style>
