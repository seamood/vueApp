export const increment = ({
  commit
}) => commit('increment')
export const decrement = ({
  commit
}) => commit('decrement')
export const increment = state => {
  state.count = state.count + 5
}
export const decrement = state => {
  state.count = state.count - 3
}
