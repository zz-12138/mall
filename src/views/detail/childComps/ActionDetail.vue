<template>
  <van-goods-action>
    <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
    <van-goods-action-icon icon="chat-o" text="客服" />
    <van-goods-action-icon
      icon="star"
      :text="saveStatus  ? '已收藏' : '收藏'"
      :color="saveStatus  ? '#ff5000' : ''"
      @click="changeStatus"
    />
    <van-goods-action-button type="warning" text="加入购物车" @click="addCart"/>
    <van-goods-action-button type="danger" text="立即购买" />
  </van-goods-action>
</template>

<script>
// 引入vant组件
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";

export default {
  name: "ActionDetail",
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  data() {
    return {
      saveStatus: false
    };
  },
  methods: {
    changeStatus() {
      this.saveStatus = !this.saveStatus;
    },
    addCart() {
      this.$emit('addCart')
    }
  }
};
</script>

<style>
</style>