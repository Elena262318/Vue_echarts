<template>
  <div class="map" id="mapChart"></div>
</template>

<script>
// 1.引用
import axios from "axios";
import { onMounted, reactive, inject } from "vue";
export default {
  setup() {
    // 2.得到echarts
    let $echarts = inject("echarts");
    let mapData = reactive({});

    async function getState() {
      mapData = await axios.get("/china/data");
    }
    onMounted(() => {
      // console.log("aa", mapData);
      getState().then(() => {
        // console.log("map", mapData);
        // 3.设置地图
        $echarts.registerMap("china", mapData.data.chinaData);
        let mapchart = $echarts.init(document.getElementById("mapChart"));
        mapchart.setOption({
          title: {
            text: "城市销售量",
            left: "45%",
            textStyle: {
              color: "#fff",
              fontSize: 20,
              textShadowBlur: 10, //文字本身的阴影长度。
              textShadowColor: "#33ffff",
            },
          },
          geo: {
            map: "china",
            // 地图区域的多边形 图形样式
            itemStyle: {
              // 地图区域颜色
              areaColor: "#0099ff",
              // 图形的描边颜色
              borderColor: "#00ffff",
              // 橙色
              shadowColor: "rgba(230,130,70,0.5)",
              //   图形阴影模糊大小
              shadowBlur: 30,
              //   高亮状态下的多边形额标签样式
              emphasis: {
                //在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果self'self' 只聚焦（不淡出）当前高亮的数据的图形。
                focus: "self",
              },
            },
          },
          series: [
            {
              //类型散点图
              type: "scatter",
              itemStyle: {
                //散点图的颜色
                color: "red",
              },
              name: "所在城市销售额",
              //该系列使用的坐标系 geo使用地理坐标系
              coordinateSystem: "geo",
              symbolSize: 20,
              data: [
                { name: "北京", value: [116.46, 39.92, 4367] },
                { name: "上海", value: [121.48, 31.22, 8675] },
                { name: "昆明", value: [103.29, 25.26, 4367] },
                { name: "广州", value: [113.23, 23.16, 187] },
                { name: "哈尔滨", value: [126.64, 45.75, 3421] },
              ],
            },
          ],
          tooltip: {
            trigger: "item",
          },
          visualMap: {
            type: "continuous", // 连续型
            min: 100, // 值域最小值，必须参数
            max: 5000, // 值域最大值，必须参数
            calculable: true, // 是否启用滑动空间
            inRange: {
              color: ["#50a3ba", "#eac736", "#d94e5d"], // 指定数值从低到高时的颜色变化,
            },
            textStyle: {
              color: "#fff", // 值域控件的文本颜色
            },
          },
        });
      });
    });
    return {
      getState,
      mapData,
    };
  },
};
</script>

<style lang="less">
.map {
  width: 100%;
  height: 100%;
}
</style>