<template>
  <div class="search">
    <div class="search-nav">
      <form action="/">
        <van-search
          class="search-box"
          v-model="value"
          show-action
          shape='round'
          :placeholder="placeholderText"
          @input="onInput"
          @search="onSearch"
          @focus="onFocus"
        >
          <template #left>
            <van-icon
              @click="$router.push('/home/classify')"
              name="arrow-left"
              class="back"
            ></van-icon>
          </template>
          <template #action v-if="showSearch">
            <div @click="onSearch" class="search">搜索</div>
          </template>
          <template #action v-else>
            <van-icon
              name="shopping-cart-o"
              :badge="carBadgeNum"
              class="shopping-car"
              @touchend="$router.push('./home/shoppingcar')"
            ></van-icon>
          </template>
        </van-search>
      </form>
    </div>
    <div class="search-likeVal" v-if="!showList">
      <van-list>
        <van-cell
          v-for="item in likeValList"
          :key="item"
          :title="item"
          @click="clickLikeVal(item)"
        >
          <template #title>
            <span
              class="custom-title"
              v-html="markVal(item)"
            ></span>
          </template>
        </van-cell>
      </van-list>
    </div>
    <div class="search-content" v-if="showList">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <GoodsPanel
          v-for="item in searchList"
          :key="item._id"
          v-bind="item"
          :num="counterMap[item.id]"
          :noFly="true"
        />
      </van-list>
    </div>
    <div class="search-history" v-if="!showList && likeValList.length === 0">
      <History :list="historyList" @search="searchByHistory($event)" />
    </div>
  </div>
</template>

<script>
import GoodsPanel from '@/components/GoodsPanel.vue';
import History from '@/components/History.vue';
import goodsApi from '@/api/goods';
import { mapState } from 'vuex';

export default {
  components: {
    GoodsPanel,
    History,
  },
  data() {
    return {
      placeholderText: '水',
      value: '',
      likeValList: [],
      timer: null,
      searchList: [],
      loading: false,
      finished: false,
      nowPage: 1,
      showList: false,
      showSearch: true,
      historyList: [],
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
  methods: {
    searchByHistory(val) {
      this.value = val;
      this.onSearch();
    },
    clickLikeVal(val) {
      this.value = val;
      this.onSearch();
    },
    markVal(val) {
      const regVal = new RegExp(this.value, 'g');
      return val.replace(regVal, this.value.fontcolor('red'));
    },
    onInput() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      if (this.value) {
        this.timer = setTimeout(async () => {
          const res = await goodsApi.getLikeSearch({ likeValue: this.value });
          this.likeValList = res.result;
        }, 300);
      } else {
        this.likeValList = [];
      }
    },
    async onSearch() {
      if (this.value === '') {
        this.value = this.placeholderText;
      }
      this.showSearch = !this.showSearch; // 切换“搜索”和“购物车”按钮
      const res = await goodsApi.getSearch({
        type: this.value,
        page: 1,
        size: 10,
      });
      this.searchList = res.list;
      this.showList = true;
      // 存储搜索记录
      const historyItem = this.historyList.find((item) => item.value === this.value);
      if (historyItem) {
        historyItem.time = new Date().getTime();
        this.historyList.sort((a, b) => b.time - a.time); // 按照时间降序排列
      } else {
        this.historyList.push({ value: this.value, time: new Date().getTime() });
        if (this.historyList.length > 10) {
          this.historyList.pop(); // 最多只能缓存最近10条历史搜索记录
        }
      }
      localStorage.setItem('searchHistory', JSON.stringify(this.historyList));
    },
    onLoad() {
      this.nowPage += 1;
      goodsApi.getSearch({
        type: this.value,
        page: this.nowPage,
        size: 10,
      }).then((nextRes) => {
        this.searchList = [...this.searchList, ...nextRes.list];
        this.loading = false;
        if (this.searchList.length >= nextRes.total) {
          this.finished = true;
        }
      });
    },
    onFocus() {
      if (this.showList) {
        this.showSearch = !this.showSearch; // 切换“搜索”和“购物车”按钮
      }
      this.searchList = [];
      this.showList = false;
    },
  },
  created() {
    this.historyList = JSON.parse(localStorage.getItem('searchHistory')) || [];
  },
};
</script>

<style lang="less" scoped>
.search{
  z-index: 1;
  background-color: #fff;
  .search-nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    .search-box {
      padding: 10px 6px;
      .back {
        font-size: 20px;
        margin-right: 5px;
      }
      .search {
        color: #ff1a90;
      }
      .shopping-car {
        font-size: 20px;
        vertical-align: middle;
      }
    }
  }
  .search-likeVal {
    margin-left: 20px;
  }
  .search-content {
    width: 100%;
    box-sizing: border-box;
    padding: 59px 20px 0px;
    overflow: auto;
  }
  .search-history {
    width: 350px;
    position: absolute;
    top: 85px;
    left: 15px;
    z-index: 1;
  }
}
</style>
