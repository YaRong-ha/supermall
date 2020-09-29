<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  components: {}
};
</script>

<style scoped>
.tabbar {
  display: flex; /* flex使得内部子组件水平排列 */
  position: fixed;
  height: 49px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #f6f6f6;
}
</style>
