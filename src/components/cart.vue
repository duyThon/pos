<template>
  <div>
    <b-table :fields="cartFields" :items="listItems">
        <!-- <template v-if="listItems.length > 0" #table-caption>This is a table caption.</template> -->

    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store'

  export default {
    data() {
      return {
        cartFields: [
            {
                label: "Sản phẩm",
                key: "itemInstance",
                thStyle: { width: "40%" },
            },
            {
                label: "Đơn vị",
                key: "unit",
                thClass: "text-center",
                tdClass: "text-center",
                thStyle: { width: "10%" },
            },
            {
                label: "Số lượng",
                key: "quantity",
                thClass: "text-center",
                tdClass: "text-center",
                thStyle: { width: "15%" },
            },
            {
                label: "Đơn giá",
                key: "amount",
                thClass: "text-center",
                tdClass: "text-center",
                thStyle: { width: "15%" },
            },
            {
                label: "Thành tiền",
                key: "totalAmount",
                thClass: "text-right",
                tdClass: "text-right",
                thStyle: { width: "10%" },
            },
            {
                label: "",
                key: "deleteItem",
                thClass: "text-center",
                tdClass: "text-center",
                thStyle: { width: "8%"},
            },
        ],
        listItems: [],
        listOrderCart: []
      }
    },

    created() {
      const activeCart = this.listOrder.find(cart => cart.active == true)
      this.listItems = this.listOrder[activeCart.index - 1].cart
    },

    watch: {
      listOrder: function () {
        const activeCart = this.listOrder.find(cart => cart.active == true)
        this.listItems = this.listOrder[activeCart.index - 1].cart
      }
    },
    
    computed: {
      ...mapState(['listOrder']),
    },

  }
</script>

<style>

</style>