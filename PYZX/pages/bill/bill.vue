<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText" >返回</block>
			<block slot="content">记账</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabNav" :key="index" @tap="tabSelect" :data-id="index">
				{{tabNav[index]}}
			</view>
		</scroll-view>
		<block v-if="TabCur==0">
			<view class="cu-list grid col-4 no-border">
				<view class="cu-item">
					<view class="cuIcon-cardboardfill text-red">
						<!-- <view class="cu-tag badge">99+</view> -->
					</view>
					<text>餐饮</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-cardboardfill text-red">
						<!-- <view class="cu-tag badge">99+</view> -->
					</view>
					<text>孩子</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-cardboardfill text-red">
						<!-- <view class="cu-tag badge">99+</view> -->
					</view>
					<text>日用</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-cardboardfill text-red">
						<!-- <view class="cu-tag badge">99+</view> -->
					</view>
					<text>房租</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-cardboardfill text-red">
						<!-- <view class="cu-tag badge">99+</view> -->
					</view>
					<text>贷款</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-cardboardfill text-red">
						<!-- <view class="cu-tag badge">99+</view> -->
					</view>
					<text>加油</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-cardboardfill text-red">
						<!-- <view class="cu-tag badge">99+</view> -->
					</view>
					<text>其他</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-cardboardfill text-red">
						<!-- <view class="cu-tag badge">99+</view> -->
					</view>
					<text>设置</text>
				</view>
			</view>
		</block>
		<block v-if="TabCur==1">
			<view class="cu-list grid col-4 no-border">
				<view class="cu-item">
					<view class="cuIcon-cardboardfill text-red">
						<!-- <view class="cu-tag badge">99+</view> -->
					</view>
					<text>工资</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-cardboardfill text-red">
						<!-- <view class="cu-tag badge">99+</view> -->
					</view>
					<text>房租</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-cardboardfill text-red">
						<!-- <view class="cu-tag badge">99+</view> -->
					</view>
					<text>理财</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-cardboardfill text-red">
						<!-- <view class="cu-tag badge">99+</view> -->
					</view>
					<text>礼金</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-cardboardfill text-red">
						<!-- <view class="cu-tag badge">99+</view> -->
					</view>
					<text>其他</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-cardboardfill text-red">
						<!-- <view class="cu-tag badge">99+</view> -->
					</view>
					<text>设置</text>
				</view>
			</view>
		</block>
		<view class="borderbottom">
			<form>
				<view class="cu-form-group">
					<view class="title">备注:</view>
					<input placeholder="点击写备注" name="remark"></input>
					
					<input placeholder="0.00"  class='cu-btn shadow' v-model="amount" name="amount"></input>
				</view>
			</form>
			<view class="grid margin-bottom text-center col-4">
				<view class="padding" @tap="eventNumber(7)">7</view>
				<view class="padding" @tap="eventNumber(8)">8</view>
				<view class="padding" @tap="eventNumber(9)">9</view>
				<view class="padding" >今天</view>
				<view class="padding" @tap="eventNumber(4)">4</view>
				<view class="padding" @tap="eventNumber(5)">5</view>
				<view class="padding" @tap="eventNumber(6)">6</view>
				<view class="padding" >+</view>
				<view class="padding" @tap="eventNumber(1)">1</view>
				<view class="padding" @tap="eventNumber(2)">2</view>
				<view class="padding" @tap="eventNumber(3)">3</view>
				<view class="padding" @tap="eventNumber()">-</view>
				<view class="padding" @tap="eventNumber()">.</view>
				<view class="padding" @tap="eventNumber(0)">0</view>
				<view class="padding" @tap="clearNumber">X</view>
				<view class="padding" >完成</view>
			</view>
		</view>
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
				amount:0
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this['current_content']=this.TabCur;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			eventNumber(value){
				this.amount=this.amount+""+value;
			},
			clearNumber(){
				this.amount=0;
			},
			backTo(){
				uni.redirectTo({
					url: './home'
				});
				console.log('回到home');
			}
		}
	}
</script>

<style>
	.borderbottom{
		border: 1px solid lightgray;
		position: fixed;
		width: 100%;
		bottom: 0;
	}
	.border{
		
	}
	.fontsize{
		font-size: $uni-font-size-lg;
	}
	
	.shadowright{
		right: 0;
	}
</style>
