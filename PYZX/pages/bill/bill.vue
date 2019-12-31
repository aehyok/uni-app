<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">记账</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabNav" :key="index" @tap="tabSelect" :data-id="index">
				{{tabNav[index]}}
			</view>
		</scroll-view>
		<block v-if="TabCur==0">
			<view class="bg-white padding">
				<view class="grid margin-bottom text-center col-4 cu-list">
					<view class="padding cu-item">
						1
					</view>
					<view class="padding">2</view>
					<view class="padding bg-cyan">3</view>
					<view class="padding bg-blue">4</view> 
					<view class="padding bg-cyan">5</view>
					<view class="padding bg-blue">6</view>
					<view class="padding bg-cyan">7</view>
					<view class="padding bg-blue">8</view>
				</view>
			</view>
		</block>
		<block v-if="TabCur==1">
			<view class="cu-list grid col-4 no-border">
				<view class="cu-item">
					<view class="cuIcon-cardboardfill text-red">
					<view class="cu-tag badge">99+</view>
					</view>
					<text>
					VR
					</text>
			</view>
			<view class="cu-item">
			<view class="cuIcon-recordfill text-orange">
			<view class="cu-tag badge"></view>
			</view>
			<text>
			录像
			</text>
			</view>
			<view class="cu-item">
			<view class="cuIcon-picfill text-yellow"></view>
			<text>
			图像
			</text>
			</view>
			<view class="cu-item">
			<view class="cuIcon-noticefill text-olive">
			<view class="cu-tag badge">22</view>
			</view>
			<text>
			通知
			</text>
			</view>
			<view class="cu-item">
			<view class="cuIcon-upstagefill text-cyan"></view>
			<text>
			排行榜
			</text>
			</view>
			<view class="cu-item">
			<view class="cuIcon-clothesfill text-blue"></view>
			<text>
			皮肤
			</text>
			</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				tabNav:["支出","收入"],
				tabs_1: [],
				gridBorder: false,
				current_1: 0,
				current_content:0,
				background: ['color1', 'color2'],
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500,
			};
		},
		methods: {
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
