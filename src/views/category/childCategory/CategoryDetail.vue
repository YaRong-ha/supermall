<template>
  <div class="detail">
    <ul>
      <li v-for="(item, index) in categoryDetail" :key="index">
        <a :href="item.link">
          <div><img v-lazy="item.img" /></div>
          <h5>{{ item.title }}</h5>
          <div>
            <span>￥{{ item.price }}</span>
            <span>收藏:</span>
            <span>{{ item.cfav }}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CategoryDetail",
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.detail {
  width: 100%;
}
ul {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
}
ul li {
  width: 50%;
  margin-top: 5px;
  text-align: center;
}
ul li div img {
  width: 95%;
  border-radius: 10px;
}
ul li h5 {
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  height: 20px;
  width: 120px;
  margin: 0 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
ul li div {
  font-size: 12px;
}
ul li div span {
  display: inline-block;
  padding-right: 2px;
}
</style>
