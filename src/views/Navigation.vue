<template>
  <div class="box">
    <nav class="nav">
      <ul>
        <li
          v-for="(item, index) in navList"
          :key="index"
          @click="navFn(item.routerPath, item.routerName)"
        >
          <span :class="item.icon"></span>
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </nav>
    <my-canvas></my-canvas>
  </div>
</template>

<script>
import MyCanvas from "@/components/MyCanvas.vue";
export default {
  data() {
    return {
      navList: [
        {
          icon: "icon-power",
          title: "电力",
          routerPath: "/electric",
          routerName: "Electric",
        },
        {
          icon: "icon-droplet",
          title: "水力",
          routerPath: "/water",
          routerName: "Water",
        },
        {
          icon: "icon-airplane",
          title: "航班",
        },
        {
          icon: "icon-home2",
          title: "业务用房",
        },
        {
          icon: "icon-power",
          title: "电力",
        },
        {
          icon: "icon-power",
          title: "电力",
        },
        {
          icon: "icon-power",
          title: "电力",
        },
      ],
    };
  },
  components: {
    MyCanvas,
  },
  methods: {
    navFn(targetPath, targetName) {
      this.$router.push({
        path: targetPath,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  .nav {
    position: absolute;
    top: 19.2708vw;
    left: 50%;
    transform: translateX(-50%);
  }
  .nav ul {
    width: 50.2604vw;

    // background-color: blue;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 4.6875vw;
      height: 4.6875vw;
      box-sizing: border-box;
      background: #d9f4f3;
      border-radius: 0.2604vw;
      text-align: center;
      padding-top: 0.625vw;
      cursor: pointer;
      font-size: 1.25vw;

      span:nth-child(2) {
        display: block;
        margin-top: 0.625vw;
        font-size: 0.8333vw;
        color: #fff;
        font-size: 1.0417vw;
      }
    }
  }
}
</style>
