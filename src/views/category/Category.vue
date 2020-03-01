<template>
  <div id="category">
    <!-- 顶部导航 -->
    <nav-bar>
      <van-icon slot="left" name="scan" size="22" />
      <van-search slot="center" placeholder="请输入搜索关键词" class="center" />
    </nav-bar>

    <!-- 内容区 -->
    <div class="content">
      <b-scroll class="content-left">
        <left-menu :items="items"/>
      </b-scroll>
    </div>
  </div>
</template>

<script>
// 请求分类数据
import { getCategory } from "network/category";

// 引入vant组件
import { Search, Icon } from "vant";

import NavBar from "components/NavBar";
import LeftMenu from "./childComps/LeftMenu";
import BScroll from "components/BScroll";

export default {
  name: "Category",
  data() {
    return {
      active: 0,
      items: []
    };
  },
  components: {
    NavBar,
    LeftMenu,
    BScroll,
    [Search.name]: Search,
    [Icon.name]: Icon
  },
  created() {
    // 请求左侧列表数据
    this.getCategory();
  },
  methods: {
    getCategory() {
      getCategory().then(res => {
        const items = [];
        for (let i in res.data.category.list) {
          const _json = { text: "" };
          items[i] = _json;
          items[i].text = res.data.category.list[i].title;
        }
        this.items = items;
      });
    }
  }
};
</script>

<style scoped>
#category {
  height: 100vh;
  overflow-y: hidden;
}
.center {
  padding: 5px 0;
  flex: 1;
}
.content {
  display: flex;
  margin-top: 44px;
  height: calc(100% - 94px);
  overflow: hidden;
}
.content-left {
  width: 84px;
}
</style>