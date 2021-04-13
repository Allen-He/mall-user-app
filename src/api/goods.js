import axios from '@/axios';

export default {
  /**
   * 获取二级导航
   * @param {*} params type
   */
  getSideBar(params) {
    return axios.get('/getsidebar', { params });
  },
  /**
   * 获取商品列表
   * @param {*} params ...
   */
  getGoods(params) {
    console.log(params);
    return axios.get('/getGoodsList', { params });
  },
  /**
   * 模糊搜索-关键词联想
   * @param {*} params likeValue值
   */
  getLikeSearch(params) {
    return axios.get('/likeSearch', { params });
  },
  /**
   * 搜索
   * @param {*} params type、page、size
   */
  getSearch(params) {
    return axios.get('/search', { params });
  },
  /**
   * 根据ids获取商品数据
   * @param {*} params
   */
  getGoodsByIds(params) {
    return axios.get('/getGoodsByIds', { params });
  },
};
