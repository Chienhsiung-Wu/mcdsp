<template>
  <div>
    <!-- 这里是登录首页，不要删除 -->
    <Login v-if="$route.name === 'Login'"></Login>
    <router-view></router-view>
    <!-- 这里是登录首页，不要删除 -->

    <!-- <ElectricPowerCurve></ElectricPowerCurve> -->
  </div>
</template>
<script>
import Login from "@/views/Login";
// import CovidData from "./components/CovidData";
// import MyCanvas from "@/views/MyCanvas";

export default {
  components: {
    Login,
  },
};
</script>
<style></style>
