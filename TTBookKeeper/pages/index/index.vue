<template>
	<view class="content">
		<navigator url="../addbill/addbill" open-type="redirect" hover-class="other-navigator-hover">
			<button type="primary" plain="true">记一笔</button>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
		}
	}
</script>

<style>
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.padding-top-button{
		padding-top: 25rpx;
	}
</style>
