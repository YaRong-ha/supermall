<template>
  <div class="tabControl">
    <ul>
      <li
        v-for="(item, index) in titles"
        :key="index"
        @click="choseItem(index)"
        :class="{ active: currentIndex === index }"
      >
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },

  methods: {
    choseItem: function(index) {
      //this.currentIndex = index;
      //注意：不能在子组件修改从父组件传过来的currentIndex，既然不能在这里修改，反正都要将index传出去，那就
      //告知Home组件根据下标来给Goods传数据
      this.$emit("choseItem", index);
    }
  }
};
</script>

<style scoped>
.tabControl {
  height: 44px;
  background-color: #f6f6f6;
}
ul {
  display: flex;
  text-align: center;
}
ul li {
  flex: 1;
  line-height: 44px;
}
span {
  padding-bottom: 5px;
  font-weight: 600;
}
.active span {
  color: rgb(252, 92, 118);
  border-bottom: 3px solid rgb(252, 92, 118);
}
</style>
