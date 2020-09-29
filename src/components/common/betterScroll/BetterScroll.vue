<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "BetterScroll",
  data() {
    return {
      scroll: null,
      saveY: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initiate();
    });
  },
  methods: {
    //初始化better-scroll
    initiate: function() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true,
        pullUpLoad: true
      });
      //监听滚动
      this.scroll.on("scroll", position => {
        this.scroll.refresh();
        this.saveY = position.y;
        this.$emit("currPosition", position);
      });
      //监听上拉加载更多
      this.scroll.on("pullingUp", () => {
        this.$emit("getMoreData");
        this.$nextTick(() => {
          this.scroll.finishPullUp();
        });
      });
    },
    //返回顶部
    backTop: function() {
      //需要判断this.scroll是否创建完毕，才能调用scrollTo，否则为null
      this.scroll && this.scroll.scrollTo(0, 0, 300);
    },

    savePosition: function(saveY) {
      this.scroll && this.scroll.scrollTo(0, saveY, 0);
    }
  }
};
</script>

<style></style>
