<template>
  <div id="detailTabBar">
    <ul>
      <li>
        <div class="one"></div>
        <span>客服</span>
      </li>
      <li>
        <div class="two"></div>
        <span>店铺</span>
      </li>
      <li @click="collect">
        <div class="three" :class="{ isCollect: isCollect }"></div>
        <span>收藏</span>
      </li>
      <li class="four" @click="addToCart">加入购物车</li>
      <li class="five">购买</li>
    </ul>
    <div id="remind">
      {{ changeState ? "添加至购物车" : "从购物车删除" }}
      <div class="triangle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTabBar",
  data() {
    return {
      isCollect: false,
      changeState: false,
      isTrigger: false
    };
  },
  methods: {
    //点击收藏按钮
    collect: function() {
      this.isCollect = !this.isCollect;
    },
    addToCart: function() {
      //发送给父组件，在父组件获取该货物的id，并存在vuex中
      this.changeState = !this.changeState; //用于区分是添加至购物车还是从购物车中移除
      this.$emit("addToCart", this.changeState);
      //控制着提示栏的显示与隐藏
      const remind = document.getElementById("remind");
      remind.style.animation = "toHidden 4s ease-in";
      setTimeout(() => {
        remind.style.animation = null;
      }, 3000);
    }
  }
};
</script>

<style>
#detailTabBar {
  position: fixed;
  height: 49px;
  background-color: white;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 10;
}
#detailTabBar ul {
  display: flex;
  font-size: 14px;
  text-align: center;
}
#detailTabBar ul li:nth-child(-n + 3) {
  width: 15%;
  font-size: 14px;
}
#detailTabBar ul li:nth-child(-n + 3) div {
  background-image: url("~assets/img/detail/detail_bottom.png");
  background-repeat: no-repeat;
  background-size: 35%;

  height: 28px;
  width: 100%;
}
.one {
  background-position: 18px -42px;
}
.two {
  background-position: 21px -82px;
}
.three {
  background-position: 21px 6px; /*-19*/
}
ul li .isCollect {
  background-position: 21px -19px;
}
#detailTabBar ul li:nth-child(n + 4) {
  width: 27.5%;
  line-height: 49px;
}
.four {
  font-weight: 600;
  background-color: rgb(228, 228, 53);
}
.five {
  background-color: rgb(252, 92, 118);
  color: white;
}
#remind {
  position: absolute;
  height: 50px;
  width: 120px;
  line-height: 50px;
  text-align: center;
  top: -75px;
  left: 130px;
  z-index: 100;
  background-color: rgb(245, 148, 163);
  opacity: 0;
}
@keyframes toHidden {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
#remind .triangle {
  position: absolute;
  top: 50px;
  left: 70px;
  height: 0px;
  width: 0px;
  border-top: 15px solid rgb(245, 148, 163);
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
  z-index: 100;
}
</style>
