import { defineStore } from 'pinia'
import type loginPayloadT from '@/components/auth/Login.vue'

export const UserStore = defineStore('UserStore', {
  state: () => ({
    _user: {}
  }),
  getters: {
    user: (state) => state._user,
    isAuthenticated: (state) => Object.keys(state._user).length > 0
  },
  actions: {
    updateUserAction(userdata: typeof loginPayloadT) {
      this._user = userdata
    }
  }
})
