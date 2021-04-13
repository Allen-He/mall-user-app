<template>
  <div class="search">
    <router-view></router-view>
    <TabBar />
  </div>
</template>

<script>
import TabBar from '@/components/TabBar.vue';

export default {
  components: {
    TabBar,
  },
};
</script>

<style lang="less">
.search {

}
</style>
