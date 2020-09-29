<template>
  <div class="recommendItem">
    <div><img v-lazy="item.image" /></div>
    <p>{{ item.title }}</p>
    <div>
      <span class="firstSpan">{{ item.price }}</span>
      <span>收藏：{{ item.itemLikes }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendItem",
  props: {
    item: {
      type: Object
    }
  }
};
</script>
<style scoped>
.recommendItem {
  font-size: 14px;
  width: 50%;
  text-align: center;
}
.recommendItem div {
  margin: 0px auto;
  width: 95%;
}
.recommendItem div img {
  border-radius: 5px;
  width: 100%;
}
p {
  height: 18px;
  line-height: 18px;
  padding: 0px 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.firstSpan {
  color: rgb(252, 92, 118);
  line-height: 20px;
  padding-right: 15px;
}
</style>
