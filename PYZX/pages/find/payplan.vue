<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText" @tap="backTo()">
				<text class="cuIcon-back"></text>返回
			</block>
			<block slot="content">还款计划</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabNav" :key="index" @tap="tabSelect" :data-id="index">
				{{tabNav[index]}}
			</view>
		</scroll-view>
		<block v-if="TabCur==0">
			111111
		</block>
		<block v-if="TabCur==1">
			222222
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				tabNav:["本月计划","历史计划"],
			}
		},
		methods: {
			backTo(){
				uni.navigateBack();
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this['current_content']=this.TabCur;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style>

</style>
