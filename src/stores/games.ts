import { defineStore } from 'pinia'

export type GamesT = 'memoryMatch' | 'wordMystery'

export const GamesStore = defineStore('GamesStore', {
  state: () => ({
    _games: [
      {
        memoryMatch: {
          win: 0,
          lose: 0,
          total: 0
        }
      },
      {
        wordMystery: {
          win: 0,
          lose: 0,
          total: 0
        }
      }
    ]
  }),
  getters: {
    memoryMatch: (state) => state._games.find((game) => game.memoryMatch),
    wordMystery: (state) => state._games.find((game) => game.wordMystery)
  },
  actions: {
    updateGame(name: string, data: any) {
      const currentGame = this._games.find((game) => game.hasOwnProperty(name))

      if (currentGame) {
        console.log(currentGame.memoryMatch)
      }
    }
  }
})
