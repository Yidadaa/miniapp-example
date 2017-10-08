/**
 * @file 生成模拟数据
 */

const {rand} = require('./utils')

const imgUrl = '/images/user-bg.jpg'
const fakeText = '这里风景很不错'
const today = new Date().getTime();
/**
 * @name 生成假图片动态
 * @return {
 *  type: {String} 动态种类
 *  text: {String} 动态内容
 *  img: {String} 动态图片url
 * }
 */
const fakeImage = () => {
  return {
    type: 'image',
    text: new Array(rand(5) + 1).fill(fakeText),
    img: imgUrl
  }
}
/**
 * @name 生成假分享数据
 * @return {
 *  type: {String} 动态类型
 *  text: {String} 动态文字
 *  shareText: {String} 分享文字
 *  shareImg: {String} 分享缩略图地址
 * }
 */
const fakeShare = () => {
  return {
    type: 'share',
    text: new Array(rand(2) + 1).fill(fakeText),
    shareImg: imgUrl,
    shareText: new Array(rand(3) + 1).fill(fakeText)
  }
}
/**
 * @name 生成假日期
 * @param {Number} n 当前日往前数n天
 * @reuturn {String, String} {month, day}
 */
const fakeDate = (n) => {
  const date = new Date(today - 24 * 3600 * 1000 * n);
  const day = date.getDate(); // 获取日期
  const month = (date.getMonth() + 1).toString(); // 获取月份
  return {
    month,
    day: day < 10 ? `0${day}` : `${day}` // 个位数前面补零
  }
}

module.exports =  new Array(rand(10) + 3).fill(0).map((v, i) => {
  return {
    date: fakeDate(i),
    content: new Array(rand(3)).fill(0).map((v, i) => {
      // 每天最多生成3条动态
      return Math.random() > 0.6 ? fakeShare() : fakeImage()
    })
  }
}).filter(v => v.content.length > 0) // 筛选掉无动态的日子
