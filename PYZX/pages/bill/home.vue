<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">糖糖记账</block>
		</cu-custom>
		
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
			<view class="action text-gray">
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
				
			}
		},
		methods: {
			recordBill(){
				uni.redirectTo({
					url: './bill'
				});
			}
		}
	}
</script>

<style>

</style>
