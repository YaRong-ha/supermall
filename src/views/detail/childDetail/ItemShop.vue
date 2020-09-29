<template>
  <div id="ItemShop" v-if="Object.keys(shop).length !== 0">
    <div class="shopIcon">
      <img :src="shop.logo" />
      <h5>{{ shop.name }}</h5>
    </div>
    <div class="shopState">
      <div class="left">
        <ul>
          <li>{{ shop.sells }}</li>
          <li>{{ shop.goodsCount }}</li>
          <li>总销量</li>
          <li>全部宝贝</li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li
            v-for="(item, index) in shop.score"
            :key="index"
            :class="{ isBetter: item.isBetter }"
          >
            <span class="firstSpan">{{ item.name }}</span
            ><span>{{ item.score }}</span
            ><span>{{ item.isBetter ? "高" : "低" }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="enterShop">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemShop",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
#ItemShop {
  border-bottom: 2px solid rgb(236, 234, 234);
}
.shopIcon img {
  box-sizing: border-box;
  border-radius: 50%;
  border: 1px solid rgb(236, 234, 234);
  width: 50px;
  height: 50px;
  vertical-align: middle;
  margin: 20px 5px;
}
.shopIcon h5 {
  display: inline-block;
  font-weight: 400;
}
.shopState {
  display: flex;
  height: 60px;
}
.left,
.right {
  flex: 1;
  font-size: 12px;
}
.left ul {
  display: flex;
  flex-wrap: wrap;
  height: 40px;
  padding: 10px 0;
  text-align: center;
  border-right: 1px solid rgb(236, 234, 234);
}
.left ul li {
  height: 20px;
  width: 50%;
  line-height: 20px;
}
.right ul li {
  height: 20px;
  line-height: 20px;
  padding: 0px 20px;
}
.right ul li span {
  display: inline-block;
  min-width: 30px;
  height: 16px;
  line-height: 16px;
  padding: 0 5px;
}
.right ul li .firstSpan {
  color: black;
}
.right ul li {
  color: green;
}
.right ul li span:last-child {
  min-width: 5px;
  color: white;
  background-color: green;
}
.right ul .isBetter {
  color: red;
}
.right ul .isBetter span:last-child {
  color: white;
  min-width: 5px;
  background-color: red;
}
#ItemShop .enterShop {
  text-align: center;
  padding: 10px 0px 20px 0px;
}
#ItemShop .enterShop span {
  display: inline-block;
  font-size: 12px;
  padding: 3px 20px;
  background-color: rgb(236, 234, 234);
  border-radius: 5px;
}
</style>
