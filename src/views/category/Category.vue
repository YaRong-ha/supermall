<template>
  <div id="category">
    <nav-bar class="navbar">
      <div slot="middle">商品分类</div>
    </nav-bar>
    <div class="container">
      <category-aside
        class="categoryAside"
        :categories="categories"
        @categoryClick="categoryClick"
      ></category-aside>
      <better-scroll id="content">
        <category-main :everySubCategory="everySubCategory"></category-main>
        <tab-control
          :titles="titles"
          @choseItem="choseItem"
          :currentIndex="detailIndex"
        ></tab-control>
        <category-detail :categoryDetail="detail"></category-detail>
      </better-scroll>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import {
  getCategory_js,
  getSubcategory_js,
  getCategoryDetail_js
} from "network/category";

import BetterScroll from "components/common/betterScroll/BetterScroll";
import NavBar from "components/common/navbar/NavBar";
import CategoryAside from "views/category/childCategory/CategoryAside";
import CategoryMain from "views/category/childCategory/CategoryMain";
import CategoryDetail from "views/category/childCategory/CategoryDetail";
import TabControl from "components/content/tabControl/TabControl";

export default {
  name: "Category",
  components: {
    NavBar,
    CategoryAside,
    CategoryMain,
    BetterScroll,
    TabControl,
    CategoryDetail
  },
  computed: {
    everySubCategory() {
      if (this.currentIndex === -1) return {};
      return this.everyCategoryData[this.currentIndex].subcategories;
    }
  },
  data() {
    return {
      categories: [], //存储分类类别
      everyCategoryData: {}, //用于存储每一个分类的详细数据,属性0存储第一个分类的数据
      currentIndex: -1, //记录侧边栏的index,之所以是-1,是为了让category-main组件在currentIndex=-1的时候不加载，防止了在未获得服务器数据时渲染，造成undefined
      titles: ["综合", "新品", "销量"],
      detail: [], //用于存储详情数据
      detailIndex: 0
    };
  },
  created() {
    this.getCategory();
  },
  methods: {
    //1.获取侧边栏的分类
    getCategory: function() {
      getCategory_js().then(res => {
        this.categories = res.data.category.list;
        for (let index in this.categories) {
          //根据分类的个数，初始化每类的存储变量
          this.everyCategoryData[index] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: []
            }
          };
        }
        //1.请求第一个侧边栏类的数据，因为进入分类就需要有内容显示，其他的点击再请求
        this.getSubcategory(0);
      });
    },
    //2.获取每个侧边栏子类数据
    getSubcategory: function(index) {
      this.currentIndex = index;
      let maitKey = this.categories[index].maitKey;
      getSubcategory_js(maitKey).then(res => {
        this.everyCategoryData[index].subcategories = res.data;
        this.everyCategoryData = { ...this.everyCategoryData }; //对象扩展运算符，可使的快速方便保存数据
        this.getCategoryDetail("pop");
        this.getCategoryDetail("sell");
        this.getCategoryDetail("new");
      });
    },
    //3.获取每个子类中的“流行”，“sell”，“new”的数据
    getCategoryDetail: function(type) {
      //1.获取请求的miniWallkey
      let miniWallkey = this.categories[this.currentIndex].miniWallkey;
      //2.发送请求，传入miniWallkey和type
      getCategoryDetail_js(miniWallkey, type).then(res => {
        //3.将获取的数据保存下来
        if (type === "pop") {
          //默认选中流行数据，所以要先加载流行数据用来显示
          this.detail = res;
          console.log(this.detail);
        }
        this.everyCategoryData[this.currentIndex].categoryDetail[type] = res;
        this.everyCategoryData = { ...this.everyCategoryData };
      });
    },
    //当用户点击侧边栏选项，则请求数据
    categoryClick: function(index) {
      this.getSubcategory(index);
    },
    //当用户点击["综合", "新品", "销量"]
    choseItem: function(index) {
      this.detailIndex = index;
      switch (index) {
        case 0: {
          this.detail = this.everyCategoryData[
            this.currentIndex
          ].categoryDetail["pop"];
          break;
        }
        case 1: {
          this.detail = this.everyCategoryData[
            this.currentIndex
          ].categoryDetail["sell"];
          break;
        }
        case 2: {
          this.detail = this.everyCategoryData[
            this.currentIndex
          ].categoryDetail["new"];
          break;
        }
      }
    }
  }
};
</script>

<style scoped>
#category {
  position: relative;
  height: 100vh;
}
.navbar {
  color: white;
}
.container {
  display: flex;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
}
.categoryAside {
  width: 110px;
  height: 100%;
}
#content {
  flex: 1;
  height: 100%;
}
</style>
