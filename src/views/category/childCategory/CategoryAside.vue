<template>
  <div id="aside">
    <better-scroll class="content">
      <ul>
        <li
          v-for="(item, index) in categories"
          :key="index"
          @click="categoryClick(index)"
          :class="{ isActive: currentIndex === index }"
        >
          {{ item.title }}
        </li>
      </ul>
    </better-scroll>
  </div>
</template>

<script>
import BetterScroll from "components/common/betterScroll/BetterScroll";
export default {
  name: "CategoryAside",
  components: {
    BetterScroll
  },
  data() {
    return {
      currentIndex: 0
    };
  },

  props: {
    categories: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    categoryClick: function(index) {
      this.currentIndex = index;
      this.$emit("categoryClick", index);
    }
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  background-color: rgb(241, 237, 237);
}
ul li {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
}
.isActive {
  color: rgb(252, 92, 118);
  border-left: 2px solid rgb(252, 92, 118);
}
</style>
