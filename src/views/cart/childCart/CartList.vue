<template>
  <div class="cartList">
    <div class="icon" @click="itemChose">
      <div :class="{ isChosed: active }">
        <img src="~assets/img/cart/tick.svg" alt />
      </div>
    </div>
    <div class="image">
      <img :src="product.image" />
    </div>
    <div class="desc">
      <p>{{ product.title }}</p>
      <p>{{ product.desc }}</p>
      <span>￥{{ product.price }}</span>
      <span>购买量:{{ product.count }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartList",
  data() {
    return {
      active: false
    };
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  mounted() {
    this.$bus.$on("all", () => {
      this.active = true;
    });
    this.$bus.$on("cancelAll", () => {
      this.active = false;
    });
  },
  methods: {
    itemChose: function() {
      this.active = !this.active;
      this.$emit("buy", {
        active: this.active,
        price: this.product.price,
        count: this.product.count
      });
    }
  }
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.cartList {
  box-sizing: border-box;
  display: flex;
  height: 120px;
  padding: 10px;
  border-bottom: 1px solid rgb(196, 195, 195);
  font-size: 14px;
}
.icon {
  width: 23px;
  padding: 40px 0px;
}
.icon div {
  width: 22px;
  height: 22px;
  border-radius: 11px;
  border: 1px solid gray;
  text-align: center;
  line-height: 27px;
}

.isChosed {
  background-color: rgb(252, 92, 118);
}
.image {
  margin: 0px 15px 0 8px;
  width: 70px;
  height: 100%;
}
.image img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.desc {
  position: relative;
  width: 230px;
}

.desc p {
  line-height: 22px;
  text-overflow: ellipsis;
  font-size: 13px;
  overflow: hidden;
  white-space: nowrap;
}
.desc p:first-child {
  font-weight: 600;
}
span {
  display: inline-block;
  position: absolute;
  bottom: 0px;
}
span:first-child {
  left: 0px;
}
span:last-child {
  right: 0px;
}
</style>
