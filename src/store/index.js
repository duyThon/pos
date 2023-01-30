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
      if(localStorage.getItem('listOrder')) {
        state.listOrder = JSON.parse(localStorage.getItem('listOrder'))
      } else {
        state.listOrder = [{
          index: 1,
          cart: [],
          partyB:{},
          payment:{}
        }]
        localStorage.setItem('listOrder', JSON.stringify(state.listOrder))
      }
    },

    addToCart(state, item) {
      const cart = JSON.parse(localStorage.getItem('listOrder'))[0].cart
      const checkQuantity = cart.filter(e => e.itemInstance === item.itemInstance)
      if (!checkQuantity.length > 0) {
        state.listOrder[0].cart.push({
          ...item,
          quantity: 1
        })
        localStorage.setItem('listOrder', JSON.stringify(state.listOrder))
      } else {
        state.listOrder[0].cart.map(e => {
          if(e.itemInstance === item.itemInstance) {
            e.quantity++;
          }
        })
        localStorage.setItem('listOrder', JSON.stringify(state.listOrder))
      }
    },

    updateOrders(state) {
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
