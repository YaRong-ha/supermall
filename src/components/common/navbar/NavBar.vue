<template>
  <div class="navBar" :style="{ backgroundColor: navBarColor }">
    <div class="left"><slot name="left"></slot></div>
    <div class="middle"><slot name="middle"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NarBar",
  props: {
    navBarColor: {
      //动态决定navBar的颜色，默认粉红
      type: String,
      default: "rgb(252, 92, 118)",
    },
  },
};
</script>

<style scoped>
.navBar {
  display: flex;
  position: fixed;
  top: 0px;
  z-index: 10;
  width: 100%;

  height: 44px;
  line-height: 44px;
  text-align: center;
}

.navBar .left,
.navBar .right {
  width: 60px;
  height: 44px;
}
.navBar .middle {
  flex: 1;
}
</style>
