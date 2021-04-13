<template>
  <div class="goods-panel">
    <div class="img-box">
      <img :src="images[0]" ref="img" />
    </div>
    <div class="content">
      <h3 class="goods-title text-overflow">{{ title }}</h3>
      <p class="goods-desc text-overflow">{{ desc }}</p>
      <div class="goods-tags text-overflow">
        <div class="goods-tags-item" v-for="tag in tags" :key="tag">
          {{ tag }}
        </div>
      </div>
      <div class="goods-price">￥{{ price }}</div>
      <div class="goods-counter">
        <div @click="changeNum(id, -1)" v-if="num">
          <img
            src="https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/rec.png"
            alt=""
          />
        </div>
        <div class="number" v-if="num">{{ num }}</div>
        <div @click="changeNum(id, +1)">
          <img
            src="https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/add.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Flyout from '@/toolsCmp/flyout';
import { Toast } from 'vant';

export default {
  props: ['title', 'images', 'desc', 'tags', 'price', 'id', 'num', 'noFly', 'isShoppingCar'],
  methods: {
    ...mapMutations(['changeStorage']),
    changeNum(id, val) {
      // 如果是购物车页面在使用该组件，那么商品的数量最小只能为：1
      if (this.isShoppingCar && this.num === 1 && val === -1) {
        Toast('不能再减了哦');
        return;
      }
      // 分发action，改变localStorage中的的缓存值
      this.changeStorage({ id, val });
      if (this.noFly) { // 判断是否需要飞入动画
        return;
      }
      // 添加“加入购物车”动画
      const {
        clientWidth: imgWidth,
        clientHeight: imgHeight,
      } = this.$refs.img;
      const {
        left: imgLeft,
        top: imgTop,
      } = this.$refs.img.getBoundingClientRect();
      const carDom = document.getElementById('shoppingCar');
      const { left: carLeft, top: carTop } = carDom.getBoundingClientRect();
      if (val !== -1) {
        Flyout({
          startX: imgLeft,
          startY: imgTop,
          endX: carLeft,
          endY: carTop,
          imgSrc: this.$refs.img.src,
          width: imgWidth,
          height: imgHeight,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.goods-panel {
  width: 100%;
  height: 100px;
  position: relative;
  > div {
    display: inline-block;
    vertical-align: top;
  }

  .img-box {
    width: 90px;
    height: 90px;
    margin-top: 4px;
    margin-left: 4px;
    margin-right: 16px;

    img {
      width: 90px;
      height: 90px;
    }
  }
  .content {
    & > div,
    h3,
    p {
      width: 180px;
    }
    .goods-title {
      margin-top: 8px;
      color: #1a1a1a;
      font-size: 13px;
      height: 18px;
      line-height: 18px;
    }
    .goods-desc {
      margin-top: 6px;
      color: #aaaaaa;
    }
    .goods-tags {
      display: flex;
      .goods-tags-item {
        color: #aaaaaa;
        margin-top: 6px;
        border: 1px solid #aaa;
        padding: 3px 3px;
        color: #aaa;
        border-radius: 0.08rem;
        margin-right: 0.133333rem;
      }
    }
    .goods-price {
      margin-top: 6px;
      font-size: 14px;
      font-weight: bolder;
      color: #ff1a90;
    }
    .goods-counter {
      position: absolute;
      right: 10px;
      bottom: 0px;
      display: flex;
      justify-content: flex-end;
      div:not(.number) {
        width: 16px;
        height: 16px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .number {
        height: 16px;
        line-height: 16px;
        padding: 0 5px;
      }
    }
  }
  .text-overflow {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
