<template>
  <div>
    <header>
      <h1>大数据可视化--vue3项目（echarts）</h1>
    </header>
    <!-- 大容器 -->
    <section class="container">
      <!-- 左容器 -->
      <section class="itemLeft">
        <!-- 使用组件 -->
        <ItemPage><ItemOne /></ItemPage>
        <ItemPage><ItemTwo /></ItemPage>
      </section>
      <!-- 中容器 -->
      <section class="itemCenter">
        <!-- 使用组件 -->
        <MagPage />
      </section>
      <!-- 右容器 -->
      <section class="itemRight">
        <!-- 使用组件 -->
        <ItemPage><ItemThree /></ItemPage>
        <ItemPage><ItemFour /></ItemPage>
      </section>
    </section>
  </div>
</template>

<script>
// 引用组件
import ItemPage from "@/components/itemPage.vue";

// 左右四个小组件的引用

import ItemOne from "@/components/itemOne.vue";
import ItemTwo from "@/components/itemTwo.vue";
import ItemThree from "@/components/itemThree.vue";
import ItemFour from "@/components/itemFour.vue";
import MagPage from "@/components/magPage.vue";

// 引用inject
import { inject } from "vue";

export default {
  components: {
    ItemPage,
    ItemOne,
    ItemTwo,
    ItemThree,
    ItemFour,
    MagPage,
  },
  setup() {
    // 测试使用echarts
    let $echarts = inject("echarts");
    let $http = inject("axios");
    // console.log($echarts);
    // console.log($http);
  },
};
</script>

<style lang="less">
header {
  height: 100px;
  width: 100%;
  // 设置一个半透明淡蓝色
  background-color: rgba(0, 0, 255, 0.2);
  // 把标题文字样式设置
  h1 {
    font-size: 0.375rem;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }
}
// 主体容器样式
.container {
  // 这里就不需要设置使用rem了 使用rem那么页面就会根据html根结点大小改变而改变了
  min-width: 1200px;
  max-width: 2048px;
  margin: 0 auto;
  // 盒子上10px 左右10px 下0的外边距
  padding: 0.125rem 0.125rem 0;
  display: flex; //父容器设置flex布局才能在子元素使用

  // 设置左中右的占比，必须现在父容器设置flex
  .itemLeft,
  .itemRight {
    flex: 3;
  }
  .itemCenter {
    flex: 5;
  }
}
.itemCenter {
  // 高度840px
  height: 10.5rem;
  border: 1px solid blue;
  // 内边距10px
  padding: 0.125rem;
  // 外边距20px
  margin: 0.25rem;
}
</style>