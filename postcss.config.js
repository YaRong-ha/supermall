module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, //视口宽度，对应的是我们设计稿的宽度
      viewportHeight: 667, //视口高度，对应的是设计稿的高度
      unitPrecision: 5, //指转换单位后的精度位数，即小数点的位数
      viewportUnit: "vw", //指定转换成的视口单位为vw
      selectorBlackList: ["tabbar", "navBar"], //指定不需要转化为视口单位的类名
      minPixelValue: 1, //默认值为1，小于等于1px则不进行转换
      mediaQuery: false, //是否允许在媒体查询的css代码中也进行转换
    },
  },
};
