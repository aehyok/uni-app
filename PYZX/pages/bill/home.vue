<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" isBack="true">
			<block slot="backText" @tap="backTo()">
				<text class="cuIcon-back"></text>返回
			</block>
		</cu-custom>
		<scroll-view scroll-y class="page">
			<image src="https://www.aehyok.com/images/home.png"
			 mode="widthFix" class="response"></image>
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
			 <view class="cu-bar bg-white solid-bottom">
			 	<view class="action">
			 		<text class="cuIcon-title text-orange"></text> 2020年1月份度账单
			 	</view>
			 	<view class="action">
			 		<button class="cu-btn bg-blue shadow" @tap="setBudget">设置预算</button>
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
			 
			 <view class="cu-tabbar-height"></view>
		</scroll-view>
		<view class="cu-bar tabbar bg-white foot">
			<view class="action text-green">
				<view class="cuIcon-homefill"></view> 首页
			</view>
			<view class="action text-gray">
				<view class="cuIcon-similar"></view> 明细
			</view>
			<view class="action text-gray add-action">
				<button class="cu-btn cuIcon-add bg-green shadow" @tap="recordBill"></button>
				记账
			</view>
			<view class="action text-gray">
				<view class="cuIcon-cart">
					<view class="cu-tag badge">99</view>
				</view>
				点滴
			</view>
			<view class="action text-gray" @tap="abountMe">
				<view class="cuIcon-my">
					<view class="cu-tag badge"></view>
				</view>
				我的
			</view>
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				elements: [{
						title: '收入（元）',
						name: '150000',
						color: 'cyan',
						cuIcon: 'newsfill'
					},
					{
						title: '支出（元）',
						name: '150000',
						color: 'blue',
						cuIcon: 'colorlens'
					}
				],
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
