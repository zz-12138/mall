<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <tab-bar v-if="navBarShow" />
  </div>
</template>

<script>
import TabBar from "components/TabBar";

export default {
  name: "App",
  data() {
    return {
      navBarShow: true
    };
  },
  components: {
    TabBar
  },
  watch: {
    $route() {
      // 监听tabbar显示与隐藏
      // console.log(this.$route.name);
      this.navBarShow = this.$route.name !== 'detail'
    }
  }
};
</script>

<style>
@import "assets/base.css";
</style>
