<template>
  <swiper-pic>
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <img v-lazy="item.image" class="item-img" />
    </van-swipe-item>
  </swiper-pic>
</template>

<script>
import SwiperPic from "components/SwiperPic";
// 导入vant组件
import { SwipeItem } from "vant";

export default {
  name: "SwiperHome",
  components: {
    SwiperPic,
    [SwipeItem.name]: SwipeItem
  },
  props: {
    banners: {
      type: Array,
      // 需要将父组件传来的数据return
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
.item-img {
  width: 100%;
  height: 100%;
}
</style>