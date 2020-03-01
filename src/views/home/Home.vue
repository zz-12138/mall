<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center" class="center">首页</div>
      <van-icon slot="left" name="scan" size="22" />
      <van-icon slot="right" name="chat-o" size="22" dot />
    </nav-bar>

    <b-scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scrollPosition="getScrollPosition"
      @loadMore="loadMore"
    >
      <swiper-home :banners="banners" />
      <recommends-home :recommends="recommends" />
      <tab-control
        :titles="['流行', '新款', '精选']"
        :goods="showTabs"
        @tabClick="tabClick"
      />
    </b-scroll>

    <back-top @click.native="topClick" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "components/NavBar";
import SwiperHome from "./childComps/SwiperHome";
import RecommendsHome from "./childComps/RecommendsHome";
import TabControl from "components/TabControl";
import BScroll from "components/BScroll";
import BackTop from "components/BackTop";
// 导入vant组件
import { Icon } from "vant";
// 导入home页网络请求函数
import { getHomeMultidata, getHomeGoodslist } from "network/home";
// 导入公用js
import { debounce } from "common/utils";
import { itemListenerMixin } from "common/mixin";

export default {
  name: "Home",
  components: {
    NavBar,
    SwiperHome,
    RecommendsHome,
    TabControl,
    BScroll,
    BackTop,
    [Icon.name]: Icon
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      currentValue: "pop",
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    //请求多个数据
    this.getHomeMultidata();

    //请求商品列表数据
    this.getHomeGoodslist("pop");
    this.getHomeGoodslist("new");
    this.getHomeGoodslist("sell");
  },
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("imageLoad", () => {
     this.newRefresh();
    });
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
        //箭头函数中this往上找作用域
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeGoodslist(type) {
      const page = this.goods[type].page + 1;
      getHomeGoodslist(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },

    // 切换选项卡
    tabClick(value) {
      this.currentValue = value;
      // console.log(this.value)
    },

    //回到顶部
    // topClick() {
    //   this.$refs.scroll.scrollTo(0, 0);
    // },

    //监听滚动条事件
    getScrollPosition(position) {
      // console.log(position)
      this.isShow = -position.y > 1000;
    },

    // 上拉加载更多
    loadMore() {
      // console.log('zz')
      this.getHomeGoodslist(this.currentValue);
    }
  },
  computed: {
    showTabs() {
      return this.goods[this.currentValue].list;
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.home-nav {
  background: white;
}
.content {
  height: calc(100% - 94px);
  margin-top: 44px;
}
.center {
    flex: 1;
    line-height: 44px;
}
</style>