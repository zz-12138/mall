<template>
  <div>
    <van-tabs animated @click="itemClick">
    <van-tab v-for="index in 3" :key="index" :title="titles[index-1]">
      <div class="goods-warpper">
        <goods-item-home v-for="(item, index) in goods" :key="index" :goodsItem="item"/>
      </div>
    </van-tab>
  </van-tabs>
  </div>
</template>

<script>
// 导入vant组件
import { Tab, Tabs } from "vant";

import GoodsItemHome from 'views/home/childComps/GoodsItemHome'

export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    },
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    GoodsItemHome
  },
  data() {
    return {
      activeName: null
    }
  },
  methods: {
    itemClick(name, title) {
       const _value = {
         '流行': 'pop',
         '新款': 'new',
         '精选': 'sell'
       }
      //  console.log(_value[title])
       this.$emit('tabClick', _value[title])
    }
  }
};
</script>

<style scoped>
.goods-warpper {
  display: flex;
  flex-wrap: wrap;
  padding: 1.25%;
  background-color: #f8f8f8;
}
</style>