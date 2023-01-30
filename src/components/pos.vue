<template>
  <div style="background: #A6A6A6;">
    <posHead :listItem="listItem"></posHead>
    <el-row :gutter="20">
        <el-col :span="16">
            <div class="pos-container cart">
                <cart></cart>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="pos-container payment">
                <payment></payment>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import posHead from "./head.vue"
import cart from "./cart.vue"
import payment from "./payment.vue"
import {api } from '@/api'
import { mapMutations, mapState } from 'vuex'
import store from '@/store'

export default {
    components: {
        posHead,
        cart,
        payment
    },
    data() {
        return {
            listItem: [],
            orderNum: 1,
            orderCart: [],
            payment: {} 
        }
    },

    computed: mapState(['listOrder']),

    async created() {
        store.commit('createNewOrder')
        await this.getListItem();
    },

    methods: {
         
        async getListItem() {
            const res = await this.axios.get(api)
            if(res.status == 200) {
                this.listItem = res.data
            }
        }
    }

}
</script>

<style>

.pos-container {
    background: #FFFFFF;
    border-radius: 8px;
    margin: 24px 10px;
}
</style>