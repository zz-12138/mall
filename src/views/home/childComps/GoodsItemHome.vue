<template>
  <div class="goods-item" @click="itemClick">
    <img class="item-img" :src="goodsItem.show.img" alt ref="goodsPic" @load="imageLoad"/>
    <div class="item">
      <div class="item-name">{{goodsItem.title}}</div>
      <div class="item-info">
        <span>{{'￥' + goodsItem.price}}</span>
        <span>{{goodsItem.sale + '人付款'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItemHome",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imageLoad() {
      // console.log('zz')
      this.$bus.$emit('imageLoad')
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
  created() {
    this.$nextTick(() => {
      this.$refs.goodsPic.style.height =
        this.$refs.goodsPic.clientWidth / 0.67 + "px";
    });
  }
};
</script>

<style scoped>
.goods-item {
  width: 47.5%;
  margin: 1.25%;
  border-radius: 5px;
  background-color: white;
}
.item-img {
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.item {
  padding: 5px;
}
.item-name {
  font-size: 13px;
  height: 30px;
  overflow: hidden;
  line-height: 15px;
}
.item-info {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
.item-info span:nth-of-type(1) {
  color: #F23030;
}
.item-info span:nth-of-type(2) {
  font-size: 12px;
  align-self: flex-end;
} 
</style>