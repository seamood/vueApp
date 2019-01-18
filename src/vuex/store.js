// 如果在模块构建系统中，请确保在开头调用了 vue.use（vuex）
import vue from 'vue'
import Vuex from 'vuex'
vue.use(Vuex)
const state = new Vuex.Store({
  count: 0
})
// 然后给actions注册事件处理函数，当这个函数触发时，将状态提交到mutaions中处理
const actions = {
  increment: ({commit}) => commit('increment'),
  //    提交到mutations中处理
  decrement: ({commit}) => commit('decrement')
}
// 更新状态
const mutations = {
  increment (state) {
    state.count = state.count + 5
  },
  decrement (state) {
    state.count = state.count - 3
  }
}
// 获取状态信息
const getters = {

}
// 下面这个相当关键了，所有模块。记住是所有，注册才能使用
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})