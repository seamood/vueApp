import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const count = state => state.count
const store = new Vuex.Store({
  state: {
    todos: [{
      id: 1,
      text: '...',
      done: true
    },
    {
      id: 1,
      text: '...',
      done: false
    }
    ]
  },
  getters: {
    doneTodos: (state, getters) => {
    //   return state.todos.filters(todo => todo.done)
    //   return getters.done.doneTodos.length
      return state.todos.filter(todo => todo.done)
    }
  }
})
