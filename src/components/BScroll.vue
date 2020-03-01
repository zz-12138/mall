<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "BScroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    // 监听滚动位置
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", position => {
        // console.log(position)
        this.$emit("scrollPosition", position);
      });
    }

    // 监听上拉加载
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // console.log('zz')
        this.$emit("loadMore");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, (time = 300));
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      console.log('已加载完图片，刷新滚动条，防抖')
      this.scroll && this.scroll.refresh();
    }
  }
};
</script>

<style scoped>
</style>