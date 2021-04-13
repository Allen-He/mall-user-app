import Vue from 'vue';
import Vuex from 'vuex';
import goods from '@/api/goods';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarList: [],
    goodsList: [],
    goodsTotal: 0,
    sortType: 'all',
    goodsType: '',
    size: 10,
    isLoading: false,
    isGet: true,
    counterMap: {},
  },
  mutations: {
    getSideBarList(state, val) {
      state.sideBarList = val;
    },
    getGoodsList(state, list) {
      state.goodsList = list;
    },
    getGoodsTotal(state, total) {
      state.goodsTotal = total;
    },
    resetGoodList(state) { // 重置goodList
      state.goodsList = [];
    },
    changeSortType(state, type) {
      state.sortType = type;
    },
    setGoodsType(state, type) {
      state.goodsType = type;
    },
    setIsLoading(state, boo) {
      state.isLoading = boo;
    },
    setIsGet(state, boo) {
      state.isGet = boo;
    },
    setCounterMap(state, map) {
      state.counterMap = map;
    },
    changeStorage(state, { id, val }) { // 根据传入的id和val，更改state.couterMap和localStorage中的值
      if (state.counterMap[id]) {
        if ((val === -1 && state.counterMap[id] === 1) || val === -Infinity) {
          Vue.delete(state.counterMap, id);
        } else {
          Vue.set(state.counterMap, id, state.counterMap[id] + val);
        }
      } else if (!state.counterMap[id] && val !== -1) {
        Vue.set(state.counterMap, id, 1);
      }
      localStorage.setItem('goodsCounterMap', JSON.stringify(state.counterMap));
    },
  },
  actions: {
    async getSideBarList({ commit }, type) {
      const val = await goods.getSideBar({
        type,
      });
      commit('getSideBarList', val);
    },
    /**
     * @param {*} params type, page (必须传)
     */
    async getGoodsList({ state, commit }, params) {
      commit('setGoodsType', params.type);
      const val = await goods.getGoods({
        sort: state.sortType,
        size: state.size,
        type: state.goodsType,
        ...params,
      });
      commit('getGoodsList', [...state.goodsList, ...val.list]); // ★(普通请求数据---每一次覆盖上一次的数据)
      commit('getGoodsTotal', val.total);
    },
  },
  modules: {
  },
});
