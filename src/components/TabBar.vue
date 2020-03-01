<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="shop-o" to="/category">分类</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="/cart" :info="goodsCount">购物车</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
//tabbar条
import { Tabbar, TabbarItem } from "vant";

import { mapGetters } from 'vuex'

export default {
  name: 'TabBar',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  computed: {
    ...mapGetters(['cartList']),
    goodsCount() {
      return this.cartList.length
    }
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
</style>