import { StorageEnum } from '@/config/storage.enum'
import { StoreEnum } from '@/config/store.enum'
import { clsStorage } from '@/utils/storage'
import { defineStore } from 'pinia'

/**
 * @description: 用户角色
 * @interface IUserInfo
 */
interface IUserInfo {
  /**
   * 用户名
   * @type {string}
   * @memberof IUserInfo
   * @description: 用户名
   */
  name: string
  /**
   * 用户角色
   * @type {rolesType}
   * @memberof IUserInfo
   * @description: admin | editor | operator | visitor
   */
  roles: rolesType
  /**
   * 用户信息
   * @type {*}
   * @memberof IUserInfo
   * @description: 用户信息
   */
  userInfo: any
  /**
   * 用户token
   * @type {string}
   * @memberof IUserInfo
   * @description: 用户token
   */
  token: string
}

export /** @type {*} */
const useUserStore = defineStore(StoreEnum.USER_STORE, {
  state: (): IUserInfo => ({
    name: '',
    token: '',
    userInfo: {},
    roles: 'visitor'
  }),
  getters: {
    /**
     * @description: 获取用户Token getter
     * @return {*}  {string}
     */
    getToken(): string {
      return this.token
    },
    /**
     * @description: 获取用户信息getter
     * @return {*}  {string[]}
     */
    getRoles(): string {
      return this.roles
    }
  },
  actions: {
    /**
     * @description: 设置token
     * @param {string} token
     */
    setToken(token: string) {
      this.token = token
    },
    /**
     * @description: 设置用户信息
     * @param {*} userInfo
     */
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo
    },
    /**
     * @description: 设置用户角色
     * @param {rolesType} roles
     */
    setRoles(roles: rolesType) {
      this.roles = roles
    },
    /**
     * @description: 登录
     * @param {string} username
     * @param {string} pwd
     * @return {boolean}  {Promise<boolean>}
     */
    login(username: string, pwd: string): Promise<boolean> {
      return new Promise((resolve, reject) => {
        if (username === 'wang' && pwd === '123') {
          this.setToken('token121')
          this.setUserInfo({
            name: 'wang',
            age: 18
          })
          this.setRoles('admin')
          clsStorage.set(StorageEnum.token, 'token121')
          clsStorage.set(StorageEnum.userInfo, {
            name: 'wang',
            age: 18
          })
          clsStorage.set(StorageEnum.roles, 'admin')
          resolve(true)
        } else {
          reject()
        }
      })
    },
    /**
     * @description: 退出登录
     */
    logout() {
      this.setToken('')
      this.setUserInfo({})
      this.setRoles('visitor')

      clsStorage.remove(StorageEnum.token)
      clsStorage.remove(StorageEnum.userInfo)
      clsStorage.remove(StorageEnum.roles)
    }
  },
  persist: {
    key: StoreEnum.USER_STORE,
    storage: window.sessionStorage
  }
})
