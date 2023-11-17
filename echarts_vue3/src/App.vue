<template>
  <router-view />
</template>

<script>
// 1.引用provide
import { provide } from "vue";
// 2.引用echarts
import * as echarts from "echarts";
// 3.引用axios
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8888";
export default {
  setup() {
    provide("echarts", echarts); // 第一个是参数名字，第二个是参数中传递的内容
    provide("axios", axios); // 第一个是参数名字，第二个是参数中传递的内容
  },
};
</script>

<style lang="less">
body {
  background: url("~@/assets/bg.jpg") top center no-repeat;
}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box; //border-box 告诉浏览器去理解你设置的边框和内边距的值是包含在width内的。
}
</style>
