module.exports = function reverse (n) {
  return Number((Math.abs(n) + '').split('').reverse().join(''))
}
