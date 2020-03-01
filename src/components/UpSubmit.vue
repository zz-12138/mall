<template>
  <div>
    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked" @click="change">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { SubmitBar, Checkbox, Toast } from "vant";

import { mapGetters } from "vuex";

export default {
  name: "UpSubmit",
  data() {
    return {
      checked: false
    };
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.selectedNum;
        }, 0);
    }
  },
  components: {
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [Toast.name]: Toast
  },
  methods: {
    onSubmit() {
      if(this.totalPrice == 0.00) {
        Toast('还未勾选商品-_-');
      }else{
        Toast('提交成功>_<');
        // 打印选中商品对象
        // console.log(this.cartList.filter(item => {
        //   return item.checked
        // }))
      }
    },
    change() {
      if (this.checked) {
        // 全部选中
        this.cartList.forEach(item => {
          item.checked = false;
        });
      } else {
        this.cartList.forEach(item => {
          item.checked = true;
        });
      }
    }
  },
  watch: {
    totalPrice() {
      this.checked = !this.cartList.find(item => !item.checked);
    }
  }
};
</script>

<style scoped>
.van-submit-bar {
  bottom: 50px;
}
</style>