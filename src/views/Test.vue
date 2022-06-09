<template>
  <div ref="box" class="box">
    <T3ElectricPowerCurve ref="curve"></T3ElectricPowerCurve>
  </div>
</template>
<script>
import T2ElectricPowerCurve from "@/components/T2ElectricPowerCurve.vue";
import T3ElectricPowerCurve from "@/components/T3ElectricPowerCurve.vue";

export default {
  components: {
    T2ElectricPowerCurve,
    T3ElectricPowerCurve,
  },
  mounted() {
    // console.log(this.$refs.box);
    let _this = this;
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        // console.log(this.$refs.box);
        console.log(33);
        _this.$refs.curve.$emit("changeFn");
      });
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize");
    this.chart.dispose();
  },
};
</script>
<style scoped>
.box {
  width: 53.3333vw;
  height: 40vw;
  margin: 5.2083vw auto;
  background-color: blue;
}
</style>
