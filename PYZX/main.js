import Vue from 'vue'
import App from './App'

// 首页
import home from './pages/bill/home.vue'
Vue.component('home',home)

//明细
import detail from './pages/bill/detail.vue'
Vue.component('detail',detail)

//记账
import bill from './pages/bill/bill.vue'
Vue.component('bill',bill)

//点滴
import drip from './pages/bill/drip.vue'
Vue.component('drip',drip)

//我的
import me from './pages/bill/me.vue'
Vue.component('me',me)

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



