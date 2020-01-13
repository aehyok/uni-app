<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText" @tap="backTo()">
				<text class="cuIcon-back"></text>返回
			</block>
			<block slot="content">每日计划</block>
		</cu-custom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			backTo(){
				uni.navigateBack();
			}
		}
	}
</script>

<style>

</style>
