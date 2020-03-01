<template>
  <van-swipe
    class="my-swipe"
    :autoplay="3000"
    indicator-color="white"
    :style="{height: setPicWidth+ 'px'}"
  >
    <div>
      <slot></slot>
    </div>
  </van-swipe>
</template>

<script>
// 导入vant组件
import { Swipe } from "vant";

export default {
  name: "SwiperPic",
  components: {
    [Swipe.name]: Swipe
  },
  computed: {
    //图片适应轮播组件（前提ui规定好图片尺寸）
    setPicWidth() {
      return this.setWidth / (750 / this.screenWidth);
    }
  },
  props: {
    setWidth: {
      type: Number,
      default: 390
      //不同页面轮播宽度
    }
  },
  data() {
    return {
      screenWidth: document.body.clientWidth
    };
  }
};
</script>

<style>
</style>