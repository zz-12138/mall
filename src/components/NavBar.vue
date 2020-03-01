<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <slot name="center"></slot>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.left,
.right {
  width: 60px;
  margin-top: 10px;
}
</style>