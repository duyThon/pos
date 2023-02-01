<template>
  <div class="order-tabs">
    <div v-for="(cart,index) in listOrderHeaderTabs" :key="index">
      <span class="cart-tabs"><b style="font-size: 15px; padding-left:34px" @click="activeCart(cart.index)">Đơn {{cart.index}}</b><i @click="removeCart(cart.index)" style="padding-right:5px" class="el-icon-close"></i></span>
    </div>
      <span class="add-cart" @click="addNewCart"><i class="el-icon-plus"></i></span>
  </div>
</template>

<script>
import store from '@/store'
import { mapState } from 'vuex'

export default {
    name: 'orderTabs',
    data() {
        return {
          listOrderHeaderTabs: [],
        }
    },

    created() {
      this.listOrderHeaderTabs = this.listOrder
    },
    
    watch: {
      listOrder: function () {
        this.listOrderHeaderTabs = this.listOrder
      }
    },
       
    computed: {
      ...mapState(['listOrder']),
    },

    methods: {

      addNewCart() {
        if(this.listOrder[this.listOrder.length -1].cart.length > 0) {
          this.listOrderHeaderTabs.push({
            index: this.listOrderHeaderTabs.length + 1,
            cart: [],
            partyB:{},
            payment:{},
            active: true
          })
          localStorage.setItem('listOrder', JSON.stringify(this.listOrderHeaderTabs))
          store.commit('activeCart',this.listOrderHeaderTabs.length)
        } else {
          this.openAlert();
        }
      },

      removeCart(index) {
        store.commit('removeCart', index)
      },

      activeCart(index) {
        store.commit('activeCart',index)
      },

      openAlert() {
        this.$notify.error({
          title: 'Thông báo',
          dangerouslyUseHTMLString: true,
          message: `Đơn hàng ${this.listOrder.length} chưa có sản phẩm, không thể tạo đơn hàng mới`
        });
      }
    },

}
</script>

<style>
.order-tabs {
  display: flex;
}

.cart-tabs {
  margin-right: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 120px;
  height: 50px;
  background: rgb(166, 166, 166);
  color: #2A3042;
  border-radius: 8px 8px 0px 0px;
  cursor: pointer;
  justify-content: space-between;
  position: relative;
  top: 7px;
}

.add-cart {
  width: 28px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}
</style>