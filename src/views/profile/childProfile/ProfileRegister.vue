<template>
  <div class="register">
    <div class="left"><img src="~assets/img/profile/timg.jpg" /></div>
    <div class="middle">
      <ul>
        <li><span>登陆/注册</span></li>
        <li><span>暂无绑定手机号</span></li>
      </ul>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "ProfileRegister"
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

.register {
  box-sizing: border-box;
  display: flex;
  height: 100px;
  width: 100%;
  background-color: rgb(248, 95, 120);
  margin-top: 44px;
  padding-top: 20px;
}
.left {
  width: 100px;
  height: 100px;
  text-align: center;
}
.left img {
  width: 60%;
  border-radius: 30px;
}
.middle {
  flex: 1;
  padding-top: 8px;
}
.middle ul li {
  font-size: 14px;
  color: white;
  height: 20px;
  line-height: 20px;
}
.middle ul li:last-child {
  font-size: 12px;
}
.middle ul li:last-child span::before {
  display: inline-block;
  font-family: "icomoon";
  content: "";
  font-size: 18px;
}
.right {
  font-family: "icomoon";
  width: 30px;
  color: white;
  font-size: 20px;
  padding-top: 20px;
}
</style>
