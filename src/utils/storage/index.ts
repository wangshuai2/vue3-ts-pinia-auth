/**
 * localStorage封装
 *
 * @export
 * @class clsStorage
 */
export class clsStorage {
  /**
   * 存储的有效期（单位：天）
   * 0 不限制，为空时默认7天
   *
   * @private
   * @static
   * @type {number} 默认7天
   * @memberof clsStorage
   */
  private static expireTime: number = 7

  /**
   * 设置localStorage
   *
   * @static
   * @param {string} key 键
   * @param {*} value 需要存储的值
   * @param {number} [expire] 过期时间
   * @memberof clsStorage
   */
  static set<T>(key: string, value: T, expire?: number) {
    const data = JSON.stringify({
      value, // 存储的值
      expire, // 过期时间
      time: Date.now() // 存储的时间
    })
    localStorage.setItem(key, data)
  }

  /**
   * 获取localStorage
   * 有时间过期的，超过时间后自动删除，并返回null
   *
   * @static
   * @param {string} key
   * @return {*}
   * @memberof clsStorage
   */
  static get<T>(key: string): T | null {
    const data = localStorage.getItem(key)
    if (!data) return null // 不存在，返回null
    const { value, expire, time } = JSON.parse(data)
    // 没有设置过期时间，或者设置的过期时间为0，则不限制过期时间
    if (expire) {
      const now = Date.now()
      // 超过过期时间，删除，并返回null
      if (now - time > expire * 24 * 60 * 60 * 1000) {
        localStorage.removeItem(key)
        return null
      }
    }
    return value
  }

  /**
   * 删除localStorage
   *
   * @static
   * @param {string} key
   * @memberof clsStorage
   */
  static remove(key: string) {
    localStorage.removeItem(key)
  }

  /**
   * 清空localStorage
   *
   * @static
   * @memberof clsStorage
   */
  static clear() {
    localStorage.clear()
  }
}
