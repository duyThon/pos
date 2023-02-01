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
          payment:{},
          active: true
        }]
        localStorage.setItem('listOrder', JSON.stringify(state.listOrder))
      }
    },

    addToCart(state, item) {
      const cartList = JSON.parse(localStorage.getItem('listOrder'))
      const activeCart = cartList.find(cart => cart.active == true)
      const cart = activeCart.cart
      const checkQuantity = cart.filter(e => e.itemInstance === item.itemInstance)
      if (!checkQuantity.length > 0) {
        state.listOrder[activeCart.index - 1].cart.push({
          ...item,
          quantity: 1
        })
        localStorage.setItem('listOrder', JSON.stringify(state.listOrder))
      } else {
        state.listOrder[activeCart.index - 1].cart.map(e => {
          if(e.itemInstance === item.itemInstance) {
            e.quantity++;
          }
        })
        localStorage.setItem('listOrder', JSON.stringify(state.listOrder))
      }
    },

    activeCart(state, index) {
      let cartList = JSON.parse(localStorage.getItem('listOrder'));
      for( let cart of cartList) {
        if(cart.index != index) {
          cart.active = false
        } else {
          cart.active = true
        }
      }
      console.log(index);
      this.commit('saveData',cartList);
    },

    removeCart(state,index) {
      let cartList = JSON.parse(localStorage.getItem('listOrder'))
      cartList = cartList.filter(cart => {
        return cart.index != index
      })
      console.log(cartList);
      for(let i in cartList) {
        cartList[i].index = parseInt(i) + 1
      }
      console.log(cartList);
      this.commit('saveData', cartList)
    },

    saveData(state, cartList) {
      state.listOrder = cartList;
      localStorage.setItem('listOrder', JSON.stringify(cartList))
    }
  },
  actions: {
  },
  modules: {
  }
})
