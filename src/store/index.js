import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listOrder: [
    ],
  },
  getters: {
    listOrder: state => state.listOrder,
  },
  mutations: {
    createNewOrder (state) {
      state.listOrder = [{
        index: 1,
        cart: [],
        partyB:{},
        payment:{}
      }]
      localStorage.setItem('listOrder', JSON.stringify(state.listOrder))
    },

    addToCart(state, item) {
      state.listOrder[0].cart.push(item)
      localStorage.setItem('listOrder', JSON.stringify(state.listOrder))
    },

    updateOrders() {
      this.state.listOrder.push({
        index : this.state.listOrder.length,
        cart: [],
        partyB:{},
        payment:{}
      })
      localStorage.setItem('listOrder', this.state.listOrder)
    }
  },
  actions: {
  },
  modules: {
  }
})
