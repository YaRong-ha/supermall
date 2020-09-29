<template>
  <div>
    <TabBar>
      <TabBarItem path="/home">
        <img src="~assets/img/tabbar/home.svg" slot="icon" />
        <img src="~assets/img/tabbar/home_active.svg" slot="active-icon" />
        <span slot="text">首页</span>
      </TabBarItem>
      <TabBarItem path="/category">
        <img src="~assets/img/tabbar/category.svg" slot="icon" />
        <img src="~assets/img/tabbar/category_active.svg" slot="active-icon" />
        <span slot="text">分类</span>
      </TabBarItem>
      <TabBarItem path="/cart">
        <img src="~assets/img/tabbar/cart.svg" slot="icon" />
        <img src="~assets/img/tabbar/cart_active.svg" slot="active-icon" />
        <span slot="text">购物车</span>
      </TabBarItem>
      <TabBarItem path="/profile">
        <img src="~assets/img/tabbar/profile.svg" slot="icon" />
        <img src="~assets/img/tabbar/profile_active.svg" slot="active-icon" />
        <span slot="text">我的</span>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style></style>
