<template>
  <div id="detail">
    <nav-bar class="nav" navBarColor="white">
      <div slot="left" @click="backHome">
        <img src="~assets/img/common/back.svg" />
      </div>
      <ul slot="middle">
        <li
          v-for="(item, index) in navTitles"
          :key="index"
          :class="{ textColor: currentIndex === index }"
          @click="itemClick(index)"
        >
          {{ item }}
        </li>
      </ul>
    </nav-bar>
    <better-scroll
      class="content"
      @currPosition="currentPosition"
      ref="bscroll"
    >
      <swiper class="detailSwiper">
        <swiper-item v-for="(item, index) in swiperList" :key="index">
          <img :src="item" @load="imgLoad" />
        </swiper-item>
      </swiper>
      <item-info :good="good"></item-info>
      <item-shop :shop="shop"></item-shop>
      <detail-show-info
        :detailShow="detailShow"
        @imgLoad="imgLoad"
      ></detail-show-info>
      <detail-params :params="detailParams" ref="param"></detail-params>
      <detail-commend :commendInfo="commendInfo" ref="commend"></detail-commend>
      <detail-recommend
        :recommend="recommend"
        ref="recommend"
      ></detail-recommend>
    </better-scroll>
    <back-top @click.native="backTop" v-if="isShow"></back-top>
    <detail-tab-bar @addToCart="addToCart"></detail-tab-bar>
  </div>
</template>

<script>
/*eslint-disable */
import NavBar from "components/common/navbar/NavBar";
import { Swiper, SwiperItem } from "components/common/swiper";
import BetterScroll from "components/common/betterScroll/BetterScroll";
import ItemInfo from "views/detail/childDetail/ItemInfo";
import ItemShop from "views/detail/childDetail/ItemShop";
import DetailShowInfo from "views/detail/childDetail/DetailShowInfo";
import DetailParams from "views/detail/childDetail/DetailParams";
import BackTop from "components/common/backTop/BackTop";
import DetailTabBar from "views/detail/childDetail/DetailTabBar";
import DetailCommend from "views/detail/childDetail/DetailCommend";
import DetailRecommend from "views/detail/childDetail/DetailRecommend";

import {
  getDetailData,
  Goods,
  Shop,
  detailShowInfo,
  getRecommendData
} from "network/detail";

export default {
  name: "Detail",
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    BetterScroll,
    ItemInfo,
    ItemShop,
    DetailShowInfo,
    DetailParams,
    BackTop,
    DetailTabBar,
    DetailCommend,
    DetailRecommend
  },
  data() {
    return {
      iid: null,
      navTitles: ["商品", "参数", "评论", "推荐"],
      swiperList: [],
      currentIndex: 0,
      good: {},
      shop: {},
      isShow: false, //控制着“返回顶部”按钮的出现,
      detailShow: {},
      detailParams: {},
      commendInfo: {},
      recommend: [],
      skip: []
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetailData(this.iid).then(res => {
      //1.获取轮播图消息
      this.swiperList = res.result.itemInfo.topImages;
      //2.获取货品消息
      this.good = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );

      this.shop = new Shop(res.result.shopInfo);
      this.detailShow = new detailShowInfo(res.result.detailInfo);
      this.detailParams = res.result.itemParams;
      this.commendInfo = res.result.rate.list[0];
    });
    getRecommendData().then(res => {
      this.recommend = res.data.list;
    });
  },
  methods: {
    itemClick: function(index) {
      this.currentIndex = index;
      this.$refs.bscroll.savePosition(-this.skip[index]);
    },
    backHome: function() {
      this.$router.go(-1);
    },
    backTop: function() {
      this.$refs.bscroll.backTop();
    },
    currentPosition: function(position) {
      //根据监听位置判断是否显示返回顶部按钮、tabcontrol是否吸顶
      this.isShow = -position.y > 1000;
      if (-position.y >= this.skip[3]) {
        this.currentIndex = 3;
      } else if (-position.y >= this.skip[2]) {
        this.currentIndex = 2;
      } else if (-position.y >= this.skip[1]) {
        this.currentIndex = 1;
      } else {
        this.currentIndex0;
      }
    },
    imgLoad: function() {
      this.skip[0] = 0;
      this.skip[1] = this.$refs.param.$el.offsetTop;
      this.skip[2] = this.$refs.commend.$el.offsetTop;
      this.skip[3] = this.$refs.recommend.$el.offsetTop;
    },
    addToCart: function(changeState) {
      if (changeState) {
        //如果为true，则添加到购物车
        let addProduct = {};
        addProduct.image = this.swiperList[0];
        addProduct.title = this.good.title;
        addProduct.desc = this.good.desc;
        addProduct.price = this.good.realPrice;
        addProduct.iid = this.$route.params.iid;
        this.$store.commit("addToCart", addProduct); //提交到vuex中
      } else {
        //如果为false，则从vuex中移除该记录
        this.$store.commit("removeFromCart", this.$route.params.iid);
      }
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
}
#detail .content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
  z-index: 1;
  background-color: white;
}
.detailSwiper {
  height: 280px;
}
.nav img {
  margin-top: 10px;
}
.nav div ul {
  display: flex;
}
.nav div ul li {
  flex: 1;
}
.textColor {
  color: rgb(252, 92, 118);
}
</style>
