/**
 * @file 工具函数集合
 */

/**
 * @name 生成[0, n]范围内的随机数
 * @param {Number} 范围上限
 * @return {Number} 随机数
 */
const rand = (n) => {
  return parseInt(Math.random() * n)
}


module.exports = {rand}