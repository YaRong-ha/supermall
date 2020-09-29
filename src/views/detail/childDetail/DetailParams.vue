<template>
  <div id="detailParams" v-if="Object.keys(params).length !== 0">
    <h5>{{ params.info["key"] }}</h5>
    <table class="table">
      <tr v-for="(item,index) in params.rule.tables[0]" :key="index">
        <td v-for="(littleItem,littleIndex) in item" :key="littleIndex">{{littleItem}}</td>
      </tr>
    </table>
    <ul class="shopMessage">
      <li v-for="(item,index) in params.info.set" :key="index">
        <span>{{item.key}}</span>
        <span>{{item.value}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
/*eslint-disable */
export default {
  name: "DetailParams",
  props: {
    params: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
h5 {
  padding: 10px 15px;
}
.table tr {
  display: inline-block;
  height: 35px;
  line-height: 35px;
  text-align: center;
  margin: 0px 20px;
  font-size: 14px;
  border-bottom: 1px solid rgb(236, 234, 234);
}
.table tr td {
  width: 100px;
}
.table tr td:first-child {
  text-align: left;
}
.shopMessage li {
  display: flex;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  margin: 0px 20px;
  border-bottom: 1px solid rgb(236, 234, 234);
}
.shopMessage li span:first-child {
  display: inline-block;
  width: 80px;
}
.shopMessage li span:last-child {
  flex: 1;
  color: rgb(252, 92, 118);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
