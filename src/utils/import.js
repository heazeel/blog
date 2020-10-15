/*
 * @Description: 
 * @Author: hezhijie
 * @Date: 2020-07-18 15:16:23
 * @LastEditors: hezhijie
 * @LastEditTime: 2020-09-25 11:06:32
 */
import Vue from "vue";
const requireComponent = require.context(
  // 找到components文件夹下以.vue命名的文件
  "../markdown/JS",
  true,
  /\.md$/
);
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  console.log(fileName);
  // 因为得到的filename格式是: './button-sc.vue', 所以这里我们去掉头和尾，只保留真正的文件名
  //const componentName = "JS_" + fileName.replace(/^\.\//, "").replace(/\.\w+$/, "");
  const componentName = "JS_" + fileName.split("/")[2].replace(/\.\w+$/, "");
  Vue.component(componentName, componentConfig.default || componentConfig);
});