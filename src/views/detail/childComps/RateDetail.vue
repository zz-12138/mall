<template>
  <div class="rate">
    <div class="rate-title">
      <p>评论</p>
      <div class="rate-in">
        <p>{{rateInfo.cRate + " 条评论"}}</p>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="rate-info" v-for="(item, index) in rateInfo.list" :key="index">
      <div v-if="rateInfo.list.length !== 0">
        <div class="rate-info-title">
          <img :src="item.user.avatar" alt />
          <span>{{item.rateId}}</span>
        </div>
        <div class="rate-info-content">
          <p>{{item.content}}</p>
          <div class="content-image">
            <img :src="item" alt v-for="(item, index) in item.images" :key="index" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";

export default {
  name: "RateDetail",
  components: {
    [Icon.name]: Icon
  },
  props: {
    rateInfo: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped>
.rate {
  padding: 10px;
  border-bottom: 1px solid #f4f4f4;
}
.rate-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f4f4f4;
}
.rate-in {
  display: flex;
  align-items: center;
}
.rate-in p {
  margin-right: 5px;
  color: #ff5000;
}
.rate-info-title {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
.rate-info-title img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.rate-info-title span {
  font-size: 12px;
  color: #333333;
  margin-left: 10px;
}
.rate-info-content {
  font-size: 14px;
}
.content-image {
  display: flex;
  max-height: 80px;
  margin-top: 5px;
}
.content-image img {
  width: 80px;
  margin-right: 5px;
}
</style>