<template>
  <div class="scroll-tab" ref="scrollBar">
    <div
      class="tab"
      v-for="(item, i) in menuList"
      :key="item.title"
      :class="{ active: activeIndex === i }"
      @click="scrollTo(i, item.title)"
    >
      <div class="img-box">
        <img :src="item.imgURL" />
      </div>
      <div class="title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
import animate from '@/utils/animate';
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      activeIndex: 0,
      menuList: [
        {
          title: '时令水果',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg',
        },
        {
          title: '酒水冲调',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg',
        },
        {
          title: '安心乳品',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg',
        },
        {
          title: '休闲零食',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg',
        },
        {
          title: '肉蛋食材',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg',
        },
        {
          title: '新鲜蔬菜',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/新鲜食材.jpg',
        },
        {
          title: '熟食餐饮',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg',
        },
        {
          title: '海鲜水产',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg',
        },
        {
          title: '粮油调味',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg',
        },
        {
          title: '某手美食',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg',
        },
        {
          title: '纸杯清洁',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/纸品清洁.jpg',
        },
        {
          title: '个人护理',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/个人护理.jpg',
        },
        {
          title: '美妆护肤',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/美妆护肤.jpg',
        },
        {
          title: '家居收纳',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家居收纳.jpg',
        },
        {
          title: '家用电器',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家用电器.jpg',
        },
        {
          title: '3C数码',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/3C数码.jpg',
        },
        {
          title: '母婴用品',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/母婴用品.jpg',
        },
        {
          title: '鲜花绿植',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/鲜花绿植.jpg',
        },
        {
          title: '宠物用品',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/宠物用品.jpg',
        },
        {
          title: '图书玩具',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/图书文具.jpg',
        },
        {
          title: '手表配饰',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
      ],
    };
  },
  computed: {
    ...mapState(['goodsType', 'sideBarList', 'goodsList']),
  },
  methods: {
    ...mapMutations(['setIsLoading', 'resetGoodList', 'setGoodsType']),
    ...mapActions(['getGoodsList']),
    scrollTo(i, type) {
      this.activeIndex = i;
      this.setIsLoading(true); // 状态为：正在加载
      // 获取对应的二级导航
      this.$store.dispatch('getSideBarList', type).then(() => {
        setTimeout(() => {
          this.resetGoodList();
          this.setGoodsType(this.sideBarList[0]);
          this.getGoodsList({ type: this.goodsType, page: 1 }).then(() => {
            console.log(this.goodsList);
          });
          this.setIsLoading(false); // 状态为：加载完成
        }, 500);
      });
      // 居中显示选中的item项
      const { scrollBar } = this.$refs;
      const ele = scrollBar.children[i];
      const eleOL = ele.getBoundingClientRect().left;
      const eleOW = ele.offsetWidth;
      const parentOW = scrollBar.offsetWidth;
      const dis = eleOL + eleOW / 2 - parentOW / 2;
      animate.moveTo(scrollBar.scrollLeft, dis, scrollBar, 'scrollLeft');
      this.resetGoodList();
      this.$store.dispatch('getGoodsList', { type: this.goodsType, page: 1 });
    },
  },
  created() {
    this.$store.dispatch('getSideBarList', this.menuList[0].title);
  },
};
</script>

<style lang="less" scoped>
.scroll-tab {
  height: 100px;
  display: flex;
  align-content: center;
  overflow: auto;
  .tab {
    width: 68px;
    height: 100%;
    padding: 6px 5px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    font-size: 6px; //★
    .img-box {
      width: 46px;
      height: 46px;
      border: 3px solid #fff;
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 95%;
        height: 95%;
        border-radius: 50%;
      }
    }
    .title {
      margin-top: 5px;
      padding: 2px 2px 1px;
    }

    &.active {
      .img-box {
        border: 3px solid #d13193;
      }
      .title {
        color: #fff;
        background-color: #d13193;
        font-weight: bold;
        border-radius: 5px;
      }
    }
  }

  &::-webkit-scrollbar {
    width: 0;
    background: none;
  }
}
</style>
