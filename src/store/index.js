import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    row: 1,
    allCredit: 0,
    subNameInput: [],
    credit: [],
    score: [],
    sum: '',
    sumCredit: 0.0
  },
  getters: {
    row: (state) => state.row,
    allCredit: (state) => state.allCredit,
    subNameInput: (state) => state.subNameInput,
    credit: (state) => state.credit,
    score: (state) => state.score,
    sum: (state) => state.sum,
    sumCredit: (state) => state.sumCredit
  },
  actions: {
    addRow ({commit}) {
      commit('addRow')
    },
    calculate ({commit}) {
      commit('calculate')
    }
  },
  mutations: {
    addRow (state) {
      state.row = state.row + 1
    },
    updatesubNameInput (state, message) {
      state.subNameInput = message
    },
    calculate (state) {
      state.allCredit = 0.0
      state.sumCredit = 0.0
      for (let i = 0; i < state.row; i++) {
        state.allCredit = state.allCredit + parseFloat(state.credit[i])
        let t = parseFloat(state.credit[i]) * parseFloat(state.score[i])
        state.sumCredit = state.sumCredit + t
      }
      state.sum = state.sumCredit / state.allCredit
      state.sum = parseFloat(state.sum).toFixed(2)
    }
    // removeTodo (state, todo) {
    //   let index = state.todos.findIndex(item => item.id === todo.id)
    //   state.todos.splice(index, 1)
    // }
  }
})
