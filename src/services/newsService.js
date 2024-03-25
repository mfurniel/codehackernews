import axiosInstance from './axiosInstance';

const fetchNews = (pageIndex, hitsPerPage) => {
  return axiosInstance.get(`?page=${pageIndex}&hitsPerPage=${hitsPerPage}`);
};

export default {
  fetchNews,
};