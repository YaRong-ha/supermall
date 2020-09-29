<template>
  <div class="backTop">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop"
};
</script>

<style scoped>
.backTop {
  position: fixed;
  right: 20px;
  bottom: 60px;
  height: 40px;
  width: 40px;
  z-index: 1005;
}
img {
  width: 40px;
  height: 40px;
}
</style>
