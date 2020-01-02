<template>
	<view>
		<home v-if="PageCur=='home'"></home>
		<detail v-if="PageCur=='detail'"></detail>
		<bill v-if="PageCur=='bill'"></bill>
		<drip v-if="PageCur=='drip'"></drip>
		<me v-if="PageCur=='me'"></me>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="home">
				<view class='cuIcon-cu-image'>
					<image :src="'https://www.aehyok.com/images/tabbar/home' + [PageCur=='home'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='home'?'text-blue':'text-gray'">首页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="detail">
				<view class='cuIcon-cu-image'>
					<image :src="'https://www.aehyok.com/images/tabbar/detail' + [PageCur=='detail'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='detail'?'text-blue':'text-gray'">账单</view>
			</view>
<!-- 			<view class="action text-gray add-action" @click="NavChange" data-cur="bill">
				<view class='cuIcon-cu-image'>
					<image :src="'https://www.aehyok.com/images/tabbar/bill_cur.png'"></image>
				</view>
				<view :class="PageCur=='bill'?'text-green':'text-gray'">记账</view>
			</view> -->
			<view class="action text-gray add-action">
				<button class="cu-btn cuIcon-add bg-blue shadow" @tap="recordBill"></button>
				发布
			</view>
			<view class="action" @click="NavChange" data-cur="drip">
				<view class='cuIcon-cu-image'>
					<image :src="'https://www.aehyok.com/images/tabbar/drip' + [PageCur == 'drip'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='drip'?'text-green':'text-gray'">点滴</view>
			</view>
			<view class="action" @click="NavChange" data-cur="me">
				<view class='cuIcon-cu-image'>
					<image :src="'https://www.aehyok.com/images/tabbar/me' + [PageCur == 'me'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='me'?'text-green':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'home'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			},
			recordBill:function(){
				uni.redirectTo({
					url: '../bill/bill'
				});
			}
		}
	}
</script>

<style>

</style>
