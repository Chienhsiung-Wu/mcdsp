<template>
  <canvas ref="myCanvas"></canvas>
</template>
<script>
import mycanvas from "@/js/myCanvas.js";
export default {
  data() {
    return {
      timer: false,
    };
  },
  methods: {
    getClientHeight() {
      return (
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
      );
    },
  },
  mounted() {
    console.log(this.$refs.myCanvas);
    // 根据窗口高度变化，动态设定canvas的高度于浏览器可见高度相同
    this.$refs.myCanvas.style.height = this.getClientHeight() + "px";
    let that = this;
    window.onresize = () => {
      // console.log(that.timer);
      if (!that.timer) {
        that.timer = true;
        setTimeout(() => {
          that.$refs.myCanvas.style.height = this.getClientHeight() + "px";
          that.timer = false;
        }, 400);
      }
    };
    mycanvas();
  },
};
</script>
<style>
* {
  user-select: none;
}

html,
body {
  overflow: hidden;
}

body {
  margin: 0;
  position: fixed;
  width: 100%;
  height: 100%;
}

canvas {
  width: 100%;
  height: 100%;
  /* height: 3000px; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.dg {
  opacity: 0.9;
}

.dg .property-name {
  overflow: visible;
}

.bigFont {
  font-size: 150%;
  color: #8c8c8c;
}

.cr.function.appBigFont {
  font-size: 150%;
  line-height: 27px;
  background-color: #2f4f4f;
}

.cr.function.appBigFont .property-name {
  float: none;
}

.cr.function.appBigFont .icon {
  position: sticky;
  bottom: 27px;
}

#app {
  background-color: transparent;
}

.fluid {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
