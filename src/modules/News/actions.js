import * as types from "./actionTypes";
import Api from "modules/Api";
import * as constants from 'modules/constants';

export const create = (data) => {
  return {
    type: types.CREATE_NEWS_REQ,
    name: types.CREATE_NEWS,
    url: `${constants.API_URL}/news/save`,
    meta: {
      showNotify: true,
      title: 'Новость успешно создана',
    },
    method: 'post',
    params: {
      body: {
        ...data,
      }
    },
  }
}

export const getSingle = (id) => {
  return {
    type: types.SINGLE_NEWS_REQ,
    name: types.SINGLE_NEWS,
    url: `${constants.API_URL}/news/getSingle`,
    meta: {
      showNotify: false,
    },
    method: 'post',
    params: {
      body: {
        newsId: id,
      }
    },
  }
}

export const deleteNews = (id) => {
  return {
    type: types.DELETE_NEWS_REQ,
    name: types.DELETE_NEWS,
    url: `${constants.API_URL}/news/getSingle`,
    meta: {
      showNotify: true,
      title: 'Новость успешно удалена',
    },
    method: 'post',
    params: {
      body: {
        newsId: id,
      }
    },
  }
}

export const fetchList = ({ data }) => ({
  type: types.FETCH_NEWS_LIST,
  name: types.NAME,
  meta: {
    showNotify: false,
  },
  url: `${constants.API_URL}/news/getList`,
  method: 'post',
  params: {
    body: {
      ...data,
    }
  }
})
