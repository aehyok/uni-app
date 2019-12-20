<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="phoneNumber">手机号码：</text>
				<m-input class="m-input" type="text" clearable focus v-model="phoneNumber" placeholder="请输入手机号码"></m-input>
			</view>
			<view class="input-row">
				<text class="validateCode">验证码：</text>
				<m-input type="text"  v-model="password" placeholder="请输入手机验证码"></m-input>
				<view class="validateView">发送验证码</view>
			</view>
			
<!-- 			<view class="input-row">
				<text class="validateCode">验证码：</text>
				<m-input type="text" displayable v-model="password" placeholder="请输入手机验证码"></m-input>
			</view> -->
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindLogin">绑定</button>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import mInput from '../../components/m-input.vue'

	export default {
		components: {
			mInput
		},
		data() {
			return {
				providerList: [],
				hasProvider: false,
				phoneNumber: '',
				password: '',
				positionTop: 0,
				isDevtools: false,
			}
		},
		computed: mapState(['forcedLogin']),
		methods: {
			...mapMutations(['login']),
			initProvider() {
				const filters = ['weixin', 'qq', 'sinaweibo'];
				uni.getProvider({
					service: 'oauth',
					success: (res) => {
						if (res.provider && res.provider.length) {
							for (let i = 0; i < res.provider.length; i++) {
								if (~filters.indexOf(res.provider[i])) {
									this.providerList.push({
										value: res.provider[i],
										image: '../../static/img/' + res.provider[i] + '.png'
									});
								}
							}
							this.hasProvider = true;
						}
					},
					fail: (err) => {
						console.error('获取服务供应商失败：' + JSON.stringify(err));
					}
				});
			},
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			},
			bind(){
				
			},
			bindLogin() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				uni.request({
				    url: 'https://www.aehyok.com:1281/api/Blog/TagList', //仅为示例，并非真实接口地址。
				    data: {
				        text: 'uni.request'
				    },
				    header: {
				        'custom-header': 'hello' //自定义请求头信息
				    },
				    success: (res) => {
				        console.log(res.data);
						uni.showToast({
							icon: 'none',
							title: res.data
						});
				        this.text = 'request success';
				    }
				});
				
				
				wx.login({
				//获取code
				success: function(res) {
				code = res.code //返回code
				console.log(res.code+'wx.code');
				}
				});

				// wx.request({
				// url:'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=’+ code +’&grant_type=authorization_code’,
				// data: {},
				// header: {
				// ‘content-type’: ‘application/json’
				// },
				// success: function(res) {
				// openid = res.data.openid //返回openid
				// }
				// })
				
				// uni.getUserInfo({
				//                     provider: 'weixin',
				//                     success: function(infoRes) {
				// 						console.log(infoRes);
				// 					}});
				
				uni.login({
                    provider: 'weixin',
                    success: function(loginRes) {	
						console.log(loginRes);
					}});			
				
				
				if (this.phoneNumber.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				/**
				 * 下面简单模拟下服务端的处理
				 * 检测用户账号密码是否在已注册的用户列表中
				 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
				 */
				const data = {
					phoneNumber: this.phoneNumber,
					password: this.password
				};
				const validUser = service.getUsers().some(function(user) {
					return data.phoneNumber === user.phoneNumber && data.password === user.password;
				});
				if (validUser) {
					this.toMain(this.phoneNumber);
				} else {
					uni.showToast({
						icon: 'none',
						title: '用户账号或密码不正确',
					});
				}
			},
			oauth(value) {
				uni.login({
					provider: value,
					success: (res) => {
						uni.getUserInfo({
							provider: value,
							success: (infoRes) => {
								/**
								 * 实际开发中，获取用户信息后，需要将信息上报至服务端。
								 * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
								 */
								this.toMain(infoRes.userInfo.nickName);
							},
							fail() {
								uni.showToast({
									icon: 'none',
									title: '登陆失败'
								});
							}
						});
					},
					fail: (err) => {
						console.error('授权登录失败：' + JSON.stringify(err));
					}
				});
			},
			getUserInfo({
				detail
			}) {
				if (detail.userInfo) {
					this.toMain(detail.userInfo.nickName);
				} else {
					uni.showToast({
						icon: 'none',
						title: '登陆失败'
					});
				}
			},
			toMain(userName) {
				this.login(userName);
				/**
				 * 强制登录时使用reLaunch方式跳转过来
				 * 返回首页也使用reLaunch方式
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../main/main',
					});
				} else {
					uni.navigateBack();
				}

			}
		},
		onReady() {
			this.initPosition();
			this.initProvider();
			// #ifdef MP-WEIXIN
			this.isDevtools = uni.getSystemInfoSync().platform === 'devtools';
			// #endif
		}
	}
</script>

<style>
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.action-row navigator {
		color: #007aff;
		padding: 0 10px;
	}

	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.oauth-image {
		position: relative;
		width: 50px;
		height: 50px;
		border: 1px solid #dddddd;
		border-radius: 50px;
		margin: 0 20px;
		background-color: #ffffff;
	}

	.oauth-image image {
		width: 30px;
		height: 30px;
		margin: 10px;
	}

	.oauth-image button {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
</style>
