<template>
  <ul>
    <li><span></span><span>我的消息</span></li>
    <li><span></span><span>积分商城</span></li>
    <li><span></span><span>会员卡</span></li>
    <li><span></span><span>我的购物车</span></li>
    <li><span></span><span>下载购物APP</span></li>
  </ul>
</template>

<script>
export default {
  name: "ProfileList"
};
</script>

<style scoped>
@font-face {
  font-family: "icomoon";
  src: url("~assets/fonts/icomoon.eot?3z4c1x");
  src: url("~assets/fonts/icomoon.eot?3z4c1x#iefix") format("embedded-opentype"),
    url("~assets/fonts/icomoon.ttf?3z4c1x") format("truetype"),
    url("~assets/fonts/icomoon.woff?3z4c1x") format("woff"),
    url("~assets/fonts/icomoon.svg?3z4c1x#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

ul li {
  height: 35px;
  line-height: 35px;
  border-bottom: 0.5px solid rgb(236, 233, 233);
}

ul li span {
  margin-left: 15px;
}
ul li span:first-child {
  font-family: "icomoon";
  margin-left: 10px;
  color: rgb(248, 95, 120);
}
</style>
