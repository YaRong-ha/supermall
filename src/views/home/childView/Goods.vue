<template>
  <div id="goods">
    <good-item
      v-for="item in chosedItem"
      :key="item.iid"
      :goodContent="item"
    ></good-item>
  </div>
</template>

<script>
import GoodItem from "./GoodItem";
export default {
  name: "Goods",
  props: {
    chosedItem: {
      type: Array
    }
  },
  components: {
    GoodItem
  }
};
</script>

<style>
#goods {
  width: 100%;
  column-count: 2;
  -webkit-column-gap: 0px;
}
</style>
