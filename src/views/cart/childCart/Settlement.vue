<template>
  <div class="settle">
    <div class="left">
      <div :class="{ allChose: judge.finalResult }" @click="allChosed">
        <img src="~assets/img/cart/tick.svg" />
      </div>
      <span>全选</span>
      <span>合计:￥{{ allPrice }}</span>
    </div>
    <div class="right">
      <span>去结算({{ buyCount }})</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settlement",
  props: {
    allPrice: {
      type: Number
    },
    buyCount: {
      type: Number,
      default: 0
    },
    judge: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return { allChose: Boolean };
  },
  computed: {},
  methods: {
    allChosed: function() {
      this.judge.finalResult = !this.judge.finalResult;
      if (this.judge.finalResult) {
        this.$bus.$emit("all"); //告诉cartList组件，是全选中状态
        this.$emit("calcPrice"); //计算总价
      } else {
        this.$bus.$emit("cancelAll"); //告诉cartList组件，是全取消状态
        this.$emit("emptyPrice"); //价格为0
      }
    }
  }
};
</script>

<style scoped>
.settle {
  display: flex;
  position: fixed;
  bottom: 49px;
  left: 0px;
  right: 0px;
  height: 40px;
  background-color: yellow;
  z-index: 10;
  font-size: 14px;
}
.left {
  box-sizing: border-box;
  width: 70%;
  height: 100%;
  padding: 10px 0;
  background-color: rgb(224, 220, 220);
}
.left div {
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid rgb(177, 173, 173);
  margin-left: 10px;
  margin: 0px 5px 0px 12px;
}
.allChose {
  background-color: rgb(252, 92, 118);
}
.left div img {
  padding: 2px;
  vertical-align: baseline;
}

.left span:last-child {
  display: inline-block;
  margin-left: 15px;
  font-size: 16px;
}
.right {
  flex: 1;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: white;
  background-color: rgb(253, 100, 44);
}
</style>
