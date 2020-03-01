<template>
  <div v-if="Object.keys(goodsInfo).length !== 0">
    <!-- 商品信息 -->
    <div class="goods-price">
      <div class="goods-new-price">
        <h2>{{goodsInfo.price}}</h2>
        <span v-if="goodsInfo.discount">{{goodsInfo.discount}}</span>
      </div>
      <div class="goods-old-price" v-if="goodsInfo.oldPrice">
        <span>原价</span>
        <span>{{goodsInfo.oldPrice}}</span>
      </div>
    </div>

    <div class="goods-title">{{goodsInfo.desc}}</div>

    <div class="goods-detail" v-if="goodsInfo.columns.length !== 0">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
    </div>

    <div class="goods-info">
      <div v-for="(item, index) in goodsInfo.service" :key="index" class="goods-info-item">
        <van-icon name="passed" class="info-icon" color="#e85a5c" />
        <span>{{item.name}}</span>
      </div>
    </div>

    <!-- 店铺信息 -->
    <div class="shop-info">
      <div class="shop-top">
        <div class="logo-info">
          <img :src="shopInfo.shopLogo" alt />
          <span>{{shopInfo.name}}</span>
        </div>
        <div class="shop-into">
          <div>进店逛逛</div>
        </div>
      </div>
      <div class="shop-content">
        <div class="content-left">
          <div>
            <p class="info">{{shopInfo.cFans | fansCountFilter}}</p>
            <p class="title">粉丝人数</p>
          </div>
          <div>
            <p class="info">{{shopInfo.cGoods}}</p>
            <p class="title">全部商品</p>
          </div>
        </div>
        <div class="content-right">
          <div>
            <div v-for="(item,index) in shopInfo.score" :key="index" class="content-item">
              <span>{{item.name}}</span>
              <span>{{item.score}}</span>
              <span v-html="item.isBetter ? '高' : '中'"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";

export default {
  name: "GoodsDetail",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    [Icon.name]: Icon
  },
  filters: {
    fansCountFilter(_value) {
      if (_value > 10000) {
        _value = (_value / 10000).toFixed(1) + "万";
      }
      return _value;
    }
  }
};
</script>

<style scoped>
.goods-price {
  padding: 0 10px;
  padding-top: 15px;
}
.goods-new-price h2 {
  color: #ff5000;
  display: inline-block;
}
.goods-new-price span {
  padding: 2px 3px;
  font-size: 12px;
  border-radius: 25%;
  background-color: #ff5000;
  color: white;
  vertical-align: text-top;
  margin-left: 7.5px;
}
.goods-old-price span {
  font-size: 12px;
  text-decoration: line-through;
}
.goods-title {
  padding: 10px;
  padding-top: 15px;
  color: #333333;
  font-weight: 700;
}
.goods-detail {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  padding-bottom: 10px;
  border-bottom: 8px solid #f8f8f8;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.38);
}
.goods-info {
  padding: 10px;
}
.goods-info-item {
  display: inline-block;
  margin-right: 15px;
  font-size: 12px;
  padding: 5px 0;
}
.goods-info-item .info-icon {
  vertical-align: text-top;
}
.goods-info-item span {
  vertical-align: text-top;
}
.shop-info {
  padding: 10px;
}
.shop-top {
  display: flex;
  justify-content: space-between;
}
.logo-info {
  font-size: 14px;
  display: flex;
  align-items: center;
}
.logo-info img {
  width: 49px;
  height: 49px;
  border-radius: 5px;
  margin-right: 8px;
}
.shop-into {
  display: flex;
}
.shop-into div {
  display: inline-block;
  padding: 0 8px;
  line-height: 26px;
  border-radius: 5px;
  border: 1px solid #ff5000;
  color: #ff5000;
  font-size: 12px;
  align-self: center;
}
.shop-content {
  margin: 10px 0;
  display: flex;
}
.content-left,
.content-right {
  flex: 1;
}
.content-left {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border-right: 1px solid #ddd;
}
.title {
  color: #999999;
  font-size: 12px;
}
.info {
  color: #333333;
  font-size: 14px;
  margin-bottom: 5px;
}
.content-right {
  /* text-align: center; */
  font-size: 12px;
  display: flex;
  justify-content: space-around;
}
.content-item:nth-of-type(2){
  margin: 8px 0;
}
.content-item span:nth-of-type(2) {
  color: #ff5000;
  margin: 0 10px;
}
.content-item span:nth-of-type(3) {
  float: right;
  color: #ff5000;
}
</style>