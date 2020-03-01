<template>
  <div>
    <div class="show-title">{{detailInfo.key}}</div>
    <div class="show-image" v-for="(item, index) in detailInfo.list" :key="index">
        <img :src="item" @load="dImageLoad" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowDetail",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    dImageLoad() {
      this.$emit('dImageLoad')
    }
  }
};
</script>

<style scoped>
.show-title {
    text-align: center;
    font-size: 12px;
    padding: 10px 0;
    color: #939393;
    background-color: #f8f8f8;
}
.show-image img{
    width: 100%;
}
</style>