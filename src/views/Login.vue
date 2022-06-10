<template>
  <div>
    <div class="title center">
      <h1>服管委数据统计平台</h1>
    </div>
    <form id="form_login">
      <div class="login center">
        <input type="text" name="username" placeholder="请输入用户名" />
        <input type="password" name="passwd" placeholder="请输入用户密码" />
        <input
          type="submit"
          value="登录按钮"
          @click.prevent="submit('/Navagation', 'Navagation')"
        />
      </div>
    </form>
    <!-- <button @click="ajaxFn">ajax</button> -->
    <MyCanvas></MyCanvas>
  </div>
</template>

<script>
// import { Scalable } from 'scalable';
// let scalabel = new Scalable('.container', {
//   align: 'center',
//   verticalAlign:'center'
// })

import axios from "axios";
import MyCanvas from "@/components/MyCanvas.vue";

// import $ from "jquery";
export default {
  data() {
    return {
      isShowFluid: true, // 默认显示流体背景
      timer: false,
    };
  },
  computed: {
    // viewWidth() {
    //   return  window.innerWidth
    // }
  },
  methods: {
    submit(targetPath, targetName) {
      this.$router.push({
        name: targetName,
      });
      this.isShowFluid = false;
    },
    ajaxFn() {
      axios({
        method: "get",
        url: "https://file1.dxycdn.com/2022/0511/329/5791751401425418453-135.json?t=27537258",
      }).then((res) => {
        console.log(res);
      });
    },
  },
  mounted() {},
  components: { MyCanvas },
};
</script>

<style lang="less" scoped>
// 图片宽高
@imgW: 774px * 0.7;
@imgH: 138px * 0.7;

// 版心宽度
@boxW: 1080px;

.center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

// Mixin
.center-block() {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.box {
  // margin: 0 auto;
  // height: 1080px;
  .center-block();
  // text-align: center;
  // border: 1px solid green;
}

.title {
  display: flex;
  text-align: center;

  width: @imgW;
  height: @imgH;
  background: url("../assets/images/title_bg.png") no-repeat top center;
  background-size: contain;
  opacity: 0.3;
  // margin: 0 auto;
  justify-content: center;
  align-items: center;

  .center-block();

  h1 {
    color: #00f0ff;
    font-size: 40px;
    line-height: @imgH;
    font-family: "Microsoft YaHei", "微软雅黑", "sans-serif";
    // background-color: green;
    align-self: center;
    margin-top: 0;
  }
}

.login {
  top: 30%;

  display: flex;
  width: 300px;
  height: 400px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  // width: 30rem;
  background-color: rgba(13, 66, 128, 0.3);
  // margin: 18.7% 0 0 63.7%;
  // .center-block();
  // margin: 30px auto 0;
  padding: 20px;
  border-radius: 10px;

  input {
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    display: block;
    border-radius: 5px;
    border: none;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
  }

  input:nth-child(-n + 2) {
    padding-left: 20px;
  }

  input[name="username"]::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    /**控制形状**/
    background: #000;
    /**控制图标颜色**/
    margin-right: 10px;
    /**图标与文字距离**/
  }

  input[name="passwd"] {
    // background: #000;
  }

  input[type="submit"] {
    cursor: pointer;
  }
}
</style>
