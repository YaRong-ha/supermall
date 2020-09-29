<template>
  <ul>
    <li>
      <p><span>0.00</span>元</p>
      <p>我的余额</p>
    </li>
    <li>
      <p><span>0</span>个</p>
      <p>我的优惠</p>
    </li>
    <li>
      <p><span>0</span>分</p>
      <p>我的积分</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProfileRemain"
};
</script>

<style scoped>
ul {
  display: flex;
  height: 80px;
  border-bottom: 10px solid rgb(238, 236, 236);
}
ul li {
  box-sizing: border-box;
  flex: 1;
  height: 80px;
  padding-top: 20px;
  text-align: center;
  font-size: 13px;
  border-right: 1px solid rgb(238, 236, 236);
}
ul li:last-child {
  border: 0px;
}
ul li p span {
  font-size: 20px;
  color: rgb(248, 95, 120);
}
</style>
