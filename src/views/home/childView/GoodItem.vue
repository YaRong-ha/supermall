<template>
  <div class="goodItem" @click="enterDetail(goodContent.iid)">
    <img v-lazy="goodContent.show.img" />
    <p>{{ goodContent.props[0] }}</p>
    <span
      >￥{{ goodContent.price }}
      <img src="~assets/img/common/collect.svg" />
      {{ goodContent.sale }}
    </span>
  </div>
</template>

<script>
// import { debounce } from "common/const.js";
export default {
  name: "GoodItem",
  props: {
    goodContent: {
      type: Object,
    },
  },
  methods: {
    enterDetail: function (id) {
      this.$router.push("/detail/" + id);
    },
  },
};
</script>

<style>
.goodItem {
  /* 由于父组件是多列布局，这里的百分百相当于屏幕的一半 */
  width: 100%;
  text-align: center;
  -webkit-column-break-inside: avoid;
  margin-top: 10px;
}
.goodItem img {
  border-radius: 10%;
  width: 90%;
  margin: 0 auto;
}
.goodItem p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 0px 15px;
  text-indent: 10px;
}
.goodItem span {
  display: inline-block;
  height: 15px;
  font-size: 14px;
  color: rgb(252, 92, 118);
}
.goodItem span img {
  width: 16px;
  height: 16px;
  vertical-align: bottom;
}
</style>
