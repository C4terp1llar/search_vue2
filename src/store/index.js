import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [
      { id: 1, nickname: 'Nam4less', level: 20, score: 4500 },
      { id: 2, nickname: 'NamHunter', level: 25, score: 5600 },
      { id: 3, nickname: 'NamSlayer', level: 18, score: 3200 },
      { id: 4, nickname: 'NamBreaker', level: 30, score: 7200 },
      { id: 5, nickname: 'NamKing', level: 22, score: 5000 },
      { id: 6, nickname: 'NamMage', level: 15, score: 2800 },
      { id: 7, nickname: 'NamStalker', level: 28, score: 6100 },
      { id: 8, nickname: 'NamFury', level: 19, score: 3400 },
      { id: 9, nickname: 'NamWarden', level: 27, score: 6700 },
      { id: 10, nickname: 'NamStrike', level: 21, score: 4800 },
      { id: 11, nickname: 'NamFist', level: 24, score: 5200 },
      { id: 12, nickname: 'NamEclipse', level: 17, score: 3000 },
      { id: 13, nickname: 'NamRise', level: 26, score: 5800 },
      { id: 14, nickname: 'NamRider', level: 23, score: 4900 },
      { id: 15, nickname: 'NamSorcerer', level: 20, score: 4600 },
      { id: 16, nickname: 'ShaHunter', level: 25, score: 5600 },
      { id: 17, nickname: 'ShaSlayer', level: 18, score: 3200 },
      { id: 18, nickname: 'ShaBreaker', level: 30, score: 7200 },
      { id: 19, nickname: 'ShaKing', level: 22, score: 5000 },
      { id: 20, nickname: 'ShaMage', level: 15, score: 2800 }
    ],
  },
  getters: {
    // берем всех игроков
    getAllPlayers: (state) => state.players,

    // игрок по id для динамической страницы профиля
    getPlayerById: (state) => (id) => {
      return state.players.find(player => player.id === id);
    },
  },
})
