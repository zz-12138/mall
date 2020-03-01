<template>
  <nav-bar class="navbar">
    <van-icon slot="left" name="arrow-left" size="22" @click="back"/>
    <div slot="center" class="center">
      <div
        v-for="(item, index) in navBarItem"
        :key="index"
        :class="currentIndex === index ? 'center-item active' : 'center-item'"
        @click="itemClick(index)"
      >{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
// 引入vant组件
import { Icon } from "vant";

import NavBar from "components/NavBar";
export default {
  name: "NavDetail",
  components: {
    NavBar,
    [Icon.name]: Icon
  },
  data() {
    return {
      currentIndex: 0,
      navBarItem: ["商品", "评价", "详情", "推荐"]
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index)
    },
    back() {
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #fff;
}
.center {
  display: flex;
  text-align: center;
  flex: 1;
  font-size: 14px;
}
.center-item {
  flex: 1;
  line-height: 44px;
}
.active {
  color: #e4393c;
}
</style>