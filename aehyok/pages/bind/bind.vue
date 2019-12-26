<template>
	<view class="content">
		
		<button type="button" @tap="bind">测试事件</button>
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
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindLogin">绑定</button>
		</view>
	</view>
</template>

<script>
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
				phoneNumber: '',
				password: ''
			}
		},
		methods: {
			bind(){
				wx.requestSubscribeMessage({
					tmplIds: ["SJKejbRVTcjk5zb5eUIfYBacicIfLobCnkBmNR1H1js"],
					success: function (res) {    //成功
							uni.showToast({
								icon: 'none',
								title: '测试事件绑定成功'
							});
					},			
					fail(err) {    //失败			
						uni.showToast({
							icon: 'none',
							title: '测试事件失败'
						});
					}
				})
			},
			bindLogin() {
				
				// if (this.phoneNumber.length < 11 || this.phoneNumber.length > 11) {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '手机格式不正确'
				// 	});
				// 	return;
				// }
				// if (this.password.length < 6) {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '验证码输入有误，请重新输入'
				// 	});
				// 	return;
				// }
				var pn=this.phoneNumber;
				console.log(pn+'-----------wx.code');
				let code=''
				wx.login({
				//获取code
				success: function(res) {
					code = res.code //返回code
					console.log(res.code+'-----------wx.code');
					let url='https://api.weixin.qq.com/sns/jscode2session?appid=wxee56cef40c22fe81&secret=8be45655c00b7a62a417aea43e30fbb9&js_code='+ code +'&grant_type=authorization_code';
					console.log(url);
					wx.request({
						url: url,
						data: {},
						header: {
						'content-type': 'application/json'
					},success: function(res) {
						console.log(res);
						let openid = res.data.openid //返回openid
						console.log(openid+'-----------------openid');
						//bindMiniServer(this.phoneNumber,openid);
						uni.request({
							url: 'http://www.szsinostar.com:8686/WeiXinApi/Bind?phoneNumber='+pn+'&openId='+openid, //仅为示例，并非真实接口地址。
							data: {
							},
							header: {
								'custom-header': 'hello' //自定义请求头信息
							},
							success: (res) => {
								console.log(res.data);
								if(res.data.code=='200')
								{
									uni.showToast({
										icon: 'none',
										title: '绑定成功！'
									});
								}
								else{
									uni.showToast({
										icon: 'none',
										title: '绑定失败,请联系管理员！'
									});
								}

							}
							});
					}
					})
					}
				});

										
				
				

				/**
				 * 下面简单模拟下服务端的处理
				 * 检测用户账号密码是否在已注册的用户列表中
				 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
				 */
				// const data = {
				// 	phoneNumber: this.phoneNumber,
				// 	password: this.password
				// };
				// const validUser = service.getUsers().some(function(user) {
				// 	return data.phoneNumber === user.phoneNumber && data.password === user.password;
				// });
				// if (validUser) {
				// 	this.toMain(this.phoneNumber);
				// } else {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '用户账号或密码不正确',
				// 	});
				// }
			},
			bindMiniServer(phoneNumber,openId){

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
