<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item icon="wap-home-o" to="/home/index">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/home/classify">分类</van-tabbar-item>
    <van-tabbar-item
      icon="shopping-cart-o"
      to="/home/shoppingcar"
      id="shoppingCar"
      :badge="carBadgeNum"
    >购物车</van-tabbar-item>
    <van-tabbar-item icon="user-circle-o" to="/home/mine">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      active: 0,
    };
  },
  computed: {
    ...mapState(['counterMap']),
    carBadgeNum() {
      const res = Object.values(this.counterMap).reduce((prev, item) => prev + item, 0);
      // eslint-disable-next-line no-nested-ternary
      return res === 0 ? '' : (res >= 100 ? '99+' : res);
    },
  },
};
</script>
