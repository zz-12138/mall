<template>
  <div>
    <van-sku v-model="show" :sku="sku" :goods="goods" @add-cart="onAddCartClicked"/>
  </div>
</template>

<script>
import { Sku } from "vant";

export default {
  name: "UpSku",
  data() {
    return {
      show: false,
      sku: {},
      goods: {}
    };
  },
  components: {
    [Sku.name]: Sku
  },
  methods: {
    onAddCartClicked(skuData) {
      this.$emit('onAddCartClicked', skuData)
      this.show = !this.show
    }
  }
};
</script>

<style>
</style>