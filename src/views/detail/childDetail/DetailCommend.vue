<template>
  <div id="detailCommend" v-if="Object.keys(commendInfo).length !== 0">
    <div class="title">
      <span>用户评价</span><span><a href="">更多</a></span>
    </div>
    <div class="userInfo">
      <img :src="commendInfo.user.avatar" />
      <h4>{{ commendInfo.user.uname }}</h4>
    </div>
    <div class="commend">
      <p>{{ commendInfo.content }}</p>
      <span v-for="(item, index) in commendInfo.extraInfo" :key="index">{{
        item
      }}</span>
    </div>
    <div class="commendImg">
      <img
        v-for="(item, index) in commendInfo.images"
        :key="index"
        :src="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailCommend",
  props: {
    commendInfo: {
      type: Object
    }
  }
};
</script>

<style scoped>
#detailCommend {
  font-size: 14px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-top: 2px solid rgb(236, 234, 234);
  border-bottom: 2px solid rgb(236, 234, 234);
}
.title {
  position: relative;
  display: flex;
  height: 40px;
  line-height: 40px;
}
.title span {
  padding-left: 20px;
  flex: 1;
  font-weight: 600;
}
.title span:last-child {
  position: absolute;
  right: 20px;
}
.userInfo {
  border-top: 1px solid rgb(236, 234, 234);
  margin: 0px 20px;
}
.userInfo img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  vertical-align: middle;
  padding: 15px 15px 15px 0px;
}
h4 {
  display: inline-block;
}
.commend {
  margin: 0px 20px;
  line-height: 20px;
}
.commend span {
  font-weight: 300;
  padding: 15px 10px 15px 0;
  color: rgb(141, 135, 135);
}
.commendImg {
  margin: 0 20px;
}
.commendImg img {
  width: 100px;
  height: 150px;
  margin-right: 10px;
}
</style>
