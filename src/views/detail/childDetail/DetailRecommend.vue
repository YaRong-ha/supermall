<template>
  <div id="recommend">
    <recommend-item
      v-for="(item, index) in recommend"
      :key="index"
      :item="item"
    ></recommend-item>
  </div>
</template>
<script>
import RecommendItem from "views/detail/childDetail/RecommendItem";
export default {
  name: "DetailRecommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    RecommendItem
  }
};
</script>

<style scoped>
#recommend {
  display: flex;
  flex-wrap: wrap;
}
</style>
