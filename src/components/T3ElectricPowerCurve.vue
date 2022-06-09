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
          // text: "T2航站楼每日用电统计表",
        },
        tooltip: {
          trigger: "axis",
          extraCssText: "width:25%; height: 70%",
          // show: false,
        },
        legend: {
          top: "2%",
          left: "2%",
          // right: "10%",
          width: "90%",
          // left: "100vw",
          selector: ["all", "inverse"],
          // show: false,
          // selectedMode: "single",
        },
        grid: {
          left: "1%",
          right: "3%",
          bottom: "3%",
          top: "20%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            restore: {},
            saveAsImage: {},
            magicType: { show: true, type: ["stack", "tiled"] },
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
        "一号配B11变压器",
        "一号配B12变压器",
        "一号配B13变压器",
        "一号配B14变压器",
        "一号配B15变压器",
        "二号配B21变压器",
        "二号配B22变压器",
        "32号桥载B1变压器",
        "32号桥载B2变压器",
        "三号配B31变压器",
        "三号配B32变压器",
        "19号桥载B1变压器",
        "19号桥载B2变压器",
        "西货库",
        "快速过站楼B1变压器",
        "快速过站楼B2变压器",
        "总用电量",
      ];

      option.legend.data = legend;

      let x_data = []; // 将要替换到option的xAxis下的data
      let series = []; // 将要替换到option的series
      // 将我的数据中的x轴数据赋给option
      // console.log(data);
      for (const key in data) {
        // console.log(key);
        x_data.push(key);
      }
      // console.log(x_data);
      // console.log(x_data);
      option.xAxis.data = x_data;
      legend.forEach((item, index) => {
        let obj = {};
        obj.name = item;
        obj.type = "line";
        obj.stack = "false";
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
    this.chart = this.$echarts.init(chartDom, "dark");
    // this.chart = myChart;
    this.$nextTick(() => {
      this.$axios({
        url: "/t3_electric.json",
        method: "get",
      }).then((res) => {
        console.log("获取数据成功");
        this.data = res.data;
        this.setMyOption(this.data, this.option);
        console.log(this.option);
        this.chart.setOption(this.option);
      });
    });

    // 方便在窗口变化时强制变化echarts实例的大小
    this.$on("changeFn", () => {
      this.chart.resize();
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
  /* width: 100%;
  height: 100%; */
  /* width: 53.3333vw;
  height: 40vw; */
}
</style>
