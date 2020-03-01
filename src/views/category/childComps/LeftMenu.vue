<template>
  <ul class="left-list">
          <li v-for="(item, index) in items" :key="index" @click="itemClick(index)" >
              <div :class="[currentIndex == index ? 'active' : '']">{{item.text}}</div>
          </li>
      </ul>
</template>

<script>
export default {
    name: 'LeftMenu',
    data() {
        return {
            currentIndex: 0
        }
    },
    props: {
        items: {
            type: Array,
            default: []
        }
    },
    methods: {
        itemClick(index) {
            // 记录当前index
            this.currentIndex = index
        }
    }
}
</script>

<style scope>
.left-list {
    width: 84px;
    text-align: center;
    background-color: #f8f8f8;
    font-size: 14px;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto
}
.left-list li {
    line-height: 46px;
}
.active {
    color: #e93b3d;
    background-color: white;
}

</style>