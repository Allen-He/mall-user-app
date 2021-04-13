import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://mallapi.duyiedu.com/goods/',
  params: {
    appkey: 'allen-he_1615964041245',
  },
});
instance.interceptors.response.use((res) => res.data);

export default instance;
