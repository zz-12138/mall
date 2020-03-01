<template>
  <div id="cart">
    <!-- 导航条 -->
    <nav-bar class="home-nav">
      <div slot="center" class="center">购物车</div>
    </nav-bar>

    <b-scroll class="content">
      <list-cart>
        <item-cart />
      </list-cart>
    </b-scroll>

    <!-- 底部提交订单栏 -->
    <up-submit />
  </div>
</template>

<script>
import ItemCart from "./childsComps/ItemCart";
import ListCart from "./childsComps/ListCatr";
import UpSubmit from "components/UpSubmit";
import NavBar from "components/NavBar";
import BScroll from "components/BScroll";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapGetters(["cartList"])
  },
  components: {
    UpSubmit,
    ItemCart,
    ListCart,
    NavBar,
    BScroll
  }
};
</script>

<style scoped>
#cart {
  height: 100vh;
}
.home-nav {
  background: white;
}
.center {
  flex: 1;
  line-height: 44px;
}
.content {
  height: calc(100% - 144px);
  margin-top: 44px;
}
</style>