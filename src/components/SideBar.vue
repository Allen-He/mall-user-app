<template>
  <div class="side-bar" ref="sideBar">
    <div
      v-for="(item, i) in sideBarList"
      :key="item"
      :class="{ active: activeIndex === i }"
      @touchend="scrollTo(i, item)"
    >
      {{ i === 0 ? "全部" : item }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import animate from '@/utils/animate';

export default {
  data() {
    return {
      activeIndex: 0,
    };
  },
  computed: {
    ...mapState(['sideBarList']),
  },
  methods: {
    ...mapMutations(['resetGoodList', 'setIsGet']),
    ...mapActions(['getGoodsList']),
    scrollTo(i, itemVal) {
      this.activeIndex = i;
      // 重置goodList
      this.resetGoodList();
      // 获取对应的商品列表
      this.getGoodsList({ type: itemVal, page: 1 }).then(() => {
        console.log(this.$store.state.goodsList);
        this.setIsGet(true);
      });
      const { sideBar } = this.$refs;
      const ele = sideBar.children[i];
      const eleOT = ele.getBoundingClientRect().top;
      const eleOH = ele.offsetHeight;
      const parentOT = sideBar.offsetTop;
      const parentOH = sideBar.offsetHeight;
      const dis = eleOT + eleOH / 2 - parentOT - parentOH / 2;
      animate.moveTo(sideBar.scrollTop, dis, sideBar, 'scrollTop');
    },
  },
  watch: {
    sideBarList() {
      this.resetGoodList();
      this.getGoodsList({ type: this.sideBarList[0], page: 1 }).then(() => {
        console.log(this.$store.state.goodsList);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.side-bar {
  position: fixed;
  top: 135px;
  left: 0;
  width: 79px;
  bottom: 1.33333rem;
  background: #f8f8f8;
  overflow: auto;
  div {
    width: 100%;
    text-align: center;
    font-size: 12px;
    height: 40px;
    line-height: 40px;
    position: relative;
  }
  .active {
    font-weight: bold;
    color: #ff1a90;
  }
  .active::before {
    content: "";
    position: absolute;
    width: 6px;
    height: 18px;
    background: #ff1a90;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
}
.side-bar::-webkit-scrollbar {
  width: 0px;
  background: none;
}
</style>
