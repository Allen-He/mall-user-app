<template>
 <div class="history">
    <h4>历史记录：</h4>
    <div class="history-item"
        v-for="item in list"
        :key="item.time"
        @click="$emit('search', item.value)">{{ item.value }}</div>
    </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
};
</script>

<style lang="less" scoped>
h4 {
  margin-bottom: 15px;
}
.history-item {
  padding: 15px;
  background: #eee;
  border-radius: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  display: inline-block;
}
</style>
