<template>
  <div id="detail">
    <!-- 导航 -->
    <nav-detail @titleClick="titleClick" ref="nav" />

    <b-scroll class="content" ref="scroll" :probe-type="3" @scrollPosition="getScrollPosition">
      <!-- 轮播 -->
      <swiper-detail :top-images="topImages" />

      <!-- 商品详情 -->
      <goods-detail :goods-info="goodsInfo" :shop-info="shopInfo" />

      <!-- 评论详情 -->
      <rate-detail :rate-info="rateInfo" ref="rate" />

      <!-- 参数详情 -->
      <params-detail @click.native="changeShow" />

      <!-- 图片详情 -->
      <show-detail :detail-info="detailInfo" @dImageLoad="dImageLoad" ref="show" />
    </b-scroll>

    <!-- 回顶 -->
    <back-top @click.native="topClick" v-show="isShow" />
    <!-- 下拉菜单 -->
    <up-menu ref="upmenu" :data="paramsInfo" />
    <!-- 商品规格 -->
    <up-sku ref="upsku" @onAddCartClicked="onAddCartClicked"/>
    <!-- 底部栏 -->
    <action-detail @addCart="addCart" />
  </div>
</template>

<script>
import NavDetail from "./childComps/NavDetail";
import ActionDetail from "./childComps/ActionDetail";
import SwiperDetail from "./childComps/SwiperDetail";
import GoodsDetail from "./childComps/GoodsDetail";
import ShowDetail from "./childComps/ShowDetail";
import ParamsDetail from "./childComps/ParamsDetail";
import RateDetail from "./childComps/RateDetail";
import BScroll from "components/BScroll";
import BackTop from "components/BackTop";
import UpMenu from "components/UpMenu";
import UpSku from "components/UpSku";

// 请求详情页数据
import { getDetail, Goods, Shop, Sku } from "network/detail";

// 图片加载完及防抖函数
import { itemListenerMixin } from "common/mixin";
import { debounce } from "common/utils";

export default {
  name: "Detail",
  components: {
    NavDetail,
    ActionDetail,
    SwiperDetail,
    GoodsDetail,
    ShowDetail,
    ParamsDetail,
    RateDetail,
    BScroll,
    BackTop,
    UpMenu,
    UpSku
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramsInfo: {},
      rateInfo: {},
      skuInfo: {},
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      show: false
    };
  },
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.iid;
    this.getDetail(this.iid);

    this.getThemeTopY = debounce(() => {
      // 页面渲染完获取组件offsetTop
      this.$nextTick(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.rate.$el.offsetTop);
        this.themeTopYs.push(this.$refs.show.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
        // console.log(this.themeTopYs);
      });
    });
  },
  methods: {
    // 获取数据
    getDetail(iid) {
      getDetail(iid).then(res => {
        const data = res.result;
        console.log(data);

        // 取出轮播图数据
        this.topImages = data.itemInfo.topImages;

        // 创建商品对象
        this.goodsInfo = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        //创建店铺对象
        this.shopInfo = new Shop(data.shopInfo, data.shopInfo.score);

        //取出图片详情
        this.detailInfo = data.detailInfo.detailImage[0];

        // 取出参数详情
        this.paramsInfo = data.itemParams.info;

        // 取出评论详情
        this.rateInfo = data.rate;

        // 取出商品规格详情
        this.skuInfo = new Sku(data.skuInfo);
        this.getData(this.skuInfo);
      });
    },
    // 修改下拉菜单data
    changeShow() {
      this.$refs.upmenu.show = !this.$refs.upmenu.show;
    },
    // 监听图片加载完
    dImageLoad() {
      // this.$refs.scroll.refresh()
      this.newRefresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index]);
    },
    getScrollPosition(position) {
      // 置顶
      this.isShow = -position.y > 1000;
      // 获取Y值
      const positionY = -position.y;
      // 对比
      let length = this.themeTopYs.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    // 添加购物车
    addCart() {
      this.$refs.upsku.show = !this.$refs.upsku.show;
    },
    getData(_value) {
      const _tree = [];
      const _list = [];
      for (let i = 0; i < _value.tree.length; i++) {
        const obj_1 = {
          k: _value.tree[i].label,
          k_s: 's' + (i + 1),
          v: []
        };
        _tree.push(obj_1);
        for (let j = 0; j < _value.tree[i].list.length; j++) {
          const obj_2 = {
            id: (i == 0 ?  _value.tree[i].list[j].styleId :  _value.tree[i].list[j].sizeId),
            name: _value.tree[i].list[j].name
          };
          obj_1.v.push(obj_2);
        }
      }
      for (let z = 0; z < _value.list.length; z++) {
        const obj_3 = {
          id: _value.list[z].xdSkuId,
          price: _value.list[z].price,
          s1: _value.list[z].styleId, // 规格类目 k_s 为 s1 的对应规格值 id
          s2: _value.list[z].sizeId, // 规格类目 k_s 为 s2 的对应规格值 id
          stock_num: _value.list[z].stock // 当前 sku 组合对应的库存
        };
        _list.push(obj_3)
      }
      this.skuInfo.tree = _tree
      this.skuInfo.list = _list
      console.log(this.skuInfo)
      this.$refs.upsku.sku = this.skuInfo
    },
    onAddCartClicked(skuData) {
      console.log(skuData)
      // 获取购物车要的数据
      const cartInfo = {
        image: this.topImages[0],
        title: this.goodsInfo.desc,
        selectedNum: skuData.selectedNum,
        id: skuData.selectedSkuComb.id,
        iid: this.iid,
        price: skuData.selectedSkuComb.price,
        s1: skuData.selectedSkuComb.s1,
        s2: skuData.selectedSkuComb.s2
      }
      this.$store.dispatch('addCartList', cartInfo)
    }
  }
};
</script>

<style scoped>
#detail {
  height: 100vh;
}
.content {
  height: calc(100% - 94px);
  margin-top: 44px;
}
</style>