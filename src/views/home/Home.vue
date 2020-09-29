<template>
  <div id="home">
    <nav-bar>
      <h3 slot="middle" class="navbar">逛街街</h3>
    </nav-bar>
    <tab-control
      v-show="replaceTab"
      :titles="titles"
      :currentIndex="currentIndex"
      @choseItem="choseItem"
      class="fixed"
    ></tab-control>
    <better-scroll
      class="content"
      ref="bscroll"
      @currPosition="currentPosition"
      @getMoreData="getMoreData"
    >
      <swiper>
        <swiper-item v-for="(item, index) in banners" :key="index">
          <img :src="item.image923" @load="isLoading" />
        </swiper-item>
      </swiper>
      <recommend :recommend="recommends"></recommend>
      <tab-control
        :titles="titles"
        @choseItem="choseItem"
        :currentIndex="currentIndex"
        ref="tabControl"
      ></tab-control>
      <goods :chosedItem="chosedItem"></goods>
    </better-scroll>
    <back-top @click.native="backTop" v-if="isShow"></back-top>
  </div>
</template>

<script>
/*eslint-disable */
import BetterScroll from "components/common/betterScroll/BetterScroll";
import NavBar from "components/common/navbar/NavBar";
import Recommend from "./childView/Recommend";
import TabControl from "components/content/tabControl/TabControl";
import Goods from "views/home/childView/Goods";
import BackTop from "components/common/backTop/BackTop";

import { getHomeMultiData, getHomeGoodsData } from "network/home";
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "Home",

  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      tabControlDistance: 0,
      replaceTab: false,
      isLoaded: false,
      chosedItem: [],
      isShow: false, //控制着“返回顶部”按钮的出现,
      currentIndex: 0, //用于记录着当前时处于·流行、新款还是精选，便于确定谁需要加载更多
      saveY: 0 //用于保存用户离开home页面时的位置，当用户再点击回来时，还停留在离开时的位置，而不是回到最顶部
    };
  },
  methods: {
    //获取轮播图和推荐的数据
    getMultiData: function() {
      getHomeMultiData()
        .then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
        .catch(err => {
          console.log("轮播图请求数据出错:", err);
        });
    },
    //获得各商家的信息
    getGoodsData: function(type) {
      let page = this.goods[type].page + 1;
      getHomeGoodsData(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.list); //用...解析语法，将数组数据一个一个加入到数组存储
          this.goods[type].page++; //请求成功才能将页数加1；
        })
        .catch(err => {
          console.log("商品请求数据出错:", err);
        });
    },
    //根据tabControl传过来的下标修改给Goods组件传入的数据
    choseItem: function(index) {
      this.currentIndex = index;
      switch (index) {
        case 0:
          this.chosedItem = this.goods["pop"].list;
          break;
        case 1:
          this.chosedItem = this.goods["new"].list;
          break;
        case 2:
          this.chosedItem = this.goods["sell"].list;
          break;
      }
    },
    //当用户点击了返回最顶部按钮时，通知better-scroll去调用函数来返回顶部
    backTop: function() {
      this.$refs.bscroll.backTop();
    },
    currentPosition: function(position) {
      //根据监听位置判断是否显示返回顶部按钮、tabcontrol是否吸顶

      this.isShow = -position.y > 1000;
      //根据滑动距离来判断是否显示那个replaceTab
      if (this.isLoaded) {
        this.replaceTab = -position.y > this.tabControlDistance;
      }
    },
    getMoreData: function() {
      switch (this.currentIndex) {
        case 0:
          this.getGoodsData("pop");
          break;
        case 1:
          this.getGoodsData("new");
          break;
        case 2:
          this.getGoodsData("sell");
          break;
      }
    },
    isLoading: function() {
      //只要轮播图有一张图片加载完成就计算tabcontrol到顶部的距离

      if (!this.isLoaded) {
        this.isLoaded = true;
        this.tabControlDistance = this.$refs.tabControl.$el.offsetTop;
      }
    }
  },

  activated() {
    //当用户进入该页面时，该页面处于活跃状态，会触发该函数
    //这里使用better-scroll的scrollTo跳转

    this.$refs.bscroll.savePosition(this.saveY);
  },
  deactivated() {
    //当用户离开该页面时，也会触发该函数
    //注意：只能取scroll里面保存的saveY，不能将this.saveY在上面currentPosition函数中取position.y的值
    this.saveY = this.$refs.bscroll.saveY;
  },
  components: {
    BetterScroll,
    NavBar,
    Swiper,
    SwiperItem,
    Recommend,
    TabControl,
    Goods,
    BackTop
  },
  created() {
    //请求服务器数据
    this.getMultiData();
    this.getGoodsData("pop");
    this.getGoodsData("new");
    this.getGoodsData("sell");

    this.chosedItem = this.goods["pop"].list;
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
#home .content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.navbar {
  color: white;
}
.fixed {
  position: fixed;
  top: 44px;
  left: 0px;
  right: 0px;
  z-index: 1002;
}
</style>
