<template name="home">
	<view>
		<cu-custom bgColor="bg-gradual-blue" isBack="true">
			<block slot="backText" @tap="backTo()">
				<text class="cuIcon-back"></text>返回
			</block>
		</cu-custom>
		<scroll-view scroll-y class="page">
			<image src="https://www.aehyok.com/images/home.png"
			 mode="widthFix" class="response"></image>
			 <view class="cu-bar bg-white solid-bottom">
			 	<view class="action">
			 		<text class="cuIcon-title text-orange"></text> 2020年1月份度账单
			 	</view>
			 	<view class="action">
			 		<button class="cu-btn bg-blue shadow" @tap="showModal" data-target="Modal">设置预算</button>
			 	</view>
			 </view>
			 <view class="padding flex justify-between align-center">
			 	<view class="grid  col-4 ">
			 					<view class="padding-xs borderSet bgaColor text-shadow">单位（元）</view>
			 		<view class="padding-xs text-center borderSet bgaColor text-white" >实际</view>
			 		<view class="padding-xs text-center borderSet bgaColor text-white" >预算</view>
			 					<view class="padding-xs text-center borderSet bgaColor text-white" >差额</view>
			 		<view class="padding-xs borderSet" >收入</view>
			 		<view class="padding-xs borderSet" >150000</view>
			 		<view class="padding-xs borderSet" >150000</view>
			 					<view class="padding-xs borderSet" >150000</view>
			 		<view class="padding-xs borderSet" >支出</view>
			 		<view class="padding-xs borderSet" >150000</view>
			 		<view class="padding-xs borderSet" >150000</view>
			 					<view class="padding-xs borderSet" >150000</view>
			 					<view class="padding-xs borderSet" >差额</view>
			 					<view class="padding-xs borderSet" >150000</view>
			 					<view class="padding-xs borderSet" >150000</view>
			 					<view class="padding-xs borderSet" ></view>
			 	</view>
			 </view>
			 
			 <view class="cu-bar bg-white">
			 	<view class='action'>
			 		<text class='cuIcon-title text-blue'></text>2020年年度账单
			 	</view>
			 </view>
			 <view class="padding flex justify-between align-center">
				<view class="nav-list">
					<navigator class="nav-li bg-cyan" hover-class="none" style="animation:show 1.2s 1;" role="navigation">
						<view class="nav-title">收入（元）</view>
						<view class="nav-name">150000</view>
						<text class="cuIcon-newsfill"></text>
					</navigator>
					
					<navigator class="nav-li bg-olive" hover-class="none" style="animation:show 1.2s 1;" role="navigation">
						<view class="nav-title">支出（元）</view>
						<view class="nav-name">150000</view>
						<text class="cuIcon-newsfill"></text>
					</navigator>
					
					<navigator class="nav-li-2 bg-purple" hover-class="none" style="animation:show 1.2s 1;" role="navigation">
						<view class="nav-title">（收入-支出）结余 （元）</view>
						<view class="nav-name">150000</view>
						<text class="cuIcon-newsfill"></text>
					</navigator>
				 </view>
			 </view>
			 
			 
			 <view class="cu-tabbar-height"></view>
		</scroll-view>
		
		
		<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">预算规划</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					Modal 内容。
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null
			};
		},
		methods: {
			recordBill(){
				uni.redirectTo({
					url: './bill'
				});
			},
			abountMe(){
				uni.redirectTo({
					url: './me'
				});
			},
			setBudget(){
				
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			backTo(){
				uni.redirectTo({
					url: '../index/home'
				});
			}
		}
	}
</script>

<style>
	.borderSet{
		border: 1px solid lightgray;
	}
	.bgaColor{
		background-color: orange;
	}
</style>
