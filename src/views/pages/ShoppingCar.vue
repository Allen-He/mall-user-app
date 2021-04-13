<template>
  <div class="car-wrap">
    <div class="car-header">
      <van-nav-bar title="购物车" right-text="删除" @click-right="onDel" />
    </div>
    <div class="car-content" v-if="counterMapLen !== 0">
      <div class="car-list">
        <van-checkbox-group v-model="result" ref="checkboxGroup">
          <div class="checkbox-wrap" v-for="item in list" :key="item._id">
            <van-checkbox :name="item.id" class="checkbox"></van-checkbox>
            <GoodsPanel
              v-bind="item"
              :num="counterMap[item.id]"
              :isShoppingCar="true"
            />
          </div>
        </van-checkbox-group>
      </div>
      <div class="car-submit">
        <van-submit-bar
          :price="totalMoney"
          :button-text="`去结算(${totalNum})`"
          @submit="onSubmit"
        >
          <van-checkbox v-model="checked" @click="selectAll">全选</van-checkbox>
        </van-submit-bar>
      </div>
    </div>
    <div class="empty" v-else>
      <van-empty
        image="https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/shopping_bg.jpg"
        image-size="100%"
      >
        <van-button
          round
          type="danger"
          class="bottom-button"
          @click="$router.push({ name: 'classify' })"
          >来选购吧</van-button
        >
      </van-empty>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import goodsApi from '@/api/goods';
import GoodsPanel from '@/components/GoodsPanel.vue';
import { Toast, Dialog } from 'vant';

export default {
  components: {
    GoodsPanel,
  },
  data() {
    return {
      result: [], // 存储复选框的选中状态数据
      list: [], // 存储获取过来的商品数据列表
      checked: false, // 存储全选按钮的选中状态
    };
  },
  computed: {
    ...mapState(['counterMap']),
    totalMoney() {
      const resList = this.list.filter((item) => this.result.includes(item.id));
      const resMoney = resList.reduce(
        (prev, cur) => prev + (Math.floor(cur.price * this.counterMap[cur.id] * 100) || 0),
        0,
      );
      return resMoney;
    },
    totalNum() {
      const resList = this.list.filter((item) => this.result.includes(item.id));
      const resNum = resList.reduce(
        (prev, cur) => prev + (this.counterMap[cur.id] || 0),
        0,
      );
      return resNum;
    },
    counterMapLen() { // 动态记录couterMap的key值数组的长度，判断是否显示empty组件
      return Object.keys(this.counterMap).length;
    },
  },
  methods: {
    ...mapMutations(['changeStorage']),
    selectAll() {
      if (this.result.length === this.list.length) {
        this.$refs.checkboxGroup.toggleAll(false);
      } else {
        this.$refs.checkboxGroup.toggleAll(true);
      }
    },
    onSubmit() {
      Toast('付款功能待实现');
    },
    async getAllDate() {
      const valArr = Object.keys(this.counterMap);
      const res = await goodsApi.getGoodsByIds({ value: valArr.join() });
      this.list = res.list;
      // 刚进入购物车页面时，若购物车里有商品，则默认全部选中；反之，什么都不做
      if (this.list.length !== 0) {
        this.$nextTick(() => {
          this.$refs.checkboxGroup.toggleAll(true);
        });
      }
    },
    async onDel() {
      if (this.result.length === 0) {
        Toast('你还没有选中任何商品哦');
        return;
      }
      try {
        await Dialog.confirm({
          title: '注意',
          message: '确认要删除选中的商品吗？',
        });
        this.result.forEach((item) => {
          this.changeStorage({ id: item, val: -Infinity }); // 将商品id对应的数量设为-Infinity后，该方法将自动删除该商品
        });
        this.list = this.list.filter((item) => !this.result.includes(item.id));
        this.result = [];
      } catch (error) {
        Toast('您已取消删除');
      }
    },
  },
  watch: {
    result(newVal) {
      if (newVal.length !== this.list.length) {
        this.checked = false;
      } else {
        this.checked = true;
      }
    },
  },
  created() {
    this.getAllDate();
  },
};
</script>

<style lang="less" scoped>
.car-wrap {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
  .car-header {
    width: 100%;
    height: 46px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 6;
  }
  .car-list {
    margin-top: 46px;
    height: calc(100vh - 46px - 100px);
    overflow: scroll;
    .checkbox-wrap {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      padding: 5px 10px;
      align-items: center;
      .checkbox {
        flex-shrink: 0;
        margin-right: 5px;
      }
    }
  }
  .van-submit-bar {
    width: 100%;
    position: fixed;
    bottom: 50px;
    left: 0px;
  }
  .empty {
    .bottom-button {
      width: 130px;
      height: 40px;
      background-color: #ff1a90;
    }
  }
}
</style>
