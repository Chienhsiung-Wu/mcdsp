import Vue from 'vue'
import App from './App.vue'
import '@/style/reset.css' // 初始化样式
import '@/icomoon/style.css' // 引入iconmoon字体图标

// 引入echarts，并将其挂载到全局
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts

import Test from '@/views/Test' // 开发测试页面，不引入
import Navigation from '@/views/Navigation'
import Electric from '@/views/Electric'
import Water from '@/views/Water'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'

// 配置全局的axios
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:8000/data'


// 引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 定义路由规则
const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/navagation',
    name: 'Navagation',
    component: Navigation
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/electric',
    name: 'Electric',
    component: Electric,
  },
  {
    path: '/Water',
    name: 'Water',
    component: Water
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

// 创建路由对象 -  传入规则
const router = new VueRouter(
  {
    routes
  }
)


Vue.config.productionTip = false


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");