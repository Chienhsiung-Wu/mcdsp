<template>
  <div ref="box" class="box"></div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      data: {}, // 电力统计需要的数据
      option: {
        color: [
          "#1abc9c",
          "#2ecc71",
          "#3498db",
          "#9b59b6",
          "#34495e",
          "#f1c40f",
          "#e67e22",
          "#e74c3c",
          "#ecf0f1",
          "#95a5a6",
          "#fd79a8",
          "#fdcb6e",
          "#6c5ce7",
        ],
        title: {
          text: "T2航站楼每日用电统计表",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          top: "30vh",
          left: "100vw",
          show: false,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "10%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            restore: {},
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          // data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 100,
          },
          {
            start: 0,
            end: 100,
          },
        ],
        series: [],
      },
    };
  },
  methods: {
    setMyOption(data, option) {
      let legend = [
        "T1一号配电室桥载变压器",
        "T2A段配电室5号变压器",
        "T2A段配电室6号变压器",
        "T2A段配电室7号变压器",
        "T2A段配电室8号变压器",
        "T2A段配电室9号变压器",
        "T2A段配电室西货库",
        "T2C段配电室1号变压器",
        "T2C段配电室1号桥载",
        "T2C段配电室2号变压器",
        "T2C段配电室2号桥载",
        "T2C段配电室3号变压器",
        "T2C段配电室4号变压器",
        "总用电量",
      ];

      option.legend.data = legend;

      let x_data = []; // 将要替换到option的xAxis下的data
      let series = []; // 将要替换到option的series
      // 将我的数据中的x轴数据赋给option
      console.log(data);
      for (const key in data) {
        console.log(key);
        x_data.push(key);
      }
      console.log(x_data);
      // console.log(x_data);
      option.xAxis.data = x_data;
      legend.forEach((item, index) => {
        let obj = {};
        obj.name = item;
        obj.type = "line";
        obj.stack = false;
        obj.data = [];
        for (let key in data) {
          obj.data.push(data[key][item]);
        }
        series.push(obj);
      });
      option.series = series;
      // console.log(option);
    },
  },
  mounted() {
    // this.setMyOption(this.data, this.option);
    // console.log(this.option);

    let chartDom = this.$refs.box;
    let myChart = this.$echarts.init(chartDom);
    this.$nextTick(() => {
      this.$axios({
        url: "/t2_electric.json",
        method: "get",
      }).then((res) => {
        console.log("获取数据成功");
        this.data = res.data;
        this.setMyOption(this.data, this.option);
        myChart.setOption(this.option);
      });
    });
  },
  created() {
    //   this.$axios({
    //     url: "/t2_electric.json",
    //     method: "get",
    //   }).then((res) => {
    //     console.log("获取数据成功");
    //     this.data = res.data;
    //   });
  },
};
</script>
<style scoped>
.box {
  width: 53.3333vw;
  height: 40vw;
}
</style>
