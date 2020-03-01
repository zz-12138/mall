<template>
  <div>
    <div v-for="(item, index) in paramsInfo.set" :key="index" class="wrapper">
      <p>{{item.key + ':'}}</p>
      <p>{{item.value}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParamsDetailInfo",
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.wrapper {
    display: flex;
    padding: 10px;
    align-items: center;
    font-size: 13px;
}
.wrapper p:nth-of-type(1) {
    color: #999999;
    margin-right: 8px;
}
</style>