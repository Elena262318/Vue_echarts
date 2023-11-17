<template>
  <div>
    <h2>库存统计图</h2>
    <div class="echart" id="fourChart"></div>
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
        url: "/four/data",
      });
    }
    onMounted(() => {
      getState().then(() => {
        // console.log("bbb", data.data.chartData.chartData.num);
        let mychart = $echarts.init(document.getElementById("fourChart"));
        mychart.setOption({
          grid: {
            left: "3%",
            right: "6%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: [
            {
              axisLine: {
                lineStyle: {
                  color: "#fff",
                },
              },
              type: "category",
              boundaryGap: false,
              data: data.data.chartData.chartData.day,
            },
          ],

          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#fff",
                },
              },
            },
          ],
          legend: {},
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          series: [
            {
              name: "服饰",
              type: "bar",
              barWidth: 25,
              data: data.data.chartData.chartData.num.Clothes,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "家电",
              type: "bar",
              data: data.data.chartData.chartData.num.Electrical,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "家居",
              type: "bar",
              data: data.data.chartData.chartData.num.gear,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "数码",
              type: "bar",
              data: data.data.chartData.chartData.num.digit,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "日化",
              type: "bar",
              data: data.data.chartData.chartData.num.Chemicals,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
          ],
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
.echart {
  /* 高度360 */
  height: 4.5rem;
  /* background-color: gray; */
}
</style>