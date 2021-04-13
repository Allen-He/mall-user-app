<template>
  <div class="goods-list-wrap">
    <div class="list-header">
      <div @click="sortByType('all')" :class="{ active: sort === 'all' }">
        综合
      </div>
      <div @click="sortByType('sale')" :class="{ active: sort === 'sale' }">
        销量
      </div>
      <div
        @click="sortByType('price')"
        class="price"
        :class="{
          active: sort.startsWith('price'),
          'price-up': sort === 'price-up',
          'price-down': sort === 'price-down',
        }"
      >
        价格
      </div>
    </div>

    <div class="list-content" @scroll="scrollHandle">
      <van-pull-refresh
        v-model="isLoading"
        success-text="刷新成功"
        @refresh="onRefresh"
        head-height="90"
      >
        <GoodsPanel
          v-for="item in goodsList"
          :key="item._id"
          v-bind="item"
          :num="counterMap[item.id]"
        />
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import GoodsPanel from '@/components/GoodsPanel.vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  components: {
    GoodsPanel,
  },
  data() {
    return {
      sort: 'all',
      isLoading: false,
      nowPage: 1,
      timer: null,
    };
  },
  computed: {
    ...mapState(['goodsList', 'goodsTotal', 'goodsType', 'isGet', 'counterMap']),
  },
  methods: {
    ...mapMutations(['changeSortType', 'resetGoodList', 'setIsGet']),
    ...mapActions(['getGoodsList']),
    sortByType(val) {
      if (val === 'price') {
        if (this.sort === 'price-up') {
          this.sort = 'price-down';
        } else {
          this.sort = 'price-up';
        }
      } else {
        this.sort = val;
      }
      this.changeSortType(this.sort);
      this.onRefresh();
    },
    onRefresh() {
      this.resetGoodList();
      this.nowPage = 1;
      this.getGoodsList({ type: this.goodsType, page: this.nowPage }).then(() => {
        console.log(this.goodsTotal);
        console.log(this.goodsList);
        this.isLoading = false;
        this.setIsGet(true);
      });
    },
    scrollHandle(e) {
      const { scrollHeight, scrollTop, clientHeight } = e.target;
      const disToBottom = scrollHeight - scrollTop - clientHeight;
      if (disToBottom < 100
        && this.isGet
        && this.goodsList
      ) {
        this.setIsGet(false);
        this.nowPage += 1;
        this.getGoodsList({ type: this.goodsType, page: this.nowPage }).then(() => {
          if (this.goodsList.length >= this.goodsTotal) {
            this.setIsGet(false);
            this.nowPage = 1;
          } else {
            this.setIsGet(true);
          }
          console.log(this.goodsList);
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.goods-list-wrap {
  width: 296px;
  position: fixed;
  top: 135px;
  bottom: 50px;
  right: 0;

  .list-header {
    height: 13px;
    display: flex;
    justify-content: flex-end;
    align-content: center;
    padding: 5px 25px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    > div {
      margin-left: 20px;
      color: #aaa;
    }
    .price {
      position: relative;
    }
    .price::before {
      content: "";
      border: 4px solid transparent;
      border-bottom-color: #aaa;
      position: absolute;
      top: -5px;
      right: -12px;
    }
    .price::after {
      content: "";
      border: 4px solid transparent;
      border-top-color: #aaa;
      position: absolute;
      top: 6px;
      right: -12px;
    }

    > div.active {
      color: #ff1a90;
      font-weight: bold;
    }
    .price.price-up::before {
      border-bottom-color: #ff1a90;
    }
    .price.price-down::after {
      border-top-color: #ff1a90;
    }
  }
  .list-content {
    height: calc(100% - 25px);
    overflow: auto;
  }
}
</style>
