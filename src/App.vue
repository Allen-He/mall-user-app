<template>
  <div id="app">
    <transition
      :name="transName"
      :mode="transName === 'slideLeft' ? 'in-out' : 'out-in'">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['setCounterMap']),
  },
  data() {
    return {
      transName: 'slideLeft',
    };
  },
  created() {
    const counterMap = JSON.parse(localStorage.getItem('goodsCounterMap')) || {};
    this.setCounterMap(counterMap);
  },
  watch: {
    $route(to, from) { // newVal、oldVal
      if (to.name === 'search' && from.name === 'classify') {
        this.transName = 'slideLeft';
      } else if (to.name === 'classify' && from.name === 'search') {
        this.transName = 'slideRight';
      } else {
        this.transName = ''; // 其余路由之间切换没有过渡动效
      }
    },
  },
};
</script>

<style lang="less">
.view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
}

.slideLeft-enter,
.slideLeft-leave-to {
  transform: translateX(100%);
}
.slideLeft-enter-active {
  transition: all .3s linear;
}
.slideLeft-enter-to,
.slideLeft-leave {
  transform: translateX(0%);
}

.slideRight-enter,
.slideRight-leave-to {
  transform: translateX(-100%);
}
.slideRight-enter-active {
  transition: all .3s linear;
}
.slideRight-enter-to,
.slideRight-leave {
  transform: translateX(0%);
}
</style>
