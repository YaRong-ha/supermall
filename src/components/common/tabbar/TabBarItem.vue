<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="active-icon"></slot>
    </div>
    <div :class="{ active: isActive }">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      default: "/home"
    }
  },
  data() {
    return {};
  },
  methods: {
    itemClick: function() {
      this.$router.replace(this.path);
    }
  },
  computed: {
    isActive: function() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 13px;
  color: #333;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
}
.active {
  color: rgb(252, 92, 118);
}
</style>
