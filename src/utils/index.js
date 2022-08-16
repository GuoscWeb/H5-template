import sha1 from 'sha1'

export default {
  /** 数字单位转换
   * @param num 数字
   * @param unit 单位
   */
  convert(num, unit) {
    const tenThousand = 10000
    const tenMillion = 100000000
    num = parseFloat(num)
    if (num < tenThousand) {
      return num + unit
    }
    if (num > tenThousand && num < tenMillion) {
      return (((num / tenThousand).toFixed(2))) + "万" + unit
    }
    if (num > tenMillion) {
      return ((num / tenMillion).toFixed(2)) + "亿" + unit
    }
  },
  sha1(str) {
    return sha1(str)
  },
  convertQuery(query) {
    let str =
      '{"' +
      query
        .replace("?", "")
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}';
    return JSON.parse(str);
  },
}