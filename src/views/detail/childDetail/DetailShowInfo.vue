<template>
  <div id="detailShowInfo" v-if="Object.keys(detailShow).length !== 0">
    <div class="titleInfo">
      <ul>
        <li>
          <span></span>
          <div></div>
        </li>
        <li>{{ detailShow.desc }}</li>
        <li class="right">
          <div></div>
          <span></span>
        </li>
        <li>{{ detailShow.key }}</li>
      </ul>
    </div>
    <div class="realShow">
      <img
        :src="item"
        v-for="(item, index) in detailShow.img"
        :key="index"
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
import { debounce } from "common/const.js";

export default {
  name: "DetailShowInfo",
  props: {
    detailShow: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoad: function() {
      debounce(function() {
        this.$emit("imgLoad");
      }, 50);
    }
  }
};
</script>

<style scoped>
.titleInfo ul li div {
  display: inline-block;
  width: 80px;
  border-bottom: 1px solid gray;
}
.titleInfo ul li span {
  display: inline-block;
  border: 2px solid black;
}
.titleInfo ul li {
  margin: 5px 10px;
  font-size: 13px;
}
.titleInfo ul .right {
  padding-left: 72%;
}
.titleInfo ul li:last-child {
  font-weight: 600;
}
.realShow img {
  width: 100%;
}
</style>
