import {
  mapState
} from 'vuex'

export default {
  // ....
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数'count'等同于'state => state.count'
    countAlias: 'count',
    countPlusLocalState (state) {
      return state.count + this.localCount
    }

  })
}
