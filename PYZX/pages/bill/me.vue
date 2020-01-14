<template name="me">
	<view>
		<cu-custom bgColor="bg-gradual-blue" isBack="false">
			<block slot="content">我的</block>
		</cu-custom>
		<scroll-view scroll-y class="scrollPage">
		  <view class="UCenter-bg">
		    <image src="/static/logo.png" class="png" mode="widthFix"></image>
		    <view class="text-xl">
		      <text class="text-df">v2.0</text>
		    </view>
		    <view class="margin-top-sm">
		      <text>By:aehyok</text>
		    </view>
		    <image src="https://www.aehyok.com/images/wave.gif" mode="scaleToFill" class="gif-wave"></image>
		  </view>
		  <view class="padding flex text-center text-grey bg-white shadow-warp">
		    <view class="flex flex-sub flex-direction solid-right">
		      <view class="text-xxl text-orange">{{visitTotal}}</view>
		      <view class="margin-top-sm">
		        <text class="cuIcon-attentionfill"></text> View</view>
		    </view>
		    <view class="flex flex-sub flex-direction solid-right">
		      <view class="text-xxl text-blue">{{starCount}}</view>
		      <view class="margin-top-sm">
		        <text class="cuIcon-favorfill"></text> Star</view>
		    </view>
		    <view class="flex flex-sub flex-direction">
		      <view class="text-xxl text-green">{{forksCount}}</view>
		      <view class="margin-top-sm">
		        <text class="cuIcon-fork"></text> Fork</view>
		    </view>
		  </view>
		  <view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius">
		    <view class="cu-item arrow">
		      <view class="content" bindtap="CopyLink" data-link="https://github.com/aehyok/uni-app">
		        <text class="cuIcon-github text-grey"></text>
		        <text class="text-grey">我的账单</text>
		      </view>
		    </view>
		    <view class="cu-item arrow">
		      <navigator class="content" url="/pages/bill/moment" hover-class="none">
		        <image src="/static/logo.png" class="png" mode="aspectFit"></image>
		        <text class="text-grey">朋友圈</text>
		      </navigator>
		    </view>
		    <view class="cu-item arrow">
		      <navigator class="content" url="/pages/about/log/log" hover-class="none">
		        <text class="cuIcon-formfill text-green"></text>
		        <text class="text-grey">我的签到</text>
		      </navigator>
		    </view>
		    <view class="cu-item arrow">
		      <view class="content" bindtap="showQrcode">
		        <text class="cuIcon-appreciatefill text-red"></text>
		        <text class="text-grey">我的提醒</text>
		      </view>
		    </view>
		    <view class="cu-item arrow">
		      <button class="cu-btn content" open-type="feedback">
		        <text class="cuIcon-writefill text-cyan"></text>
		        <text class="text-grey">意见反馈</text>
		      </button>
		    </view>
		    <view class="cu-item arrow">
		      <navigator class="content" url="/pages/about/test/list" hover-class="none">
		        <text class="cuIcon-creativefill text-orange"></text>
		        <text class="text-grey">测试</text>
		      </navigator>
		    </view>
		  </view>
		  <view class="cu-tabbar-height"></view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.UCenter-bg {
  background-image: url(https://www.aehyok.com/images/me.jpg);
  background-size: cover;
  height: 550rpx;
  display: flex;
  justify-content: center;
  padding-top: 40rpx;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-weight: 300;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}

.UCenter-bg text {
  opacity: 0.8;
}

.UCenter-bg image {
  width: 200rpx;
  height: 200rpx;
}

.UCenter-bg .gif-wave{
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 99;
  mix-blend-mode: screen;  
  height: 100rpx;   
}

map,.mapBox{
  left: 0;
  z-index: 99;
  mix-blend-mode: screen;  
  height: 100rpx;   
}

map,.mapBox{
  width: 750rpx;
  height: 300rpx;
}
</style>
