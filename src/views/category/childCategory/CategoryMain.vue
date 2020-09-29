<template>
  <div class="main" v-if="Object.keys(everySubCategory).length !== 0">
    <ul>
      <li v-for="(item, index) in everySubCategory.list" :key="index">
        <a :href="item.link">
          <img v-lazy="item.image" />
          <span>{{ item.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
/*eslint-disable */
export default {
  name: "CategoryMain",
  props: {
    everySubCategory: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  font-size: 12px;
}
ul li {
  box-sizing: border-box;
  width: 33.3%;
  padding: 2px 2px;
}
ul li img {
  width: 100%;
  margin-bottom: 5px;
}
</style>
