<template>
  <div>
    <van-action-sheet v-model="show" :title="data.key">
      <params-detail-info :paramsInfo="data"/>
    </van-action-sheet>
  </div>
</template>

<script>
import { ActionSheet } from "vant";
import ParamsDetailInfo from "../views/detail/childComps/ParamsDetailInfo";

export default {
  name: "UpMenu",
  components: {
    [ActionSheet.name]: ActionSheet,
    ParamsDetailInfo
  },
  data() {
    return {
      show: false
    };
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
</style>