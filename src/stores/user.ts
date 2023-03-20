import { defineStore } from 'pinia'

interface UserState {
  name: string
  email: string
}

export const UserStore = defineStore('UserStore', {
  state: (): { user: UserState; isLogged: boolean } => ({
    user: { name: '', email: '' },
    isLogged: false
  }),

  // getters: {
  //   user: (state): UserState => state.user,
  //   isLogged: (state): boolean => state.isLogged
  // },

  actions: {}
})
