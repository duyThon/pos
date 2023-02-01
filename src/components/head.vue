<template>
    <div class="header d-flex justify-content-between align-items-center">
        <div class="pos-action d-flex flex-row">
            <!-- <el-input class="pos-search-item p-2" prefix-icon="el-icon-search" placeholder="Thêm sản phẩm vào đơn hàng..."></el-input> -->
            <el-autocomplete
                class="pos-search-item p-2"
                v-model="search"
                :fetch-suggestions="querySearch"
                placeholder="Please Input"
                @select="addToCart"
            >
                <template slot-scope="{ item }">
                    <div class="item-info">
                        <div class="item-img">
                            <img style="width:40px;height:40px" :src="item.avatar">
                        </div>
                        <div class="value">{{ item.itemInstance }}</div>
                        <div class="item-properties">
                            <span class="quantity">{{ item.quantity }}</span>
                            <div class="price">{{item.price}}</div>
                        </div>
                    </div>
                </template>
            </el-autocomplete>
            <orderTabs/>
        </div>
        <div class="user-detail d-flex align-items-center p-2">
            <div class="location p-2">
                <h6>Chi nhánh Ở đây là ở đâu</h6>
            </div>
            <div class="merchant p-2">
                <div class="avatar"></div>
            </div>
        </div>
    </div>
</template>

<script>
import orderTabs from './orderTabs.vue';
import store from '@/store'

export default {
    name: 'head',
    components: {
        orderTabs
    },

    props: ["listItem"],
    data() {
        return {
            search: '',
            
        }
    },

    methods: {
        querySearch(queryString, cb) {
            var links = this.listItem;
            var results = queryString ? links.filter(this.createFilter(queryString)) : links;
            cb(results);
        },

        createFilter(queryString) {
            return (link) => {
                return (link.itemInstance.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },

        addToCart(item) {
            store.commit('addToCart', item)
        },

    }

}
</script>

<style>
.header {
    background: #2A3042;
    color: #fff;
    height: 58px;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: black;
}

.pos-search-item input {
    width: 300px;
}

.item-info {
    display: flex;
    margin: 10px;
}

.el-autocomplete-suggestion li {
    padding: 0;
}

.el-popper {
    width: 500px;
}

</style>