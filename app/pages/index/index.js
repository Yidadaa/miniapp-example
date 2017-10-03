//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '爱过的人都像你',
    username: '呵呵益达哒',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    listContent: [
      {
        date: '今天', // a Date String
        content: [{ // Array of events
            type: 'image', // could be image/video/pure text/share
            img: '/images/user-bg.jpg',
            text: '这里风景很不错啊这里风景很不错啊这里风景很不错啊这里风景很不错啊这里风景很不错啊这里风景很不错啊这里风景很不错啊这里风景很不错啊'
          }, {
            type: 'share',
            shareImg: '/images/user-bg.jpg',
            shareText: '无法释怀的十大旅游胜地',
            text: '国庆就去这里玩了~'
          }
        ]
      }, {
        date: '昨天', // a Date String
        content: [{ // Array of events
          type: 'image', // could be image/video/pure text/share
          img: '/images/user-bg.jpg',
          text: '这里风景很不错啊这里风景很不错啊这里风景很不错啊这'
        }, { // Array of events
          type: 'image', // could be image/video/pure text/share
          img: '/images/user-bg.jpg',
          text: '这里风景很不错啊这里风景很不错啊这'
        }]
      }
    ]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
