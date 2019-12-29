<template>
	<view>
		<view class="box">
			<QSTabs :current="current_1" :tabs="tabs_1" minWidth="375" @change="change($event, '1')"/>
		</view>
		<view>
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :current="current_content">
				<swiper-item>
					<view class="swiper-item example-body">
						<uni-grid :column="4">
							<uni-grid-item>
								<view class="grid-item-box"  @tap="showDialogButtom">
									<image src="/static/temp/c3.png" class="image" mode="aspectFill" />
									<text class="text">餐饮</text>
								</view>
							</uni-grid-item>
							<uni-grid-item>
								<view class="grid-item-box">
									<image src="/static/temp/c3.png" class="image" mode="aspectFill" />
									<text class="text">日用</text>
								</view>
							</uni-grid-item>
							<uni-grid-item>
								<view class="grid-item-box">
									<image src="/static/temp/c3.png" class="image" mode="aspectFill" />
									<text class="text">交通</text>
								</view>
							</uni-grid-item>
							<uni-grid-item>
								<view class="grid-item-box">
									<image src="/static/temp/c3.png" class="image" mode="aspectFill" />
									<text class="text">孩子</text>
								</view>
							</uni-grid-item>
							<uni-grid-item>
								<view class="grid-item-box">
									<image src="/static/temp/c3.png" class="image" mode="aspectFill" />
									<text class="text">其他</text>
								</view>
							</uni-grid-item>
							<uni-grid-item>
								<view class="grid-item-box">
									<image src="/static/temp/c3.png" class="image" mode="aspectFill" />
									<text class="text">设置</text>
								</view>
							</uni-grid-item>
						</uni-grid>
					</view>
				</swiper-item>
			<swiper-item>
				<view class="swiper-item example-body">
					<uni-grid :column="4" :show-border="false">
						<uni-grid-item>
							<view class="grid-item-box">
								<image src="/static/temp/c3.png" class="image" mode="aspectFill" />
								<text class="text">工资</text>
							</view>
						</uni-grid-item>
						<uni-grid-item>
							<view class="grid-item-box">
								<image src="/static/temp/c3.png" class="image" mode="aspectFill" />
								<text class="text">兼职</text>
							</view>
						</uni-grid-item>
						<uni-grid-item>
							<view class="grid-item-box">
								<image src="/static/temp/c3.png" class="image" mode="aspectFill" />
								<text class="text">理财</text>
							</view>
						</uni-grid-item>
						<uni-grid-item>
							<view class="grid-item-box">
								<image src="/static/temp/c3.png" class="image" mode="aspectFill" />
								<text class="text">礼金</text>
							</view>
						</uni-grid-item>
						<uni-grid-item>
							<view class="grid-item-box">
								<image src="/static/temp/c3.png" class="image" mode="aspectFill" />
								<text class="text">其他</text>
							</view>
						</uni-grid-item>
						<uni-grid-item>
							<view class="grid-item-box">
								<image src="/static/temp/c3.png" class="image" mode="aspectFill" />
								<text class="text">设置</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</view>
			</swiper-item>
			</swiper>
		</view>
	
	<view class="has-pd-18 has-borderb is-center has-mgb-10" @tap="showDialogButtom">底部弹窗</view>
	<simpleModal ref="showDialogButtom" :buttom="true" contentClass="has-bg-f8" @maskClose="buttomMaskClose" @cancelButton="buttomCancelButton">
		<view class="has-pd-20">
			<view class="example-body">
				<uni-grid :column="4">
					<uni-grid-item>
						<view class="grid-item-box">							
					<text class="text">7</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item-box">
							<text class="text">8</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item-box">						
							<text class="text">9</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item-box">						
							<text class="text">今天</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item-box">							
							<text class="text">4</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item-box">						
							<text class="text">5</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item-box">	
							<text class="text">6</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item-box">	
							<text class="text">+</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item-box">							
							<text class="text">1</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item-box">						
							<text class="text">2</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item-box">	
							<text class="text">3</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item-box">	
							<text class="text">-</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item-box">							
							<text class="text">.</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item-box">						
							<text class="text">0</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item-box">	
							<text class="text">X</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item-box">	
							<text class="text">=完成</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</view>
	</simpleModal>
	</view>
</template>

<script>
	import QSTabs from '@/components/QS-tabs/QS-tabs.vue';
	import uniGrid from "@/components/uni-grid/uni-grid.vue";
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue";
	
	import simpleAlert from '@/components/simple-pro/alert.vue'; // 具体可参考：http://ext.dcloud.net.cn/plugin?id=41
	import simpleDialog from '@/components/simple-pro/dialog.vue';
	import simpleModal from '@/components/simple-pro/customModal.vue';
	import simpleLoading from '@/components/simple-pro/dialog-loading.vue';
	export default {
		components: {
			QSTabs,uniGrid,uniGridItem,
			simpleAlert,
			simpleDialog,
			simpleModal,
			simpleLoading
		},
		data() {
			return {
				tabs_1: [],
				current_1: 0,
				current_content:0,
				background: ['color1', 'color2'],
				            indicatorDots: false,
				            autoplay: false,
				            interval: 2000,
				            duration: 500
			}
		},
		onReady() {
			this.tabs_1 = ['支出', '收入']
		},
		methods: {
			change(index, i) {
				this['current_' + i] = index;
				this['current_content']=index;
			},
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			showDialogButtom:function(){
				this.$refs.showDialogButtom.show({
					showCancelButton:true,
				});
			},
			buttomMaskClose:function(){
				// 有坑 点击内容的时候也会关闭， 
				this.$refs.showDialogButtom.hide(); 
			},
			buttomCancelButton:function(){
				console.log("啊哈哈哈哈哈");
			},
		}
	}
</script>

<style>
	.grid-item-box {
		flex: 1;
		/* position: relative;
 */
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 5px 0;
	}

	.grid-dot {
		position: absolute;
		top: 5px;
		right: 15px;
	}

	.swiper {
		height: 420px;
	}
	
	.example-body {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}
	.image {
		width: 70rpx;
		height: 70rpx;
		
	}
	
	.text {
		font-size: 26rpx;
		margin-top: 10rpx;
	}
</style>
