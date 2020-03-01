<template>
  <div class="params-info">
    <p>参数详情</p>
    <van-icon name="arrow" />
  </div>
</template>

<script>
import { Icon } from "vant";

export default {
  name: "ParamsDetail",
  components: {
    [Icon.name]: Icon
  }
};
</script>

<style>
.params-info {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
  color: #666666;
}
</style>