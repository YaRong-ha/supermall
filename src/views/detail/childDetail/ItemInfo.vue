<template>
  <div id="itemInfo" v-if="Object.keys(good).length !== 0">
    <p>{{ good.title }}</p>
    <div class="price">
      <span class="newPrice">￥{{ good.realPrice }}</span>
      <span class="oldPrice">{{ good.oldPrice }}</span>
      <span v-if="good.discount" class="discount">{{ good.discount }}</span>
    </div>
    <div class="otherInfo">
      <span>{{ good.columns[0] }}</span>
      <span>{{ good.columns[1] }}</span>
      <span>{{ good.services[0].name }}</span>
    </div>
    <ul>
      <li>
        <img :src="good.services[1].icon" />
        <span>{{ good.services[1].name }}</span>
      </li>
      <li>
        <img :src="good.services[2].icon" />
        <span>{{ good.services[2].name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ItemInfo",
  props: {
    good: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
#itemInfo p {
  font-size: 14px;
  text-indent: 10px;
  font-weight: 600;
  padding: 5px 10px;
}
.price .newPrice {
  font-size: 16px;
  color: rgb(252, 92, 118);
  font-weight: 600;
  padding: 0px 5px 5px 5px;
}
.price .oldPrice {
  font-size: 12px;
  color: rgb(167, 163, 163);
  text-decoration-line: line-through;
}
.price .discount {
  display: inline-block;
  font-size: 14px;
  color: white;
  margin: 0px 10px;
  padding: 2px;
  border-radius: 5px;
  background-color: rgb(252, 92, 118);
}
.otherInfo {
  display: flex;
  height: 30px;
  line-height: 30px;
  justify-content: space-between;
  color: rgb(167, 163, 163);
  border-bottom: 1px solid rgb(236, 234, 234);
}
.otherInfo span {
  padding: 0px 5px;
  font-size: 12px;
}
ul {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  justify-content: space-between;
  border-bottom: 2px solid rgb(236, 234, 234);
}
ul li {
  margin: 0px 5px;
}
ul li img {
  height: 14px;
  width: 14px;
  vertical-align: middle;
  margin-right: 3px;
  margin-bottom: 2px;
}
</style>
