<template>
  <div>
    <div v-for="(item, index) in cartList" :key="index">
      <van-card
        :num="item.selectedNum"
        :price="item.price | getPrice"
        :title="item.title"
        :thumb="item.image"
      >
        <div slot="tag">
          <van-checkbox :name="item.id" v-model="item.checked"></van-checkbox>
        </div>
        <div slot="tags" class="tags-info">
          <van-tag plain type="danger">{{item.s1}}</van-tag>
          <van-tag plain type="danger">{{item.s2}}</van-tag>
        </div>
        <div slot="footer">
          <van-button size="mini" @click="removeCount(index)">-</van-button>
          <van-button size="mini" @click="addCount(index)">+</van-button>
        </div>
      </van-card>
    </div>
  </div>
</template>

<script>
import { Card, Checkbox, Button, Tag } from "vant";

import { mapGetters } from 'vuex'

export default {
  name: "ItemCart",
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
    [Tag.name]: Tag
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  methods: {
    addCount(index) {
      this.$store.commit("addCount", index);
    },
    removeCount(index) {
      this.$store.commit("removeCount", index);
    }
  },
  filters: {
    getPrice(value) {
      return value / 100;
    }
  }
};
</script>

<style scoped>
.van-card__thumb {
  position: inherit;
}
.van-card__tag {
  position: absolute;
  top: 30%;
  left: 5px;
}
.van-card {
  padding: 10px 30px;
}
.tags-info {
  margin-top: 5px;
}
.tags-info span:nth-of-type(1) {
  margin-right: 5px;
}
</style>