import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import FastClick from "fastclick"; //优化延迟300ms
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.use(VueLazyLoad, {
  loading: require("./assets/img/lazyload/lazy.jpg"),
  error: require("./assets/img/lazyload/error.jpg")
});
FastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
