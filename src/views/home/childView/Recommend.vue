<template>
  <div class="multiRecommend">
    <div id="recommend">
      <div v-for="(item, index) in recommend" :key="index">
        <a :href="item.link">
          <img :src="item.image" />
          <span>{{ item.title }}</span>
        </a>
      </div>
    </div>
    <div class="rec">
      <a href="http://act.mogujie.com/zzlx67">
        <img src="~assets/img/home/recommend_bg.jpg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommend: {
      type: Array
    }
  }
};
</script>

<style scoped>
#recommend {
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: 8px solid #f6f6f6;
}
#recommend div {
  text-align: center;
  width: 25%;
  font-size: 14px;
}
#recommend div img {
  padding: 10px 0 10px 0;
  width: 90%;
}
#recommend div span {
  display: inline-block;
  margin-bottom: 25px;
}
.rec {
  width: 100%;
  overflow: hidden;
}
.rec img {
  width: 100.2%;
}
</style>
