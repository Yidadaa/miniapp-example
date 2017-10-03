/**
 * 小程序样例 - 首页
 */
const app = getApp()
const fakeData = require('../../utils/mock')
const {rand} = require('../../utils/utils')

Page({
  data: {
    motto: '这个人很懒，什么都没有留下', // 个性签名
    username: '', // 用户名
    userImg: '/images/avatar.jpg', // 头像图片地址
    hasUserInfo: false,
    listContent: []
  },
  onLoad: function () {
    // 加载用户数据以及模拟数据
    if (app.globalData.userInfo) {
      const {nickName, avatarUrl} = app.globalData.userInfo; // 优先加载缓存中数据
      this.setData({
        hasUserInfo: true,
        username: nickName,
        userImg: avatarUrl
      })
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo // 做一个数据缓存
          const { nickName, avatarUrl } = res.userInfo;
          this.setData({
            hasUserInfo: true,
            username: nickName,
            userImg: avatarUrl
          })
        }
      })
    }
    setTimeout(() => {
      // 模拟网络环境
      this.setData({
        listContent: fakeData
      })
    }, rand(1000))
  }
})
