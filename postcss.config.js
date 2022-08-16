module.exports = {
  "plugins": {
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ['*']
    },
    autoprefixer: {
      brosers: ['Android >= 4.0', 'IOS >= 8']
    }
  }
}