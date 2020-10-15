/*
 * @Description: 
 * @Author: hezhijie
 * @Date: 2020-07-16 21:58:38
 * @LastEditors: hezhijie
 * @LastEditTime: 2020-10-15 11:55:01
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import showdown from "showdown";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./utils/import.js";

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.md2html = md => {
  let converter = new showdown.Converter();
  let text = md.toString();
  let html = converter.makeHtml(text);
  return html;
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
