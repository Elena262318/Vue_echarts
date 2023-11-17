<template>
  <div>
    <h2>销量总量</h2>
    <div class="echarts" id="oneChart"></div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";
export default {
  setup() {
    let $echarts = inject("echarts");
    let $http = inject("axios");

    let data = reactive({});
    let xdata = reactive([]);
    let ydata = reactive([]);

    function setData() {
      // console.log(data.data.data.chartData);
      xdata = data.data.data.chartData.map((v) => v.title);
      ydata = data.data.data.chartData.map((v) => v.num);
      // console.log("xdata", xdata);
      // console.log("ydata", ydata);
    }
    async function getState() {
      data = await $http({
        url: "/one/data",
      });
    }

    onMounted(() => {
      let myChart = $echarts.init(document.getElementById("oneChart"));
      //调用请求
      getState().then(() => {
        setData();
        myChart.setOption({
          grid: {
            top: "3%",
            left: "1%",
            right: "6%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          yAxis: {
            type: "category",
            data: xdata,
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          series: [
            {
              type: "bar",
              data: ydata,
              itemStyle: {
                //设置图形颜色
                normal: {
                  barBorderRadius: [0, 20, 20, 0], //设置圆角
                  color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "#005eaa",
                    },
                    {
                      offset: 0.5,
                      color: "#339ca8",
                    },
                    {
                      offset: 1,
                      color: "#cda819",
                    },
                  ]),
                },
              },
            },
          ],
          tooltip: {
            show: true, //默认值true,可选为：true(隐藏) | false(隐藏)
            borderRadius: 8, // 提示边框圆角，单位px,默认是4
          },
        });
      });
    });
    return {
      getState,
      data,
      xdata,
      ydata,
      setData,
    };
  },
};
</script>

<style scoped>
.echarts {
  height: 4.5rem;
}
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
</style>
