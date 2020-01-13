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
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-title text-green"></text>
					<text>信用卡还款</text>
				</view>
				<view class="action">
					<button class="cu-btn bg-green shadow-blur round">新增</button>
				</view>
			</view>
			<checkbox-group class="block" @change="CheckboxChange">
				<view class="cu-form-group">
					<view class="title">招商信用卡</view><view class="title">5200</view><view class="fontsize">每月5日</view>
					<checkbox class='round' :class="checkbox[1].checked?'checked':''" :checked="checkbox[1].checked?true:false" value="B"></checkbox>
				</view>
				<view class="cu-form-group">
					<view class="title">建行信用卡</view><view class="title">4200</view><view class="fontsize">每月5日</view>
					<checkbox class='round blue' :class="checkbox[2].checked?'checked':''" :checked="checkbox[2].checked?true:false"
					 value="C"></checkbox>
				</view>
			</checkbox-group>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-title text-blue"></text>
					<text>借款还款</text>
				</view>
				<view class="action">
					<button class="cu-btn bg-blue shadow-blur round">新增</button>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">彭冰光</view><view class="title">60000</view><view class="fontsize">10月5日</view>
				<checkbox class='round' :class="checkbox[1].checked?'checked':''" :checked="checkbox[1].checked?true:false" value="B"></checkbox>
			</view>
			<view class="cu-form-group">
				<view class="title">钟礼军</view><view class="title">4200</view><view class="fontsize">10月5日</view>
				<checkbox class='round blue' :class="checkbox[2].checked?'checked':''" :checked="checkbox[2].checked?true:false"
				 value="C"></checkbox>
			</view>
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
			},
			CheckboxChange(e) {
				var items = this.checkbox,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					items[i].checked = false;
					for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (items[i].value == values[j]) {
							items[i].checked = true;
							break
						}
					}
				}
			}
		}
	}
</script>

<style>
	.fontsize{
		font-size: 18upx;
	}
</style>
