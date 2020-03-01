<template>
  <div class="recommends">
    <div v-for="(item, index) in recommends" :key="index" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendsHome",
  props: {
    recommends: Array,
    default() {
      return [];
    }
  }
};
</script>

<style>
.recommends {
    display: flex;
    padding: 5px;
    text-align: center;
    font-size: 12px;
    border-bottom: 8px solid #f8f8f8;
}
.recommends-item {
    padding: 5px
}
.recommends a{
    display: block;
}
.recommends-item {
    flex: 1;
}
.recommends-item img{
    width: 100%;
    margin-bottom: 5px;
}
</style>