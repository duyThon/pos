<template>
  <div class="payment-info">
    <div class="customer-info">
        <el-form label-position="top" label-width="100px" :model="formLabelAlign">
            <el-form-item label="Name">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
        </el-form>
    </div>
    <div class="orders-info">
        <el-form label-position="top" label-width="100px" :model="formLabelAlign">
            <el-form-item label="Thông tin khách hàng">
                <el-row :gutter="20">
                    <el-col :span="12">Tổng tiền</el-col>
                    <el-col style="text-align:end; " :span="12">0</el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">Thuế tổng đơn (%)</el-col>
                    <el-col style="text-align:end; " :span="12">0</el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">Chiết khấu</el-col>
                    <el-col style="text-align:end; " :span="12">0</el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">Phí dịch vụ</el-col>
                    <el-col style="text-align:end; " :span="12">0</el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">Khách phải trả</el-col>
                    <el-col style="text-align:end; " :span="12">0</el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">Tiền khách đưa</el-col>
                    <el-col style="text-align:end; " :span="12">0</el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">Còn lại cần thanh toán</el-col>
                    <el-col style="text-align:end; " :span="12">0</el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">Tiền thừa</el-col>
                    <el-col style="text-align:end; " :span="12">0</el-col>
                </el-row>   
                <el-input class="note" placeholder="Thêm ghi chú cho đơn hàng"><i class="el-icon-edit el-input__icon" slot="prefix"></i></el-input>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
import {api } from '@/api'
  export default {
    data() {
      return {
        posts: [],
        formLabelAlign: {
            name: '',
            region: '',
            type: ''
        }
      };
    },
    // created() {
    //   this.axios.get(api).then(res => {
    //     if(res.data) {
    //         console.log(res.data);
    //     }
    //   })
    // }
  };
</script>

<style>
.payment-info {
    padding: 20px
}

.note input {
    border-style: hidden hidden solid hidden;
}
</style>