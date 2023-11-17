<template>
  <div>
    <h2>库存统计</h2>
    <div id="threeChart" class="chart"></div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";
export default {
  setup() {
    let $echarts = inject("echarts");
    let $http = inject("axios");

    let data = reactive({});

    async function getState() {
      data = await $http({
        url: "/three/data",
      });
    }
    // 1.在dom加载完毕后动态展示图表
    onMounted(() => {
      //2.发达请求
      getState().then(() => {
        // console.log("饼状图", data.data);
        //初始化echarts
        let myChart = $echarts.init(document.getElementById("threeChart"));
        myChart.setOption({
          legend: {
            // 设置图例
            top: "bottom", //放最下面
          },
          series: [
            {
              // name: 'Nightingale Chart',
              type: "pie", //饼图
              data: data.data.chartData.chartData, //数据
              radius: [10, 100], //饼图的半径数组的第一项是内半径，第二项是外半径
              center: ["50%", "38%"], //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
              roseType: "area", //设置成玫瑰图
              itemStyle: {
                borderRadius: 10, //用于指定饼图扇形区块的内外圆角半径，
              },
            },
          ],
          // 设置饼状图的颜色
          color: [
            "#c12e34",
            "#e6b600",
            "#0098d9",
            "#2b821d",
            "#005eaa",
            "#339ca8",
          ],
          //提示框，鼠标悬浮交互时的信息提示
          tooltip: {
            show: true, //默认值true,可选为：true(隐藏) | false(隐藏)
            borderRadius: 10, // 提示边框圆角，单位px,默认是4
          },
        });
      });
    });
    return {
      getState,
      data,
    };
  },
};
</script>

<style>
h2 {
  /* 48像素 */
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.25rem;
}
.chart {
  /* 高度360 */
  height: 4.5rem;
  /* background-color: gray; */
}
</style>